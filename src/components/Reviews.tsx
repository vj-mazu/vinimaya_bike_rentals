import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Rahul M.",
    role: "Local Rider",
    text: "The best rental experience in Bengaluru. The Himalayan 450 was in pristine condition, perfectly serviced, and the pickup process was incredibly smooth.",
    rating: 5
  },
  {
    name: "Sneha K.",
    role: "Weekend Explorer",
    text: "Rented a Classic 350 for a Nandi Hills trip. Transparent pricing, no hidden deposit drama, and the bike rode like a dream. Highly recommended.",
    rating: 5
  },
  {
    name: "Arjun V.",
    role: "City Commuter",
    text: "Got the Honda Dio for a month. The team is very professional and the scooter was spotless. Definitely my go-to for self-drive rentals from now on.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#e8740a]/15 bg-[#e8740a]/[0.06] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8740a]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e8740a]">Testimonials</span>
          </span>
          <h2 className="font-['Noto_Serif'] text-4xl font-bold tracking-tighter text-[#151515] sm:text-6xl">
            Rider <span className="text-[#e8740a]">Feedback.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="rounded-2xl border border-black/[0.06] bg-[#f8f5ee] p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-[#e8740a]/30 hover:shadow-md"
            >
              <div className="mb-6 flex gap-1 text-[#e8740a]">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-8 text-base font-medium leading-relaxed text-[#151515]/70">
                "{review.text}"
              </p>
              <div>
                <div className="text-sm font-black text-[#151515]">{review.name}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#151515]/40">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
