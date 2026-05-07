import { motion } from 'framer-motion';
import { Fish, Anchor, Flame, GlassWater } from 'lucide-react';
import { CATEGORY_COVERS } from '../data/assetMap';

const HIGHLIGHTS = [
  {
    icon: Fish,
    title: 'Pescado frito',
    blurb: 'Pargo, mojarra y lebranche — enteros, crujientes y abundantes.',
    cover: CATEGORY_COVERS.pescado,
    href: '#menu',
    cat: 'principales',
  },
  {
    icon: Anchor,
    title: 'Mariscos',
    blurb: 'Cazuelas, ceviches y camarones al ajillo del día.',
    cover: CATEGORY_COVERS.mariscos,
    href: '#menu',
    cat: 'sopas',
  },
  {
    icon: Flame,
    title: 'Parrillas',
    blurb: 'Carne, mariscos y la legendaria Parrilla Mar y Tierra.',
    cover: CATEGORY_COVERS.parrillas,
    href: '#menu',
    cat: 'parrillas',
  },
  {
    icon: GlassWater,
    title: 'Bebidas caribeñas',
    blurb: 'Papelón, Frescolita, Malta y cervezas en cubeta.',
    cover: CATEGORY_COVERS.bebidas,
    href: '#menu',
    cat: 'bebidas',
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Lo que hacemos
            </span>
            <h2 className="display mt-3 text-[32px] sm:text-[40px] text-brand-dark max-w-2xl">
              Del mar a la mesa,{' '}
              <span className="display-italic text-brand-primary">con sazón caribeña</span>.
            </h2>
          </div>
          <p className="md:max-w-md text-[15px] leading-relaxed text-brand-muted">
            Cuatro categorías que definen nuestra mesa: pescados enteros, mariscos
            frescos, parrillas para compartir y las bebidas que más extrañas de casa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((h, i) => (
            <motion.a
              key={h.title}
              href={h.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="lift-on-hover group relative overflow-hidden rounded-3xl bg-white shadow-soft"
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-sand">
                <img
                  src={h.cover}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5">
                <div className="flex items-center gap-2 text-white">
                  <h.icon className="h-4 w-4 text-brand-accent" strokeWidth={2.2} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    Categoría
                  </span>
                </div>
                <h3 className="display mt-1 text-[24px] text-white">{h.title}</h3>
                <p className="mt-1 text-[13px] text-white/85 leading-snug">{h.blurb}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
