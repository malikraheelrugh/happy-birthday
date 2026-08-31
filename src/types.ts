export interface WishItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'sparkles' | 'compass' | 'feather' | 'sun' | 'stars';
  accentColor: string;
}

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
  color: string;
}
