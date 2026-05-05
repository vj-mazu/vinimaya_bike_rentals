import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const titleWords = ["Your", "Journey,", "Our", "Legacy."];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.6
      }
    }
  };

  const itemVars = {
    hidden: { y: 60, opacity: 0, filter: "blur(8px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden bg-[#0a0a0a] text-white"
      style={{ minHeight: '100svh' }}
    >
      {/* Full-screen Video Background */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ scale: videoScale }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover sm:h-[100vw] sm:w-[100vh] sm:-rotate-90"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Lighter overlays for better video visibility on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-6 pb-12 sm:justify-center sm:pb-0"
      >
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="max-w-5xl pt-36 sm:pt-32"
        >
          {/* Eyebrow — pushed below navbar with pt */}
          <motion.div variants={itemVars} className="mb-6 sm:mb-8">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e8740a]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/70 sm:text-[10px] sm:tracking-[0.4em]">Premium Self-Drive Rentals</span>
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="flex flex-wrap gap-x-3 font-['Noto_Serif'] text-[clamp(2.5rem,7.5vw,9rem)] font-black leading-[0.92] tracking-tighter sm:gap-x-5">
            {titleWords.map((word, i) => (
              <span key={i} className="overflow-hidden py-1 sm:py-2">
                <motion.span
                  variants={itemVars}
                  className={`inline-block ${word === "Legacy." ? "text-[#e8740a]" : "text-white"}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={itemVars}
            className="mt-6 max-w-xl text-sm font-medium leading-relaxed text-white/55 sm:mt-8 sm:max-w-2xl sm:text-base lg:text-lg"
          >
            Bengaluru's premier self-drive destination. A curated fleet of verified bikes and scooters — from the Royal Enfield Himalayan to the Honda Dio — with a legacy of trust and transparency.
          </motion.p>

          {/* CTA buttons — stacked on mobile, inline on desktop */}
          <motion.div variants={itemVars} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="#selection"
              className="group inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_16px_40px_rgba(232,116,10,0.25)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97] sm:px-10 sm:py-5 sm:text-[11px]"
              style={{ background: 'linear-gradient(135deg, #e8740a 0%, #d4680a 100%)' }}
            >
              Explore Fleet
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+918884404365"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.06] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12] active:scale-[0.97] sm:px-10 sm:py-5 sm:text-[11px]"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVars}
            className="mt-10 flex flex-wrap gap-8 border-t border-white/[0.08] pt-6 sm:mt-14 sm:gap-14 sm:pt-8"
          >
            {[
              ["12+", "Fleet Vehicles"],
              ["7:30 AM", "Daily Opening"],
              ["100%", "Verified Fleet"]
            ].map(([val, label]) => (
              <div key={label} className="flex flex-col gap-1">
                <div className="text-xl font-black tracking-tight text-white sm:text-2xl">{val}</div>
                <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-[#e8740a]/80 sm:text-[9px] sm:tracking-[0.35em]">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 z-20 h-px w-full bg-gradient-to-r from-transparent via-[#e8740a]/30 to-transparent" />

      {/* Scroll Indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 right-8 z-20 hidden flex-col items-center gap-4 lg:flex"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 [writing-mode:vertical-lr]">Scroll</span>
        <motion.div
          animate={{ height: [24, 48, 24] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
