"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Users,
  FileCheck2,
  BadgeCheck,
  CalendarClock,
  AlertTriangle,
  PhoneCall,
  Send,
  Building2,
  HeartPulse,
} from "lucide-react";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

export default function EarningsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Earnings Lead:", formData);
    alert("Thank you! Our expert will contact you shortly.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO ===== */}
      <ZamexoHeroBanner
        title="Maximize Your Earnings with ZAMEXO"
        subtitle="Discover the potential income opportunities with ZAMEXO’s franchise, referral, and service partner programs. Transparent, rewarding, and scalable earning models."
        primaryBtn="Get Earnings Info"
        secondaryBtn="Talk to Expert"
        image="/images/hero-earnings.gif"
      />

      {/* ===== BENEFITS STRIP ===== */}
      <section className="bg-[#0B1C2D] py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-white text-center">
          {[
            ["High Income Potential", ShieldCheck],
            ["Recurring Revenue", HeartPulse],
            ["Incentives & Bonuses", FileCheck2],
            ["Growth Opportunities", CalendarClock],
          ].map(([title, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon className="text-[#D4AF37]" size={28} />
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY EARNINGS WITH ZAMEXO ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
              Why Partnering with ZAMEXO is Profitable
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ZAMEXO provides multiple earning streams for franchisees, referral partners, and service associates. You can earn recurring revenue through tax filings, compliance services, and advisory support while leveraging our brand and operational support.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "Commission on GST & ITR filings",
                "Recurring revenue from payroll & compliance services",
                "Referral incentives for bringing new clients",
                "Performance-based bonuses and rewards",
                "Low investment with high ROI opportunities",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <BadgeCheck className="text-[#D4AF37] mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Creative Card */}
          <div className="bg-gradient-to-br from-[#0B1C2D] to-blue-900 text-white rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">
              Earnings Potential Snapshot
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li>💰 Franchise Partner: ₹50,000 – ₹3,00,000/month</li>
              <li>💰 Referral Partner: ₹5,000 – ₹50,000/month</li>
              <li>💰 Service Associate: ₹20,000 – ₹1,00,000/month</li>
              <li>💰 Incentives: Performance-based monthly bonuses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== EARNING MODELS ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14">
            ZAMEXO Earning Models
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              [
                "Franchise Partner",
                "Run your own ZAMEXO center, provide GST, ITR, Payroll, PF/ESIC services, and earn recurring revenue.",
              ],
              [
                "Referral Partner",
                "Refer clients for ZAMEXO services and earn commission on each transaction.",
              ],
              [
                "Service Associate",
                "Join as a service associate to provide bookkeeping, payroll, and compliance services and earn based on client handling.",
              ],
            ].map((model, i) => (
              <div
                key={i}
                className="group bg-white border rounded-2xl p-8 shadow hover:-translate-y-2 hover:shadow-xl hover:border-[#D4AF37] transition"
              >
                <h4 className="font-semibold text-xl mb-2 text-[#0B1C2D] group-hover:text-[#D4AF37]">
                  {model[0]}
                </h4>
                <p className="text-gray-600">{model[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EARNING PROCESS ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
          How You Earn with ZAMEXO
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Join ZAMEXO Program", "Choose franchise, referral, or service model."],
            ["Start Operations/Referrals", "Offer services or refer clients."],
            ["Generate Revenue", "Earn commission, fees, or recurring payments."],
            ["Track Performance", "Monitor growth, bonuses & incentives."],
          ].map((step, i) => (
            <div
              key={i}
              className="relative bg-white p-6 rounded-2xl border shadow"
            >
              <span className="absolute -top-4 left-6 bg-[#D4AF37] text-[#0B1C2D] px-3 py-1 rounded-full text-sm font-bold">
                Step {i + 1}
              </span>

              <h4 className="font-semibold text-lg mt-4 mb-2 text-[#0B1C2D]">
                {step[0]}
              </h4>
              <p className="text-gray-600 text-sm">{step[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== LEAD FORM ===== */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-3">
            Get Detailed Earnings Info
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Submit your details and our expert team will guide you on potential earnings and growth opportunities.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-xl grid gap-5"
        >
          {[
            ["name", "Full Name"],
            ["email", "Email Address"],
            ["phone", "Mobile Number"],
            ["city", "City"],
          ].map((f, i) => (
            <div key={i} className="grid gap-1">
              <label className="text-sm font-medium text-gray-700">{f[1]}</label>
              <input
                name={f[0]}
                onChange={handleChange}
                placeholder={`Enter ${f[1].toLowerCase()}`}
                className="border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none"
                required
              />
            </div>
          ))}

          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">
              Message (Optional)
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Any specific earnings or franchise query?"
              rows={4}
              className="border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2 shadow-md"
          >
            <Send size={18} /> Get Earnings Info
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            🔒 Your data is fully confidential and secure.
          </p>
        </form>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Start Earning with ZAMEXO Today
        </h3>
        <p className="mb-8 text-gray-300">
          Join ZAMEXO and explore high-income potential through franchise, referral, and service models.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Talk to Expert
        </a>
      </section>
    </main>
  );
}
