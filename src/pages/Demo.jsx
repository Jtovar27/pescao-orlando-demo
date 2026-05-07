import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  UtensilsCrossed,
  Instagram,
  MessageCircle,
  MapPin,
  Smartphone,
  ScanLine,
  Sparkles,
  Layers,
  ShoppingBag,
  Check,
} from 'lucide-react';
import {
  WHATSAPP_URL,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  FOOTER_CREDIT,
  ADDRESS_FULL,
  PHONE_DISPLAY,
} from '../data/config';
import { LOGO_SRC, HERO_IMAGE, HERO_SECONDARY, HERO_TERTIARY } from '../data/assetMap';
import QRCodeBlock from '../components/QRCodeBlock';

const FEATURES = [
  { icon: Smartphone, title: 'Mobile-first', body: 'Funciona perfecto en celular para que el cliente pida desde su mesa.' },
  { icon: Layers, title: 'Menú interactivo', body: 'Estilo Toasttab: cada plato abre una vista con opciones, extras y notas.' },
  { icon: ShoppingBag, title: 'Carrito demo', body: 'Subtotales en tiempo real para mostrar cómo se vería una orden online.' },
  { icon: ScanLine, title: 'QR al menú digital', body: 'Imprime el QR en mesa o flyer y lleva al menú en un click.' },
];

const INCLUDES = [
  'Home page premium con hero cinematográfico',
  'Menú completo con categorías, modificadores y extras',
  'Modal de producto con cantidad, opciones y notas',
  'Carrito demo con drawer y sticky bar móvil',
  'Galería curada y sección de ubicación con mapa',
  'Widget de WhatsApp solo para contacto (no para órdenes)',
  'Landing /demo lista para presentar al cliente',
  'QR code dinámico que apunta al menú digital',
];

export default function Demo() {
  return (
    <main className="bg-brand-cream">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-brand-cream/85 backdrop-blur-xl border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-[64px] items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-dark/80 hover:text-brand-primary transition">
            <ArrowLeft className="h-4 w-4" />
            Volver al website
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl bg-white p-1.5 ring-1 ring-black/5">
              <img src={LOGO_SRC} alt="Pescao" className="h-7 w-auto" />
            </div>
            <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
              Propuesta · RuutDev
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(circle at 0% 0%, rgba(29,79,139,0.18), transparent 45%), radial-gradient(circle at 100% 100%, rgba(217,122,60,0.12), transparent 50%)',
          }}
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary">
                <Sparkles className="h-3 w-3" />
                Propuesta digital · 2026
              </span>
              <h1 className="display mt-5 text-[44px] sm:text-[60px] md:text-[72px] leading-[1.02] text-brand-dark">
                Pescao
                <br />
                <span className="display-italic text-brand-primary">Website Demo</span>
              </h1>
              <p className="mt-6 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-brand-muted">
                Una propuesta digital para mostrar el menú, conectar Instagram, facilitar
                pedidos desde el celular y convertir más visitas en clientes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3.5 text-[14px] font-semibold text-white shadow-lift hover:bg-brand-secondary transition"
                >
                  Abrir website demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="/#menu"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white px-6 py-3.5 text-[14px] font-semibold text-brand-primary hover:bg-brand-primary/5 transition"
                >
                  Ver menú digital
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-1.5 text-[12.5px] text-brand-muted">
                <span><span className="font-semibold text-brand-dark">Cliente:</span> Pescao Restaurant & Bar</span>
                <span><span className="font-semibold text-brand-dark">Ubicación:</span> Orlando, FL</span>
                <span><span className="font-semibold text-brand-dark">Tel:</span> {PHONE_DISPLAY}</span>
              </div>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Big link cards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Todos los enlaces
            </span>
            <h2 className="display mt-3 text-[32px] sm:text-[42px] text-brand-dark">
              Lo que puedes mostrar al cliente
            </h2>
            <p className="mt-3 text-[15px] text-brand-muted leading-relaxed">
              Comparte cualquiera de estos enlaces. Todos forman parte de la propuesta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <BigLink to="/" Icon={Globe} title="Website Demo" desc="Home + experiencia completa" route />
            <BigLink to="/#menu" Icon={UtensilsCrossed} title="Menú Digital" desc="Carta interactiva con modificadores" />
            <BigLink to={INSTAGRAM_URL} Icon={Instagram} title="Instagram" desc="Perfil del restaurante" external />
            <BigLink to={WHATSAPP_URL} Icon={MessageCircle} title="WhatsApp" desc="Contacto rápido" external />
            <BigLink to={GOOGLE_MAPS_URL} Icon={MapPin} title="Google Maps" desc="Cómo llegar" external />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-brand-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                Qué incluye esta propuesta
              </span>
              <h2 className="display mt-3 text-[34px] sm:text-[42px] text-brand-dark leading-[1.05]">
                Una experiencia digital pensada para tu restaurante.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
                Cada sección está diseñada para resolver un problema concreto del negocio:
                aparecer profesional, mostrar el menú, captar pedidos y abrir canal directo
                con el cliente.
              </p>

              <ul className="mt-7 space-y-2.5">
                {INCLUDES.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14.5px] text-brand-dark">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-primary/10 text-brand-primary mt-0.5">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-soft"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-primary/10 text-brand-primary">
                    <f.icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="display mt-4 text-[20px] text-brand-dark leading-tight">{f.title}</h3>
                  <p className="mt-1.5 text-[13.5px] text-brand-muted leading-relaxed">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QR section */}
      <section className="bg-brand-deep py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
                Menú digital con QR
              </span>
              <h2 className="display mt-3 text-[36px] sm:text-[46px] leading-[1.05]">
                Imprímelo en mesa o stickerlo en la entrada.
              </h2>
              <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-white/75">
                El QR apunta directamente al menú interactivo. Ideal para mesas, flyers,
                tarjetas de presentación y stories de Instagram.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[13.5px] font-semibold text-brand-dark hover:bg-brand-cream transition"
                >
                  <Globe className="h-4 w-4" /> Abrir website
                </Link>
                <a
                  href="/#menu"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3 text-[13.5px] font-semibold text-white hover:bg-white/10 transition"
                >
                  <UtensilsCrossed className="h-4 w-4" /> Ver menú digital
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <QRCodeBlock />
            </div>
          </div>
        </div>
      </section>

      {/* Address strip */}
      <section className="bg-white py-12 border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <h3 className="display text-[22px] text-brand-dark">Pescao Restaurant & Bar</h3>
            <p className="text-[14px] text-brand-muted">{ADDRESS_FULL}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2.5 text-[12.5px] font-semibold text-white">
              <MapPin className="h-3.5 w-3.5" /> Maps
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-[12.5px] font-semibold text-white">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-brand-dark text-white/80 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[13px] text-white/60">© {new Date().getFullYear()} Pescao Restaurant & Bar</span>
          <span className="display-italic text-[15px] text-brand-cream">{FOOTER_CREDIT}</span>
        </div>
      </footer>
    </main>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto max-w-[340px]">
      {/* shadow ring */}
      <div className="absolute -inset-4 rounded-[60px] bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-accent/20 blur-2xl" />
      <div className="relative aspect-[9/19] w-full rounded-[44px] bg-brand-dark p-2 shadow-2xl ring-1 ring-white/10">
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-brand-cream">
          {/* status bar */}
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 pt-3 text-[10px] font-semibold text-brand-dark">
            <span className="num">9:41</span>
            <span className="h-5 w-20 rounded-full bg-brand-dark/80" />
            <span className="num">100%</span>
          </div>
          {/* hero photo */}
          <div className="relative h-[58%]">
            <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/85" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <span className="text-[8.5px] uppercase tracking-[0.22em] font-semibold text-brand-cream/90">
                Pescao · Orlando
              </span>
              <h3 className="display text-[18px] leading-tight mt-1">
                Sabor caribeño,
                <br />
                <span className="display-italic">pescado fresco</span>
              </h3>
            </div>
          </div>
          {/* feed */}
          <div className="px-4 py-4 space-y-3">
            <MiniRow img={HERO_SECONDARY} title="Parrilla Super Especial" price="$65.00" />
            <MiniRow img={HERO_TERTIARY} title="Lebranche entero" price="$25.99" />
            <MiniRow title="Cazuela de Mariscos" price="$17.99" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniRow({ img, title, price }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-2.5 ring-1 ring-black/5">
      {img ? (
        <img src={img} alt="" className="h-12 w-12 rounded-xl object-cover" />
      ) : (
        <div className="placeholder-pattern h-12 w-12 rounded-xl" />
      )}
      <div className="flex-1 min-w-0">
        <h4 className="fraunces text-[12px] text-brand-dark line-clamp-1">{title}</h4>
      </div>
      <span className="num text-[11px] font-semibold text-brand-primary">{price}</span>
    </div>
  );
}

function BigLink({ to, Icon, title, desc, route, external }) {
  const cls =
    'group relative flex flex-col items-start gap-3 overflow-hidden rounded-3xl bg-brand-cream p-5 ring-1 ring-black/5 hover:ring-brand-primary/25 transition shadow-soft hover:shadow-lift';
  const Inner = (
    <>
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition">
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <div>
        <h3 className="display text-[19px] text-brand-dark leading-tight">{title}</h3>
        <p className="text-[12.5px] text-brand-muted mt-0.5">{desc}</p>
      </div>
      <ArrowRight className="absolute right-4 top-4 h-4 w-4 text-brand-muted transition group-hover:translate-x-0.5 group-hover:text-brand-primary" />
    </>
  );
  if (route) return <Link to={to} className={cls}>{Inner}</Link>;
  if (external)
    return (
      <a href={to} target="_blank" rel="noreferrer" className={cls}>
        {Inner}
      </a>
    );
  return <a href={to} className={cls}>{Inner}</a>;
}
