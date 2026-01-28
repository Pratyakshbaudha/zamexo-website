"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
const rating = 4.5;

const data = [
  {
    name: "Paul Prabhakar",
    review:
      "My experience with Tax Spanner has been amazing and wonderful. My tax advisor was very supportive and made it very easy for us by regular communication. Team was available even during the year end time to meet the deadline.",
  },
  {
    name: "Ankur Vij",
    review:
      "Excellent customer service from the lady! My advisor was very helpful and knowledgeable. She has gone extra mile at every step and provided great support from beginning to end of the ITR filing process.",
  },
  {
    name: "Sunita Sabharwal",
    review:
      "I have been using tax services since past 10 years now. They are very efficient and prompt and also provide guidance if required. Very impressed with their services.",
  },
  {
    name: "Rohit Sharma",
    review:
      "Very professional team. Filing process was smooth and guidance was excellent. Highly recommended for tax services.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const visible = 3;

  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const getCards = () => {
    let cards = [];
    for (let i = 0; i < visible; i++) {
      cards.push(data[(index + i) % data.length]);
    }
    return cards;
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* ===== Heading ===== */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#0B1C2D]">
          What Our Clients Say
        </h2>

        {/* ===== Slider Wrapper ===== */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-6 z-20 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow text-black"
          >
            <ChevronLeft />
          </button>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-12 w-full">
            {getCards().map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-3xl shadow-xl p-10 pt-20 border text-center min-h-[360px]"
              >
                {/* Avatar */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center shadow-lg">
                    <Image
                      src="/images/avatar.png"
                      alt="user"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {t.name}
                </h3>

                {/* Stars */}
                <div className="flex justify-center mb-5">
                  {[...Array(5)].map((_, i) => {
                    if (rating >= i + 1) {
                      return (
                        <FaStar key={i} className="text-yellow-500 text-lg" />
                      );
                    } else if (rating >= i + 0.5) {
                      return (
                        <FaStarHalfAlt
                          key={i}
                          className="text-yellow-500 text-lg"
                        />
                      );
                    } else {
                      return (
                        <FaRegStar key={i} className="text-gray-300 text-lg" />
                      );
                    }
                  })}
                </div>
                {/* Review */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {t.review}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-6 z-20 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow text-black"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
