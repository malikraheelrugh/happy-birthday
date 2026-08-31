import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  color: string;
}

interface FloatingParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  color: string;
}

export const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    const stars: Star[] = [];
    const particles: FloatingParticle[] = [];
    const starCount = Math.min(Math.floor((width * height) / 12000), 120);
    const particleCount = 28;

    const colors = [
      '#ffffff',
      '#fde68a', // warm gold
      '#e9d5ff', // soft violet
      '#c7d2fe', // soft indigo
    ];

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random() * 0.8 + 0.2,
          twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2.5 + 0.8,
          speedX: (Math.random() - 0.5) * 0.25,
          speedY: -Math.random() * 0.35 - 0.08, // float upwards slowly
          alpha: Math.random() * 0.45 + 0.1,
          color: Math.random() > 0.4 ? '#fcd34d' : '#c084fc',
        });
      }
    };

    initStars();

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render static/twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.twinkleSpeed;
        if (star.alpha > star.baseAlpha + 0.3 || star.alpha < star.baseAlpha - 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.fill();
      }

      // Render ambient floating stardust
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Subtle displacement near mouse
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.x -= (dx / dist) * 0.6;
          p.y -= (dy / dist) * 0.6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starfield-canvas"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
