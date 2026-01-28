"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Headset, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-[#0B1C2D] text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-5"
        >
          Contact ZAMEXO Tax Solutions
        </motion.h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Have questions about tax filing, compliance or franchise opportunity?
          Our experts are here to help you.
        </p>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-10">
          {/* HO DETAILS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 5, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border rounded-2xl shadow-xl p-8"
          >
            <Building2 className="text-[#D4AF37] mb-4" size={34} />
            <h3 className="font-bold text-lg mb-2 text-[#0B1C2D]">
              Head Office
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              ZAMEXO Tax Solutions Pvt. Ltd.
              <br />
              3rd Floor, Business Tower,
              <br />
              Sector 62, Noida, Uttar Pradesh – 201309
            </p>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border rounded-2xl shadow-xl p-8"
          >
            <Headset className="text-[#D4AF37] mb-4" size={34} />
            <h3 className="font-bold text-lg mb-2 text-[#0B1C2D]">
              Customer Support
            </h3>

            <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
              <Phone size={16} /> +91 9XXXXXXXXX
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
              <Mail size={16} /> support@zamexo.in
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Clock size={16} /> Mon – Sat | 10:00 AM – 7:00 PM
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border rounded-2xl shadow-xl p-8"
          >
            <MapPin className="text-[#D4AF37] mb-4" size={34} />
            <h3 className="font-bold text-lg mb-2 text-[#0B1C2D]">
              Service Coverage
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Serving clients across India with centralized processing and
              online consultation support in 30+ cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAP + FORM ================= */}
      <section className="bg-gray-50 py-24 pt-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-[420px]"
          >
            <iframe
              className="w-full h-full border-0 "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Sector+62+Noida&output=embed"
            />
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-10"
          >
            <h2 className="text-2xl font-bold mb-6 text-[#0B1C2D]">
              Send Us Your Query
            </h2>

            <form className="grid grid-cols-1 gap-5">
              <input
                className="w-full border border-gray-300 rounded-lg p-4 
text-gray-800 placeholder-gray-500 bg-white
focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Full Name"
              />

              <input
                className="w-full border border-gray-300 rounded-lg p-4 
text-gray-800 placeholder-gray-500 bg-white
focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Mobile Number"
              />

              <input
                className="w-full border border-gray-300 rounded-lg p-4 
text-gray-800 placeholder-gray-500 bg-white
focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Email Address"
              />

              <select
                className="w-full border border-gray-300 rounded-lg p-4 
  text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 "
              >
                <option>Select Inquiry Type</option>
                <option>Tax Filing</option>
                <option>Business Registration</option>
                <option>Accounting Services</option>
                <option>Franchise Opportunity</option>
                <option>Other</option>
              </select>

              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-4 
text-gray-800 placeholder-gray-500 bg-white
focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Write your message..."
              />

              <button
                type="submit"
                className="bg-[#D4AF37] text-[#0B1C2D] py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#0B1C2D] py-20 text-center text-white px-6">
        <h2 className="text-3xl font-bold mb-4">
          Prefer Talking to an Expert?
        </h2>

        <p className="max-w-2xl mx-auto mb-8 text-gray-300">
          Call or WhatsApp us for immediate assistance and business
          consultation.
        </p>

        <a
          href="tel:+919XXXXXXXXX"
          className="inline-block bg-[#D4AF37] text-[#0B1C2D] px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
        >
          Call Now
        </a>
      </section>
    </main>
  );
}
