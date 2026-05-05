import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bike } from 'lucide-react';

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [phase, setPhase] = useState(0); // 0=logo entrance, 1=expand, 2=exit
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Phase timeline
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => setLoading(false), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  // Particle system on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; decay: number; color: string;
    }

    const particles: Particle[] = [];
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.3 + Math.random() * 1.2;
      particles.push({
        x: cx + (Math.random() - 0.5) * 80,
        y: cy + (Math.random() - 0.5) * 80,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 1.5 + Math.random() * 2.5,
        alpha: 0.15 + Math.random() * 0.35,
        decay: 0.003 + Math.random() * 0.004,
        color: Math.random() > 0.6 ? '#e8740a' : '#ffffff'
      });
    }

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        if (p.alpha <= 0) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#e8740a'
          ? `rgba(232, 116, 10, ${p.alpha})`
          : `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.15,
            filter: "blur(30px)",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
          className="fixed inset-0 z-[4000] flex items-center justify-center overflow-hidden"
          style={{ background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 60%, #000000 100%)' }}
        >
          {/* Particle canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
          />

          {/* Radial glow behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: phase >= 1 ? 0.6 : 0.3,
              scale: phase >= 1 ? 2.5 : 1,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute z-[1] rounded-full"
            style={{
              width: 200,
              height: 200,
              background: 'radial-gradient(circle, rgba(232,116,10,0.25) 0%, rgba(232,116,10,0.05) 50%, transparent 70%)',
            }}
          />

          {/* Concentric rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: phase >= 1 ? [0, 0.3, 0] : 0,
                scale: phase >= 1 ? [0.5, 1.5 + ring * 0.5, 2 + ring * 0.8] : 0,
              }}
              transition={{
                duration: 1.5,
                delay: ring * 0.15,
                ease: "easeOut",
              }}
              className="absolute z-[1] rounded-full border"
              style={{
                width: 160,
                height: 160,
                borderColor: `rgba(232, 116, 10, ${0.15 - ring * 0.03})`,
              }}
            />
          ))}

          {/* Main Logo Container */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 30, rotateX: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: phase >= 2 ? 1.3 : 1,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1] as const,
              scale: { duration: 0.6 },
            }}
            style={{ perspective: 800 }}
          >
            {/* Logo image with 3D glow */}
            <motion.div
              className="relative"
              animate={{
                rotateY: phase >= 1 ? [0, 8, -8, 0] : 0,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className="h-32 w-32 overflow-hidden rounded-[2rem] sm:h-40 sm:w-40 sm:rounded-[2.5rem] bg-white"
                style={{
                  boxShadow: '0 30px 80px rgba(232,116,10,0.35), 0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.5)',
                }}
              >
                <img
                  src="/images/WhatsApp Image 2026-05-05 at 10.41.22 AM.jpeg"
                  alt="Vinimaya Bike Rentals"
                  className="h-full w-full object-contain p-1"
                />
              </div>

              {/* Reflection line */}
              <motion.div
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: '200%', opacity: [0, 0.6, 0] }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 z-10 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]"
              >
                <div
                  className="h-full w-1/3"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Progress bar with Bike animation */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 180 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="relative mt-12 h-[2px] rounded-full sm:mt-14"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              {/* Bike Icon Riding */}
              <motion.div
                initial={{ left: 0, x: "-50%", y: "-50%" }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.6 }}
                className="absolute top-1/2 z-10 text-[#e8740a]"
              >
                <Bike className="h-5 w-5 drop-shadow-[0_0_12px_rgba(232,116,10,0.8)]" strokeWidth={2.5} />
              </motion.div>

              {/* Progress Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] as const, delay: 0.6 }}
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #e8740a, #f5a623)',
                  boxShadow: '0 0 16px rgba(232,116,10,0.6)',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Corner accents */}
          <div className="absolute left-6 top-6 h-8 w-8 border-l border-t border-white/[0.06] sm:left-10 sm:top-10" />
          <div className="absolute right-6 top-6 h-8 w-8 border-r border-t border-white/[0.06] sm:right-10 sm:top-10" />
          <div className="absolute bottom-6 left-6 h-8 w-8 border-b border-l border-white/[0.06] sm:bottom-10 sm:left-10" />
          <div className="absolute bottom-6 right-6 h-8 w-8 border-b border-r border-white/[0.06] sm:bottom-10 sm:right-10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
