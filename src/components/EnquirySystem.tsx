import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Phone, ShieldCheck, ShoppingBag, Trash2, X } from 'lucide-react';
import type { Bike } from '../data/fleet';

export function BikeModal({ bike, isOpen, onClose, onAdd }: { bike: Bike | null; isOpen: boolean; onClose: () => void; onAdd: (bike: Bike) => void }) {
  if (!bike) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[4200] flex items-center justify-center p-4 sm:p-8">
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-md" aria-label="Close" />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
            className="relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-[#f8f5ee] shadow-2xl md:grid-cols-[0.95fr_1.05fr]"
          >
            <button onClick={onClose} className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-[#151515] shadow-sm transition hover:bg-[#e8740a] hover:text-white" aria-label="Close modal">
              <X className="h-5 w-5" />
            </button>
            <div className="relative min-h-[320px] overflow-hidden bg-[#0a0a0a] md:min-h-[580px]">
              <img src={bike.image} alt={bike.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-black/50 p-4 text-white backdrop-blur-xl">
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8740a]">Rental starts from</div>
                <div className="mt-1 text-3xl font-black">{bike.price}<span className="text-base text-white/40"> / day</span></div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e8740a]">{bike.type}</span>
              <h2 className="mt-3 font-['Noto_Serif'] text-3xl font-bold tracking-tighter text-[#151515] sm:text-5xl">{bike.name}</h2>
              <p className="mt-4 text-sm font-medium leading-7 text-[#151515]/55">{bike.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {[["Engine", bike.cc], ["Power", bike.hp], ["Weight", bike.weight], ["Seat", bike.seat]].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-white p-3.5 shadow-sm">
                    <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#151515]/30">{label}</div>
                    <div className="mt-1.5 text-sm font-black text-[#151515]">{value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-black/[0.06] bg-white p-4">
                <div className="flex items-center gap-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#151515]/40">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#e8740a]" /> Booking note
                </div>
                <p className="mt-2 text-sm font-medium leading-6 text-[#151515]/60">{bike.bestFor}. Deposit: {bike.deposit}. Final availability confirmed by phone or WhatsApp.</p>
              </div>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <button onClick={() => { onAdd(bike); onClose(); }} className="inline-flex flex-1 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:shadow-[0_12px_30px_rgba(232,116,10,0.3)]" style={{ background: 'linear-gradient(135deg, #e8740a, #d4680a)' }}>
                  <ShoppingBag className="h-3.5 w-3.5" /> Add to enquiry
                </button>
                <a href="tel:+918884404365" className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[#151515] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black">
                  <Phone className="h-3.5 w-3.5" /> Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function EnquirySidebar({ cart, isOpen, onClose, onRemove }: { cart: Bike[]; isOpen: boolean; onClose: () => void; onRemove: (id: number) => void }) {
  const handleWhatsApp = () => {
    const message = `Hello Vinimaya Bike Rentals, I want to check availability for:\n${cart.map((bike, i) => `${i + 1}. ${bike.name} (${bike.price}/day)`).join('\n')}\n\nPlease confirm price, deposit, documents, and pickup/delivery options.`;
    window.open(`https://wa.me/918884404365?text=${encodeURIComponent(message)}`, '_blank', 'noreferrer');
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[4300] bg-black/45 backdrop-blur-sm" aria-label="Close enquiry" />
          <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 280 }} className="fixed right-0 top-0 z-[4301] flex h-full w-full max-w-md flex-col bg-[#f8f5ee] shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/[0.06] p-6">
              <div>
                <h3 className="text-xl font-black text-[#151515]">Enquiry</h3>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#151515]/35">{cart.length} selected</p>
              </div>
              <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#151515] shadow-sm transition hover:bg-[#e8740a] hover:text-white" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="grid h-full place-items-center text-center text-[#151515]/20">
                  <div>
                    <ShoppingBag className="mx-auto mb-4 h-14 w-14" />
                    <p className="text-base font-bold uppercase tracking-[0.18em]">No bikes selected</p>
                  </div>
                </div>
              ) : (
                <div className="grid gap-3">
                  {cart.map((bike) => (
                    <motion.div layout key={bike.id} className="flex gap-3.5 rounded-xl bg-white p-3.5 shadow-sm">
                      <img src={bike.image} alt={bike.name} className="h-18 w-18 shrink-0 rounded-xl object-cover" />
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-black text-[#151515]">{bike.name}</h4>
                        <p className="mt-0.5 text-sm font-bold text-[#e8740a]">{bike.price}/day</p>
                        <p className="mt-0.5 text-[10px] font-medium text-[#151515]/40">{bike.type}</p>
                      </div>
                      <button onClick={() => onRemove(bike.id)} className="grid h-9 w-9 place-items-center rounded-full text-[#151515]/30 transition hover:bg-red-50 hover:text-red-500" aria-label={`Remove ${bike.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
            <div className="border-t border-black/[0.06] bg-white p-6">
              <button disabled={cart.length === 0} onClick={handleWhatsApp} className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25d366] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_40px_rgba(37,211,102,0.22)] transition hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-40">
                <MessageCircle className="h-4 w-4" /> Send WhatsApp Enquiry
              </button>
              <a href="tel:+918884404365" className="mt-2.5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#151515] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                <Phone className="h-4 w-4" /> Call to Confirm
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
