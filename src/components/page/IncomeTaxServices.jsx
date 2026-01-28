"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";

const individualPlans = [
  {
    tag: "FILE TAX",
    title: "FILE TAX (Assisted)",
    slug: "file-tax-assisted",
    oldPrice: "₹ 899",
    price: "₹ 499",
    off: "44% OFF",
    bestFor: "Assisted Tax Return E-Filing",
    points: [
      "ITR filing for Form 16 & Salary < ₹50L",
      "Pre-filled ITR",
      "Tax vault for easy access",
      "Package valid for 3 days from purchase date",
    ],
  },
  {
    tag: "SAVE TAX",
    title: "Foreign Income Solution",
    slug: "foreign-income-solution",
    price: "₹ 3,999",
    bestFor: "Foreign Income Solution",
    points: [
      "ITR E-filing by CA for DTAA / Foreign Tax Relief",
      "Tax Optimizer Report",
      "60 minutes Consulting",
      "Package valid for 3 days from purchase date",
    ],
  },
  {
    tag: "SAVE TAX",
    title: "FILE & SAVE TAX (CA Assisted)",
    slug: "file-save-tax-ca",
    oldPrice: "₹ 1,499",
    price: "₹ 1,299",
    off: "13% OFF",
    bestFor: "CA Assisted Tax Filing & Saving",
    points: [
      "ITR filing for Form 16 & Salary < ₹50L",
      "Tax Optimizer Report",
      "Tax vault for easy access",
      "Package valid for 3 days from purchase date",
    ],
  },
];

const businessPlans = [
  {
    tag: "GST",
    title: "REGISTER GST",
    slug: "register-gst",
    price: "₹ 1,499",
    bestFor: "When you Launch your Business",
    points: [
      "Filing of Registration Application",
      "Follow up till GSTIN received & compliance",
      "GST Invoice Formats",
    ],
  },
  {
    tag: "FILE TAX",
    title: "FILE TAX (Business/Freelancer)",
    slug: "file-tax-business",
    price: "₹ 999",
    bestFor: "Business/Freelancer to file ITR",
    points: [
      "Pre-filled ITR for E-filing",
      "Tax vault for easy access",
      "Email support (48 hours TAT)",
    ],
  },  
  {
    tag: "TDS",
    title: "TDS Returns & Compliance (Presumptive)",
    slug: "tds-returns",
    price: "₹ 1,999",
    bestFor: "Presumptive Income Filing",
    points: [
      "Pre-filled ITR reviewed by CA",
      "Tax vault for easy access",
      "Email support (48 hours TAT)",
      "Package valid for 3 days from purchase date",
    ],
  },
];

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState("individual");
  const plans = activeTab === "individual" ? individualPlans : businessPlans;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#111110]">Services</h2>

          {/* ===== TABS ===== */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">

            <button
              onClick={() => setActiveTab("individual")}
              className={`px-6 py-3 rounded-xl border transition
                ${activeTab === "individual" ? "border-yellow-500 text-[#b48d0c] bg-yellow-50" : ""}`}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <Icons.individual className="w-8 h-8 text-[#0c0c0c]" />
                <p className="font-semibold text-amber-500">For Individuals</p>
              </div>
              <p className="text-sm text-gray-600">File ITR in 3 minutes & create wealth</p>
            </button>

            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 py-3 rounded-xl border transition
                ${activeTab === "business" ? "border-[#b38e17] text-[#b38e17] bg-blue-50" : ""}`}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <Icons.business className="w-8 h-8 text-[#0c0c0c]" />
                <p className="font-semibold text-yellow-600">For Business / Professionals</p>
              </div>
              <p className="text-sm text-gray-600">Income Tax & GST Solutions</p>
            </button>

          </div>
        </div>

        {/* ===== CARDS ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {plans.map((plan, i) => (
  <div
    key={i}
    className="relative bg-white border rounded-3xl shadow-lg hover:shadow-2xl transition overflow-hidden min-h-[520px]"
  >
    {/* ===== TOP LEFT RIBBON ===== */}
    <div className="absolute top-0 left-0 bg-[#D4AF37] text-[#0B1C2D] px-5 py-2 text-sm font-bold rounded-br-2xl z-10">
      {plan.tag}
    </div>

    {/* Soft Pattern */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(212,175,55,0.15)_1px,transparent_1px)] [background-size:18px_18px]" />

    <div className="p-8 flex flex-col h-full pt-14">

      {/* TITLE */}
      <h3 className="font-bold text-2xl mb-4 text-[#0B1C2D] leading-snug">
        {plan.title}
      </h3>

      {/* PRICE BOX */}
      <div className="bg-gray-50 rounded-2xl p-5 mb-5">
        {plan.oldPrice && (
          <span className="line-through text-gray-400 mr-2 text-sm">
            {plan.oldPrice}
          </span>
        )}
        <span className="text-3xl font-extrabold text-[#0B1C2D]">
          {plan.price}
        </span>
        <span className="text-sm font-semibold ml-1">/-</span>

        {plan.off && (
          <span className="ml-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            {plan.off}
          </span>
        )}
      </div>

      {/* BEST FOR */}
      <p className="text-base mb-3">
        <b>Best for:</b> {plan.bestFor}
      </p>

      <p className="font-semibold text-base mb-2">This includes:</p>

      {/* POINTS */}
      <ul className="text-base text-gray-700 space-y-2 mb-8">
        {plan.points.map((p, j) => (
          <li key={j} className="flex gap-2">
            <span className="text-green-600 font-bold">✔</span> {p}
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <div className="mt-auto">
        <Link
          href="/contact"
          className="block w-full text-center bg-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-bold text-lg hover:bg-yellow-400 transition"
        >
          Buy Now
        </Link>
      </div>
    </div>
  </div>
))}

          
        </div>

        {/* ===== CENTERED VIEW MORE BUTTON ===== */}
        <div className="mt-12 text-center">
          <Link
            href={activeTab === "individual" ? "/services/individual" : "/services/business"}
            className="px-15 py-5 bg-[#D4AF37] text-[#0B1C2D] font-semibold rounded-lg hover:bg-yellow-400 transition"
          >
            View More
          </Link>
        </div>

      </div>
    </section>
  );
}
