import React, { useCallback, useEffect, useState } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';

const ParticleBackground = () => {
  const { theme } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const canvasRef = useCallback((node) => {
    if (node === null) return;

    const canvas = node;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle properties
    const particleCount = 40;
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = theme === 'dark' ?
          `rgba(${30 + Math.random() * 100}, ${120 + Math.random() * 100}, ${230 + Math.random() * 25}, ${0.3 + Math.random() * 0.4})` :
          `rgba(${0 + Math.random() * 50}, ${100 + Math.random() * 100}, ${200 + Math.random() * 50}, ${0.2 + Math.random() * 0.3})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      // Connect particles with lines
      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Connect nearby particles with lines
    const connectParticles = () => {
      const maxDistance = 150;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            if (!ctx) continue;

            const opacity = 1 - (distance / maxDistance);
            const color = theme === 'dark' ?
              `rgba(100, 150, 255, ${opacity * 0.2})` :
              `rgba(0, 100, 200, ${opacity * 0.1})`;

            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  if (!mounted) return null;

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
