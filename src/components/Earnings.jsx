"use client";

import { motion } from "framer-motion";
import { IndianRupee, TrendingUp, Users, Briefcase } from "lucide-react";
import Link from "next/link";

export default function EarningsPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B1C2D] text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Franchise Earnings Potential
        </motion.h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Build a profitable tax & compliance business with ZAMEXO’s trusted brand,
          systems and national support.
        </p>
      </section>

      {/* WHY EARNINGS STRONG */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0B1C2D]">
          Why ZAMEXO Franchise is Highly Profitable?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Users />, title: "High Demand", desc: "GST & ITR filing required by every business & salaried individual." },
            { icon: <Briefcase />, title: "Multiple Services", desc: "Earn from GST, ITR, Company, ROC, Payroll & more." },
            { icon: <TrendingUp />, title: "Recurring Income", desc: "Monthly GST clients give steady repeated earnings." },
            { icon: <IndianRupee />, title: "Low Investment", desc: "Minimal setup cost, high margin service model." },
          ].map((item, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#D4AF37] text-[#0B1C2D] mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EARNING TABLE */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#0B1C2D]">
            Monthly Earnings Estimate
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md">
              <thead className="bg-[#0B1C2D] text-white">
                <tr>
                  <th className="p-4 text-left">Service</th>
                  <th className="p-4 text-center">Clients / Month</th>
                  <th className="p-4 text-center">Avg Fee</th>
                  <th className="p-4 text-right">Monthly Income</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b">
                  <td className="p-4">GST Returns</td>
                  <td className="p-4 text-center">50</td>
                  <td className="p-4 text-center">₹500</td>
                  <td className="p-4 text-right">₹25,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">ITR Filing</td>
                  <td className="p-4 text-center">40</td>
                  <td className="p-4 text-center">₹800</td>
                  <td className="p-4 text-right">₹32,000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Company / ROC</td>
                  <td className="p-4 text-center">8</td>
                  <td className="p-4 text-center">₹4,000</td>
                  <td className="p-4 text-right">₹32,000</td>
                </tr>
                <tr className="font-semibold bg-gray-100">
                  <td className="p-4">Estimated Total</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-center">—</td>
                  <td className="p-4 text-right">₹85,000+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            *Figures are indicative and may vary based on location & marketing efforts.
          </p>
        </div>
      </section>

      {/* GROWTH PATH */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0B1C2D]">
          Growth Path with ZAMEXO
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "Year 1", text: "Build local client base, start recurring GST clients" },
            { step: "Year 2", text: "Add company & compliance services, hire staff" },
            { step: "Year 3+", text: "Open multiple branches, manage franchise network" },
          ].map((g, i) => (
            <div
              key={i}
              className="border-l-4 border-[#D4AF37] bg-gray-50 p-6 rounded-xl"
            >
              <h4 className="font-bold mb-2">{g.step}</h4>
              <p className="text-sm text-gray-600">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Start Your Profitable Journey with ZAMEXO
        </h3>
        <p className="mb-8 text-gray-300">
          Join India’s fastest growing tax & compliance franchise network.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/franchise"
            className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
          >
            Apply for Franchise
          </Link>

          <Link
            href="/contact"
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#0B1C2D] transition"
          >
            Talk to Expert
          </Link>
        </div>
      </section>

    </main>
  );
}
