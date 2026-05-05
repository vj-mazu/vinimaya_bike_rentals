import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, ShoppingBag, X } from 'lucide-react';
import { InstagramIcon } from './Icons';

const links = [
  ["Fleet", "#selection"],
  ["Process", "#services"],
  ["Gallery", "#gallery"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"]
];

export function Navbar({ onCartClick, cartCount }: { onCartClick: () => void; cartCount: number }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-[3000] w-full transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'border-b border-white/[0.04] bg-[#0a0a0a]/95 py-3 backdrop-blur-2xl'
          : 'py-5 sm:py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 relative">
        <a href="#home" className="flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="relative h-12 w-12 overflow-hidden rounded-xl sm:h-14 sm:w-14 sm:rounded-2xl"
            style={{
              background: 'linear-gradient(145deg, #ffffff, #f0ece4)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
            }}
          >
            <img
              src="/images/WhatsApp Image 2026-05-05 at 10.41.22 AM.jpeg"
              alt="Vinimaya Logo"
              className="h-full w-full object-contain p-1.5 sm:p-2"
            />
          </div>
          <div className="text-white">
            <div className="font-['Noto_Serif'] text-xl font-black leading-none tracking-tight sm:text-2xl">Vinimaya</div>
            <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 sm:text-[9px]">Bike Rentals</div>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex gap-7 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="relative py-2 transition-colors duration-300 hover:text-[#e8740a]">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/vinimaya_bike_rentals?igsh=cnNlcWR4OG13aHh3" target="_blank" rel="noreferrer" className="text-white/60 transition-colors hover:text-[#e8740a]" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <button
              onClick={onCartClick}
              className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#e8740a]/50 hover:bg-[#e8740a] hover:text-white"
              aria-label="Open enquiry cart"
            >
              <ShoppingBag className="h-4.5 w-4.5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#e8740a] text-[9px] font-black text-white shadow-[0_4px_12px_rgba(232,116,10,0.4)]"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <a
              href="tel:+918884404365"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(232,116,10,0.3)]"
              style={{ background: 'linear-gradient(135deg, #e8740a, #d4680a)' }}
            >
              <Phone className="h-3.5 w-3.5" />
              Book
            </a>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white lg:hidden z-[3010]"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="absolute left-0 top-full w-full overflow-hidden border-t border-white/[0.05] bg-[#0a0a0a]/95 backdrop-blur-2xl lg:hidden"
          >
            <ul className="grid gap-1 p-4">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-xl px-5 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:bg-white/[0.04] hover:text-[#e8740a]"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { onCartClick(); setIsMobileMenuOpen(false); }}
                  className="w-full rounded-xl px-5 py-3.5 text-left text-sm font-bold uppercase tracking-[0.15em] text-[#e8740a] transition-colors hover:bg-white/[0.04]"
                >
                  Enquiry ({cartCount})
                </button>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vinimaya_bike_rentals?igsh=cnNlcWR4OG13aHh3"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white/80 transition-colors hover:bg-white/[0.04] hover:text-[#e8740a]"
                >
                  <InstagramIcon className="h-5 w-5" /> Instagram
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
