"use client";

import { motion } from "framer-motion";
import {
  Building2,
  TrendingUp,
  Headset,
  Users,
  BadgeCheck,
  Wallet,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Store,
  CheckCircle,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "High Profit Business Model",
    desc: "Earn recurring income from GST, ITR, ROC, Accounting & compliance services with strong monthly margins.",
  },
  {
    icon: Building2,
    title: "National Brand Power",
    desc: "Leverage ZAMEXO’s trusted brand, marketing campaigns, and centralized lead generation support.",
  },
  {
    icon: Headset,
    title: "Complete Backend by Experts",
    desc: "All cases handled by qualified CA, CS & legal professionals — you focus only on sales & clients.",
  },
  {
    icon: Users,
    title: "Training & Growth Support",
    desc: "Sales training, product certification, onboarding and continuous business mentoring.",
  },
  {
    icon: Wallet,
    title: "Low Investment, Fast ROI",
    desc: "Start with minimal setup and recover investment within few months with scalable growth.",
  },
  {
    icon: BadgeCheck,
    title: "Risk-Free Compliance",
    desc: "Central quality control ensures every filing is accurate and legally compliant.",
  },
];

export default function FranchiseInvitationPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* ================= HERO INVITATION ================= */}
      <section className="relative bg-gradient-to-br from-[#071422] to-[#0B1C2D] text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
          >
            Join India’s Fastest Growing  
            <span className="text-[#D4AF37]"> Tax & Compliance Franchise Network</span>
          </motion.h1>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Start your own profitable business with ZAMEXO and deliver professional
            tax services in your city with full backend support from experts.
          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <a
              href="#franchise-form"
              className="bg-[#D4AF37] text-[#0B1C2D] px-12 py-4 rounded-xl font-bold hover:bg-yellow-400 transition"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="border border-white px-12 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#0B1C2D] transition"
            >
              Speak with Advisor
            </a>
          </div>
        </div>
      </section>

      {/* ================= TRUST STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "30+", label: "Cities Network" },
            { value: "1000+", label: "Tax Professionals" },
            { value: "10L+", label: "Clients Served" },
            { value: "18+ Years", label: "Industry Experience" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl border p-8 text-center">
              <p className="text-4xl font-extrabold text-[#D4AF37] mb-1">{item.value}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO CAN JOIN ================= */}
      <section className="py-28 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-14 text-[#0B1C2D]">
          Who Can Become a ZAMEXO Partner?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Briefcase, title: "Business Owners" },
            { icon: GraduationCap, title: "Students & Graduates" },
            { icon: Store, title: "Shop Owners" },
            { icon: Users, title: "Consultants & Agents" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white border rounded-2xl p-8 shadow-lg">
                <Icon className="mx-auto text-[#D4AF37]" size={40} />
                <p className="mt-4 font-semibold text-[#0B1C2D]">{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#0B1C2D]">
            Why ZAMEXO Franchise is Best Business Opportunity
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
                >
                  <div className="w-16 h-16 rounded-2xl bg-yellow-100 flex items-center justify-center mb-6">
                    <Icon className="text-[#D4AF37]" size={32} />
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-[#0B1C2D]">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EARNING POTENTIAL ================= */}
      <section className="py-28 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-14 text-[#0B1C2D]">
          Monthly Earning Potential
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Beginner", income: "₹30,000 – ₹50,000" },
            { title: "Growing Partner", income: "₹75,000 – ₹1.5 Lakh" },
            { title: "Top Franchise", income: "₹3 Lakh +" },
          ].map((e, i) => (
            <div key={i} className="bg-white border rounded-3xl shadow-xl p-10">
              <CheckCircle className="mx-auto text-[#D4AF37]" size={36} />
              <h3 className="mt-4 font-bold text-xl">{e.title}</h3>
              <p className="mt-2 text-lg font-semibold text-[#0B1C2D]">{e.income}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section id="franchise-form" className="bg-[#0B1C2D] py-28 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Start Your Franchise Journey
          </h2>

          <form className="grid md:grid-cols-2 gap-6 bg-white text-black p-12 rounded-3xl shadow-2xl">
            <input className="border p-4 rounded-lg" placeholder="Full Name" />
            <input className="border p-4 rounded-lg" placeholder="Mobile Number" />
            <input className="border p-4 rounded-lg" placeholder="Email Address" />
            <input className="border p-4 rounded-lg" placeholder="City" />

            <select className="border p-4 rounded-lg md:col-span-2">
              <option>Select Franchise Model</option>
              <option>Associate Partner</option>
              <option>Office Franchise</option>
              <option>Master Franchise</option>
            </select>

            <button className="md:col-span-2 bg-[#D4AF37] text-[#0B1C2D] py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition">
              Submit Application
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
