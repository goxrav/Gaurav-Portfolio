import { useEffect, useRef } from 'react';

export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create floating particles
    const particles: HTMLDivElement[] = [];
    const container = mountRef.current;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = `absolute rounded-full floating opacity-60`;
      particle.style.width = `${Math.random() * 4 + 1}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 3}s`;
      
      // Random colors between highlight and nebula
      const colors = ['bg-space-highlight', 'bg-space-nebula', 'bg-white'];
      particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      
      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      data-testid="three-scene"
    />
  );
}
