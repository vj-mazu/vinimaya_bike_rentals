import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Gauge, IndianRupee, Info, ShoppingBag } from 'lucide-react';
import { fleet } from '../data/fleet';
import type { Bike } from '../data/fleet';

function getOffset(index: number, active: number, total: number) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

export function Selection({ onBikeClick }: { onBikeClick: (bike: Bike) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBike = fleet[activeIndex];

  const sliderState = useMemo(
    () =>
      fleet.map((bike, index) => ({
        bike,
        offset: getOffset(index, activeIndex, fleet.length)
      })),
    [activeIndex]
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % fleet.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, []);

  const previous = () => setActiveIndex((current) => (current - 1 + fleet.length) % fleet.length);
  const next = () => setActiveIndex((current) => (current + 1) % fleet.length);

  return (
    <section id="selection" className="relative overflow-hidden bg-[#f8f5ee] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#e8740a]/15 bg-[#e8740a]/[0.06] px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e8740a]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e8740a]">Our Fleet</span>
            </span>
            <h2 className="font-['Noto_Serif'] text-4xl font-bold leading-[0.92] tracking-tighter text-[#151515] sm:text-6xl lg:text-7xl">
              Pick the right ride.
            </h2>
          </div>
          <p className="max-w-2xl text-base font-medium leading-7 text-[#151515]/55 sm:text-lg">
            From the Royal Enfield Himalayan for adventure routes to Honda Dio scooters for daily city use. Prices shown are starting day rates — final availability is confirmed by the Vinimaya team.
          </p>
        </div>

        {/* 3D Slider + Detail Panel */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="fleet-stage perspective-1000">
            {sliderState.map(({ bike, offset }) => {
              const isActive = offset === 0;
              return (
                <motion.button
                  key={bike.id}
                  type="button"
                  onClick={() => (isActive ? onBikeClick(bike) : setActiveIndex(fleet.findIndex((item) => item.id === bike.id)))}
                  animate={{
                    x: `${offset * 34}%`,
                    y: Math.abs(offset) * 18,
                    rotateY: offset * -28,
                    scale: isActive ? 1 : 0.78,
                    opacity: Math.abs(offset) > 2 ? 0 : isActive ? 1 : 0.38,
                    zIndex: 10 - Math.abs(offset)
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 18 }}
                  className="fleet-card preserve-3d"
                  aria-label={`View ${bike.name}`}
                >
                  <img src={bike.image} alt={bike.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/90 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#151515]">{bike.type}</span>
                    <span className="rounded-full px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white" style={{ background: 'linear-gradient(135deg, #e8740a, #d4680a)' }}>{bike.price}/day</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                    <h3 className="text-2xl font-black leading-none tracking-tight sm:text-3xl">{bike.name}</h3>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBike.id}
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -22 }}
              transition={{ duration: 0.25 }}
              className="rounded-[1.5rem] border border-black/[0.06] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e8740a]">Selected</div>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-[#151515] sm:text-3xl">{activeBike.name}</h3>
                </div>
                <div className="rounded-xl bg-[#e8740a]/[0.08] p-3.5 text-[#e8740a]">
                  <IndianRupee className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-4 text-sm font-medium leading-7 text-[#151515]/55">{activeBike.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {[
                  ["Engine", activeBike.cc],
                  ["Power", activeBike.hp],
                  ["Weight", activeBike.weight],
                  ["Seat", activeBike.seat]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-[#f8f5ee] p-3.5">
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#151515]/35">{label}</div>
                    <div className="mt-1.5 text-base font-black text-[#151515]">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-black/[0.06] p-4">
                <div className="flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#151515]/40">
                  <Gauge className="h-3.5 w-3.5 text-[#e8740a]" />
                  Best for
                </div>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#151515]">{activeBike.bestFor}</p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <button onClick={() => onBikeClick(activeBike)} className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[#151515] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#e8740a]">
                  <Info className="h-3.5 w-3.5" />
                  Details
                </button>
                <button onClick={() => onBikeClick(activeBike)} className="inline-flex flex-1 items-center justify-center gap-3 rounded-full px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:shadow-[0_12px_30px_rgba(232,116,10,0.3)]" style={{ background: 'linear-gradient(135deg, #e8740a, #d4680a)' }}>
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Enquire
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={previous} className="grid h-11 w-11 place-items-center rounded-full border border-black/8 bg-white text-[#151515] shadow-sm transition-all duration-300 hover:bg-[#151515] hover:text-white" aria-label="Previous bike">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {fleet.map((bike, index) => (
              <button
                key={bike.id}
                onClick={() => setActiveIndex(index)}
                className={`group relative h-4 w-6 grid place-items-center`}
                aria-label={`Show ${bike.name}`}
              >
                <div className={`h-1.5 rounded-full transition-all duration-400 ${index === activeIndex ? 'w-6 bg-[#e8740a]' : 'w-1.5 bg-black/15 group-hover:bg-black/25'}`} />
              </button>
            ))}
          </div>
          <button onClick={next} className="grid h-11 w-11 place-items-center rounded-full border border-black/8 bg-white text-[#151515] shadow-sm transition-all duration-300 hover:bg-[#151515] hover:text-white" aria-label="Next bike">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
