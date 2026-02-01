"use client";

import {
  ShieldCheck,
  Users,
  BriefcaseBusiness,
  MapPin,
  Headset,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "100% Compliance & Accuracy",
    desc: "All GST, ITR and compliance filings are reviewed by expert CAs to ensure legal accuracy.",
  },
  {
    icon: Users,
    title: "Dedicated Expert Support",
    desc: "Personal tax experts with phone & WhatsApp assistance for every client.",
  },
  {
    icon: BriefcaseBusiness,
    title: "End-to-End Business Services",
    desc: "Company formation, GST, ROC, payroll and accounting — all under one roof.",
  },
  {
    icon: MapPin,
    title: "Pan India Service Network",
    desc: "Serving clients across multiple cities with centralized quality control.",
  },
  {
    icon: Headset,
    title: "Fast Turnaround Time",
    desc: "Most services delivered within 24–72 hours with regular updates.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused Advisory",
    desc: "We help startups and businesses save tax and grow with confidence.",
  },
];

export default function WhyZamexoSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-4">
            Why ZAMEXO Tax Solutions?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            ZAMEXO is building a Pan-India tax and compliance network to provide
            simple, affordable and reliable services for individuals, startups
            and growing businesses.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { value: "18+", label: "Years of Experience" },
              { value: "1M+", label: "Clients Served" },
              { value: "1000+", label: "Tax Experts" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-5 text-center border"
              >
                <p className="text-2xl font-bold text-[#D4AF37]">{s.value}</p>
                <p className="text-sm text-gray-600 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border shadow-lg p-6 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-[#D4AF37]" size={26} />
                </div>
                <h4 className="font-semibold text-[#0B1C2D] mb-1">
                  {f.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
