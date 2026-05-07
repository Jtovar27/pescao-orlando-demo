import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOGO_SRC } from '../data/assetMap';
import { useCart } from '../context/CartContext';

const NAV = [
  { label: 'Inicio', href: '/#top' },
  { label: 'Menú', href: '/#menu' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Ubicación', href: '/#ubicacion' },
  { label: 'Demo', href: '/demo', isRoute: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 bg-white border-b border-black/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo only — never write "Pescao" next to the logo */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Pescao home"
          >
            <img
              src={LOGO_SRC}
              alt="Pescao Restaurant & Bar"
              className="h-10 sm:h-11 w-auto select-none"
              draggable="false"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/#menu"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-primary px-5 py-2.5 text-[13px] font-semibold text-white tracking-wide shadow-sm transition hover:bg-brand-secondary"
            >
              Ver menú
            </a>

            <button
              onClick={openCart}
              className="relative inline-flex items-center justify-center rounded-full border border-brand-primary/15 bg-white px-3 py-2.5 text-brand-primary transition hover:bg-brand-primary/5"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={2} />
              {itemCount > 0 && (
                <span className="num absolute -right-1.5 -top-1.5 flex h-[20px] min-w-[20px] items-center justify-center rounded-full bg-brand-accent px-1 text-[11px] font-semibold text-white shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              className="lg:hidden inline-flex items-center justify-center rounded-full p-2 text-brand-dark hover:bg-black/5"
              onClick={() => setOpen((o) => !o)}
              aria-label="Abrir menú"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden border-t border-black/5 bg-white"
          >
            <nav className="px-6 py-5 grid gap-1">
              {NAV.map((item) => (
                <NavLink key={item.href} item={item} mobile />
              ))}
              <a
                href="/#menu"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white"
              >
                Ver menú
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ item, mobile = false }) {
  const base = mobile
    ? 'block rounded-lg px-3 py-3 text-[15px] font-medium text-brand-dark hover:bg-black/5'
    : 'text-[13.5px] tracking-wide font-medium text-brand-dark/85 hover:text-brand-primary transition';

  if (item.isRoute) {
    return (
      <Link to={item.href} className={base}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} className={base}>
      {item.label}
    </a>
  );
}
