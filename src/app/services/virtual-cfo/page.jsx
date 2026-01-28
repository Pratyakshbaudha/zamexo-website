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

export default function VirtualCFOPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    turnover: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Virtual CFO Lead:", formData);
    alert("Thank you! Our Virtual CFO expert will contact you shortly.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO ===== */}
      <ZamexoHeroBanner
        title="Virtual CFO Services for Your Business"
        subtitle="Strategic financial guidance, forecasting, and compliance support without hiring a full-time CFO. ZAMEXO’s Virtual CFO solutions help businesses make informed decisions and optimize financial growth."
        primaryBtn="Get Virtual CFO Support"
        secondaryBtn="Talk to Financial Expert"
        image="/images/hero-virtualcfo.gif"
      />

      {/* ===== BENEFITS STRIP ===== */}
      <section className="bg-[#0B1C2D] py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-white text-center">
          {[
            ["Strategic Planning", ShieldCheck],
            ["Cost Optimization", HeartPulse],
            ["Compliance Assurance", FileCheck2],
            ["Confidential & Secure", AlertTriangle],
          ].map(([title, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon className="text-[#D4AF37]" size={28} />
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY VIRTUAL CFO ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
              Why Your Business Needs a Virtual CFO
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A Virtual CFO provides strategic financial management, forecasting, and compliance guidance for businesses that do not require a full-time CFO. This service helps startups and SMEs make informed decisions, optimize cash flow, and ensure regulatory compliance.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "Financial planning & forecasting",
                "Budgeting & cash flow management",
                "Cost reduction strategies",
                "Compliance with accounting standards",
                "Investor reporting & performance analysis",
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
              Risks of Not Having a CFO
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li>⚠ Poor financial decision-making</li>
              <li>⚠ Inefficient cash flow management</li>
              <li>⚠ Increased tax and compliance risks</li>
              <li>⚠ Limited growth & missed opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
            Virtual CFO Services Offered by ZAMEXO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Financial Strategy & Planning", "Create actionable growth strategies"],
              ["Budgeting & Cash Flow", "Manage budgets and cash efficiently"],
              ["Tax & Compliance Advisory", "Ensure GST, ITR & audit compliance"],
              ["Financial Reporting", "Generate monthly & quarterly reports"],
              ["Cost Optimization", "Reduce expenses and improve profitability"],
              ["Investor & Board Reporting", "Prepare presentations for stakeholders"],
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
          How Our Virtual CFO Process Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Share Business Data", "Provide financial statements, budgets & reports"],
            ["Analysis & Recommendations", "CFO analyzes data and gives insights"],
            ["Strategy Implementation", "Plan execution & financial optimization"],
            ["Monitoring & Reporting", "Regular reports & performance tracking"],
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

      {/* ===== WHO NEEDS VIRTUAL CFO ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-10">
            Who Should Hire a Virtual CFO?
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Startups",
              "Small & Medium Businesses",
              "Private Limited Companies",
              "Growing Enterprises",
              "Businesses Seeking Investment",
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
            Get Virtual CFO Support Now
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Submit your details and our financial experts will provide strategic guidance, cash flow optimization, and compliance support.
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
            ["turnover", "Annual Turnover (₹)"],
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
              placeholder="Any specific financial or CFO query?"
              rows={4}
              className="border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2 shadow-md"
          >
            <Send size={18} /> Get CFO Assistance
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            🔒 Your data is fully confidential and secure.
          </p>
        </form>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Make Informed Financial Decisions with a Virtual CFO
        </h3>
        <p className="mb-8 text-gray-300">
          ZAMEXO provides expert strategic guidance, financial forecasting, and compliance support, helping your business grow efficiently.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Talk to Financial Expert
        </a>
      </section>
    </main>
  );
}
  