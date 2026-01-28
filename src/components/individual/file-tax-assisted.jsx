"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  "Plan Overview",
  "Services Covered",
  "Process",
  "Documents",
  "FAQ",
  "Reviews",
];

export default function ServiceDetailPage() {
  const [active, setActive] = useState("Plan Overview");

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* LEFT CONTENT */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">

          <p className="text-sm text-gray-500 mb-1">Service / Individual</p>

          <h1 className="text-3xl font-bold mb-2">FILE TAX (Assisted)</h1>

          <p className="text-gray-600 mb-6">
            Get your return prepared & e-filed by our expert. Upload or email
            Form 16/16A and we take care of the rest.
          </p>

          {/* TABS */}
          <div className="flex gap-4 border-b mb-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`pb-2 font-medium whitespace-nowrap ${
                  active === tab
                    ? "border-b-2 border-black text-black"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}

          {active === "Plan Overview" && (
            <div className="space-y-4 text-gray-700">
              <p>
                Get your return prepared & e-filed by our expert. Upload or email
                Form 16/16A and we take care of the rest.
              </p>
            </div>
          )}

          {active === "Services Covered" && (
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>ITR filing for Form 16 & Salary &lt; 50L</li>
              <li>Reviewed by tax expert</li>
              <li>Phone & Chat Support (10am–6pm)</li>
              <li>Pre-filled ITR from multiple sources</li>
              <li>Secure Tax Vault for documents</li>
            </ul>
          )}

          {active === "Process" && (
            <div className="space-y-4">
              <p><b>Step 1:</b> Upload documents on vault</p>
              <p><b>Step 2:</b> Review tax computation sheet</p>
              <p><b>Step 3:</b> Get ITR after e-filing</p>
            </div>
          )}

          {active === "Documents" && (
            <ul className="list-disc pl-5 space-y-2">
              <li>Form 16</li>
              <li>AIS (Annual Information System)</li>
              <li>Form 26AS</li>
              <li>Rental Income Details</li>
              <li>Salary Slip</li>
            </ul>
          )}

          {active === "FAQ" && (
            <div className="space-y-4">
              <p className="font-semibold">What is Tax Optimizer?</p>
              <p className="text-gray-700">
                Tax Optimizer helps you plan and save more tax within your CTC by
                restructuring income and investments legally.
              </p>

              <p className="font-semibold">
                Why is return filing mandatory?
              </p>
              <p className="text-gray-700">
                Filing return is mandatory even if taxes are paid to report your
                income officially to IT department.
              </p>
            </div>
          )}

          {active === "Reviews" && (
            <div className="space-y-6">
              <div className="border p-4 rounded">
                <p className="font-semibold">Y Krishna</p>
                <p className="text-gray-600 text-sm">
                  Very professional service. CA guided me properly and filing
                  was smooth.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* RIGHT PRICE BOX */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">

          <p className="text-lg font-semibold mb-2">FILE TAX (Assisted)</p>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl font-bold text-green-600">₹499</span>
            <span className="line-through text-gray-400">₹899</span>
            <span className="text-sm text-red-600 font-semibold">44% OFF</span>
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Package valid for 3 days from purchase date
          </p>

          {/* <Link
            href="/services/individual/file-tax-assisted"
            className="block text-center bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Buy Now
          </Link>
 */}
          <p className="text-xs text-gray-500 mt-3">
            Secure payment • Expert assisted filing
          </p>

        </div>

      </div>
    </section>
  );
}
