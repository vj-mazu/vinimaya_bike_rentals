import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Minus, Phone, Plus } from 'lucide-react';

const faqs = [
  {
    question: "What documents are required for rental?",
    answer: "Please bring an original driving license and Aadhaar card or another valid government ID. For premium bikes like the Himalayan 450, a PAN card or secondary ID may be requested."
  },
  {
    question: "Are the prices shown on the website final?",
    answer: "The website displays starting day rates. Final price depends on rental duration, vehicle availability, delivery requirements, deposit amount, and return timing."
  },
  {
    question: "Is a helmet included with the rental?",
    answer: "Yes, one rider helmet is included with every confirmed rental. If you need a pillion helmet, please inform the team at booking."
  },
  {
    question: "Do you offer doorstep delivery?",
    answer: "Doorstep delivery is available in selected Bengaluru areas. Charges and timing are confirmed after you share your pickup location."
  },
  {
    question: "How do I confirm a booking?",
    answer: "Browse the fleet, select your vehicle, and send an enquiry via WhatsApp. The team will confirm availability, deposit, documents, and pickup time."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-[#f8f5ee] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#e8740a]/15 bg-[#e8740a]/[0.06] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8740a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e8740a]">FAQ</span>
          </span>
          <h2 className="font-['Noto_Serif'] text-4xl font-bold tracking-tighter text-[#151515] sm:text-6xl">Clear answers.</h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="border-b border-black/[0.05] last:border-b-0">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left">
                <span className="text-base font-bold text-[#151515] sm:text-lg">{faq.question}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f8f5ee] text-[#e8740a]">
                  {openIndex === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm font-medium leading-7 text-[#151515]/55">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#e8740a]/15 bg-[#e8740a]/[0.06] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8740a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e8740a]">Contact</span>
          </span>
          <h2 className="font-['Noto_Serif'] text-4xl font-bold leading-[0.92] tracking-tighter text-[#151515] sm:text-6xl">Confirm your ride.</h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-7 text-[#151515]/50 sm:text-lg">Call or WhatsApp with the bike name, dates, and pickup preference. Availability confirmed directly by the Vinimaya team.</p>
          <div className="mt-8 grid gap-3">
            <ContactRow icon={Phone} label="Phone" value="+91 88844 04365" href="tel:+918884404365" />
            <ContactRow icon={Mail} label="Email" value="contact@vinimayaselfdrive.in" href="mailto:contact@vinimayaselfdrive.in" />
            <ContactRow icon={MapPin} label="Address" value="7th Main Rd, 3rd Cross, Maruthi Nagar, Yelahanka, Bengaluru 560064" />
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="https://wa.me/918884404365" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_14px_40px_rgba(37,211,102,0.25)]">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href="tel:+918884404365" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#151515] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
        <div className="relative min-h-[480px] overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-[0_24px_70px_rgba(0,0,0,0.12)] sm:min-h-[560px]">
          <img src="/images/WhatsApp Image 2026-05-05 at 10.41.26 AM (1).jpeg" alt="Vinimaya storefront" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="rounded-xl bg-black/50 p-5 backdrop-blur-xl">
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8740a]">Operating Hours</div>
              <div className="mt-2 text-xl font-black text-white sm:text-2xl">Mon–Sun, 7:30 AM – 9:30 PM</div>
              <p className="mt-2 text-sm font-medium leading-6 text-white/55">Timings may vary on holidays. Confirm before arrival.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex gap-3 rounded-xl border border-black/[0.06] bg-[#f8f5ee] p-3.5 transition-all duration-300 hover:border-[#e8740a]/25 sm:gap-4 sm:p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-[#e8740a] shadow-sm sm:h-11 sm:w-11 sm:rounded-xl">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#151515]/35">{label}</div>
        <div className="mt-1 break-words text-xs font-bold leading-5 text-[#151515] sm:text-sm sm:leading-6">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

export function WhatsAppButton() {
  return (
    <motion.a href="https://wa.me/918884404365" target="_blank" rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.8, duration: 0.5, type: "spring" }} whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-[2600] grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
      aria-label="Open WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </motion.a>
  );
}
