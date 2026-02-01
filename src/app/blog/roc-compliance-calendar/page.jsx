"use client";

import Image from "next/image";

export default function ROCBlog() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ===== Blog Header ===== */}
        <div className="mb-12 text-center">
          <span className="text-sm text-[#D4AF37] font-semibold">
            Company Compliance | Blogs
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-[#D4AF37] mt-3 leading-snug">
            ROC Compliance Calendar for Private Limited Companies
          </h1>

          <div className="mt-4 text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-3">
            <span>By Zamnexo Tax Solutions</span>
            <span>Posted on January 29, 2026</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* ===== Image + Content Grid ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">

          {/* ===== Left Image (FULLY VISIBLE) ===== */}
          <div className="relative w-full h-[260px] sm:h-[320px] md:h-[480px] rounded-3xl overflow-hidden bg-white shadow-xl">
            <Image
              src="/images/blog-roc.webp"
              alt="ROC Compliance Calendar for Private Limited Companies"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* ===== Right Content ===== */}
          <div>
            <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
              Every Private Limited Company in India must follow annual ROC compliance rules
              under the Companies Act, 2013. Missing deadlines can result in heavy penalties
              and even disqualification of directors.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3">
              What is ROC Compliance?
            </h2>
            <p className="text-gray-700 mb-6">
              ROC (Registrar of Companies) compliance means filing mandatory annual returns,
              financial statements, and event-based forms with the Ministry of Corporate Affairs (MCA).
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3">
              Yearly ROC Compliance Checklist
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>DIR-3 KYC – Director KYC (by 30th September)</li>
              <li>AOC-4 – Filing of financial statements</li>
              <li>MGT-7 / MGT-7A – Annual return filing</li>
              <li>ADT-1 – Auditor appointment</li>
              <li>Conduct Annual General Meeting (AGM)</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3">
              Important ROC Due Dates
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>AGM – On or before 30th September</li>
              <li>AOC-4 – Within 30 days of AGM</li>
              <li>MGT-7 / 7A – Within 60 days of AGM</li>
              <li>DIR-3 KYC – By 30th September every year</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3">
              Penalties for Missing ROC Deadlines
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>₹100 per day penalty for late filing</li>
              <li>Company may be marked as non-compliant</li>
              <li>Directors may face disqualification</li>
              <li>Issues in loans, tenders & investors</li>
            </ul>
          </div>
        </div>

        {/* ===== CTA Section ===== */}
        <div className="bg-yellow-50 p-8 md:p-16 rounded-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-4">
            Stay 100% ROC Compliant with Zamnexo
          </h3>

          <p className="text-gray-700 mb-8">
            We handle your complete ROC compliance, filings, and deadlines so you never
            worry about penalties or legal issues.
          </p>

          <a
            href="/services/roc-compliance"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Get Compliance Support
          </a>
        </div>

      </div>
    </section>
  );
}
