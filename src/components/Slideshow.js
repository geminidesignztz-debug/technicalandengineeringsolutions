'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/hp1.webp',
    '/hp2.webp',
    '/hp3.webp',
    '/homepage3.webp',
    '/homepage6.webp',
    '/homepage7.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => 
        current === slides.length - 1 ? 0 : current + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen">
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
        </div>
      ))}
    </div>
  );
}
