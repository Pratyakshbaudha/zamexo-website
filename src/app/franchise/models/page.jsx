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

export default function FranchisePage() {
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
    console.log("Franchise Lead:", formData);
    alert("Thank you! Our franchise expert will contact you shortly.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO ===== */}
      <ZamexoHeroBanner
        title="Become a ZAMEXO Franchise Partner"
        subtitle="Join India’s fastest-growing tax and compliance services network. Leverage ZAMEXO’s brand, technology, and expert support to grow your business."
        primaryBtn="Apply for Franchise"
        secondaryBtn="Talk to Franchise Expert"
        image="/images/hero-franchise.gif"
      />

      {/* ===== BENEFITS STRIP ===== */}
      <section className="bg-[#0B1C2D] py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-white text-center">
          {[
            ["Proven Business Model", ShieldCheck],
            ["Brand Support", HeartPulse],
            ["Marketing Assistance", FileCheck2],
            ["Training & Guidance", CalendarClock],
          ].map(([title, Icon], i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Icon className="text-[#D4AF37]" size={28} />
              <p className="font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY JOIN FRANCHISE ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
              Why Become a ZAMEXO Franchise Partner?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ZAMEXO provides a complete franchise ecosystem with proven business models, brand recognition, and operational support. Our franchise partners enjoy high growth potential, recurring revenue, and strong customer trust.
            </p>

            <ul className="space-y-3 text-gray-700">
              {[
                "Turnkey business model with minimal setup",
                "Complete training and operational support",
                "Marketing & lead generation assistance",
                "Access to ZAMEXO technology & tools",
                "High earning potential with recurring revenue",
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
              Franchise Partner Benefits
            </h3>
            <ul className="space-y-4 text-blue-100">
              <li>⚡ Leverage a trusted brand & technology</li>
              <li>⚡ Recurring revenue from GST, ITR & compliance services</li>
              <li>⚡ Expert support & training at every step</li>
              <li>⚡ Marketing & lead generation assistance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FRANCHISE MODELS ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14">
            ZAMEXO Franchise Models
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              [
                "Standard Franchise",
                "Ideal for small towns & local markets. Minimal investment with full support.",
                "₹ 2,50,000"
              ],
              [
                "Premium Franchise",
                "Designed for metro cities. Higher reach, advanced tools & marketing support.",
                "₹ 5,00,000"
              ],
              [
                "Elite Franchise",
                "Large territory coverage with dedicated account manager & priority support.",
                "₹ 10,00,000"
              ]
            ].map((model, i) => (
              <div
                key={i}
                className="group bg-white border rounded-2xl p-8 shadow hover:-translate-y-2 hover:shadow-xl hover:border-[#D4AF37] transition"
              >
                <h4 className="font-semibold text-xl mb-2 text-[#0B1C2D] group-hover:text-[#D4AF37]">
                  {model[0]}
                </h4>
                <p className="text-gray-600 mb-4">{model[1]}</p>
                <p className="font-bold text-[#D4AF37] text-lg">{model[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FRANCHISE PROCESS ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
          Franchise Joining Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            ["Enquire & Submit Form", "Submit your details and preferred city"],
            ["Discussion & Evaluation", "ZAMEXO team evaluates & schedules meeting"],
            ["Agreement & Training", "Sign franchise agreement & complete training"],
            ["Launch & Support", "Start operations with ongoing support & leads"],
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
            Apply for ZAMEXO Franchise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Submit your details and our franchise expert will contact you with all information and support.
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
            ["city", "Preferred City"],
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
              placeholder="Any specific franchise query?"
              rows={4}
              className="border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2 shadow-md"
          >
            <Send size={18} /> Apply Now
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            🔒 Your data is fully confidential and secure.
          </p>
        </form>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Join ZAMEXO and Grow Your Own Business
        </h3>
        <p className="mb-8 text-gray-300">
          Leverage ZAMEXO’s brand, tools, and support to build a successful franchise in your city.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Talk to Franchise Expert
        </a>
      </section>
    </main>
  );
}
