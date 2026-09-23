'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // We'll keep the loader active for a minimum of 800ms so it doesn't flash too quickly
    const minLoadTime = 800;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsFadingOut(true);
        // Match the fade-out duration in CSS (500ms) before unmounting
        setTimeout(() => setIsLoading(false), 500);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      // Fallback timeout just in case window.load takes too long (e.g. 3s max)
      const fallbackTimeout = setTimeout(handleLoad, 3000);
      
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(fallbackTimeout);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        <Image
          src="/logo-white.png"
          alt="DU-Astral"
          width={240}
          height={72}
          className="h-12 w-auto object-contain mb-8 animate-pulse"
          priority
        />
        <div className="w-48 h-[2px] bg-white/10 overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-[#F8991C] animate-loading" />
        </div>
      </div>
    </div>
  );
}
