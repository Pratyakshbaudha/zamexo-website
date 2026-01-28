"use client";

import { useState } from "react";
import {
  BadgeCheck,
  ShieldCheck,
  FileText,
  TrendingUp,
  Building2,
  Send,
  PhoneCall,
  Star,
} from "lucide-react";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

export default function TrademarkRegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    brand: "",
  });

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <ZamexoHeroBanner
        title="Trademark Registration in India"
        subtitle="Protect your brand name, logo & identity legally with fast and affordable Trademark Registration by ZAMEXO experts."
        primaryBtn="Apply for Trademark"
        secondaryBtn="Talk to Expert"
        image="/images/hero-trademark.gif"
      />

      {/* ================= WHAT IS TRADEMARK ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
              What is Trademark Registration?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A Trademark is a unique identity of your business such as brand name,
              logo, slogan, symbol, or design that distinguishes your products or
              services from others in the market.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Trademark registration gives you exclusive legal rights over your brand
              and prevents others from copying or misusing your business identity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Once registered, you can use the ® symbol and enjoy nationwide brand
              protection under the Trademark Act, 1999.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow border">
            <h4 className="font-semibold mb-4 text-[#0B1C2D]">
              Why Trademark is Important?
            </h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>✔ Protects your brand legally</li>
              <li>✔ Stops competitors from copying your name or logo</li>
              <li>✔ Builds trust with customers</li>
              <li>✔ Helps in business expansion & franchising</li>
              <li>✔ Creates valuable intellectual property</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-12">
          Benefits of Trademark Registration
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            ["Exclusive Brand Rights", ShieldCheck],
            ["Legal Protection", FileText],
            ["Brand Recognition", Star],
            ["Business Expansion", TrendingUp],
            ["Franchise Opportunities", Building2],
            ["Asset Creation", BadgeCheck],
          ].map(([t, I], i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border shadow hover:shadow-xl transition"
            >
              <I className="text-[#D4AF37] mb-4" size={32} />
              <h4 className="font-semibold text-lg text-[#0B1C2D] mb-2">{t}</h4>
              <p className="text-gray-600 text-sm">
                Registered trademarks give you strong legal ownership and help in
                protecting your business reputation and goodwill.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO CAN APPLY ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-10">
    Who Can Apply for Trademark?
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      "Startups & New Businesses",
      "Proprietorship Firms",
      "Partnership Firms",
      "LLP Companies",
      "Private Limited Companies",
      "Individual Entrepreneurs",
    ].map((d, i) => (
      <div
        key={i}
        className="bg-[#FDF7E3] border-2 border-[#D4AF37] p-6 rounded-xl text-center font-semibold text-[#0B1C2D] shadow-md hover:shadow-xl transition"
      >
        {d}
      </div>
    ))}
  </div>
</section>


      {/* ================= DOCUMENTS ================= */}
      <section className="bg-gray-50 py-20 px-6">
  <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-10">
    Documents Required for Trademark Registration
  </h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {[
      "Applicant Aadhaar & PAN Card",
      "Brand Name / Logo",
      "Business Proof (GST / MSME / Incorporation)",
      "Address Proof",
      "Signed Authorization Letter",
    ].map((d, i) => (
      <div
        key={i}
        className="bg-[#FDF7E3] border-2 border-[#D4AF37] p-5 rounded-xl flex gap-3 items-center shadow-md hover:shadow-xl transition"
      >
        <BadgeCheck className="text-[#D4AF37]" size={20} />
        <span className="text-[#0B1C2D] font-semibold text-sm md:text-base">{d}</span>
      </div>
    ))}
  </div>
</section>


      {/* ================= PROCESS ================= */}
      <section className="bg-[#0B1C2D] text-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trademark Registration Process with ZAMEXO
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center">
          {[
            "Brand Details Submission",
            "Trademark Search",
            "Application Filing",
            "Government Examination",
            "Certificate Issued",
          ].map((s, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl">
              <p className="font-semibold mb-2">Step {i + 1}</p>
              <p className="text-sm text-gray-300">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY ZAMEXO ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-10">
          Why Choose ZAMEXO for Trademark Registration?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Expert Legal Support",
            "Affordable Pricing",
            "Fast Application Filing",
            "Complete Documentation Support",
            "Regular Status Updates",
            "End-to-End Assistance",
          ].map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <BadgeCheck className="text-[#D4AF37] mb-3" />
              <p className="font-semibold text-[#0B1C2D]">{t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LEAD FORM ================= */}
      <section className="max-w-4xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0B1C2D]">
          Apply for Trademark Registration
        </h2>

        <form className="bg-white p-10 rounded-2xl shadow-xl border grid gap-5">
          <input placeholder="Full Name" className="border p-3 rounded" />
          <input placeholder="Mobile Number" className="border p-3 rounded" />
          <input placeholder="Email Address" className="border p-3 rounded" />
          <input placeholder="City" className="border p-3 rounded" />
          <input placeholder="Brand Name / Logo" className="border p-3 rounded" />

          <button className="bg-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
            <Send size={18} /> Submit Application
          </button>

          <p className="text-xs text-center text-gray-500">
            🔒 Your information is safe & confidential.
          </p>
        </form>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Protect Your Brand Before Someone Else Uses It!
        </h3>
        <p className="text-gray-400 mb-6">
          Get expert help from ZAMEXO and secure your business identity today.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-black px-8 py-3 rounded-xl font-semibold inline-flex gap-2"
        >
          <PhoneCall size={18} /> Talk to Expert
        </a>
      </section>

    </main>
  );
}
