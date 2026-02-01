"use client";

import { useState } from "react";
import { Send, ShieldAlert, FileWarning, BadgeCheck, PhoneCall } from "lucide-react";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

export default function GSTNoticeReplyPage() {
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
    console.log("GST Notice Reply Form:", formData);
    alert("Request submitted! Our GST expert will contact you soon.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO (Same as Your Theme) ===== */}
      <ZamexoHeroBanner
        title="GST Notice Reply by ZAMEXO Experts"
        subtitle="Received a GST notice? Our CA & GST professionals provide accurate and legally compliant replies to protect your business from penalties and registration cancellation."
        primaryBtn="Upload GST Notice"
        secondaryBtn="Talk to GST Expert"
        image="/images/hero-tax.gif"
      />

      {/* ===== WHY ZAMEXO ===== */}
      <section className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-12">
          Why Choose ZAMEXO for GST Notice Reply?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Handled by CA & GST Experts",
              desc: "Your notice is reviewed and replied by experienced Chartered Accountants and GST specialists to ensure proper legal compliance.",
              icon: <BadgeCheck className="text-[#D4AF37]" size={40} />,
            },
            {
              title: "Pan-India Online Service",
              desc: "No matter which state your GST registration is in, we provide complete online notice reply support across India.",
              icon: <ShieldAlert className="text-[#D4AF37]" size={40} />,
            },
            {
              title: "Penalty & Cancellation Protection",
              desc: "Correct reply reduces risk of heavy penalties, recovery action and GST registration cancellation.",
              icon: <FileWarning className="text-[#D4AF37]" size={40} />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-md
              hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4AF37] transition-all"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="font-bold text-xl mb-3 text-[#0B1C2D] group-hover:text-[#D4AF37]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHAT IS GST NOTICE ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">
            What is a GST Notice & Why You Should Act Fast?
          </h2>

          <p className="text-gray-600 max-w-4xl mb-8 leading-relaxed">
            A GST notice is an official communication sent by the GST Department when
            there is mismatch, delay, or non-compliance in your GST returns or tax
            payments. Ignoring or replying incorrectly can lead to penalties, interest,
            recovery proceedings or cancellation of GST registration.
          </p>

          <div className="grid md:grid-cols-2 gap-5 text-gray-600">
            {[
              "Late or non-filing of GST returns",
              "Mismatch in sales or purchase data",
              "Wrong or excess ITC claimed",
              "Short payment of tax",
              "Business verification or audit",
              "Risk of GST registration cancellation",
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-center bg-white p-4 rounded-xl border shadow-sm"
              >
                <ShieldAlert className="text-[#0B1C2D]" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TYPES OF NOTICES ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-12 text-center">
          Types of GST Notices We Handle
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "GSTR-1 vs GSTR-3B Mismatch",
            "ITC Mismatch (2A / 2B)",
            "Late Filing Penalty Notice",
            "Scrutiny Notice – Section 61",
            "Demand Notice – DRC-01",
            "Show Cause Notice (SCN)",
            "Registration Cancellation",
            "Audit & Assessment Notices",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow border hover:shadow-lg transition"
            >
              <FileWarning className="text-[#D4AF37] mb-3" />
              <p className="font-semibold text-[#0B1C2D]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-14 text-center">
            Our Simple & Transparent Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["Upload Notice", "Share your GST notice via form or WhatsApp"],
              ["Expert Review", "CA checks compliance & legal risk"],
              ["Reply Drafting", "Professional reply with documents"],
              ["GST Portal Filing", "Reply submitted with follow-up support"],
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
        </div>
      </section>

      {/* ===== LEAD FORM ===== */}
      {/* ===== LEAD FORM (IMAGE LEFT • FORM RIGHT) ===== */}
{/* ===== CONSULTATION INFO CARD (NO FORM) ===== */}
<section className="bg-gray-50 py-20 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
        Get Expert Help for GST Notice Reply
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Received a GST notice? Don’t panic. ZAMEXO’s Chartered Accountants and GST
        experts analyze your notice, identify risks, and prepare a legally
        compliant reply to protect you from penalties and registration
        cancellation.
      </p>

      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Reply drafted by CA & GST Experts
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Protection from penalties & recovery
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          GST registration cancellation prevention
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Pan-India online notice reply support
        </li>
      </ul>
    </div>

    {/* RIGHT CARD */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10">
      <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4">
        Free GST Notice Consultation
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        Speak directly with our GST specialists to understand the notice type,
        risk level, required documents, and the best reply strategy — before any
        deadline is missed.
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            Scrutiny, SCN, DRC-01 & Cancellation Notices
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            ITC mismatch, late filing & demand cases
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            Drafting + GST portal reply filing support
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/contact"
          className="flex-1 text-center bg-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          Talk to GST Expert
        </a>

        <a
          href="tel:+91XXXXXXXXXX"
          className="flex-1 text-center border border-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold hover:bg-[#D4AF37]/10 transition"
        >
          Call Now
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        🔒 100% Confidential | No Obligation | CA Verified Guidance
      </p>
    </div>

  </div>
</section>



      {/* ===== CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Don’t Let GST Notice Become a Business Problem
        </h3>
        <p className="mb-8 text-gray-300">
          Our experts will guide you with correct and legal GST notice replies.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Contact ZAMEXO
        </a>
      </section>
    </main>
  );
}
