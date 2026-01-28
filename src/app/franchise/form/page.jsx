"use client";

import { useState } from "react";
import { Send, PhoneCall } from "lucide-react";

export default function FranchiseFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    investment: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Franchise Form Submitted:", formData);
    alert("Thank you! Our franchise team will contact you shortly.");
  };

  return (
    <main className="bg-white">

      {/* ===== HERO ===== */}
      <section className="bg-[#0B1C2D] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Apply for ZAMEXO Franchise
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Fill out the form below and our franchise expert will get in touch to guide you through the process, benefits, and investment options.
        </p>
        <a
          href="#franchise-form"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Apply Now
        </a>
      </section>

      {/* ===== BENEFITS STRIP ===== */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            ["Proven Business Model", "Leverage ZAMEXO's trusted system."],
            ["Marketing Support", "Get assistance for lead generation."],
            ["Training & Guidance", "Complete training provided."],
            ["High ROI Potential", "Earn recurring revenue with minimal investment."],
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h4 className="text-[#0B1C2D] font-semibold text-lg mb-2">{item[0]}</h4>
              <p className="text-gray-600 text-sm">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FRANCHISE FORM ===== */}
      <section id="franchise-form" className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-3">
            Franchise Application Form
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please fill in your details accurately. Our franchise team will contact you with all the required information and guidance.
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
            ["city", "City / Location"],
            ["investment", "Planned Investment (₹)"],
            ["experience", "Business / Industry Experience"],
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
              Additional Information (Optional)
            </label>
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Any specific queries or notes?"
              rows={4}
              className="border border-gray-300 p-3.5 rounded-lg focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2 shadow-md"
          >
            <Send size={18} /> Submit Application
          </button>

          <p className="text-xs text-center text-gray-500 mt-2">
            🔒 Your data is fully confidential and secure.
          </p>
        </form>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Take the First Step to Own a ZAMEXO Franchise
        </h3>
        <p className="mb-8 text-gray-300">
          Join a network of successful franchise partners and start earning with a trusted brand.
        </p>
        <a
          href="#franchise-form"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition inline-flex items-center gap-2"
        >
          <PhoneCall size={18} /> Apply Now
        </a>
      </section>
    </main>
  );
}
