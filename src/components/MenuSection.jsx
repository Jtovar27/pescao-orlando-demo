import { useState } from 'react';
import { categories, menu } from '../data/menuData';
import MenuCategoryTabs from './MenuCategoryTabs';
import MenuItemCard from './MenuItemCard';

export default function MenuSection({ onSelect }) {
  const [active, setActive] = useState('especiales');

  const handleChange = (id) => {
    setActive(id);
    const target = document.getElementById(`menu-cat-${id}`);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="relative bg-brand-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent">
            Menú digital
          </span>
          <h2 className="display mt-3 text-[36px] sm:text-[48px] text-brand-dark">
            Tu próximo antojo de{' '}
            <span className="display-italic text-brand-primary">pescao</span>{' '}
            empieza aquí.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-muted">
            Explora nuestras categorías, personaliza tus acompañantes y arma tu pedido.
          </p>
        </div>

        <MenuCategoryTabs categories={categories} active={active} onChange={handleChange} />

        <div className="mt-8 space-y-14">
          {categories.map((cat) => {
            const items = menu[cat.id] || [];
            if (items.length === 0) return null;
            return (
              <div key={cat.id} id={`menu-cat-${cat.id}`}>
                <header className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="display text-[26px] sm:text-[32px] text-brand-dark brand-accent-line">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="num text-[12px] font-medium uppercase tracking-[0.18em] text-brand-muted">
                    {items.length} {items.length === 1 ? 'opción' : 'opciones'}
                  </span>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} onSelect={onSelect} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
