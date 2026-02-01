"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  GraduationCap,
  Users,
  MapPin,
  Send,
  TrendingUp,
} from "lucide-react";

const jobs = [
  {
    title: "Tax Executive (GST & ITR)",
    type: "Full Time",
    location: "Multiple Cities",
  },
  {
    title: "Business Development Executive",
    type: "Full Time",
    location: "Regional Offices",
  },
  {
    title: "Franchise Support Manager",
    type: "Full Time",
    location: "Pan India",
  },
];



export default function CareersPage() {
  const router = useRouter();
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B1C2D] text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Careers at ZAMEXO
        </motion.h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Join India’s fast growing tax & compliance network and build a
          successful professional career with us.
        </p>
      </section>

      {/* WHY WORK WITH US */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#0B1C2D]">
          Why Build Your Career with ZAMEXO?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: TrendingUp,
              title: "Fast Growth",
              desc: "Work with a rapidly expanding Pan-India organization.",
            },
            {
              icon: GraduationCap,
              title: "Learning Culture",
              desc: "Regular training and skill development programs.",
            },
            {
              icon: Users,
              title: "Expert Team",
              desc: "Work with CA, CS and legal professionals.",
            },
            {
              icon: Briefcase,
              title: "Stable Career",
              desc: "Long-term growth with performance based promotions.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-gray-50 border rounded-xl p-6 shadow-sm"
              >
                <Icon className="text-[#D4AF37] mx-auto mb-4" size={30} />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="bg-gray-50 py-24">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#0B1C2D]">
      Current Openings
    </h2>

    <div className="space-y-6">
      {[
        { title: "Senior Tax Consultant", type: "Full-Time", location: "Mumbai" },
        { title: "GST Filing Executive", type: "Full-Time", location: "Delhi" },
        { title: "Accounting Specialist", type: "Part-Time", location: "Bangalore" },
        { title: "Startup Compliance Officer", type: "Full-Time", location: "Hyderabad" },
        { title: "CA / CS Assistant", type: "Internship", location: "Pune" },
        { title: "Payroll Executive", type: "Full-Time", location: "Chennai" },
        { title: "ITR Filing Expert", type: "Full-Time", location: "Kolkata" },
        { title: "MSME Consultant", type: "Part-Time", location: "Ahmedabad" },
        { title: "Legal Compliance Officer", type: "Full-Time", location: "Noida" },
        { title: "Business Development Associate", type: "Full-Time", location: "Bangalore" },
      ].map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between shadow-lg hover:shadow-2xl transition"
        >
          {/* Job Details */}
          <div>
            <h4 className="font-semibold text-lg md:text-xl text-gray-900">
              {job.title}
            </h4>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {job.type} • {job.location}
            </p>
          </div>

          {/* Apply Button */}
          
          <button
  onClick={() => router.push("/contact")} // 👉 content page route
  className="mt-4 md:mt-0 bg-gradient-to-r from-[#D4AF37] to-[#b9922c]
             text-[#0B1C2D] px-6 py-3 rounded-lg font-semibold transition
             shadow-md hover:from-[#b9922c] hover:to-[#D4AF37] hover:shadow-lg"
>
  Apply Now
</button>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* TRAINING & INTERNSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
  {/* Left Content */}
  <div>
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
      Training & Internship Programs
    </h2>
    <p className="text-gray-700 text-lg mb-4">
      ZAMEXO offers structured training and internship programs for commerce and finance
      students to gain real-world tax and compliance experience.
    </p>
    <ul className="space-y-2 text-gray-700">
      <li>✔ Practical GST & ITR training</li>
      <li>✔ Company compliance exposure</li>
      <li>✔ Certification after completion</li>
      <li>✔ Opportunity for full-time roles</li>
    </ul>
  </div>

  {/* Right Form */}
  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg">
    <h4 className="font-semibold text-lg mb-4 text-gray-900">
      Apply for Internship / Training
    </h4>

    <form className="grid gap-4">
      <input
        placeholder="Full Name"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />
      <input
        placeholder="Email"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />
      <input
        placeholder="Mobile Number"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />
      <input
        placeholder="City"
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      />
      <select
        className="w-full border border-gray-300 bg-white p-3.5 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
      >
        <option value="">Select Program</option>
        <option>GST Training</option>
        <option>ITR Training</option>
        <option>Compliance Internship</option>
      </select>

      <button
        type="submit"
        className="bg-gradient-to-r from-[#D4AF37] to-[#b9922c] text-[#0B1C2D] py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-[#b9922c] hover:to-[#D4AF37] transition shadow-md hover:shadow-lg"
      >
        <Send size={18} /> Submit Application
      </button>
    </form>
  </div>
</section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0B1C2D] to-[#1e3a5f] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Start Your Professional Journey with ZAMEXO
        </h3>
        <p className="mb-8 text-gray-300">
          Be part of India’s fastest growing tax & compliance service network.
        </p>

        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          Contact HR Team
        </a>
      </section>

    </main>
  );
}
