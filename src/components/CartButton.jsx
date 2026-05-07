import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart, fmt } from '../context/CartContext';

// Mobile-only sticky bottom cart bar.
export default function CartButton() {
  const { itemCount, subtotal, openCart, isOpen } = useCart();

  return (
    <AnimatePresence>
      {itemCount > 0 && !isOpen && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          className="fixed inset-x-0 bottom-3 z-30 sm:hidden px-4 safe-bottom pointer-events-none"
        >
          <button
            onClick={openCart}
            className="pointer-events-auto flex w-full items-center justify-between rounded-full bg-brand-primary px-5 py-3.5 text-white shadow-lift"
          >
            <span className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-[12px] font-bold">
                {itemCount}
              </span>
              <span className="text-[14px] font-semibold">Ver pedido</span>
            </span>
            <span className="num text-[14px] font-semibold tabular-nums">{fmt(subtotal)}</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
