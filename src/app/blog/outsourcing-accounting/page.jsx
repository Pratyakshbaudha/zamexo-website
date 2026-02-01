"use client";

import Image from "next/image";

export default function AccountingOutsourcingBlog() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Blog Header ===== */}
        <div className="mb-12 text-center">
          <span className="text-sm text-yellow-600 font-semibold">
            Accounting & Compliance | Blogs
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mt-3 leading-snug">
            Benefits of Outsourcing Accounting Services
          </h1>

          <div className="mt-4 text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-4">
            <span>By Zamnexo Tax Solutions</span>
            <span>Posted on January 29, 2026</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* ===== Image + Content Grid ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">

          {/* ===== Left Image ===== */}
          <div className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden bg-gray-100 shadow-xl group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="/images/blog-accounting.webp"
              alt="Benefits of Outsourcing Accounting Services"
              fill
              priority
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-700" />
          </div>

          {/* ===== Right Content ===== */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Managing accounting in-house can be expensive and time-consuming, especially for
              small businesses and startups. Outsourcing accounting services helps companies stay
              compliant while reducing operational costs and errors.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Improved Legal & Tax Compliance
            </h2>
            <p className="text-gray-700 mb-6">
              Professional accounting firms ensure timely GST returns, TDS filings, and income tax
              compliance, reducing the risk of penalties and notices from authorities.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Cost Savings & Reduced Overheads
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>No need to hire full-time accounting staff</li>
              <li>Saves office space and infrastructure costs</li>
              <li>Pay only for services you need</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Access to Expert Knowledge
            </h2>
            <p className="text-gray-700 mb-6">
              Outsourced accountants are trained in the latest tax laws, compliance rules, and
              accounting standards, ensuring accurate and up-to-date financial reporting.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Better Focus on Core Business
            </h2>
            <p className="text-gray-700 mb-6">
              When accounting is handled by experts, business owners can focus more on growth,
              sales, and customer service instead of paperwork.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Scalable as Your Business Grows
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Easy upgrade of services with business expansion</li>
              <li>Supports multi-branch or multi-GST operations</li>
              <li>Ideal for startups and SMEs</li>
            </ul>
          </div>
        </div>

        {/* ===== Full-Width CTA Section ===== */}
        <div className="bg-yellow-50 p-10 md:p-16 rounded-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">
            Outsource Your Accounting to Zamnexo
          </h3>

          <p className="text-gray-700 mb-8">
            Let our experts manage your bookkeeping, GST, TDS, and tax filings while you focus on
            growing your business stress-free.
          </p>

          <a
            href="#"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Get Accounting Support
          </a>
        </div>

      </div>
    </section>
  );
}
