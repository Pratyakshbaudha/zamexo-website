"use client";

import { useState } from "react";
import {
  FileCheck,
  ShieldCheck,
  CalendarClock,
  AlertTriangle,
  BadgeCheck,
  PhoneCall,
  Send,
  Building2,
} from "lucide-react";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

export default function ROCFilingsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ROC Filing Lead:", formData);
    alert("Thank you! Our ROC compliance expert will contact you shortly.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO ===== */}
      <ZamexoHeroBanner
        title="ROC Filings & Annual Compliance Made Easy"
        subtitle="Stay compliant with MCA regulations. ZAMEXO helps you with all ROC filings, annual returns, and company compliances to avoid penalties and disqualification."
        primaryBtn="Check My Compliance"
        secondaryBtn="Talk to ROC Expert"
        image="/images/hero-company.gif"
      />

      {/* ===== RISK SECTION ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">
            Missed ROC Filing? Heavy Penalties Can Apply
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 mb-12">
            Late or non-filing of ROC returns can lead to penalties of ₹100 per day
            per form, director disqualification, and even company strike-off.
            Timely compliance is critical for your business continuity.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Heavy Late Fees", "₹100 per day per form without maximum cap"],
              ["Director Disqualification", "Directors may be barred for 5 years"],
              ["Company Strike-Off", "Risk of company being removed from MCA records"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-2xl p-6"
              >
                <AlertTriangle className="text-[#D4AF37] mb-4 mx-auto" />
                <h4 className="font-semibold mb-2">{item[0]}</h4>
                <p className="text-sm text-gray-300">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
          ROC Compliance Services We Provide
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["AOC-4 Filing", "Financial statements filing with MCA"],
            ["MGT-7 / MGT-7A", "Annual return of company or OPC"],
            ["DIR-3 KYC", "Director KYC compliance"],
            ["ADT-1", "Auditor appointment filing"],
            ["INC Forms", "Change in company details filings"],
            ["Event-Based Filings", "Share allotment, resignation, address change"],
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white border rounded-2xl p-7 shadow-md hover:-translate-y-2 hover:shadow-xl hover:border-[#D4AF37] transition"
            >
              <FileCheck className="text-[#D4AF37] mb-4" size={32} />
              <h4 className="font-semibold text-lg text-[#0B1C2D] mb-2 group-hover:text-[#D4AF37]">
                {item[0]}
              </h4>
              <p className="text-gray-600 text-sm">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHO NEEDS ROC ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-12 text-center">
            Who Needs ROC Filing Services?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Private Limited Companies",
              "One Person Companies (OPC)",
              "Limited Liability Partnerships (LLP)",
              "Section 8 Companies (NGO)",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border shadow-sm text-center"
              >
                <Building2 className="mx-auto text-[#D4AF37] mb-3" />
                <p className="font-semibold text-[#0B1C2D]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
          Simple & Hassle-Free ROC Filing Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Share Details", "Upload financials and company information"],
            ["Expert Review", "CA verifies accuracy & compliance"],
            ["MCA Filing", "Forms submitted on MCA portal"],
            ["Compliance Done", "Acknowledgment & record storage"],
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
            Check Your ROC Compliance Status
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not sure whether your filings are complete? Submit details and our
            compliance expert will review your status.
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
            ["company", "Company Name"],
          ].map((f, i) => (
            <div key={i} className="grid gap-1">
              <label className="text-sm font-medium text-gray-700">{f[1]}</label>
              <input
                name={f[0]}
                onChange={handleChange}
                placeholder={`Enter your ${f[1].toLowerCase()}`}
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
              placeholder="Any specific ROC issue or pending compliance?"
              rows={4}
              className="border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2 shadow-md"
          >
            <Send size={18} /> Get Compliance Check
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            🔒 Your details are secure & confidential.
          </p>
        </form>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Stay Compliant. Avoid Penalties. Grow Confidently.
        </h3>
        <p className="mb-8 text-gray-300">
          Let ZAMEXO handle your ROC filings while you focus on your business.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Talk to ROC Expert
        </a>
      </section>
    </main>
  );
}
