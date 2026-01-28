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
      
     <ZamexoHeroBanner/>
      {/* HERO */}
      {/* <section className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services/gst.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GST Registration Made Simple
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Register your business for GST quickly and compliantly with ZAMEXO experts.
          </p>
        </div>
      </section> */}

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
          Securely share your PAN card, business registration proof,
           and address proof with our team through our safe and confidential submission process. Our system ensures complete data privacy and quick verification,
           helping us start your GST registration without any delays.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/docs.png"
          alt="Submit Documents"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>

    {/* STEP 2 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 flex justify-center">
        <img
          src="/images/verification.png"
          alt="CA Verification"
          className="w-full max-w-md object-contain"
        />
      </div>
      <div className="order-1 md:order-2">
        <h4 className="text-2xl font-semibold text-[#0B1C2D] mb-3">
          2. CA Verification
        </h4>
        <p className="text-gray-700 text-lg">
          Once we receive your documents, our qualified Chartered
           Accountants carefully review and verify all details to ensure accuracy and eligibility as per GST laws. We cross-check business information, PAN details, and address proofs to avoid any rejection or future compliance issues.
           If any correction is required, our team will guide you promptly for smooth processing.
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
          After successful verification, we prepare and submit your GST registration application directly on the official government GST portal. All forms are filled accurately with correct business details, partner/director information, and required declarations. Our experts ensure that the application meets all compliance requirements to minimize delays
           or objections from the department, helping you get registered faster and without hassle.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/filing.png"
          alt="GST Filing"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>

    {/* STEP 4 */}
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 flex justify-center">
        <img
          src="/images/gstin.png"
          alt="Receive GSTIN"
          className="w-full max-w-md object-contain"
        />
      </div>
      <div className="order-1 md:order-2">
        <h4 className="text-2xl font-semibold text-[#0B1C2D] mb-3">
          4. Receive GSTIN
        </h4>
        <p className="text-gray-700 text-lg">
          Once your application is approved by the GST department, you will receive your unique GST Identification Number (GSTIN) along with the official GST Registration Certificate. We share the certificate with you immediately via email and WhatsApp for quick access and record keeping. This GSTIN allows you to legally collect GST, 
          issue tax invoices, and start compliant business operations across India.
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
          Our relationship doesn’t end with registration. We provide continuous support for GST return filing, compliance management, and handling departmental notices. Our experts guide you on invoicing rules, tax payments, and due dates to help you avoid penalties. Whenever you need assistance, our dedicated support team is just 
          a call or message away to ensure your business remains fully compliant and stress-free.
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/images/support.png"
          alt="Ongoing Support"
          className="w-full max-w-md object-contain"
        />
      </div>
    </div>

  </div>
</section>

      {/* GST REGISTRATION FORM */}
<section className="bg-gradient-to-br  py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="bg-white/95 backdrop-blur shadow-2xl rounded-3xl p-10 md:p-14">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0B1C2D] mb-3">
          Request GST Registration
        </h2>
        <p className="text-gray-600 text-lg">
          Fill in your details and our GST expert will contact you shortly.
        </p>
      </div>

      {/* Success Message */}
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 mb-8 rounded-xl text-center font-medium">
          ✅ Thank you! Our team will contact you soon.
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-7"
      >

        {/* Full Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Message (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your business or any query..."
            rows={4}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="md:col-span-2 bg-[#D4AF37] text-[#0B1C2D] py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 transition flex justify-center items-center gap-2 shadow-lg"
        >
          <Send size={20} /> Submit Request
        </button>

      </form>
    </div>
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
