"use client";

import { useState } from "react";
import {
  Building2,
  BadgeCheck,
  FileText,
  Rocket,
  Users,
  PhoneCall,
  Send,
} from "lucide-react";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

export default function CompanyRegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    businessType: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Company Registration Lead:", formData);
    alert(
      "Thank you! Our company registration expert will contact you shortly.",
    );
  };

  return (
    <main className="bg-white">
      {/* ===== HERO ===== */}
      <ZamexoHeroBanner
        title="Company Registration Made Simple with ZAMEXO"
        subtitle="Start your business journey with complete legal compliance. We help you register your company quickly with expert CA support across India."
        primaryBtn="Start Company Registration"
        secondaryBtn="Free Business Consultation"
        image="/images/hero-company.gif"
      />

      {/* ===== WHY REGISTER COMPANY ===== */}
      <section className="max-w-7xl mx-auto px-6 py-5 text-center">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-12">
          Why Register Your Company?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            ["Legal Identity", "Your business gets separate legal existence"],
            ["Easy Funding", "Banks & investors prefer registered companies"],
            ["Brand Trust", "Build strong credibility with customers"],
            ["Limited Liability", "Personal assets stay protected"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition"
            >
              <Rocket className="text-[#D4AF37] mx-auto mb-4" size={36} />
              <h4 className="font-semibold text-lg mb-2 text-[#0B1C2D]">
                {item[0]}
              </h4>
              <p className="text-gray-600 text-sm">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TYPES OF COMPANY ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-12 text-center">
            Types of Business Registration We Provide
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              [
                "Private Limited Company",
                "Best for startups & scalable businesses",
              ],
              [
                "Limited Liability Partnership (LLP)",
                "For professionals & partnerships",
              ],
              [
                "One Person Company (OPC)",
                "Single founder corporate structure",
              ],
              ["Section 8 Company", "For NGOs & non-profit organizations"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border shadow hover:border-[#D4AF37] hover:shadow-lg transition"
              >
                <Building2 className="text-[#D4AF37] mb-3" />
                <h4 className="font-semibold text-[#0B1C2D] mb-1">{item[0]}</h4>
                <p className="text-sm text-gray-600">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="py-5 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
          What’s Included in Our Company Registration Package?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["DSC & DIN", "Digital Signature and Director Identification"],
            ["Name Approval", "MCA name reservation & approval"],
            ["MOA & AOA Drafting", "Professional legal documents prepared"],
            [
              "Certificate of Incorporation",
              "Official company registration proof",
            ],
            ["PAN & TAN", "Tax registrations included"],
            [
              "Post Incorporation Support",
              "Guidance on GST, bank account & compliance",
            ],
          ].map((item, i) => (
            <div
              key={i}
              className="flex gap-4 bg-white border rounded-xl p-5 shadow-sm"
            >
              <BadgeCheck className="text-[#D4AF37]" />
              <div>
                <h4 className="font-semibold text-[#0B1C2D]">{item[0]}</h4>
                <p className="text-sm text-gray-600">{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1C2D] mb-14 text-center">
            Simple 4-Step Registration Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["Submit Details", "Share business & director details"],
              ["Document Verification", "CA verifies all documents"],
              ["MCA Filing", "We file incorporation forms"],
              ["Company Registered", "Get certificate & PAN/TAN"],
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

      {/* LEFT IMAGE */}

      {/* ===== CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Build Your Business with Legal Confidence
        </h3>
        <p className="mb-8 text-gray-300">
          Let ZAMEXO handle your company registration while you focus on growth.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Talk to Business Expert
        </a>
      </section>
    </main>
  );
}
