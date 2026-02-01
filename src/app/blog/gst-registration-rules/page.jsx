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
            When Should You Register for GST?
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
          <div className="relative w-full h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-lg group">
            <Image
              src="/images/blog-gst.webp"   // 👉 yahan GST related image rakho
              alt="When Should You Register for GST"
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* ===== Right Content ===== */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              GST registration is mandatory for businesses once they cross the prescribed
              turnover limit or fall under special categories. Timely registration helps you
              stay compliant and avoid heavy penalties.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Turnover Limits for GST Registration
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>₹40 lakh – For businesses supplying goods (most states)</li>
              <li>₹20 lakh – For service providers</li>
              <li>₹10 lakh – For special category states</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Special Cases Where GST is Mandatory
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Inter-state supply of goods or services</li>
              <li>Selling through e-commerce platforms like Amazon, Flipkart, Meesho</li>
              <li>Working as an agent or distributor</li>
              <li>Providing online services</li>
              <li>Liable under Reverse Charge Mechanism (RCM)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              When Should You Apply for GST?
            </h2>
            <p className="text-gray-700 mb-6">
              You must apply for GST registration within <strong>30 days</strong> from the date
              your business becomes liable, either by crossing turnover limit or due to special cases.
            </p>

            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Penalty for Delayed GST Registration
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>10% of tax due or minimum ₹10,000 as penalty</li>
              <li>100% penalty in case of intentional fraud</li>
              <li>No Input Tax Credit (ITC) for past purchases</li>
            </ul>
          </div>
        </div>

        {/* ===== Full-Width CTA Section ===== */}
        <div className="bg-yellow-50 p-10 md:p-16 rounded-3xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">
            Get Your GST Registration Done with Zamnexo
          </h3>
          <p className="text-gray-700 mb-8">
            Our experts help you with fast and hassle-free GST registration, proper documentation,
            and complete compliance support.
          </p>
          <a
            href="/services/gst-registration"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Apply for GST Now
          </a>
        </div>

      </div>
    </section>
  );
}
