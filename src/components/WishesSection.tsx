import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sun, Compass, Feather, Star } from 'lucide-react';

interface WishCardData {
  id: number;
  number: string;
  title: string;
  subtext: string;
  icon: React.ReactNode;
}

export const WishesSection: React.FC = () => {
  const wishes: WishCardData[] = [
    {
      id: 1,
      number: '01',
      title: 'More reasons to smile.',
      subtext: 'May simple, genuine joys find you effortlessly in everyday moments.',
      icon: <Sun className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      id: 2,
      number: '02',
      title: 'More moments worth remembering.',
      subtext: 'Chapters filled with laughter, wonder, and unforgettable memories.',
      icon: <Sparkles className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      id: 3,
      number: '03',
      title: 'More courage to chase what you want.',
      subtext: 'Unwavering confidence in your talent, intuition, and dreams.',
      icon: <Compass className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      id: 4,
      number: '04',
      title: 'More peace in the moments that matter.',
      subtext: 'A calm heart, clear thoughts, and steady serenity wherever you go.',
      icon: <Feather className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      id: 5,
      number: '05',
      title: 'And more happiness than you expected.',
      subtext: 'Surprises of good fortune and warmth that exceed every wish.',
      icon: <Star className="w-4 h-4 text-[#D4AF37]" />,
    },
  ];

  return (
    <section
      id="wishes-section"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 py-20 sm:py-28 z-10"
    >
      <div className="max-w-3xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="w-6 h-[1px] bg-[#D4AF37]/50" />
            <span className="text-[10px] sm:text-[11px] font-sans-clean tracking-[0.3em] font-semibold text-[#D4AF37] uppercase">
              Intentions For Your Year
            </span>
            <div className="w-6 h-[1px] bg-[#D4AF37]/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif-cormorant italic text-3xl sm:text-4xl md:text-5xl text-white font-normal"
          >
            A Few Wishes <span className="gold-gradient-text not-italic">For You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans-clean text-xs sm:text-sm text-zinc-400 font-light max-w-md mx-auto"
          >
            May each of these find its way into your days ahead.
          </motion.p>
        </div>

        {/* 5 Sleek Wish Cards */}
        <div className="space-y-3.5 sm:space-y-4">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              id={`wish-card-${wish.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-xl p-5 sm:p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#D4AF37]/50 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
            >
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 sm:gap-5">
                  {/* Visual Minimalist Icon Container */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#D4AF37]/40 transition-colors">
                    {wish.icon}
                  </div>

                  {/* Text Content */}
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#D4AF37] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                      <h3 className="font-serif-cormorant text-lg sm:text-xl md:text-2xl text-white font-medium group-hover:text-[#D4AF37] transition-colors">
                        {wish.title}
                      </h3>
                    </div>
                    <p className="font-sans-clean text-xs sm:text-sm text-zinc-400 font-light pt-1 leading-snug pl-3">
                      {wish.subtext}
                    </p>
                  </div>
                </div>

                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <span className="font-mono text-xs sm:text-sm text-zinc-500 group-hover:text-[#D4AF37] transition-colors">
                    {wish.number}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
