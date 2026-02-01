"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StartupTaxBlog() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Blog Header ===== */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-[#D4AF37] font-semibold">Startup India | Tax Planning</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mt-3 leading-snug">
            How Startups Can Save Tax Legally in India
          </h1>
          <div className="mt-4 text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-4">
            <span>By Zamnexo Tax Solutions</span>
            <span>Posted on January 29, 2026</span>
            <span>9 min read</span>
          </div>
        </motion.div>

        {/* ===== Image + Content Grid ===== */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-start mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* ===== Left Image ===== */}
          <div className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden bg-gray-100 shadow-xl group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="/images/blog-startup-tax.jpg" // 👉 startup related image
              alt="How Startups Can Save Tax Legally in India"
              fill
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-700" />
          </div>

          {/* ===== Right Content ===== */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Startups in India can legally save a significant amount of tax by using
              government schemes, proper company structuring, and startup-specific exemptions.
              Smart tax planning helps improve cash flow and business survival.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              DPIIT Recognition Benefits
            </h2>
            <p className="text-gray-700 mb-6">
              Startups recognized by DPIIT can access multiple tax and compliance benefits such as
              income tax exemption, easier funding approvals, and government schemes.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Section 80-IAC Tax Exemption
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>100% tax exemption on profits for any 3 consecutive years</li>
              <li>Available within first 10 years of incorporation</li>
              <li>Only for DPIIT-recognized startups approved by Inter-Ministerial Board</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Angel Tax Exemption
            </h2>
            <p className="text-gray-700 mb-6">
              DPIIT-recognized startups can get exemption from Angel Tax under Section 56,
              protecting investments received from being taxed as income.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Smart Business Structuring Tips
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Choose Private Limited structure for funding and tax benefits</li>
              <li>Separate founder salary and profit withdrawals</li>
              <li>Claim business expenses correctly</li>
              <li>Maintain proper accounting and compliance</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Other Legal Tax Saving Options
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Carry forward of business losses</li>
              <li>R&D deductions if applicable</li>
              <li>GST input tax credit optimization</li>
            </ul>
          </div>
        </motion.div>

        {/* ===== Full-Width CTA Section ===== */}
        <motion.div
          className="bg-yellow-50 p-10 md:p-16 rounded-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">
            Save More Tax for Your Startup with Zamnexo
          </h3>
          <p className="text-gray-700 mb-8">
            From DPIIT recognition to income tax exemption and compliance — our experts help
            startups save tax legally and grow faster.
          </p>
          <a
            href="/services/startup-tax-planning"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Talk to Startup Expert
          </a>
        </motion.div>

      </div>
    </section>
  );
}
