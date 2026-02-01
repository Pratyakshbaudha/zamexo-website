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

export default function BookkeepingPage() {
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
    console.log("Bookkeeping Lead:", formData);
    alert("Thank you! Our bookkeeping expert will contact you shortly.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO ===== */}
      <ZamexoHeroBanner
        title="Professional Bookkeeping Services"
        subtitle="Accurate bookkeeping for your business. ZAMEXO helps you maintain financial records, track expenses, and ensure compliance with Indian accounting standards."
        primaryBtn="Get Bookkeeping Assistance"
        secondaryBtn="Talk to Accounting Expert"
        image="/images/hero-bookkeeping.gif"
      />

      {/* ===== BENEFITS STRIP ===== */}
      <section className="bg-[#0B1C2D] py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-white text-center">
          {[
            ["Accurate Records", ShieldCheck],
            ["Save Time & Money", HeartPulse],
            ["Tax Ready Accounts", FileCheck2],
            ["Confidential & Secure", AlertTriangle],
          ].map(([title, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon className="text-[#D4AF37]" size={28} />
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY BOOKKEEPING ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
              Why Bookkeeping is Crucial for Your Business
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Proper bookkeeping ensures accurate financial records, compliance with tax laws, and better decision-making. It helps businesses avoid errors, track cash flow, and prepare for audits or funding.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "Maintain complete financial records",
                "Track income & expenses efficiently",
                "Prepare accounts for GST & ITR",
                "Simplify audits and compliance",
                "Support informed business decisions",
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
              Risks of Poor Bookkeeping
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li>⚠ Financial mismanagement</li>
              <li>⚠ Tax filing errors & penalties</li>
              <li>⚠ Missed opportunities for growth</li>
              <li>⚠ Difficulty in securing loans or funding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
            Bookkeeping Services Offered by ZAMEXO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Daily Transaction Recording", "Track sales, expenses & payments"],
              ["Bank Reconciliation", "Match books with bank statements"],
              ["Ledger & Journal Maintenance", "Maintain accurate ledgers"],
              ["Expense Management", "Monitor and control business expenses"],
              ["Financial Reporting", "Prepare monthly & quarterly reports"],
              ["GST & Tax Ready Accounts", "Organize records for GST & ITR filing"],
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
          How Our Bookkeeping Process Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Share Business Data", "Provide financial documents & records"],
            ["Record Transactions", "We accurately record daily transactions"],
            ["Prepare Reports", "Generate monthly, quarterly & annual reports"],
            ["Compliance & Review", "Ensure GST, ITR & audit readiness"],
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

      {/* ===== WHO NEEDS BOOKKEEPING ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-10">
            Who Should Avail Bookkeeping Services?
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Startups",
              "Small Businesses",
              "Private Limited Companies",
              "Freelancers & Professionals",
              "Retail Shops & Service Providers",
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
      {/* ===== CONTACT CTA ===== */}
<section className="bg-gradient-to-r from-[#0B1C2D] to-blue-900 py-24 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Need Professional Bookkeeping Support?
      </h2>
      <p className="text-gray-300 mb-6 leading-relaxed">
        Our experienced accounting professionals help you maintain accurate books,
        stay compliant with GST & Income Tax laws, and make smarter financial decisions.
      </p>

      <ul className="space-y-3 text-gray-200 text-sm">
        <li>✔ Dedicated bookkeeping expert</li>
        <li>✔ Monthly & quarterly financial reports</li>
        <li>✔ GST & ITR ready accounts</li>
        <li>✔ Confidential & secure handling</li>
      </ul>
    </div>

    {/* RIGHT CTA CARD */}
    <div className="bg-white rounded-3xl p-10 shadow-2xl text-center">
      <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4">
        Talk to Our Accounting Expert
      </h3>
      <p className="text-gray-600 mb-6 text-sm">
        Click below to share your requirements and our team will contact you shortly.
      </p>

      <a
        href="/contact"
        className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition shadow-md"
      >
        <PhoneCall size={18} />
        Go to Contact Page
      </a>

      <p className="text-xs text-gray-500 mt-4">
        🔒 Your business information is safe with us
      </p>
    </div>

  </div>
</section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Maintain Accurate Books & Stay Tax-Ready
        </h3>
        <p className="mb-8 text-gray-300">
          ZAMEXO ensures your financial records are accurate, compliant, and ready for audits or tax filings.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Talk to Accounting Expert
        </a>
      </section>
    </main>
  );
}
