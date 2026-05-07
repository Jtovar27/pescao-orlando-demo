import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { featuredItems } from '../data/menuData';
import { getDishImage } from '../data/assetMap';
import { fmt } from '../context/CartContext';

export default function FeaturedItems({ onSelect }) {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Favoritos de la casa
            </span>
            <h2 className="display mt-3 text-[32px] sm:text-[40px] text-brand-dark max-w-2xl">
              Los platos que <span className="display-italic text-brand-primary">todos piden</span>.
            </h2>
          </div>
          <a
            href="#menu"
            className="hidden md:inline-flex items-center gap-2 self-end text-sm font-medium text-brand-primary hover:underline underline-offset-4"
          >
            Ver menú completo →
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featuredItems.map((item, i) => {
            const img = getDishImage(item.imageKey);
            return (
              <motion.button
                key={item.id}
                onClick={() => onSelect?.(item)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="lift-on-hover group text-left overflow-hidden rounded-2xl bg-brand-cream/60 ring-1 ring-black/5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-sand">
                  {img ? (
                    <img
                      src={img}
                      alt={item.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                  ) : (
                    <DishPlaceholder name={item.name} />
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="display text-[18px] sm:text-[20px] text-brand-dark leading-tight">
                      {item.name}
                    </h3>
                    <span className="num shrink-0 rounded-full bg-white px-2.5 py-1 text-[12.5px] font-semibold text-brand-primary ring-1 ring-brand-primary/10">
                      {fmt(item.price)}
                    </span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-[13px] text-brand-muted leading-snug">
                    {item.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand-primary">
                    <Plus className="h-3.5 w-3.5" /> Agregar
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DishPlaceholder({ name }) {
  return (
    <div className="placeholder-pattern flex h-full w-full items-center justify-center px-6 text-center">
      <span className="display text-[20px] text-brand-primary/70 line-clamp-2">{name}</span>
    </div>
  );
}
