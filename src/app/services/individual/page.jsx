"use client";

import Link from "next/link";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

const services = [
  {
    tag: "FILE TAX",
    title: "FILE TAX (Assisted)",
    price: "₹ 499",
    oldPrice: "₹ 899",
    off: "44% OFF",
    bestFor: "Assisted Tax Return E-Filing",
    points: [
      "ITR filing for Form 16 & Salary < ₹50L",
      "Pre-filled ITR",
      "Tax Vault for easy access",
      "Package valid for 3 days from purchase date",
    ],
  },
  {
    tag: "SAVE TAX",
    title: "Foreign Income Solution",
    price: "₹ 3,999",
    bestFor: "Foreign Income Solution",
    points: [
      "ITR e-filing by CA for DTAA / Foreign Tax Relief",
      "Tax Optimizer Report",
      "60 minutes Consulting",
      "Package valid for 3 days from purchase date",
    ],
  },
  {
    tag: "SAVE TAX",
    title: "FILE & SAVE TAX (CA Assisted)",
    price: "₹ 1,299",
    oldPrice: "₹ 1,499",
    // off: "13% OFF",
    bestFor: "CA Assisted Tax Filing & Saving",
    points: [
      "ITR filing for Form 16 & Salary < ₹50L",
      "Tax Optimizer Report",
      "Tax Vault for easy access",
      "Package valid for 3 days from purchase date",
    ],
  },
  {
    tag: "SAVE TAX",
    title: "FILE & PLAN TAX (CA Assisted)",
    price: "₹ 2,999",
    bestFor: "Tax Saving Recommendations",
    points: [
      "ITR filing for Form 16 & Salary < ₹50L",
      "Tax Optimizer Report",
      "60 minutes Consulting",
      "Package valid for 3 days from purchase date",
    ],
  },
  {
    tag: "OPTIMIZE TAX",
    title: "Tax Optimizer (Dedicated CA)",
    price: "₹ 6,999",
    bestFor: "Full Year Dedicated CA Access",
    points: [
      "All features of File & Plan Tax",
      "Tax Saving Recommendations",
      "180 minutes Consulting",
    ],
  },
  {
    tag: "AUDIT TAX",
    title: "Audit Filing",
    price: "₹ 14,999",
    bestFor: "When you have F&O Trading",
    points: [
      "Balance Sheet & P&L (upto 300 entries)",
      "Income from shares / ESOP / Mutual Funds",
      "Email support (24 hrs TAT)",
    ],
  },
  {
    tag: "AUDIT TAX",
    title: "IT Department Follow-up",
    price: "₹ 3,849",
    oldPrice: "₹ 5,499",
    // off: "30% OFF",
    bestFor: "To respond to ITD Notice",
    points: [
      "Discussion with CA on ITD notice",
      "180 minutes Consulting",
      "Expert level ITD response",
    ],
  },
  {
    tag: "FILE TAX",
    title: "FILE TAX (Self) ITR-1 & ITR-4",
    price: "₹ 249",
    bestFor: "Self Filing of Income Tax Return",
    points: [
      "Pre-filled data from IT Department",
      "Auto-read Form-16",
    ],
  },
  {
    tag: "OPTIMIZE TAX",
    title: "Capital Gains (CA Assisted)",
    price: "₹ 2,499",
    bestFor: "Capital Gain Returns",
    points: [
      "Salary + Capital Gain Filing",
      "Tax Optimizer Report",
      "20 minutes Consulting",
    ],
  },
  {
    tag: "FILE TAX",
    title: "FILE TAX (Live ITR – Assisted)",
    price: "₹ 1,499",
    bestFor: "Live Filing with Expert",
    points: [
      "Live filing via Zoom / Google Meet",
      "Single or multiple Form-16",
      "Package validity: 24 hours",
    ],
  },
  {
    tag: "FILE TAX",
    title: "Capital Gains (Live ITR)",
    price: "₹ 2,999",
    oldPrice: "₹ 3,999",
    // off: "25% OFF",
    bestFor: "Capital Gains Live Filing",
    points: [
      "Live expert filing in 1 hour",
      "Capital Gains / ESOP / RSU",
      "Package validity: 24 hours",
    ],
  },
  {
    tag: "FILE TAX",
    title: "Foreign Income (Live ITR)",
    price: "₹ 6,999",
    oldPrice: "₹ 7,999",
    // off: "13% OFF",
    bestFor: "Multiple Country Income",
    points: [
      "DTAA & multi-country taxation",
      "Live expert filing",
      "Package validity: 48 hours",
    ],
  },
  {
    tag: "KAR SE GHAR",
    title: "Kar Se Ghar – Basic Plan",
    price: "₹ 5,499",
    bestFor: "Home Loan & Tax Planning",
    points: [
      "20-year home loan profitability report",
      "60 min CA consultation",
      "Tax Optimizer + Wealth Report",
    ],
  },
  {
    tag: "KAR SE GHAR",
    title: "Kar Se Ghar – Plus Plan",
    price: "₹ 9,999",
    bestFor: "Complete Financial Planning",
    points: [
      "Wealth & CTC restructuring report",
      "ITR filing support",
      "180 min one-to-one CA session",
    ],
  },
  {
    tag: "OPTIMIZE TAX",
    title: "Tax & Goal Optimizer",
    price: "₹ 10,499",
    oldPrice: "₹ 14,999",
    // off: "30% OFF",
    bestFor: "Complete Tax & Investment Planning",
    points: [
      "Dedicated CA + Tax Planning",
      "Investments & expenses optimization",
      "Notice review & submission",
      "F&O / Capital Gains covered",
    ],
  },
  {
    tag: "FILE TAX",
    title: "ITR-U (Updated Return)",
    price: "₹ 2,799",
    oldPrice: "₹ 3,999",
    // off: "30% OFF",
    bestFor: "Late Return Correction",
    points: [
      "Salary + Capital Gain filing",
      "Tax Optimizer Report",
      "30 min Consulting",
    ],
  },
  {
    tag: "OPTIMIZE TAX",
    title: "Tax Planning – DIY",
    price: "₹ 104",
    oldPrice: "₹ 149",
    // off: "30% OFF",
    bestFor: "Self Tax Planning",
    points: [
      "Custom tax saving report",
      "Salary + Home Loan + Other income",
      "Do it yourself",
    ],
  },
  {
    tag: "FILE TAX",
    title: "File Tax Assisted (ITR-4)",
    price: "₹ 0",
    bestFor: "Freelancers & Small Businesses",
    points: [
      "Presumptive Scheme (44AD / 44ADA)",
      "AIS/TIS + Bank verification",
      "Dedicated support + Tax Vault",
    ],
  },
];

export default function ZamnexoServicesPage() {
  return (
    <section className="bg-white">

      {/* HERO */}
      <ZamexoHeroBanner
        title="Zamnexo Tax Solution — Trusted GST & Income Tax Experts"
        subtitle="From ITR filing to tax planning and compliance, Zamnexo Tax Solution delivers accurate, fast and professional services across India."
        primaryBtn="Get Started"
        secondaryBtn="Talk to Expert"
        image="/images/hero-tax.gif"
      />

      {/* SERVICES */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14 text-[#0B1C2D]">
          Our <span className="text-[#D4AF37]">Tax & Compliance Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {services.map((item, i) => (
            <div
              key={i}
              className="relative bg-white border rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all overflow-hidden"
            >
              {/* TAG */}
              <div className="absolute top-0 left-0 bg-[#D4AF37] text-[#0B1C2D] px-5 py-2 text-sm font-bold rounded-br-2xl">
                {item.tag}
              </div>

              {/* DOT PATTERN */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(212,175,55,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />

              <div className="p-8 pt-14 flex flex-col h-full">

                <h3 className="font-bold text-2xl mb-4 text-[#0B1C2D]">
                  {item.title}
                </h3>

                <div className="bg-gray-50 rounded-2xl p-5 mb-4">
                  {item.oldPrice && (
                    <span className="line-through text-gray-400 mr-2 text-sm">
                      {item.oldPrice}
                    </span>
                  )}
                  <span className="text-3xl font-extrabold text-[#0B1C2D]">
                    {item.price}
                  </span>
                  <span className="text-sm font-semibold ml-1">/-</span>

                  {item.off && (
                    <span className="ml-3 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                      {item.off}
                    </span>
                  )}
                </div>

                <p className="mb-2 text-sm">
                  <b>Best for:</b> {item.bestFor}
                </p>

                <ul className="text-sm text-gray-700 space-y-2 mb-8">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-green-600 font-bold">✔</span> {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 text-center bg-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
                  >
                    Buy Now
                  </Link>

                  {/* <Link
                    href="/contact"
                    className="flex-1 text-center border border-[#D4AF37] py-3 rounded-xl hover:bg-[#D4AF37] hover:text-[#0B1C2D] transition"
                  >
                    Know More
                  </Link> */}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
