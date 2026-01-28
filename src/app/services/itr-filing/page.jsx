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

export default function ITRFilingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    income: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ITR Filing Lead:", formData);
    alert("Thank you! Our tax expert will contact you shortly.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO ===== */}
      <ZamexoHeroBanner
        title="ITR Filing & Tax Compliance Services"
        subtitle="File your Income Tax Returns hassle-free. ZAMEXO provides expert ITR filing, pre-filled forms, tax saving guidance, and full compliance support."
        primaryBtn="File Your ITR Now"
        secondaryBtn="Talk to Tax Expert"
        image="/images/hero-tax.gif"
      />

      {/* ===== BENEFITS STRIP ===== */}
      <section className="bg-[#0B1C2D] py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-white text-center">
          {[
            ["Accurate Filing", ShieldCheck],
            ["Maximum Tax Savings", HeartPulse],
            ["Penalty Free", AlertTriangle],
            ["Easy Online Process", FileCheck2],
          ].map(([title, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon className="text-[#D4AF37]" size={28} />
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY ITR FILING IMPORTANT ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
              Why Timely ITR Filing is Important?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Filing your Income Tax Returns on time ensures compliance with Indian tax laws, avoids penalties, and helps in planning your taxes efficiently.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "Mandatory if income exceeds ₹2.5 lakh",
                "Claim tax refunds and deductions",
                "Prevents penalties and interest on late filing",
                "Required for loans, visa, and financial documentation",
                "Maintain clean financial records for the future",
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
              Risks of Non-Filing
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li>⚠ Penalties & interest on late filing</li>
              <li>⚠ Legal scrutiny by Income Tax Department</li>
              <li>⚠ Delay in refund processing</li>
              <li>⚠ Difficulty in availing loans or financial services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
            ITR Filing Services Offered by ZAMEXO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Assisted ITR Filing", "Form 16 & salary-based filing"],
              ["Pre-filled Returns", "Quick filing using pre-filled forms"],
              ["Tax Saving Guidance", "Maximize deductions and exemptions"],
              ["Audit Support", "Expert help for tax audits"],
              ["Filing for Professionals", "ITR for freelancers & consultants"],
              ["Foreign Income Filing", "DTAA & foreign tax relief support"],
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white border rounded-2xl p-8 shadow hover:-translate-y-2 hover:shadow-xl hover:border-[#D4AF37] transition"
              >
                <Users className="text-[#D4AF37] mb-4" size={32} />
                <h4 className="font-semibold text-lg mb-2 text-[#0B1C2D] group-hover:text-[#D4AF37]">
                  {item[0]}
                </h4>
                <p className="text-gray-600 text-sm">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
          Simple ITR Filing Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Share Details", "PAN, income details & documents"],
            ["Document Verification", "Reviewed by tax expert"],
            ["Return Preparation", "Draft & pre-filled ITR"],
            ["Submission & Confirmation", "Filed with IT department"],
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

      {/* ===== WHO SHOULD FILE ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-10">
            Who Should File ITR?
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Salaried Individuals",
              "Self-employed Professionals",
              "Business Owners",
              "Freelancers",
              "NRIs & Foreign Income Earners",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border shadow-sm"
              >
                <Building2 className="mx-auto text-[#D4AF37] mb-3" />
                <p className="font-semibold text-[#0B1C2D]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEAD FORM ===== */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-3">
            Get Expert ITR Filing Support Now
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Submit your details and our tax experts will file your ITR efficiently and safely.
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
            ["pan", "PAN Number"],
            ["income", "Annual Income (₹)"],
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
              placeholder="Any specific tax query?"
              rows={4}
              className="border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2 shadow-md"
          >
            <Send size={18} /> Get Tax Assistance
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            🔒 Your data is fully confidential and secure.
          </p>
        </form>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          File Your ITR Easily & Stay Compliant
        </h3>
        <p className="mb-8 text-gray-300">
          ZAMEXO ensures your ITR is filed correctly, on time, and with maximum tax benefits.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Talk to Tax Expert
        </a>
      </section>
    </main>
  );
}
