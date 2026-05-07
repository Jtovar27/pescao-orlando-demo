import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Check } from 'lucide-react';
import { getDishImage } from '../data/assetMap';
import { useCart, fmt } from '../context/CartContext';

export default function MenuItemModal({ item, open, onClose }) {
  const [qty, setQty] = useState(1);
  const [selections, setSelections] = useState({}); // groupId -> array<optionId>
  const [notes, setNotes] = useState('');
  const { addItem } = useCart();

  // Reset when item changes
  useEffect(() => {
    if (item) {
      setQty(1);
      const init = {};
      for (const g of item.modifierGroups || []) {
        // Pre-select first option for required single groups
        if (g.required && g.type === 'single' && g.options?.length) {
          init[g.id] = [g.options[0].id];
        } else {
          init[g.id] = [];
        }
      }
      setSelections(init);
      setNotes('');
    }
  }, [item]);

  // Lock body scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const groups = item?.modifierGroups || [];
  const img = item ? getDishImage(item.imageKey) : null;

  const unitExtras = useMemo(() => {
    if (!item) return 0;
    let total = 0;
    for (const g of groups) {
      const sel = selections[g.id] || [];
      for (const optId of sel) {
        const o = g.options.find((o) => o.id === optId);
        if (o) total += o.priceDelta || 0;
      }
    }
    return total;
  }, [selections, groups, item]);

  const unitPrice = item ? item.price + unitExtras : 0;
  const subtotal = unitPrice * qty;

  const isComplete = groups
    .filter((g) => g.required)
    .every((g) => (selections[g.id] || []).length > 0);

  const toggleOption = (group, optId) => {
    setSelections((prev) => {
      const current = prev[group.id] || [];
      if (group.type === 'single') {
        return { ...prev, [group.id]: [optId] };
      }
      // multi
      let next;
      if (current.includes(optId)) {
        next = current.filter((id) => id !== optId);
      } else {
        if (group.max && current.length >= group.max) return prev;
        next = [...current, optId];
      }
      return { ...prev, [group.id]: next };
    });
  };

  const handleAdd = () => {
    if (!item || !isComplete) return;
    const modifiers = groups.map((g) => ({
      id: g.id,
      title: g.title,
      options: (selections[g.id] || [])
        .map((id) => g.options.find((o) => o.id === id))
        .filter(Boolean),
    })).filter((g) => g.options.length > 0);

    addItem({
      itemId: item.id,
      name: item.name,
      basePrice: item.price,
      qty,
      modifiers,
      notes: notes.trim() || null,
      imageKey: item.imageKey || null,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-brand-deep/60 backdrop-blur-sm"
          />
          {/* Modal/drawer */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 bottom-0 z-50 sm:inset-0 sm:flex sm:items-center sm:justify-center sm:p-6"
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="relative max-h-[92vh] sm:max-h-[88vh] w-full sm:max-w-[640px] flex flex-col overflow-hidden rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl"
            >
              {/* Hero */}
              <div className="relative h-[210px] sm:h-[260px] shrink-0 bg-brand-sand">
                {img ? (
                  <img src={img} alt={item.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="placeholder-pattern flex h-full w-full items-center justify-center px-8">
                    <h3 className="display text-center text-[28px] text-brand-primary/70">
                      {item.name}
                    </h3>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/95 p-2 text-brand-dark shadow-soft transition hover:bg-white"
                  aria-label="Cerrar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 id="modal-title" className="display text-[24px] sm:text-[28px] text-brand-dark leading-tight">
                      {item.name}
                    </h2>
                    {item.description && (
                      <p className="mt-1.5 text-[14px] leading-relaxed text-brand-muted">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="num shrink-0 rounded-full bg-brand-primary/8 px-3 py-1 text-[14px] font-semibold text-brand-primary">
                    {fmt(item.price)}
                  </span>
                </div>

                {/* Modifier groups */}
                <div className="mt-6 space-y-6">
                  {groups.map((g) => (
                    <ModifierGroup
                      key={g.id}
                      group={g}
                      selected={selections[g.id] || []}
                      onToggle={(optId) => toggleOption(g, optId)}
                    />
                  ))}
                </div>

                {/* Notes */}
                <div className="mt-7">
                  <label className="block text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-dark/85 mb-2">
                    Notas para la cocina
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Ej: sin cebolla, extra limón, bien tostado…"
                    className="w-full rounded-2xl bg-brand-cream/60 px-4 py-3 text-[14px] text-brand-dark placeholder:text-brand-muted/70 ring-1 ring-black/5 focus:ring-2 focus:ring-brand-primary/40 transition resize-none"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-black/5 bg-white px-5 py-4 sm:px-7 sm:py-5 safe-bottom">
                <div className="flex items-center gap-3">
                  <QuantityPicker qty={qty} setQty={setQty} />
                  <button
                    onClick={handleAdd}
                    disabled={!isComplete}
                    className="group flex-1 inline-flex items-center justify-center gap-3 rounded-full bg-brand-primary px-5 py-3.5 text-[14px] font-semibold text-white shadow-sm transition disabled:cursor-not-allowed disabled:bg-brand-muted/30 hover:bg-brand-secondary"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    <span>Agregar al pedido</span>
                    <span className="num ml-1 inline-flex h-7 items-center rounded-full bg-white/15 px-2.5 text-[13px] font-semibold tabular-nums">
                      {fmt(subtotal)}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function ModifierGroup({ group, selected, onToggle }) {
  const isMulti = group.type === 'multi';
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-3">
        <h4 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-brand-dark">
          {group.title}
        </h4>
        <span className="text-[11.5px] text-brand-muted">
          {group.required ? 'Requerido · ' : 'Opcional · '}
          {group.helper || (isMulti ? (group.max ? `Hasta ${group.max}` : 'Selección múltiple') : 'Elige uno')}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {group.options.map((o) => {
          const isOn = selected.includes(o.id);
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onToggle(o.id)}
              className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-left text-[14px] transition ${
                isOn
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-brand-cream/70 text-brand-dark ring-1 ring-black/5 hover:bg-brand-cream'
              }`}
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ring-1 transition ${
                    isOn
                      ? 'bg-white text-brand-primary ring-white'
                      : 'ring-brand-muted/30'
                  }`}
                >
                  {isOn && <Check className="h-3 w-3" strokeWidth={3.2} />}
                </span>
                <span className="truncate">{o.label}</span>
              </span>
              {o.priceDelta > 0 && (
                <span
                  className={`num shrink-0 text-[12.5px] font-semibold ${
                    isOn ? 'text-white/90' : 'text-brand-primary'
                  }`}
                >
                  +{fmt(o.priceDelta)}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function QuantityPicker({ qty, setQty }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-brand-cream/80 ring-1 ring-black/5 p-1">
      <button
        onClick={() => setQty(Math.max(1, qty - 1))}
        className="grid h-9 w-9 place-items-center rounded-full text-brand-dark hover:bg-white"
        aria-label="Disminuir cantidad"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="num w-7 text-center text-[15px] font-semibold tabular-nums text-brand-dark">
        {qty}
      </span>
      <button
        onClick={() => setQty(qty + 1)}
        className="grid h-9 w-9 place-items-center rounded-full text-brand-dark hover:bg-white"
        aria-label="Aumentar cantidad"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
