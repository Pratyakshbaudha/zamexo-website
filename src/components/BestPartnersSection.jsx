"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BestPartnersSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Tags */}
          <div className="flex gap-4 mb-6">
            <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              TEAM
            </span>
            <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
              CUSTOMER
            </span>
            <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
              COMMUNITY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-[#0B1C2D] mb-5 leading-snug">
            We Work With the Best Partners
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            While we are at the forefront of and specialize in design-build,
            we are very familiar with a number of delivery methods and are
            confident we can find the process that will best help you meet your
            goals.
          </p>

          {/* CTA */}
          <button className="bg-[#0B1C2D] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#132f4c] transition">
            Learn More
          </button>
        </motion.div>

        {/* ===== RIGHT IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/images/partners.jpg"  // 👉 image public/images/partners.jpg me rakho
            alt="Our Partners"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
