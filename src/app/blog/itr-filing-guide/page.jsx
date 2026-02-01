"use client";

import Image from "next/image";

export default function ITRBlog() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Blog Header ===== */}
        <div className="mb-12 text-center">
          <span className="text-sm text-[#D4AF37] font-semibold">
            Income Tax | Blogs
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mt-3 leading-snug">
            ITR Filing for Salaried Employees: Step-by-Step Guide
          </h1>

          <div className="mt-4 text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-4">
            <span>By Zamnexo Tax Solutions</span>
            <span>Posted on January 29, 2026</span>
            <span>9 min read</span>
          </div>
        </div>

        {/* ===== Image + Content Grid ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">

          {/* ===== Left Image ===== */}
          <div className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-lg group">
            <Image
              src="/images/blog-itr1.webp"
              alt="ITR Filing for Salaried Employees"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* ===== Right Content ===== */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Filing Income Tax Returns (ITR) is mandatory for salaried individuals whose income
              exceeds the basic exemption limit. Proper filing not only ensures legal compliance
              but also helps in claiming refunds and maximizing tax-saving benefits.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Who Should File ITR?
            </h2>
            <p className="text-gray-700 mb-6">
              Salaried individuals earning above the exemption limit, those who want to claim tax
              refunds, or who have multiple income sources should file ITR every financial year.
              Filing on time also helps in future loan and visa applications.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Step-by-Step Guide for Salaried Employees
            </h2>
            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li>Collect Form 16 and salary slips from your employer.</li>
              <li>Verify income details with AIS, TIS, and Form 26AS.</li>
              <li>Choose the correct ITR form (generally ITR-1 or ITR-2).</li>
              <li>Declare all deductions under Section 80C, 80D, and others.</li>
              <li>Submit return and complete e-verification within deadline.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Common Deductions Salaried Employees Can Claim
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Section 80C – PF, LIC, ELSS, PPF investments.</li>
              <li>Section 80D – Health insurance premiums.</li>
              <li>HRA and standard deduction benefits.</li>
              <li>Home loan interest under Section 24(b).</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Benefits of Filing ITR Correctly
            </h2>
            <p className="text-gray-700 mb-6">
              Accurate ITR filing avoids penalties, ensures faster refunds, improves financial
              credibility, and keeps you compliant with income tax laws. It also creates a strong
              financial record for future requirements.
            </p>
          </div>
        </div>

        {/* ===== Full-Width CTA Section ===== */}
        <div className="bg-yellow-50 p-10 md:p-16 rounded-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">
            File Your ITR with Zamnexo Tax Solutions
          </h3>

          <p className="text-gray-700 mb-8">
            Let our tax experts handle your income tax return filing while you focus on your career.
            Accurate filing, maximum deductions, and complete peace of mind.
          </p>

          <a
            href="/services/itr-filing"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            File ITR Now
          </a>
        </div>

      </div>
    </section>
  );
}
