'use client';

import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useSmoothAnimation } from '@/hooks/use-smooth-animation';

interface SmoothAnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  rootMargin?: string;
  as?: keyof JSX.IntrinsicElements;
}

const directionVariants = {
  up: { y: 20, opacity: 0 },
  down: { y: -20, opacity: 0 },
  left: { x: 20, opacity: 0 },
  right: { x: -20, opacity: 0 },
  fade: { opacity: 0 },
};

export function SmoothAnimate({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  as: Component = 'div',
  ...props
}: SmoothAnimateProps & MotionProps) {
  const ref = useSmoothAnimation({ threshold, rootMargin, delay });

  const initial = directionVariants[direction];
  const animate = { 
    x: 0, 
    y: 0, 
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)'
  };

  return (
    <motion.div
      ref={ref}
      as={Component}
      className={`animate-optimized ${className}`}
      initial={{ ...initial, scale: 0.98, filter: 'blur(2px)' }}
      whileInView={animate}
      viewport={{ once: true, margin: rootMargin }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Компонент для анимации изображений
interface SmoothImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  delay?: number;
}

export function SmoothImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  delay = 0 
}: SmoothImageProps) {
  const ref = useSmoothAnimation({ delay });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      className={`animate-optimized ${className}`}
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(2px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onLoad={(e) => {
        e.currentTarget.classList.add('loaded');
      }}
    />
  );
}
