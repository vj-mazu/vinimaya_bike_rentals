import { motion } from 'framer-motion';
import { Bike, ClipboardCheck, Clock, MapPinned, ShieldCheck, Wrench } from 'lucide-react';
import { rentalChecklist } from '../data/fleet';

const services = [
  {
    icon: ClipboardCheck,
    title: "Simple Verification",
    description: "Carry your original driving license and Aadhaar or another valid ID proof. Premium bikes may require a secondary ID and refundable deposit."
  },
  {
    icon: Bike,
    title: "Helmet Included",
    description: "Every confirmed rental includes a rider helmet. Ask in advance if you need an additional pillion helmet for your ride."
  },
  {
    icon: MapPinned,
    title: "Yelahanka Pickup",
    description: "Pickup from Vinimaya Bike Rentals, 7th Main Road, 3rd Cross, Maruthi Nagar, Yelahanka, Bengaluru 560064."
  },
  {
    icon: Clock,
    title: "Flexible Rental Plans",
    description: "Choose daily city rentals, weekend bookings, or extended monthly plans based on your needs and bike availability."
  },
  {
    icon: Wrench,
    title: "Pre-Ride Inspection",
    description: "Every vehicle is checked for brakes, lights, tyre condition, documents, and visible damage before handover."
  },
  {
    icon: ShieldCheck,
    title: "Clear Responsibilities",
    description: "Fuel, traffic fines, excess delay, and any damages are handled transparently during the return inspection process."
  }
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white sm:py-28">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/WhatsApp Image 2026-05-05 at 10.41.27 AM (1).jpeg"
          alt="Showroom"
          className="h-full w-full object-cover opacity-[0.07] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e8740a]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/70">Rental Standards</span>
            </div>

            <h2 className="font-['Noto_Serif'] text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl">
              Accurate & <br/>
              <span className="text-[#e8740a]">Transparent.</span>
            </h2>

            <p className="mt-7 max-w-md text-base font-medium leading-relaxed text-white/50 sm:text-lg">
              We maintain a professional rental environment in Yelahanka. From sanitization to legal compliance, your safety and confidence is our priority.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 backdrop-blur-xl">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e8740a]">Pickup Checklist</div>
              <ul className="mt-6 space-y-3.5">
                {rentalChecklist.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-3.5 text-sm font-medium leading-relaxed text-white/70">
                    <div className="mt-1.5 grid h-3.5 w-3.5 shrink-0 place-items-center rounded-full bg-[#e8740a]/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#e8740a]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Service cards grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#e8740a]/30 hover:bg-white/[0.04]"
                >
                  <div className="mb-8 inline-grid h-14 w-14 place-items-center rounded-xl bg-white/[0.04] text-[#e8740a] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#e8740a] group-hover:text-white group-hover:shadow-[0_16px_40px_rgba(232,116,10,0.3)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{service.title}</h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-white/40 transition-colors duration-500 group-hover:text-white/60">{service.description}</p>

                  {/* Hover glow */}
                  <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-[#e8740a] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
