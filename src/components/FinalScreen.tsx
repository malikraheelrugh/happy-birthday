import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface FinalScreenProps {
  onScrollToTop?: () => void;
}

export const FinalScreen: React.FC<FinalScreenProps> = ({ onScrollToTop }) => {
  return (
    <footer
      id="final-screen-section"
      className="relative min-h-[70vh] sm:min-h-[75vh] w-full flex flex-col items-center justify-center px-4 sm:px-8 py-20 sm:py-28 text-center z-10 overflow-hidden"
    >
      <div className="relative max-w-2xl mx-auto space-y-8 sm:space-y-10">
        {/* Monogram Watermark Accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex justify-center select-none pointer-events-none"
        >
          <span className="font-serif-display italic text-6xl sm:text-7xl md:text-8xl text-[#D4AF37]/20 leading-none tracking-wider">
            H.B.
          </span>
        </motion.div>

        {/* Large Text: "Happy Birthday, Hifza Batool." */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 }}
        >
          <h2 className="font-serif-display text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight">
            Happy Birthday, <span className="gold-gradient-text">Hifza Batool.</span>
          </h2>
        </motion.div>

        {/* Under it: "Keep smiling. Keep growing. Keep being you." */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.4 }}
        >
          <p className="font-serif-cormorant italic text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light tracking-wide">
            Keep smiling. Keep growing. Keep being you.
          </p>
        </motion.div>

        {/* Sleek separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto"
        />

        {/* Sleek Archive Metadata Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37]/70">
              Celebration Archive
            </span>
            <p className="font-sans-clean text-xs text-zinc-500 font-light tracking-wider">
              Made with good wishes, just for today. ✨
            </p>
          </div>

          {onScrollToTop && (
            <button
              onClick={onScrollToTop}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md hover:border-[#D4AF37]/50 hover:bg-white/10 text-[9px] sm:text-[10px] font-sans-clean uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer active:scale-95 mt-2"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Back to Top</span>
            </button>
          )}
        </motion.div>
      </div>
    </footer>
  );
};
