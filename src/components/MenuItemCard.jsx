import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { getDishImage } from '../data/assetMap';
import { fmt } from '../context/CartContext';

export default function MenuItemCard({ item, onSelect }) {
  const img = getDishImage(item.imageKey);

  return (
    <motion.button
      onClick={() => onSelect?.(item)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
      className="group flex w-full items-stretch gap-4 rounded-2xl bg-white p-3.5 text-left ring-1 ring-black/5 shadow-soft transition hover:shadow-lift hover:ring-brand-primary/15"
    >
      <div className="flex-1 min-w-0 py-1.5 pl-1.5">
        <div className="flex items-start gap-2">
          {item.tag && (
            <span className="rounded-full bg-brand-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-accent">
              {item.tag}
            </span>
          )}
        </div>
        <h3 className="fraunces mt-1 text-[19px] sm:text-[20px] text-brand-dark leading-snug line-clamp-2">
          {item.name}
        </h3>
        {item.description && (
          <p className="mt-1.5 text-[13px] leading-snug text-brand-muted line-clamp-2">
            {item.description}
          </p>
        )}
        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span className="num text-[15px] font-semibold text-brand-dark">
            {fmt(item.price)}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-primary/8 px-2.5 py-1 text-[11.5px] font-semibold text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition">
            <Plus className="h-3.5 w-3.5" />
            Agregar
          </span>
        </div>
      </div>

      {/* Right image only when we have a confident match */}
      {img ? (
        <div className="relative aspect-square w-[112px] sm:w-[124px] shrink-0 overflow-hidden rounded-xl bg-brand-sand">
          <img
            src={img}
            alt={item.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="placeholder-pattern relative aspect-square w-[112px] sm:w-[124px] shrink-0 overflow-hidden rounded-xl flex items-center justify-center px-2">
          <span className="display-italic text-center text-[13px] text-brand-primary/60 line-clamp-3">
            {item.name}
          </span>
        </div>
      )}
    </motion.button>
  );
}
