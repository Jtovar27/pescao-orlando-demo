import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import FeaturedItems from '../components/FeaturedItems';
import MenuSection from '../components/MenuSection';
import ExperienceSection from '../components/ExperienceSection';
import Gallery from '../components/Gallery';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import MenuItemModal from '../components/MenuItemModal';

export default function Home() {
  const [active, setActive] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (item) => {
    setActive(item);
    setOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <FeaturedItems onSelect={handleSelect} />
        <MenuSection onSelect={handleSelect} />
        <ExperienceSection />
        <Gallery />
        <LocationSection />
      </main>
      <Footer />
      <MenuItemModal item={active} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
