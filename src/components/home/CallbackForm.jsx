"use client";

import { useState } from "react";

export default function CallbackPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    city: "",
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
          email: "callback@zamexo.in", // optional dummy email
          subject: `Callback Request – ${form.service}`,
          message: `
Callback Request Details:

Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
City: ${form.city}
          `,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("✅ Callback request submitted successfully!");
        setForm({
          name: "",
          phone: "",
          service: "",
          city: "",
        });
      } else {
        alert("❌ " + (data.error || "Failed to submit request"));
      }
    } catch (err) {
      alert("❌ Network / Server error");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-5 px-6">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
            Request a Free Consultation Call
          </h1>
          <p className="text-gray-700 text-lg">
            Talk to our tax experts for GST, ITR, Company Registration and
            complete business compliance solutions.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="grid lg:grid-cols-2 gap-14 items-center bg-white rounded-3xl shadow-2xl p-10 md:p-16">

          {/* LEFT IMAGE */}
          <div>
            <img
              src="/images/callback-banner2.webp"
              alt="ZAMEXO Consultation"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 md:p-10 text-black">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Request Call Back
            </h3>

            <form onSubmit={handleSubmit} className="grid gap-5">

              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your 10-digit mobile number"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              {/* Service */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Select Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                >
                  <option value="">Choose a service</option>
                  <option>GST Registration / Returns</option>
                  <option>ITR Filing</option>
                  <option>Company Registration</option>
                  <option>Accounting & Payroll</option>
                  <option>Franchise Enquiry</option>
                </select>
              </div>

              {/* City */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-xl transition shadow-md"
              >
                {loading ? "Submitting..." : "Request Call Back"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive a call from ZAMEXO Tax Solutions.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
