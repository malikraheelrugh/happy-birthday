import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Star } from 'lucide-react';

export const HeartfeltMessage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="message-section"
      className="relative min-h-[75vh] w-full flex flex-col items-center justify-center px-4 sm:px-8 py-16 sm:py-24 z-10"
    >
      <div className="max-w-3xl w-full mx-auto">
        {/* Section Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-8 h-[1px] bg-[#D4AF37]/50" />
          <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.3em] font-semibold text-[#D4AF37] uppercase">
            A Thought For Today
          </span>
          <div className="w-8 h-[1px] bg-[#D4AF37]/50" />
        </motion.div>

        {/* The Sleek Glass Card */}
        <motion.div
          id="message-glass-card"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-2xl p-6 sm:p-10 md:p-12 glass-card glass-card-hover border border-white/10 overflow-hidden"
        >
          {/* Subtle gold sheen on hover */}
          <div
            className={`absolute -top-32 -right-32 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-30'
            }`}
          />

          {/* Decorative Header within Card */}
          <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <Quote className="w-5 h-5 text-[#D4AF37] rotate-180 opacity-80" />
              <h3 className="font-serif-cormorant italic text-2xl sm:text-3xl text-white font-normal tracking-wide">
                For Someone Worth Celebrating
              </h3>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          </div>

          {/* Sincere, emotionally intelligent message */}
          <div className="space-y-5 sm:space-y-6 text-zinc-300 font-sans-clean font-light text-base sm:text-lg leading-relaxed sm:leading-[1.85]">
            <p>
              Some people simply deserve to be celebrated — not just because a calendar marked the date, but because of the effortless grace, light, and sincerity they bring into the world.
            </p>

            <p>
              Your presence has a subtle, genuine way of making ordinary days feel brighter and calmer. In a busy world, that kind of warmth and quiet strength is rare and truly memorable.
            </p>

            <p>
              Today is a celebration of all the potential, goodness, and elegance you carry within you. As you step into this next chapter, may life answer with unexpected joy, serene peace, deep fulfillment, and countless reasons to smile.
            </p>

            
          </div>

          {/* Card footer accent */}
          <div className="mt-8 sm:mt-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-sans-clean">
            <span className="tracking-[0.2em] uppercase text-[10px] text-zinc-400">
              Happy Birthday, Hifza Batool
            </span>
            <div className="flex items-center gap-2 text-[#D4AF37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-[10px] tracking-widest uppercase">Celebration Edition</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
