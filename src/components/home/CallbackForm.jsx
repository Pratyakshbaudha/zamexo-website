"use client";

import { motion } from "framer-motion";

export default function CallbackPage() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-5 px-6">
      <div className="max-w-7xl mx-auto">

        {/* PAGE HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
            Request a Free Consultation Call
          </h1>
          <p className="text-gray-700 text-lg">
            Talk to our tax experts for GST, ITR, Company Registration and
            complete business compliance solutions.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <div className="grid lg:grid-cols-2 gap-14 items-center bg-white rounded-3xl shadow-2xl p-10 md:p-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-full"
          >
            <img
              src="/images/callback-banner2.png"
              alt="ZAMEXO Consultation"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Request Call Back
            </h3>

            <form className="grid gap-5">

              {/* Full Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              {/* Service */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Select Service
                </label>
                <select
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                >
                  <option value="" className="text-gray-400">
                    Choose a service
                  </option>
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
                  type="text"
                  placeholder="Enter your city name"
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-yellow-600 hover:bg-yellow-600 text-white font-semibold py-3 rounded-xl transition shadow-md hover:shadow-lg"
              >
                Request Call Back
              </button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                By submitting, you agree to receive a call from ZAMEXO Tax Solutions.
              </p>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
