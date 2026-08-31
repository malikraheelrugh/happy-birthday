import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface MysteriousIntroProps {
  onOpen: () => void;
}

export const MysteriousIntro: React.FC<MysteriousIntroProps> = ({ onOpen }) => {
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    // Step 1: "Hey, Hifza..."
    const timer1 = setTimeout(() => {
      setStep(1);
    }, 600);

    // Step 2: "I made a little something for you."
    const timer2 = setTimeout(() => {
      setStep(2);
    }, 2400);

    // Step 3: Reveal button
    const timer3 = setTimeout(() => {
      setStep(3);
    }, 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div
      id="mysterious-intro-screen"
      className="relative min-h-[85vh] w-full flex flex-col items-center justify-center px-6 text-center overflow-hidden z-20"
    >
      {/* Sleek top badge & line */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mb-8 flex items-center gap-3"
      >
        <div className="w-6 h-[1px] bg-[#D4AF37]/50" />
        <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#D4AF37]">
          Personal Surprise
        </span>
        <div className="w-6 h-[1px] bg-[#D4AF37]/50" />
      </motion.div>

      {/* Text Sequence Container */}
      <div className="max-w-xl mx-auto space-y-6">
        {step >= 1 && (
          <motion.div
            id="intro-heading"
            initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <h1 className="font-serif-cormorant italic text-4xl sm:text-5xl md:text-6xl text-[#E8E8E8] tracking-wide">
              Hey, <span className="text-[#D4AF37] font-serif italic">Hifza...</span>
            </h1>
            <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          </motion.div>
        )}

        {step >= 2 && (
          <motion.p
            id="intro-subtext"
            initial={{ opacity: 0, y: 15, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans-clean text-base sm:text-lg text-zinc-400 font-light max-w-md mx-auto leading-relaxed"
          >
            I made a little something for you.
          </motion.p>
        )}

        {step >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6"
          >
            <button
              id="open-surprise-btn"
              onClick={onOpen}
              type="button"
              className="relative group px-9 py-4 sm:px-11 sm:py-4.5 bg-[#D4AF37] text-black font-semibold rounded-sm text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-white hover:shadow-[0_0_35px_rgba(212,175,55,0.45)] transition-all duration-400 cursor-pointer active:scale-95 flex items-center justify-center gap-2.5 mx-auto"
            >
              <span>Open Your Surprise</span>
              <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Subtle indicator hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 3 ? 0.4 : 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-6 text-[9px] font-sans-clean text-zinc-500 tracking-[0.3em] uppercase"
      >
        Tap to begin the experience
      </motion.div>
    </div>
  );
};
