import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import { AudioToggle } from './components/AudioToggle';
import { MysteriousIntro } from './components/MysteriousIntro';
import { BirthdayReveal } from './components/BirthdayReveal';
import { HeartfeltMessage } from './components/HeartfeltMessage';
import { WishesSection } from './components/WishesSection';
import { InteractiveWishMoment } from './components/InteractiveWishMoment';
import { FinalScreen } from './components/FinalScreen';

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const mainContentRef = useRef<HTMLDivElement | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);
  const wishesRef = useRef<HTMLDivElement | null>(null);

  const handleOpenExperience = () => {
    setHasOpened(true);
    // Smooth auto scroll to main content
    setTimeout(() => {
      if (mainContentRef.current) {
        mainContentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleScrollToMessage = () => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWishes = () => {
    if (wishesRef.current) {
      wishesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050508] text-[#E8E8E8] selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden font-sans">
      {/* Sleek Mesh Gradient Background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-sleek-mesh"
      />

      {/* Sleek Dot Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 dot-grid-pattern opacity-15 pointer-events-none z-0"
      />

      {/* Atmospheric Blur Orbs */}
      <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-[#1A1A2E] rounded-full opacity-30 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-1/4 -right-40 w-[500px] h-[500px] bg-[#2D1B36] rounded-full opacity-25 blur-[130px] pointer-events-none z-0" />
      <div className="fixed top-10 left-1/3 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Dynamic Starfield Canvas */}
      <StarfieldCanvas />

      {/* Sleek Top Navigation Bar */}
      <header className="relative z-50 w-full max-w-5xl mx-auto px-4 sm:px-8 py-5 sm:py-7 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-semibold text-[#D4AF37]">
            Hifza Batool /2026
          </span>
          <div className="hidden sm:block w-8 h-[1px] bg-[#D4AF37] opacity-40" />
        </div>

        <div className="flex items-center gap-4">
          <AudioToggle />
        </div>
      </header>

      {/* Main Experience Layout Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          {!hasOpened ? (
            <motion.div
              key="intro-view"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.97, filter: 'blur(10px)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <MysteriousIntro onOpen={handleOpenExperience} />
            </motion.div>
          ) : (
            <motion.div
              key="main-experience"
              ref={mainContentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center"
            >
              {/* SECTION 2: Birthday Reveal */}
              <BirthdayReveal onScrollToNext={handleScrollToMessage} />

              {/* SECTION 3: A Beautiful Message */}
              <div ref={messageRef} className="w-full">
                <HeartfeltMessage />
              </div>

              {/* SECTION 4: "A Few Wishes For You" */}
              <div ref={wishesRef} className="w-full">
                <WishesSection />
              </div>

              {/* SECTION 5: Interactive Moment */}
              <InteractiveWishMoment />

              {/* SECTION 6: Final Screen */}
              <FinalScreen onScrollToTop={handleScrollToTop} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
