import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useCart, lineUnitPrice, lineTotal, fmt } from '../context/CartContext';
import { getDishImage } from '../data/assetMap';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, itemCount, clear } = useCart();
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCart}
            className="fixed inset-0 z-[55] bg-brand-deep/50 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="fixed right-0 top-0 z-[56] flex h-full w-full sm:max-w-md flex-col bg-white shadow-2xl"
            role="dialog"
            aria-label="Carrito"
          >
            <header className="flex items-center justify-between border-b border-black/5 px-5 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-brand-primary" />
                <h2 className="display text-[20px] text-brand-dark">Tu pedido</h2>
                {itemCount > 0 && (
                  <span className="num rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[12px] font-semibold text-brand-primary">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="grid h-9 w-9 place-items-center rounded-full text-brand-dark hover:bg-black/5"
                aria-label="Cerrar carrito"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            {items.length === 0 ? (
              <EmptyState onClose={closeCart} />
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                  {items.map((line, i) => (
                    <CartLine
                      key={i}
                      line={line}
                      onInc={() => updateQty(i, line.qty + 1)}
                      onDec={() => updateQty(i, line.qty - 1)}
                      onRemove={() => removeItem(i)}
                    />
                  ))}
                </div>

                <footer className="border-t border-black/5 bg-brand-cream/40 px-5 py-5 safe-bottom">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-[13px] font-medium text-brand-muted uppercase tracking-[0.14em]">
                      Subtotal
                    </span>
                    <span className="num text-[22px] font-semibold text-brand-dark">
                      {fmt(subtotal)}
                    </span>
                  </div>
                  <p className="text-[12px] text-brand-muted leading-snug">
                    Demo · impuestos, propina y envío se calcularán en checkout real.
                  </p>
                  <button
                    onClick={() => setDemoOpen(true)}
                    className="mt-4 group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-brand-secondary"
                  >
                    Continuar pedido
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <button
                    onClick={clear}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/5 bg-transparent px-5 py-2.5 text-[12.5px] font-medium text-brand-muted hover:bg-black/5 transition"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Vaciar carrito
                  </button>
                </footer>
              </>
            )}
          </motion.aside>

          <DemoCheckoutModal open={demoOpen} onClose={() => setDemoOpen(false)} />
        </>
      )}
    </AnimatePresence>
  );
}

function CartLine({ line, onInc, onDec, onRemove }) {
  const img = getDishImage(line.imageKey);
  return (
    <div className="flex gap-3 rounded-2xl bg-white p-3 ring-1 ring-black/5 shadow-soft">
      <div className="aspect-square w-[68px] shrink-0 overflow-hidden rounded-xl bg-brand-sand">
        {img ? (
          <img src={img} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className="placeholder-pattern grid h-full w-full place-items-center px-1.5">
            <span className="display-italic text-center text-[10px] text-brand-primary/60 line-clamp-3">
              {line.name}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="fraunces text-[15px] text-brand-dark leading-snug line-clamp-2 pr-2">
            {line.name}
          </h3>
          <button
            onClick={onRemove}
            className="-mr-1 -mt-1 grid h-7 w-7 place-items-center rounded-full text-brand-muted hover:bg-black/5 hover:text-brand-dark"
            aria-label="Eliminar"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
        {line.modifiers?.length > 0 && (
          <ul className="mt-1 space-y-0.5">
            {line.modifiers.map((g) => (
              <li key={g.id} className="text-[11.5px] text-brand-muted leading-snug">
                <span className="font-medium text-brand-dark/70">{g.title}: </span>
                {g.options.map((o) => o.label).join(', ')}
              </li>
            ))}
          </ul>
        )}
        {line.notes && (
          <p className="mt-1 text-[11.5px] italic text-brand-muted">“{line.notes}”</p>
        )}
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1 rounded-full bg-brand-cream ring-1 ring-black/5 p-0.5">
            <button onClick={onDec} className="grid h-7 w-7 place-items-center rounded-full hover:bg-white">
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="num w-5 text-center text-[13px] font-semibold tabular-nums">{line.qty}</span>
            <button onClick={onInc} className="grid h-7 w-7 place-items-center rounded-full hover:bg-white">
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <span className="num text-[14px] font-semibold text-brand-primary">
            {fmt(lineTotal(line))}
          </span>
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onClose }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-cream">
        <ShoppingBag className="h-7 w-7 text-brand-primary/60" strokeWidth={1.6} />
      </div>
      <h3 className="display mt-4 text-[22px] text-brand-dark">Tu carrito está vacío</h3>
      <p className="mt-2 text-[14px] text-brand-muted leading-relaxed">
        Empieza por explorar el menú y agrega tus platos favoritos. Es un sistema demo —
        ideal para mostrarle al cliente cómo se sentiría una orden real.
      </p>
      <button
        onClick={onClose}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-[13px] font-semibold text-white"
      >
        Explorar menú
      </button>
    </div>
  );
}

function DemoCheckoutModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-brand-deep/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed inset-0 z-[61] grid place-items-center p-5"
          >
            <div className="relative max-w-md rounded-3xl bg-white p-7 sm:p-8 text-center shadow-2xl">
              <button
                onClick={onClose}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-brand-muted hover:bg-black/5"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-primary/10 text-brand-primary">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <h3 className="display mt-4 text-[24px] text-brand-dark">
                Esto es una demostración
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-brand-muted">
                En una versión final, aquí se conectaría el checkout real con pickup o
                delivery, impuestos, propina, pagos y confirmación de orden.
              </p>
              <button
                onClick={onClose}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-[13.5px] font-semibold text-white"
              >
                Entendido
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
