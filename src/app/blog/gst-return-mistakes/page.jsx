"use client";

import Image from "next/image";

export default function GSTBlog() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Blog Header ===== */}
        <div className="mb-12 text-center">
          <span className="text-sm text-[#D4AF37] font-semibold">GST Updates | Blogs</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mt-3 leading-snug">
            GST Return Filing: Common Mistakes Small Businesses Must Avoid
          </h1>
          <div className="mt-4 text-gray-500 text-sm flex flex-col md:flex-row items-center justify-center gap-4">
            <span>By Admin</span>
            <span>Posted on January 29, 2026</span>
            <span>8 min read</span>
          </div>
        </div>

        {/* ===== Image + Content Grid ===== */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
          {/* ===== Left Image ===== */}
          <div className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/blog-gst.webp"
              alt="GST Filing Mistakes"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ===== Right Content ===== */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Many small businesses face penalties due to minor GST filing mistakes. 
              Understanding the common pitfalls and learning how to avoid them is crucial 
              for smooth compliance and hassle-free GST return submission.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Why Small Businesses Struggle with GST Returns</h2>
            <p className="text-gray-700 mb-6">
              GST compliance can be challenging for small businesses due to manual errors, 
              lack of proper documentation, and misunderstanding of tax rules. Simple mistakes 
              such as missing invoices or incorrect HSN/SAC codes can lead to fines.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Common GST Return Filing Mistakes to Avoid</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Incorrect GSTIN or mismatched details in invoices.</li>
              <li>Late filing of returns beyond deadlines.</li>
              <li>Errors in tax calculation or wrong classification of goods/services.</li>
              <li>Not reconciling input tax credit (ITC) properly.</li>
              <li>Failure to maintain proper records and supporting documents.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Step-by-Step Tips for Accurate GST Filing</h2>
            <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
              <li>Always verify your GSTIN and GST details before filing.</li>
              <li>Use accounting software or ERP systems to track invoices and ITC.</li>
              <li>File returns well before deadlines to avoid penalties.</li>
              <li>Cross-check your tax calculations and ensure HSN/SAC codes are correct.</li>
              <li>Maintain organized records for audits and GST compliance verification.</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">Benefits of Proper GST Compliance</h2>
            <p className="text-gray-700 mb-6">
              By avoiding common mistakes, small businesses can prevent penalties, streamline financial processes, 
              improve credibility with tax authorities, and ensure smooth cash flow management.
            </p>
          </div>
        </div>

        {/* ===== Full-Width CTA Section ===== */}
        <div className="bg-yellow-50 p-10 md:p-16 rounded-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">
            Optimize Your GST Compliance
          </h3>
          <p className="text-gray-700 mb-8">
            Explore tools, tips, and calculators to help small businesses file GST accurately 
            and efficiently. Streamline your tax processes and avoid penalties with ease.
          </p>
          <a
            href="#"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            View Tools & Calculators
          </a>
        </div>

      </div>
    </section>
  );
}
