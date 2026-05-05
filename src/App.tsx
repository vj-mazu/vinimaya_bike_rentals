import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Selection } from './components/Selection';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';
import { FAQ, Contact, WhatsAppButton } from './components/Extras';
import { BikeModal, EnquirySidebar } from './components/EnquirySystem';
import type { Bike } from './data/fleet';

function App() {
  const [cart, setCart] = useState<Bike[]>([]);
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const addToCart = (bike: Bike) => {
    if (!cart.find((item) => item.id === bike.id)) {
      setCart([...cart, bike]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((bike) => bike.id !== id));
  };

  const openBikeDetails = (bike: Bike) => {
    setSelectedBike(bike);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f8f5ee] font-['Inter'] selection:bg-[#e8740a] selection:text-white">
      <Preloader />

      {/* Subtle watermark */}
      <motion.div
        style={{ x: watermarkX }}
        className="pointer-events-none fixed left-0 top-1/2 z-0 -translate-y-1/2 select-none whitespace-nowrap font-['Noto_Serif'] text-[24vw] font-black uppercase text-black/[0.018]"
      >
        Vinimaya
      </motion.div>

      <Navbar onCartClick={() => setIsCartOpen(true)} cartCount={cart.length} />

      <main className="relative z-10">
        <Hero />
        <Selection onBikeClick={openBikeDetails} />
        <Services />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />

      <BikeModal
        bike={selectedBike}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addToCart}
      />

      <EnquirySidebar
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onRemove={removeFromCart}
      />
    </div>
  );
}

export default App;
