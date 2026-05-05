import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/images/WhatsApp Image 2026-05-05 at 10.41.26 AM (1).jpeg",
  "/images/WhatsApp Image 2026-05-05 at 10.41.23 AM.jpeg",
  "/images/WhatsApp Image 2026-05-05 at 10.41.27 AM.jpeg",
  "/images/WhatsApp Image 2026-05-05 at 10.41.21 AM.jpeg",
  "/images/WhatsApp Image 2026-05-05 at 10.41.25 AM.jpeg",
  "/images/WhatsApp Image 2026-05-05 at 10.41.27 AM (1).jpeg"
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,116,10,0.05)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e8740a]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Gallery</span>
        </span>
        <h2 className="mx-auto mt-4 max-w-2xl font-['Noto_Serif'] text-4xl font-bold leading-[0.92] tracking-tighter text-white sm:text-6xl">
          Real photos, <span className="text-[#e8740a]">real fleet.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base font-medium leading-7 text-white/50 sm:text-lg">
          Explore authentic images directly from the Vinimaya showroom.
        </p>

        {/* Centric Animated Carousel */}
        <div className="relative mt-16 flex h-[400px] items-center justify-center sm:h-[600px] perspective-1000">
          <AnimatePresence mode="popLayout">
            {images.map((image, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + images.length) % images.length;
              const isNext = index === (currentIndex + 1) % images.length;

              if (!isActive && !isPrev && !isNext) return null;

              let x = 0;
              let z = 0;
              let rotateY = 0;
              let opacity = 1;
              let scale = 1;

              if (isPrev) {
                x = -200;
                z = -150;
                rotateY = 25;
                opacity = 0.4;
                scale = 0.85;
              } else if (isNext) {
                x = 200;
                z = -150;
                rotateY = -25;
                opacity = 0.4;
                scale = 0.85;
              } else {
                x = 0;
                z = 50;
                rotateY = 0;
                opacity = 1;
                scale = 1;
              }

              return (
                <motion.div
                  key={image}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ x, z, rotateY, opacity, scale }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className={`absolute h-[320px] w-[260px] overflow-hidden rounded-2xl shadow-2xl sm:h-[480px] sm:w-[380px] ${isActive ? 'z-20 border border-white/20' : 'z-10 blur-[2px]'}`}
                >
                  <img src={image} alt="Showroom" className="h-full w-full object-cover" />
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute top-1/2 z-30 flex w-full max-w-5xl -translate-y-1/2 justify-between px-4 sm:px-0">
            <button onClick={prevSlide} className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-[#e8740a] sm:h-14 sm:w-14">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={nextSlide} className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:bg-[#e8740a] sm:h-14 sm:w-14">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
