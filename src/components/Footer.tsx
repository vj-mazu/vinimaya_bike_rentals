import { Phone, MapPin, Mail, Globe } from 'lucide-react';
import { InstagramIcon } from './Icons';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#0a0a0a] px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-xl" style={{ background: 'linear-gradient(145deg, #ffffff, #f0ece4)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
              <img src="/images/WhatsApp Image 2026-05-05 at 10.41.22 AM.jpeg" alt="Vinimaya" className="h-full w-full object-contain p-1.5" />
            </div>
            <div>
              <div className="font-['Noto_Serif'] text-3xl font-bold tracking-tighter">Vinimaya<span className="text-[#e8740a]">.</span></div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm font-medium leading-7 text-white/45">
            Self-drive bike and scooter rentals from Yelahanka, Bengaluru. Real fleet photos, transparent pricing, and fast booking confirmation.
          </p>
          <div className="mt-6 flex gap-2.5">
            {[
              { icon: Phone, href: "tel:+918884404365", label: "Call" },
              { icon: Mail, href: "mailto:contact@vinimayaselfdrive.in", label: "Email" },
              { icon: MapPin, href: "https://maps.app.goo.gl/Fq5WFqkXea8mjKEM7", label: "Location" },
              { icon: Globe, href: "#home", label: "Website" },
              { icon: InstagramIcon, href: "https://www.instagram.com/vinimaya_bike_rentals?igsh=cnNlcWR4OG13aHh3", label: "Instagram" }
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined} className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.05] text-white/60 transition-all duration-300 hover:bg-[#e8740a] hover:text-white" aria-label={label}>
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8740a]">Quick Links</h4>
          <ul className="mt-5 grid gap-2.5 text-sm font-semibold text-white/50">
            <li><a href="#selection" className="transition hover:text-white">Fleet</a></li>
            <li><a href="#services" className="transition hover:text-white">Rental Process</a></li>
            <li><a href="#faq" className="transition hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8740a]">Operating</h4>
          <div className="mt-5 grid gap-2.5 text-sm font-medium leading-6 text-white/50">
            <p>Mon–Sun: 7:30 AM to 9:30 PM</p>
            <p>7th Main Road, 3rd Cross, Maruthi Nagar, Yelahanka, Bengaluru 560064</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/[0.06] pt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 sm:flex-row">
        <div>© 2026 Vinimaya Bike Rentals. All rights reserved.</div>
        <div>Prices and availability confirmed by enquiry</div>
      </div>
    </footer>
  );
}
