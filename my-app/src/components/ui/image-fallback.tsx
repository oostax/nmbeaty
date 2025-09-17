'use client';

import { useState } from 'react';

interface ImageFallbackProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string;
  onError?: () => void;
}

export function ImageFallback({ 
  src, 
  alt, 
  className = '', 
  style,
  fallbackSrc = '/placeholder.png',
  onError
}: ImageFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      console.warn(`Failed to load image: ${currentSrc}, trying fallback`);
      setCurrentSrc(fallbackSrc);
      setHasError(true);
      onError?.();
    } else if (hasError) {
      console.error(`Both original and fallback images failed to load`);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      loading="lazy"
    />
  );
}
