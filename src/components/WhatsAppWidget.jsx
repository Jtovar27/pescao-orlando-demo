import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_URL } from '../data/config';
import { useCart } from '../context/CartContext';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);
  const { isOpen: cartOpen, itemCount } = useCart();

  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 6000);
    return () => clearTimeout(t);
  }, []);

  // Hide when cart drawer is open or sticky cart bar shown on mobile
  if (cartOpen) return null;

  return (
    <div
      className={`fixed right-4 z-30 ${itemCount > 0 ? 'bottom-[88px] sm:bottom-5' : 'bottom-5'} safe-bottom`}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute bottom-[68px] right-0 w-[280px] rounded-2xl bg-white p-4 shadow-lift ring-1 ring-black/5"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                  · En línea
                </span>
                <h4 className="fraunces text-[16px] text-brand-dark mt-0.5">¿Tienes preguntas?</h4>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="grid h-7 w-7 place-items-center rounded-full text-brand-muted hover:bg-black/5"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-[13px] text-brand-muted leading-snug">
              Escríbenos por WhatsApp para reservas, dudas sobre el menú o pedidos
              especiales. Respondemos rápido.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-emerald-600 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Abrir WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lift transition hover:bg-emerald-600"
        aria-label="Contactar por WhatsApp"
      >
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-emerald-400/60 animate-ping" />
        )}
        <span className="relative">
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" strokeWidth={2.2} />}
        </span>
      </button>
    </div>
  );
}
