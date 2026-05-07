import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GALLERY } from '../data/assetMap';

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="galeria" className="relative bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Galería
            </span>
            <h2 className="display mt-3 text-[32px] sm:text-[40px] text-brand-dark max-w-2xl">
              Lo que pasa <span className="display-italic text-brand-primary">en la mesa</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
          {GALLERY.map((img, i) => (
            <motion.button
              key={img.src + i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl bg-brand-sand ring-1 ring-black/5 ${
                img.span === 'tall' ? 'row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt || ''}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              {img.alt && (
                <div className="absolute inset-x-3 bottom-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition">
                  <p className="text-[12px] font-medium text-white drop-shadow">{img.alt}</p>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-brand-deep/80 backdrop-blur-sm p-5"
            onClick={() => setActive(null)}
          >
            <motion.img
              key={active}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={GALLERY[active].src}
              alt={GALLERY[active].alt}
              className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
