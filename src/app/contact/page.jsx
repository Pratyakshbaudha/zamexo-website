"use client";

import { useState } from "react";

const servicesData = {
  GST: ["Registration", "Monthly Returns", "Notice Reply"],
  "Income Tax": ["ITR Filing", "Scrutiny Support"],
  "Company & Compliance": [
    "Company Formation",
    "ROC Filings",
    "PF / ESIC / MSME / IEC",
    "Trademark",
  ],
  "Business Support": ["Bookkeeping", "Payroll", "Virtual CFO"],
};

const inputClass =
  "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    inquiry: "",
    message: "",
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
          email: form.email,
          phone: form.phone,
          subject: form.inquiry,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("✅ Message sent successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          inquiry: "",
          message: "",
        });
      } else {
        alert("❌ " + (data.error || "Failed to send message"));
      }
    } catch {
      alert("❌ Network / Server error");
    }

    setLoading(false);
  };

  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="bg-[#0B1C2D] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact ZAMEXO Tax Solutions
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Trusted Pan-India tax & compliance partner for businesses and startups.
        </p>
      </section>

      {/* MAP + FORM */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="rounded-3xl overflow-hidden shadow-xl h-[420px]">
    <iframe
      src="https://www.google.com/maps?q=28.7589933,77.498752&z=17&output=embed"
      className="w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

          <div className="bg-white rounded-2xl shadow p-6 border-l-4 border-[#D4AF37]">
            <h3 className="text-xl font-bold text-[#0B1C2D] mb-2">
              Head Office
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
  <b>ZAMEXO Tax Solutions Pvt. Ltd.</b> <br />
  Opp. OFM Gate, Near Bachpan School <br />
  Dagar Vihar, Muradnagar, Ghaziabad (GZB) <br />
  Uttar Pradesh – 201206 <br />
  Email: <b>info@zamexo.in</b>
</p>

          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-2xl font-bold mb-4 text-[#0B1C2D]">
            Send Us Your Query
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className={inputClass}
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className={inputClass}
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className={inputClass}
            />

            <select
              name="inquiry"
              value={form.inquiry}
              onChange={handleChange}
              required
              className={inputClass}
            >
              <option value="">Select Service</option>
              {Object.entries(servicesData).map(([category, items]) => (
                <optgroup key={category} label={category}>
                  {items.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Write your message..."
              required
              className={inputClass}
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#D4AF37] text-[#0B1C2D] py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>

        
      </section>
      {/* BRANCH OFFICE SECTION */}
<section className="max-w-7xl mx-auto px-6 pb-20">
  <div className="bg-white rounded-3xl shadow-xl p-10">
    <h2 className="text-3xl font-bold text-[#0B1C2D] text-center mb-10">
      Branch Office
    </h2>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* LEFT – MAP (Same Size as Head Office Map) */}
      <div className="rounded-3xl overflow-hidden shadow-xl h-[420px]">
        <iframe
          src="https://www.google.com/maps?q=28.6729121,77.441311&z=17&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* RIGHT – ADDRESS */}
      <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-[#D4AF37]">
        <h3 className="text-xl font-bold text-[#0B1C2D] mb-4">
          ZAMEXO Tax Solutions Pvt. Ltd.
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          GF-309, Sumangal Ansal Building <br />
          RDC, Ghaziabad <br />
          Uttar Pradesh – 201001
        </p>
      </div>
    </div>
  </div>
</section>

    </main>
  );
}
