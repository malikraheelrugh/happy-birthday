import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';

interface BurstParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

export const InteractiveWishMoment: React.FC = () => {
  const [hasWished, setHasWished] = useState(false);
  const [particles, setParticles] = useState<BurstParticle[]>([]);

  const handleMakeWish = () => {
    // Generate star/particle burst in gold & champagne
    const newParticles: BurstParticle[] = [];
    const colors = ['#FFFFFF', '#FFF3D6', '#D4AF37', '#F5D38A', '#E8E8E8', '#AA820A'];

    for (let i = 0; i < 45; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 360,
        y: -Math.random() * 280 - 50,
        size: Math.random() * 7 + 2.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.2,
        duration: Math.random() * 1.5 + 1.2,
      });
    }

    setParticles(newParticles);
    setHasWished(true);
  };

  return (
    <section
      id="interactive-wish-section"
      className="relative min-h-[80vh] w-full flex flex-col items-center justify-center px-4 sm:px-8 py-20 z-10 overflow-hidden"
    >
      <div className="relative max-w-xl w-full mx-auto text-center space-y-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-3"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-6 h-[1px] bg-[#D4AF37]/50" />
            <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.3em] font-semibold text-[#D4AF37] uppercase">
              A Moment To Pause
            </span>
            <div className="w-6 h-[1px] bg-[#D4AF37]/50" />
          </div>

          <h2 className="font-serif-cormorant italic text-3xl sm:text-4xl md:text-5xl text-white font-normal">
            One Last Thing...
          </h2>
          <p className="font-sans-clean text-xs sm:text-sm text-zinc-400 font-light max-w-sm mx-auto">
            Close your eyes for a second, hold an intention in your mind, and tap below.
          </p>
        </motion.div>

        {/* Interactive Button / Container */}
        <div className="relative flex flex-col items-center justify-center min-h-[220px]">
          {/* Animated Rising Burst Particles */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [1, 0.9, 0],
                  x: p.x,
                  y: p.y,
                  scale: [0, 1.4, 0.2],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: 'absolute',
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  borderRadius: '50%',
                  backgroundColor: p.color,
                  boxShadow: `0 0 12px ${p.color}`,
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!hasWished ? (
              <motion.div
                key="wish-button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="py-4"
              >
                <button
                  id="make-a-wish-btn"
                  onClick={handleMakeWish}
                  type="button"
                  className="relative group px-10 py-4.5 bg-[#D4AF37] text-black font-semibold rounded-sm text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-white hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] transition-all duration-400 cursor-pointer active:scale-95 flex items-center justify-center gap-3 mx-auto"
                >
                  <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
                  <span>Make a Wish</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="wish-revealed"
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full rounded-2xl p-6 sm:p-10 bg-white/5 border border-[#D4AF37]/40 backdrop-blur-xl box-glow-gold relative overflow-hidden"
              >
                {/* Floating star accents */}
                <div className="absolute top-4 right-4 text-[#D4AF37]/50">
                  <Star className="w-4 h-4 animate-pulse" />
                </div>

                <div className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.9 }}
                    className="font-serif-cormorant italic text-xl sm:text-2xl md:text-3xl text-zinc-100 font-light leading-relaxed"
                  >
                    “May this year surprise you in the best possible ways.”
                  </motion.p>

                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.9 }}
                    className="pt-2"
                  >
                    <h3 className="font-serif-display text-2xl sm:text-3xl md:text-4xl gold-gradient-text font-normal">
                      Happy Birthday, Hifza Batool.
                    </h3>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="pt-4"
                  >
                    <button
                      onClick={handleMakeWish}
                      type="button"
                      className="text-[10px] font-sans-clean text-zinc-400 hover:text-[#D4AF37] transition-colors uppercase tracking-[0.25em] cursor-pointer"
                    >
                      [ Make another wish ]
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
