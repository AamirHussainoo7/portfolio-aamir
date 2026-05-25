/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  symbol: string;
  rotation: number;
  rotationSpeed: number;
  scale: number;
  color: string;
}

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

const DEV_SYMBOLS = ['</>', '{}', '//', '=>', '( )', '&&', '||', '!=', '++', '**', '[]', '::'];
const ACCENT_COLORS = ['#3b82f6', '#22d3ee', '#818cf8', '#a78bfa', '#60a5fa', '#38bdf8'];

export function DevCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<Particle[]>([]);
  const trailRef = useRef<TrailPoint[]>([]);
  const rafRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const isHoveringInteractive = useRef(false);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastMouseRef = useRef({ x: -100, y: -100 });

  const spawnParticles = useCallback((x: number, y: number) => {
    const count = 6 + Math.floor(Math.random() * 4);
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 1.5 + Math.random() * 3;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 40 + Math.random() * 30,
        symbol: DEV_SYMBOLS[Math.floor(Math.random() * DEV_SYMBOLS.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        scale: 0.6 + Math.random() * 0.5,
        color: ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)],
      });
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = (e: MouseEvent) => {
      spawnParticles(e.clientX, e.clientY);
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
    };

    // Detect interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-interactive]');
      isHoveringInteractive.current = !!interactive;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseover', onMouseOver);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Calculate velocity
      velocityRef.current = {
        x: mx - lastMouseRef.current.x,
        y: my - lastMouseRef.current.y,
      };
      lastMouseRef.current = { x: mx, y: my };
      const speed = Math.sqrt(velocityRef.current.x ** 2 + velocityRef.current.y ** 2);

      // Smooth ring follow with spring physics
      const springFactor = 0.12;
      ringRef.current.x += (mx - ringRef.current.x) * springFactor;
      ringRef.current.y += (my - ringRef.current.y) * springFactor;

      // Add trail points when moving
      if (speed > 1.5) {
        trailRef.current.push({ x: mx, y: my, age: 0 });
        if (trailRef.current.length > 50) {
          trailRef.current.shift();
        }
      }

      // Update & draw trail
      trailRef.current = trailRef.current.filter((p) => {
        p.age += 1;
        return p.age < 25;
      });

      if (trailRef.current.length > 2 && isVisibleRef.current) {
        ctx.beginPath();
        ctx.moveTo(trailRef.current[0].x, trailRef.current[0].y);
        for (let i = 1; i < trailRef.current.length; i++) {
          const p = trailRef.current[i];
          const prev = trailRef.current[i - 1];
          const cpx = (prev.x + p.x) / 2;
          const cpy = (prev.y + p.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
        }
        const gradient = ctx.createLinearGradient(
          trailRef.current[0].x,
          trailRef.current[0].y,
          trailRef.current[trailRef.current.length - 1].x,
          trailRef.current[trailRef.current.length - 1].y
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.15)');
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0.3)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      if (isVisibleRef.current) {
        const isHovering = isHoveringInteractive.current;
        const ringRadius = isHovering ? 24 : 18;
        const dotRadius = isHovering ? 0 : 3;

        // Outer ring with glow
        const ringDist = Math.sqrt(
          (ringRef.current.x - mx) ** 2 + (ringRef.current.y - my) ** 2
        );
        const ringStretch = Math.min(ringDist * 0.02, 0.3);

        ctx.save();
        ctx.translate(ringRef.current.x, ringRef.current.y);
        const angle = Math.atan2(
          my - ringRef.current.y,
          mx - ringRef.current.x
        );
        ctx.rotate(angle);
        ctx.scale(1 + ringStretch, 1 - ringStretch * 0.5);

        // Ring glow
        ctx.shadowColor = isHovering ? '#22d3ee' : '#3b82f6';
        ctx.shadowBlur = isHovering ? 20 : 8;

        ctx.beginPath();
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        ctx.strokeStyle = isHovering
          ? 'rgba(34, 211, 238, 0.6)'
          : 'rgba(59, 130, 246, 0.35)';
        ctx.lineWidth = isHovering ? 2 : 1.5;
        ctx.stroke();
        ctx.restore();

        // Inner dot
        if (dotRadius > 0) {
          ctx.save();
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(mx, my, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = '#f0f0f5';
          ctx.fill();
          ctx.restore();
        }

        // Hovering crosshair
        if (isHovering) {
          ctx.save();
          ctx.globalAlpha = 0.5;
          ctx.strokeStyle = '#22d3ee';
          ctx.lineWidth = 1;
          const crossSize = 6;
          // Top
          ctx.beginPath();
          ctx.moveTo(mx, my - crossSize - 4);
          ctx.lineTo(mx, my - crossSize + 2);
          ctx.stroke();
          // Bottom
          ctx.beginPath();
          ctx.moveTo(mx, my + crossSize + 4);
          ctx.lineTo(mx, my + crossSize - 2);
          ctx.stroke();
          // Left
          ctx.beginPath();
          ctx.moveTo(mx - crossSize - 4, my);
          ctx.lineTo(mx - crossSize + 2, my);
          ctx.stroke();
          // Right
          ctx.beginPath();
          ctx.moveTo(mx + crossSize + 4, my);
          ctx.lineTo(mx + crossSize - 2, my);
          ctx.stroke();
          ctx.restore();
        }
      }

      // Update & draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // gravity
        p.vx *= 0.98; // friction
        p.vy *= 0.98;
        p.rotation += p.rotationSpeed;
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) return false;

        const alpha = p.life * 0.8;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(p.scale * p.life, p.scale * p.life);
        ctx.font = '600 11px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();

        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [spawnParticles]);

  return (
    <canvas
      ref={canvasRef}
      id="dev-cursor-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
