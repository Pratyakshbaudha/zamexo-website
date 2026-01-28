// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const slides = [
//   {
//     title: "One Nation, One Tax Desk",
//     subtitle: "India’s Trusted Tax & Compliance Partner",
//     desc: "GST, ITR, Company Registration, Accounting & Legal Support under one roof.",
//     image: "/images/hero/hero-1.jpg",
//     cta1: "Book Consultation",
//     cta2: "View Services",
//   },
//   {
//     title: "Complete Business Compliance Solutions",
//     subtitle: "For Startups & Growing Businesses",
//     desc: "From company formation to ROC, payroll and virtual CFO services.",
//     image: "/images/hero/hero-2.jpg",
//     cta1: "Start Your Business",
//     cta2: "Talk to Expert",
//   },
//   {
//     title: "Join ZAMEXO Franchise Network",
//     subtitle: "Build Your Own Tax Consulting Business",
//     desc: "Low investment, high earning potential with complete training & support.",
//     image: "/images/hero/hero-3.jpg",
//     cta1: "Become a Partner",
//     cta2: "Know More",
//   },
// ];

// export default function HeroSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-[90vh] w-full overflow-hidden">

//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           {/* Background Image */}
//           <Image
//             src={slide.image}
//             alt={slide.title}
//             fill
//             priority={index === 0}
//             className="object-cover"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0B1C2D]/90 to-[#0B1C2D]/40" />

//           {/* Content */}
//           <div className="relative z-20 h-full flex items-center">
//             <div className="max-w-7xl mx-auto px-4 text-white">
//               <p className="text-[#D4AF37] text-sm md:text-base mb-3 tracking-wide">
//                 {slide.subtitle}
//               </p>

//               <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
//                 {slide.title}
//               </h1>

//               <p className="mt-4 max-w-2xl text-gray-200">
//                 {slide.desc}
//               </p>

//               <div className="mt-8 flex flex-wrap gap-4">
//                 <Link
//                   href="/contact"
//                   className="bg-[#D4AF37] text-[#0B1C2D] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
//                 >
//                   {slide.cta1}
//                 </Link>

//                 <Link
//                   href="/services"
//                   className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0B1C2D] transition"
//                 >
//                   {slide.cta2}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* DOT NAVIGATION */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-3 w-3 rounded-full transition ${
//               i === current ? "bg-[#D4AF37]" : "bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
