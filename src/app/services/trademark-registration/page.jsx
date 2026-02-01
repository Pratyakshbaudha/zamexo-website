  "use client";

  import { useState } from "react";
  import {
    BadgeCheck,
    ShieldCheck,
    FileText,
    TrendingUp,
    Building2,
    Send,
    PhoneCall,
    Star,
  } from "lucide-react";
  import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

  export default function TrademarkRegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    brand: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          subject: "Trademark Registration Enquiry",
          message: `
  Trademark Registration Lead

  Name: ${form.name}
  Phone: ${form.phone}
  Email: ${form.email}
  City: ${form.city}
  Brand Name / Logo: ${form.brand}
          `,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("✅ Trademark application submitted successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          city: "",
          brand: "",
        });
      } else {
        alert("❌ " + (data.error || "Failed to submit"));
      }
    } catch (err) {
      alert("❌ Network / Server error");
    }

    setLoading(false);
  };

    return (
      <main className="bg-white">

        {/* ================= HERO ================= */}
        <ZamexoHeroBanner
          title="Trademark Registration in India"
          subtitle="Protect your brand name, logo & identity legally with fast and affordable Trademark Registration by ZAMEXO experts."
          primaryBtn="Apply for Trademark"
          secondaryBtn="Talk to Expert"
          image="/images/hero-trademark.gif"
        />

        {/* ================= WHAT IS TRADEMARK ================= */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">
                What is Trademark Registration?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Trademark is a unique identity of your business such as brand name,
                logo, slogan, symbol, or design that distinguishes your products or
                services from others in the market.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Trademark registration gives you exclusive legal rights over your brand
                and prevents others from copying or misusing your business identity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Once registered, you can use the ® symbol and enjoy nationwide brand
                protection under the Trademark Act, 1999.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow border">
              <h4 className="font-semibold mb-4 text-[#0B1C2D]">
                Why Trademark is Important?
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>✔ Protects your brand legally</li>
                <li>✔ Stops competitors from copying your name or logo</li>
                <li>✔ Builds trust with customers</li>
                <li>✔ Helps in business expansion & franchising</li>
                <li>✔ Creates valuable intellectual property</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}
        <section className="bg-gray-50 py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-12">
            Benefits of Trademark Registration
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              ["Exclusive Brand Rights", ShieldCheck],
              ["Legal Protection", FileText],
              ["Brand Recognition", Star],
              ["Business Expansion", TrendingUp],
              ["Franchise Opportunities", Building2],
              ["Asset Creation", BadgeCheck],
            ].map(([t, I], i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border shadow hover:shadow-xl transition"
              >
                <I className="text-[#D4AF37] mb-4" size={32} />
                <h4 className="font-semibold text-lg text-[#0B1C2D] mb-2">{t}</h4>
                <p className="text-gray-600 text-sm">
                  Registered trademarks give you strong legal ownership and help in
                  protecting your business reputation and goodwill.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHO CAN APPLY ================= */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-10">
      Who Can Apply for Trademark?
    </h2>

    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {[
        "Startups & New Businesses",
        "Proprietorship Firms",
        "Partnership Firms",
        "LLP Companies",
        "Private Limited Companies",
        "Individual Entrepreneurs",
      ].map((d, i) => (
        <div
          key={i}
          className="bg-[#FDF7E3] border-2 border-[#D4AF37] p-6 rounded-xl text-center font-semibold text-[#0B1C2D] shadow-md hover:shadow-xl transition"
        >
          {d}
        </div>
      ))}
    </div>
  </section>


        {/* ================= DOCUMENTS ================= */}
        <section className="bg-gray-50 py-20 px-6">
    <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-10">
      Documents Required for Trademark Registration
    </h2>

    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {[
        "Applicant Aadhaar & PAN Card",
        "Brand Name / Logo",
        "Business Proof (GST / MSME / Incorporation)",
        "Address Proof",
        "Signed Authorization Letter",
      ].map((d, i) => (
        <div
          key={i}
          className="bg-[#FDF7E3] border-2 border-[#D4AF37] p-5 rounded-xl flex gap-3 items-center shadow-md hover:shadow-xl transition"
        >
          <BadgeCheck className="text-[#D4AF37]" size={20} />
          <span className="text-[#0B1C2D] font-semibold text-sm md:text-base">{d}</span>
        </div>
      ))}
    </div>
  </section>


        {/* ================= PROCESS ================= */}
        <section className="bg-[#0B1C2D] text-white py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trademark Registration Process with ZAMEXO
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center">
            {[
              "Brand Details Submission",
              "Trademark Search",
              "Application Filing",
              "Government Examination",
              "Certificate Issued",
            ].map((s, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl">
                <p className="font-semibold mb-2">Step {i + 1}</p>
                <p className="text-sm text-gray-300">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WHY ZAMEXO ================= */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0B1C2D] mb-10">
            Why Choose ZAMEXO for Trademark Registration?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Expert Legal Support",
              "Affordable Pricing",
              "Fast Application Filing",
              "Complete Documentation Support",
              "Regular Status Updates",
              "End-to-End Assistance",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 border p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <BadgeCheck className="text-[#D4AF37] mb-3" />
                <p className="font-semibold text-[#0B1C2D]">{t}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= LEAD FORM ================= */}
      <section className="max-w-4xl mx-auto py-24 px-6">
    <h2 className="text-3xl font-bold text-center mb-8 text-[#0B1C2D]">
      Apply for Trademark Registration
    </h2>

    <form
      onSubmit={handleSubmit}
      className="bg-white p-10 md:p-12 rounded-2xl shadow-xl border border-gray-200 grid gap-6"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
        placeholder="Full Name"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        required
        placeholder="Mobile Number"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="Email Address"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />

      <input
        name="city"
        value={form.city}
        onChange={handleChange}
        placeholder="City"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />

      <input
        name="brand"
        value={form.brand}
        onChange={handleChange}
        required
        placeholder="Brand Name / Logo"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#c9a633] transition"
      >
        <Send size={18} />
        {loading ? "Submitting..." : "Submit Application"}
      </button>

      <p className="text-xs text-center text-gray-500">
        🔒 Your information is safe & confidential.
      </p>
    </form>
  </section>



        {/* ================= CTA ================= */}
        <section className="bg-gray-900 text-white py-20 text-center px-6">
          <h3 className="text-3xl font-bold mb-4">
            Protect Your Brand Before Someone Else Uses It!
          </h3>
          <p className="text-gray-400 mb-6">
            Get expert help from ZAMEXO and secure your business identity today.
          </p>
          <a
            href="/contact"
            className="bg-[#D4AF37] text-black px-8 py-3 rounded-xl font-semibold inline-flex gap-2"
          >
            <PhoneCall size={18} /> Talk to Expert
          </a>
        </section>

      </main>
    );
  }
