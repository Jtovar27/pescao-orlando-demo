import { motion } from 'framer-motion';
import { MapPin, Phone, UtensilsCrossed, Clock } from 'lucide-react';
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_DISPLAY,
  PHONE_TEL,
  GOOGLE_MAPS_URL,
  HOURS_NOTE,
} from '../data/config';

export default function LocationSection() {
  return (
    <section id="ubicacion" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Visítanos
            </span>
            <h2 className="display mt-3 text-[36px] sm:text-[44px] text-brand-dark leading-[1.05]">
              Te esperamos en <span className="display-italic text-brand-primary">Orlando</span>.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-brand-muted max-w-md">
              Estamos sobre South Orange Blossom Trail, con estacionamiento y ambiente
              casual. Ideal para venir en familia o con amigos.
            </p>

            <div className="mt-7 space-y-4">
              <Row icon={MapPin} title="Dirección">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </Row>
              <Row icon={Phone} title="Teléfono">
                <a href={`tel:${PHONE_TEL}`} className="hover:text-brand-primary">
                  {PHONE_DISPLAY}
                </a>
              </Row>
              <Row icon={Clock} title="Horarios">
                {HOURS_NOTE}
              </Row>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-[13.5px] font-semibold text-white shadow-sm hover:bg-brand-secondary transition"
              >
                <MapPin className="h-4 w-4" />
                Cómo llegar
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white px-5 py-3 text-[13.5px] font-semibold text-brand-primary hover:bg-brand-primary/5 transition"
              >
                <Phone className="h-4 w-4" />
                Llamar
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white px-5 py-3 text-[13.5px] font-semibold text-brand-primary hover:bg-brand-primary/5 transition"
              >
                <UtensilsCrossed className="h-4 w-4" />
                Ver menú
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <div className="overflow-hidden rounded-3xl bg-brand-sand ring-1 ring-black/5 shadow-soft">
              <div className="aspect-[16/11] sm:aspect-[16/10]">
                <iframe
                  title="Pescao en Google Maps"
                  src="https://www.google.com/maps?q=4862+South+Orange+Blossom+Trail+Orlando+FL+32839&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-primary/8 text-brand-primary">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-muted">
          {title}
        </h4>
        <p className="mt-0.5 text-[15px] text-brand-dark leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
