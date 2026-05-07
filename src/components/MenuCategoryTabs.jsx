import { useEffect, useRef, useState } from 'react';

export default function MenuCategoryTabs({ categories, active, onChange }) {
  const containerRef = useRef(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const top = el.getBoundingClientRect().top;
      setStuck(top <= 68);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`sticky top-[68px] z-30 -mx-4 sm:-mx-6 lg:-mx-8 ${
        stuck ? 'bg-brand-cream/95 backdrop-blur-md border-b border-black/5' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="no-scrollbar flex gap-2 overflow-x-auto py-3.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition ${
                active === cat.id
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-white text-brand-dark/80 ring-1 ring-black/5 hover:bg-brand-primary/5 hover:text-brand-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
