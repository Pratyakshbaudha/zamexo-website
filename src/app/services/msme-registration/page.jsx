"use client";

import { useState } from "react";
import {
  BadgeCheck,
  ShieldCheck,
  Building2,
  FileText,
  TrendingUp,
  Send,
  PhoneCall,
  Users,
  Landmark,
} from "lucide-react";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

export default function MSMERegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    business: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="bg-white">

{/* ================= HERO ================= */}
<ZamexoHeroBanner
  title="MSME (Udyam) Registration in India"
  subtitle="Register your business under MSME and unlock government benefits, easy business loans, tax advantages and higher business credibility. ZAMEXO provides fast, reliable and expert MSME registration services across India."
  primaryBtn="Apply for MSME Registration"
  secondaryBtn="Consult MSME Expert"
  image="/images/hero-business.gif"
/>

{/* ================= WHAT IS MSME ================= */}
<section className="py-24 px-6 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-14 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
        What is MSME (Udyam) Registration?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        MSME Registration, also known as Udyam Registration, is an official
        recognition provided by the Government of India to Micro, Small and
        Medium Enterprises. It helps businesses avail various government schemes,
        financial support, subsidies and legal protections.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        After registration, your business gets a unique Udyam Registration Number
        and an official MSME certificate which can be used for bank loans,
        tenders, subsidies and vendor registrations.
      </p>

      <p className="text-gray-600 leading-relaxed">
        The entire MSME registration process is online, paperless and free on the
        government portal, but expert assistance ensures error-free and fast
        approval.
      </p>
    </div>

    <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border">
      <h4 className="font-semibold text-xl mb-6 text-[#0B1C2D]">
        Who Can Apply for MSME?
      </h4>
      <ul className="space-y-3 text-gray-700">
        <li className="flex gap-2"><Users size={18}/> Proprietorship Firms</li>
        <li className="flex gap-2"><Users size={18}/> Partnership Firms</li>
        <li className="flex gap-2"><Users size={18}/> Limited Liability Partnership (LLP)</li>
        <li className="flex gap-2"><Building2 size={18}/> Private Limited Companies</li>
        <li className="flex gap-2"><Landmark size={18}/> Manufacturers</li>
        <li className="flex gap-2"><Landmark size={18}/> Service Providers</li>
        <li className="flex gap-2"><TrendingUp size={18}/> Traders & Startups</li>
      </ul>
    </div>
  </div>
</section>

{/* ================= BENEFITS ================= */}
<section className="bg-gray-50 py-24 px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1C2D] mb-14">
    Benefits of MSME Registration
  </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
    {[
      ["Easy Business Loans", "Banks and NBFCs provide collateral-free and low interest loans to MSME registered businesses.", TrendingUp],
      ["Government Subsidies", "Eligible for subsidies on electricity, patent, trademark and ISO certification.", BadgeCheck],
      ["Lower Interest Rates", "Special interest rate concessions on business loans and overdrafts.", ShieldCheck],
      ["Priority in Government Tenders", "Get preference in central and state government procurement.", Building2],
      ["Protection Against Delayed Payments", "Legal protection under MSME Act for delayed payments from buyers.", FileText],
      ["Higher Business Credibility", "MSME certificate increases trust with banks, vendors and clients.", ShieldCheck],
    ].map(([t, d, I], i) => (
      <div key={i} className="bg-white p-8 rounded-2xl border shadow hover:shadow-xl transition">
        <I className="text-[#D4AF37] mb-4" size={34} />
        <h4 className="font-semibold text-lg text-[#0B1C2D] mb-2">{t}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
      </div>
    ))}
  </div>
</section>

{/* ================= DOCUMENTS ================= */}
<section className="py-24 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1C2D] mb-12">
    Documents Required for MSME Registration
  </h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {[
      "Aadhaar Card of Proprietor / Partner / Director",
      "PAN Card of Individual and Business",
      "Business Address Proof",
      "Bank Account Details of Business",
      "Type of Business Activity (Manufacturing / Service)",
      "Investment and Turnover Details",
    ].map((d, i) => (
      <div key={i} className="bg-gray-50 border p-5 rounded-xl flex gap-3 items-start">
        <BadgeCheck className="text-[#D4AF37] mt-1" size={18} />
        <span className="text-gray-700">{d}</span>
      </div>
    ))}
  </div>
</section>

{/* ================= PROCESS ================= */}
<section className="bg-[#0B1C2D] text-white py-24 px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
    MSME Registration Process with ZAMEXO
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
    {[
      ["Submit Details", "Share your business details through our form or WhatsApp."],
      ["Expert Verification", "Our experts verify data as per Udyam guidelines."],
      ["Online Filing", "We file your MSME application on government portal."],
      ["Certificate Delivery", "Receive your Udyam certificate directly on email."],
    ].map(([t, d], i) => (
      <div key={i} className="bg-white/10 p-7 rounded-xl">
        <p className="font-bold mb-2 text-lg">Step {i + 1}</p>
        <p className="font-semibold mb-1">{t}</p>
        <p className="text-sm text-gray-300">{d}</p>
      </div>
    ))}
  </div>
</section>

{/* ================= LEAD FORM ================= */}
<section className="max-w-4xl mx-auto py-28 px-6">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-3">
      Apply for MSME Registration Now
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Fill in your details and our MSME experts will contact you shortly for smooth
      and hassle-free registration.
    </p>
  </div>

  <form className="bg-white p-10 md:p-12 rounded-2xl shadow-xl border grid gap-6">
    <div>
      <label className="text-sm font-medium">Full Name</label>
      <input name="name" onChange={handleChange} placeholder="Enter your full name"
        className="w-full border mt-1 p-3 rounded focus:ring-2 focus:ring-[#D4AF37]/50"/>
    </div>

    <div>
      <label className="text-sm font-medium">Mobile Number</label>
      <input name="phone" onChange={handleChange} placeholder="Enter your mobile number"
        className="w-full border mt-1 p-3 rounded focus:ring-2 focus:ring-[#D4AF37]/50"/>
    </div>

    <div>
      <label className="text-sm font-medium">Email Address</label>
      <input name="email" onChange={handleChange} placeholder="Enter your email"
        className="w-full border mt-1 p-3 rounded focus:ring-2 focus:ring-[#D4AF37]/50"/>
    </div>

    <div>
      <label className="text-sm font-medium">City</label>
      <input name="city" onChange={handleChange} placeholder="Your city"
        className="w-full border mt-1 p-3 rounded focus:ring-2 focus:ring-[#D4AF37]/50"/>
    </div>

    <div>
      <label className="text-sm font-medium">Business Type</label>
      <select name="business" onChange={handleChange}
        className="w-full border mt-1 p-3 rounded focus:ring-2 focus:ring-[#D4AF37]/50">
        <option>Select Business Type</option>
        <option>Proprietorship</option>
        <option>Partnership</option>
        <option>LLP</option>
        <option>Private Limited</option>
      </select>
    </div>

    <button className="bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold flex justify-center gap-2 items-center">
      <Send size={18}/> Submit Application
    </button>

    <p className="text-xs text-center text-gray-500">
      🔒 Your information is safe & confidential.
    </p>
  </form>
</section>

{/* ================= CTA ================= */}
<section className="bg-gray-900 text-white py-20 text-center px-6">
  <h3 className="text-3xl font-bold mb-4">
    Start Your MSME Journey with ZAMEXO Today
  </h3>
  <p className="text-gray-400 mb-6">
    Get registered, get benefits and grow your business with government support.
  </p>
  <a
    href="/contact"
    className="bg-[#D4AF37] text-black px-8 py-3 rounded-xl font-semibold inline-flex gap-2"
  >
    <PhoneCall size={18}/> Talk to MSME Expert
  </a>
</section>

</main>
);
}
