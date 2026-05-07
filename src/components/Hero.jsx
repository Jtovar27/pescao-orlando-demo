import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { HERO_IMAGE } from '../data/assetMap';
import {
  HERO_HEADLINE,
  HERO_HEADLINE_LINE2,
  HERO_HEADLINE_LINE3,
  HERO_SUBHEADLINE,
  GOOGLE_MAPS_URL,
  RESTAURANT_TYPE_TAGS,
} from '../data/config';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-brand-deep">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden
          className="h-full w-full object-cover scale-[1.04]"
          fetchpriority="high"
        />
      </div>

      {/* Overlays for text legibility */}
      <div className="absolute inset-0 hero-overlay" aria-hidden />
      <div className="absolute inset-0 hidden md:block hero-side-overlay" aria-hidden />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-36 lg:pt-52 lg:pb-44">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm ring-1 ring-white/15">
            <Star className="h-3 w-3 fill-brand-accent text-brand-accent" />
            Restaurante caribeño · Orlando
          </span>

          <h1 className="display mt-6 text-white text-[44px] leading-[1.02] sm:text-[58px] md:text-[72px] lg:text-[84px]">
            {HERO_HEADLINE}
            <br />
            <span className="display-italic text-brand-cream/90">{HERO_HEADLINE_LINE2}</span>
            <br />
            {HERO_HEADLINE_LINE3}
          </h1>

          <p className="mt-7 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-white/80">
            {HERO_SUBHEADLINE}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold tracking-wide text-brand-dark shadow-lift transition hover:bg-brand-cream"
            >
              Ver menú
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-[14px] font-semibold tracking-wide text-white backdrop-blur-md transition hover:bg-white/10"
            >
              <MapPin className="h-4 w-4" />
              Cómo llegar
            </a>
          </div>

          {/* Badges */}
          <div className="mt-10 flex flex-wrap gap-2">
            {RESTAURANT_TYPE_TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3.5 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-white/85 ring-1 ring-white/15 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom marquee */}
      <div className="relative border-t border-white/10 bg-black/25 backdrop-blur-md">
        <div className="overflow-hidden py-3">
          <div className="marquee-track whitespace-nowrap text-white/70 text-[12px] uppercase tracking-[0.32em]">
            {Array.from({ length: 2 }).flatMap((_, dup) =>
              [
                'Pescado frito',
                'Mariscos frescos',
                'Parrillas',
                'Cazuela',
                'Papelón',
                'Sabor caribeño',
                'Hecho con sazón',
              ].map((w, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-12">
                  <span>{w}</span>
                  <span className="text-brand-accent">◆</span>
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
