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

export default function PFESICPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PF ESIC Lead:", formData);
    alert("Thank you! Our PF/ESIC expert will contact you shortly.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO ===== */}
      <ZamexoHeroBanner
        title="PF & ESIC Registration and Compliance Services"
        subtitle="Protect your employees and stay legally compliant. ZAMEXO provides complete PF & ESIC registration, monthly returns and compliance management for your business."
        primaryBtn="Register for PF/ESIC"
        secondaryBtn="Talk to Compliance Expert"
        image="/images/hero-company1.gif"
      />

      {/* ===== BENEFITS STRIP ===== */}
      <section className="bg-[#0B1C2D] py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-white text-center">
          {[
            ["Legal Compliance", ShieldCheck],
            ["Employee Security", HeartPulse],
            ["Penalty Protection", AlertTriangle],
            ["Easy Online Process", FileCheck2],
          ].map(([title, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon className="text-[#D4AF37]" size={28} />
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY PF & ESIC IMPORTANT ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
              Why PF & ESIC Compliance is Mandatory for Employers?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Provident Fund (PF) and Employees State Insurance (ESIC) are
              mandatory social security schemes under Indian labour laws. Any
              employer crossing the employee threshold must register and file
              monthly returns.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "PF mandatory if employees are 20 or more",
                "ESIC mandatory if employees are 10 or more",
                "Monthly contributions must be deposited on time",
                "Late payment attracts interest & penalties",
                "Inspection and prosecution in case of non-compliance",
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
              Non-Compliance Risks
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li>⚠ Heavy penalties and interest</li>
              <li>⚠ Labour department inspections</li>
              <li>⚠ Court prosecution of employer</li>
              <li>⚠ Loss of business reputation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
            PF & ESIC Services Offered by ZAMEXO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["PF Registration", "EPFO registration for new employers"],
              ["ESIC Registration", "ESI department registration"],
              ["Monthly Return Filing", "Challan generation & ECR filing"],
              ["Employee Onboarding", "Adding new employees in portal"],
              ["Compliance Audit Support", "Inspection & notice handling"],
              ["Consultation & Advisory", "Labour law expert guidance"],
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
          Simple PF & ESIC Registration Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Share Details", "Company & employee information"],
            ["Document Review", "Verification by compliance expert"],
            ["Portal Registration", "EPFO & ESIC portal filing"],
            ["Compliance Setup", "Returns & challan system activated"],
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

      {/* ===== WHO NEEDS ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-10">
            Who Should Register for PF & ESIC?
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Startups",
              "Private Limited Companies",
              "Factories",
              "Shops & Establishments",
              "Service Providers",
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
      {/* ===== CONSULTATION INFO CARD (NO FORM) ===== */}
<section className="bg-gray-50 py-24 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
        Get Expert Help for PF & ESIC Compliance
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Managing PF & ESIC compliance can be complex and risky if not handled
        properly. ZAMEXO’s labour law experts and Chartered Accountants help you
        with registration, monthly filings, and ongoing compliance — without
        stress or penalties.
      </p>

      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          PF & ESIC handled by labour law experts
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Timely monthly challans & return filing
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Protection from penalties & inspections
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Pan-India online PF & ESIC compliance support
        </li>
      </ul>
    </div>

    {/* RIGHT CARD */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10">
      <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4">
        Free PF & ESIC Consultation
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        Speak directly with our PF & ESIC specialists to understand
        applicability, contribution structure, filing timelines, and compliance
        risks — before any notice or penalty arises.
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            PF & ESIC registration and applicability check
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            Monthly challan, ECR & return filing support
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            Inspection, notice & audit handling assistance
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/contact"
          className="flex-1 text-center bg-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          Talk to Compliance Expert
        </a>

        <a
          href="tel:+91XXXXXXXXXX"
          className="flex-1 text-center border border-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold hover:bg-[#D4AF37]/10 transition"
        >
          Call Now
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        🔒 100% Confidential | No Obligation | Expert-Verified Guidance
      </p>
    </div>

  </div>
</section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Build a Legally Compliant & Trusted Workplace
        </h3>
        <p className="mb-8 text-gray-300">
          ZAMEXO ensures your business follows labour laws while protecting your
          employees’ future.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Talk to Compliance Expert
        </a>
      </section>
    </main>
  );
}
