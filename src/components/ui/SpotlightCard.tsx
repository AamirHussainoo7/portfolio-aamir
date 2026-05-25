import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { cn } from '../../lib/utils';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  tilt?: boolean;
  tiltAmount?: number;
  borderGlow?: boolean;
}

export const SpotlightCard = ({
  children,
  className,
  spotlightColor = 'rgba(59, 130, 246, 0.06)',
  tilt = false,
  tiltAmount = 2,
  borderGlow = true,
}: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position within card (0 to 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Very gentle spring for tilt — high damping, low stiffness
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [tiltAmount, -tiltAmount]),
    { stiffness: 80, damping: 40 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-tiltAmount, tiltAmount]),
    { stiffness: 80, damping: 40 }
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX, rotateY, transformPerspective: 1200 } : {}}
      className={cn(
        'relative rounded-2xl overflow-hidden transition-shadow duration-500',
        borderGlow && 'spotlight-border',
        className
      )}
    >
      {/* Spotlight gradient overlay — simplified for performance */}
      {isHovered && (
        <SpotlightGlow mouseX={mouseX} mouseY={mouseY} color={spotlightColor} />
      )}

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};

/** Internal component that updates spotlight position reactively */
const SpotlightGlow = ({
  mouseX,
  mouseY,
  color,
}: {
  mouseX: any;
  mouseY: any;
  color: string;
}) => {
  const xPercent = useTransform(mouseX, (v: number) => v * 100);
  const yPercent = useTransform(mouseY, (v: number) => v * 100);
  const bg = useTransform(
    [xPercent, yPercent],
    ([x, y]: number[]) =>
      `radial-gradient(450px circle at ${x}% ${y}%, ${color}, transparent 40%)`
  );

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
      style={{ background: bg }}
    />
  );
};
