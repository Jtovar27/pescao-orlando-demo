import { motion } from 'framer-motion';
import { Waves, Heart, Users } from 'lucide-react';

const PILLARS = [
  {
    icon: Waves,
    title: 'Frescura del mar',
    body:
      'Pescados enteros, mariscos del día y la cazuela que recordarás. La materia prima manda.',
  },
  {
    icon: Heart,
    title: 'Sazón caribeña',
    body:
      'Recetas que vienen de casa: papelón, arepa frita, chicharrón crujiente. Sabor sin atajos.',
  },
  {
    icon: Users,
    title: 'Hecho para compartir',
    body:
      'Platos abundantes, parrillas XL y cubetas de cervezas. Un lugar donde la mesa se llena.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-24 sm:py-28 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle at 0% 0%, rgba(217,122,60,0.45), transparent 45%), radial-gradient(circle at 100% 100%, rgba(44,125,160,0.55), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
            La experiencia
          </span>
          <h2 className="display mt-3 text-[34px] sm:text-[44px] leading-[1.06]">
            Mariscos, parrillas y bebidas caribeñas
            <br />
            <span className="display-italic text-white/80">en un solo lugar.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/75">
            En Pescao queremos que vengas con hambre y te vayas con cuento. Nuestra cocina
            celebra el Caribe — del pescado frito al papelón con limón.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-accent/15 text-brand-accent">
                <p.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="display mt-4 text-[22px] leading-tight">{p.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/75">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
