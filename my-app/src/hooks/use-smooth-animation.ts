'use client';

import { useEffect, useRef } from 'react';

interface UseSmoothAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export function useSmoothAnimation(options: UseSmoothAnimationOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    delay = 0
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Добавляем data-animate атрибут
    element.setAttribute('data-animate', 'true');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay]);

  return ref;
}

// Хук для анимации изображений
export function useImageAnimation() {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (!img) return;

    const handleLoad = () => {
      img.classList.add('loaded');
    };

    if (img.complete) {
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, []);

  return ref;
}
