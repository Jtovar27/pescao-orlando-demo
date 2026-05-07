import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Demo from './pages/Demo';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import CartButton from './components/CartButton';
import WhatsAppWidget from './components/WhatsAppWidget';

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [hash, pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <CartDrawer />
      <CartButton />
      <WhatsAppWidget />
    </CartProvider>
  );
}
