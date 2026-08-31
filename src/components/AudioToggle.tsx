import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { ambientSound } from '../utils/audio';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const newState = ambientSound.toggle();
    setIsPlaying(newState);
  };

  return (
    <button
      id="audio-toggle-btn"
      onClick={handleToggle}
      type="button"
      aria-label={isPlaying ? 'Mute ambient audio' : 'Play ambient audio'}
      className="flex items-center gap-2.5 px-3.5 py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-md hover:border-[#D4AF37]/50 hover:bg-white/10 text-xs font-sans-clean transition-all duration-300 shadow-lg cursor-pointer group active:scale-95"
    >
      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
      <div className="relative flex items-center justify-center w-4 h-4">
        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#D4AF37] transition-colors" />
        )}
      </div>
      <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-zinc-300 group-hover:text-white transition-colors">
        {isPlaying ? 'Ambient Audio On' : 'Ambient Audio Off'}
      </span>
      {isPlaying && (
        <span className="w-1 h-1 rounded-full bg-[#D4AF37] animate-ping" />
      )}
    </button>
  );
};
