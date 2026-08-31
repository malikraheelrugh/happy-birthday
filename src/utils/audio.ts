/**
 * Pure Web Audio API Ambient Music Synthesizer
 * Plays a calm, dreamy, cinematic ambient harmonic soundscape
 * with soft pentatonic crystal tones and warm pads.
 * Zero external audio files required. Completely standalone.
 */

class AmbientSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;

  // Gentle pentatonic frequencies for a warm, celestial feeling (Hz)
  private scale = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.0,  // G4
    440.0,  // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
  ];

  private padFreqs = [130.81, 196.0, 261.63, 329.63]; // C3, G3, C4, E4 for warm drone

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playChime(freq: number, duration: number = 3.5) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const chimeGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // High quality sine & triangle blend
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, this.ctx.currentTime);
    filter.Q.setValueAtTime(2, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    chimeGain.gain.setValueAtTime(0, now);
    chimeGain.gain.linearRampToValueAtTime(0.09, now + 0.15);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    filter.connect(chimeGain);
    chimeGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + 0.2);
  }

  private playWarmPad() {
    if (!this.ctx || !this.masterGain) return;

    this.padFreqs.forEach((freq) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const padGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, this.ctx.currentTime);

      const now = this.ctx.currentTime;
      padGain.gain.setValueAtTime(0, now);
      padGain.gain.linearRampToValueAtTime(0.035, now + 2);
      padGain.gain.linearRampToValueAtTime(0.02, now + 6);
      padGain.gain.linearRampToValueAtTime(0, now + 10);

      osc.connect(filter);
      filter.connect(padGain);
      padGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 10.5);
    });
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    try {
      this.initContext();
      this.isPlaying = true;

      // Start initial chords
      this.playWarmPad();
      this.playChime(this.scale[0], 4);
      setTimeout(() => this.playChime(this.scale[2], 3.8), 600);
      setTimeout(() => this.playChime(this.scale[4], 3.5), 1400);

      let step = 0;
      this.timerId = window.setInterval(() => {
        if (!this.isPlaying) return;
        step++;
        
        // Random celestial notes
        const randomNote = this.scale[Math.floor(Math.random() * this.scale.length)];
        this.playChime(randomNote, 3.5 + Math.random());

        // Occasional harmonic fifth
        if (Math.random() > 0.5) {
          const secondNote = this.scale[Math.floor(Math.random() * this.scale.length)];
          setTimeout(() => {
            if (this.isPlaying) this.playChime(secondNote, 3.2);
          }, 350 + Math.random() * 500);
        }

        // Periodic warm pad swell every 8 beats
        if (step % 5 === 0) {
          this.playWarmPad();
        }
      }, 1900);
    } catch {
      this.isPlaying = false;
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.linearRampToValueAtTime(0.001, now + 0.5);
      setTimeout(() => {
        if (!this.isPlaying && this.masterGain && this.ctx) {
          this.masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
        }
      }, 600);
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientSound = new AmbientSoundscape();
