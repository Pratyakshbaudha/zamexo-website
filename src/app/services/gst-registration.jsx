"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";


export default function GSTRegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: "GST Registration" }),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", city: "", message: "" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/gst.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GST Registration Made 
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Register your business for GST quickly and compliantly with ZAMEXO experts.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-[#0B1C2D] text-center mb-12">
          Why Choose ZAMEXO for GST Registration
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Quick Registration",
              desc: "Complete GST registration process in minimum time without hassle.",
            },
            {
              title: "Expert Guidance",
              desc: "Our CA & tax experts guide you step by step to avoid mistakes.",
            },
            {
              title: "PAN India Support",
              desc: "We assist businesses across India, ensuring compliance everywhere.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEP BY STEP */}
     {/* GST REGISTRATION PROCESS — ZIG ZAG LAYOUT */}
<section className="bg-gray-50 py-20 px-6">
  <h2 className="text-3xl font-bold text-[#0B1C2D] text-center mb-16">
    GST Registration Process
  </h2>

  <div className="max-w-7xl mx-auto space-y-20">

    {/* STEP 1 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h4 className="text-2xl font-semibold text-[#0B1C2D] mb-3">
          1. Submit Your Documents
        </h4>
        <p className="text-gray-700 text-lg">
          Provide PAN, business proof, and address proof documents securely to our team.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/services/docs.png"
          alt="Submit Documents"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>

    {/* STEP 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 flex justify-center">
        <img
          src="/images/services/verification.png"
          alt="CA Verification"
          className="w-full max-w-md object-contain"
        />
      </div>
      <div className="order-1 md:order-2">
        <h4 className="text-2xl font-semibold text-[#0B1C2D] mb-3">
          2. CA Verification
        </h4>
        <p className="text-gray-700 text-lg">
          Our experts verify your documents and confirm details before registration.
        </p>
      </div>
    </div>

    {/* STEP 3 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h4 className="text-2xl font-semibold text-[#0B1C2D] mb-3">
          3. GST Registration Filing
        </h4>
        <p className="text-gray-700 text-lg">
          We file your GST registration online with the government portal efficiently.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/services/filing.png"
          alt="GST Filing"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>

    {/* STEP 4 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 flex justify-center">
        <img
          src="/images/services/gstin.png"
          alt="Receive GSTIN"
          className="w-full max-w-md object-contain"
        />
      </div>
      <div className="order-1 md:order-2">
        <h4 className="text-2xl font-semibold text-[#0B1C2D] mb-3">
          4. Receive GSTIN
        </h4>
        <p className="text-gray-700 text-lg">
          Once approved, receive your GSTIN along with registration certificate.
        </p>
      </div>
    </div>

    {/* STEP 5 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h4 className="text-2xl font-semibold text-[#0B1C2D] mb-3">
          5. Ongoing Support
        </h4>
        <p className="text-gray-700 text-lg">
          Get expert guidance on GST compliance, filing returns, and notices.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/services/support.png"
          alt="Ongoing Support"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>

  </div>
</section>


      {/* GST REGISTRATION FORM */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-6">
            Request GST Registration
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Fill out the form and our team will get in touch with you.
          </p>

          {submitted && (
            <div className="bg-green-100 text-green-800 p-4 mb-6 rounded-lg text-center">
              Thank you! Our team will contact you soon.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (Optional)"
              rows={4}
              className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none md:col-span-2"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold hover:bg-yellow-400 transition flex justify-center items-center gap-2"
            >
              <Send size={18} /> Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0B1C2D] to-[#1e3a5f] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Need Expert GST Support?
        </h3>
        <p className="mb-8 text-gray-300">
          Talk to our GST experts and ensure hassle-free compliance.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          Book Free Consultation
        </a>
      </section>

    </main>
  );
}
