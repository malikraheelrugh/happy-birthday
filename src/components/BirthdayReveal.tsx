import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ChevronDown } from 'lucide-react';

interface BirthdayRevealProps {
  onScrollToNext?: () => void;
}

export const BirthdayReveal: React.FC<BirthdayRevealProps> = ({ onScrollToNext }) => {
  return (
    <section
      id="birthday-reveal-section"
      className="relative min-h-[85vh] sm:min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 text-center overflow-hidden z-10 py-16 sm:py-24"
    >
      <div className="relative max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* Sleek Sub-header with gold line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-2"
        >
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
          <span className="text-[#D4AF37] italic font-serif text-base sm:text-lg">
            Hey, Hifza...
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
        </motion.div>

        {/* Dramatic "Happy Birthday" in luxury serif */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 
            className="font-serif-cormorant italic text-5xl sm:text-7xl md:text-8xl lg:text-[96px] text-white leading-none tracking-tight"
            style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.25)' }}
          >
            Happy Birthday
          </h2>
        </motion.div>

        {/* Visual Focal Point: "Hifza Batool" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative py-2 sm:py-3"
        >
          {/* Subtle atmospheric gold spotlight */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full -z-10" />

          <h1
            id="celebrant-name"
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal gold-gradient-text tracking-tight"
          >
            Hifza Batool
          </h1>
        </motion.div>

        {/* Sleek divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1, ease: 'easeOut' }}
          className="w-24 sm:w-40 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto"
        />

        {/* Sleek Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-sans-clean text-sm sm:text-base md:text-lg text-zinc-300 font-light tracking-wide max-w-lg mx-auto opacity-80"
        >
          The world is brighter because you are in it.
        </motion.p>
      </div>

      {/* Sleek Scroll Down Cue */}
      {onScrollToNext && (
        <motion.button
          id="scroll-to-message-btn"
          onClick={onScrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="mt-14 sm:mt-20 flex flex-col items-center gap-2 text-zinc-400 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          aria-label="Scroll to birthday message"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md group-hover:border-[#D4AF37]/40 transition-colors">
            <span className="text-[9px] font-sans-clean uppercase tracking-[0.25em] text-zinc-400 group-hover:text-zinc-200">
              Read Celebration Message
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
          </div>
        </motion.button>
      )}
    </section>
  );
};
