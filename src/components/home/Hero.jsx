"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/hero2-1.webp",
  "/images/hero3-1.webp",
  "/images/hero4-1.webp",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[90vh] bg-[#0B1C2D]/95 overflow-hidden">
      
      {/* Slides */}
      {slides.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={img}
            alt="Zamexo Hero"
            fill
            priority={i === 0}
            className="object-contain md:object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Optional Dark Overlay (Premium Look) */}
      <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === current ? "bg-[#D4AF37]" : "bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
