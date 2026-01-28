"use client";

import { motion } from "framer-motion";

export default function ZamexoHeroBanner({
  title = "India’s Trusted Tax & Compliance Partner",
  subtitle = "GST, ITR, Company Registration and complete business compliance — all under one roof with ZAMEXO experts.",
  primaryBtn = "Book Free Consultation",
  secondaryBtn = "Talk to Expert",
  image = "/images/hero-tax.gif",
}) {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#0B1C2D] mb-6">
            {title}
          </h1>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/contact"
              className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition shadow-md"
            >
              {primaryBtn}
            </a>

            <a
              href="/services"
              className="border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-[#0B1C2D] hover:text-white transition"
            >
              {secondaryBtn}
            </a>
          </div>

          {/* TRUST BADGES */}
          {/* <div className="flex flex-wrap gap-8 mt-12 text-sm text-gray-600 font-medium">
            <span>✔ Pan-India Support</span>
            <span>✔ CA / CS Experts</span>
            <span>✔ 100% Compliance</span>
          </div> */}
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={image}
            alt="Zamexo Services Banner"
            className="w-full max-w-md lg:max-w-xl object-contain drop-shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
