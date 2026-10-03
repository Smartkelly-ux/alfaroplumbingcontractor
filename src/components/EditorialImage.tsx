import { useState, useEffect } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  onImageLoaded?: () => void;
  aspectRatioClass?: string;
}

export default function EditorialImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  onImageLoaded,
  aspectRatioClass = 'aspect-[16/9]',
}: EditorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // If the image is cached, it might already be complete
    const img = new Image();
    img.src = src;
    if (img.complete) {
      setIsLoaded(true);
      if (onImageLoaded) onImageLoaded();
    }
  }, [src, onImageLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    if (onImageLoaded) onImageLoaded();
  };

  return (
    <div
      className={`relative overflow-hidden bg-[#DDE2DC] ${aspectRatioClass} ${containerClassName}`}
    >
      {/* Editorial placeholder shimmer backing */}
      <div
        className={`absolute inset-0 bg-[#DDE2DC] transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        aria-hidden="true"
      />

      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        referrerPolicy="no-referrer"
        onLoad={handleLoad}
        className={`w-full h-full object-cover transition-[opacity,filter,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,filter,transform] ${
          isLoaded
            ? 'opacity-100 blur-0 scale-100'
            : 'opacity-0 blur-[6px] scale-[1.015]'
        } ${className}`}
      />
    </div>
  );
}
