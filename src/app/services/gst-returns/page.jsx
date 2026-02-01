"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

export default function GSTReturnsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("GST Returns Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      {/* <section className="relative h-[50vh] w-full">
        <Image
          src="/images/home/hero.jpg"
          alt="GST Returns"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GST Returns Filing
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Hassle-free monthly, quarterly, and annual GST Returns filing for small businesses and startups across India.
          </p>
        </div>
      </section> */}
      <ZamexoHeroBanner
  title="Hassle-Free GST Return Filing with ZAMEXO Experts"
  subtitle="Monthly, Quarterly & Annual GST Returns filed accurately by certified tax professionals. Stay compliant and avoid penalties with our Pan-India GST support."
  primaryBtn="File GST Return Now"
  secondaryBtn="Talk to GST Expert"
  image="/images/hero-tax.gif" // apni relevant image yahan rakho
/>


      {/* WHY GST RETURNS WITH ZAMEXO */}
     <section className="max-w-7xl mx-auto px-6 py-20 text-center">
  <h2 className="text-3xl font-bold text-[#bb930f] mb-12">
    Why Choose ZAMEXO for GST Returns?
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      {
        title: "100% Accurate GST Filing",
        desc: "We ensure precise filing of GSTR-1, GSTR-3B and Annual Returns to help you avoid late fees, penalties, and compliance issues. Every return is double-checked by professionals before submission.",
        img: "/images/accuracy.png",
      },
      {
        title: "Dedicated CA & GST Experts",
        desc: "Your filings are handled by experienced Chartered Accountants and GST specialists who monitor deadlines, resolve queries, and guide you at every stage of compliance.",
        img: "/images/ca-support.png",
      },
      {
        title: "Pan-India Online Service",
        desc: "No matter where your business is located, our online process allows you to file GST returns smoothly with full support across all states in India.",
        img: "/images/india-service.png",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="
          group bg-white border border-gray-200 rounded-2xl p-8 
          shadow-md transition-all duration-300
          hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37]
        "
      >
        {/* IMAGE */}
        <div className="flex justify-center mb-6">
  <div className="bg-[#0B1C2D]/5 p-4 rounded-full group-hover:bg-[#D4AF37]/20 transition">
    <img
      src={item.img}
      alt={item.title}
      className="w-50 h-50 object-contain"
    />
  </div>
</div>

        {/* TEXT */}
        <h3 className="font-bold text-xl mb-3 text-[#0B1C2D] group-hover:text-[#D4AF37] transition">
          {item.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* HOW IT WORKS */}
     <section className="bg-gray-50 py-10 px-6 pt-0.4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] text-center mb-16">
      GST Returns Process at ZAMEXO
    </h2>

    {[
      {
        title: "Submit Your GST Data",
        desc: "Submit your sales invoices, purchase bills, bank statements (if required), and GST login details securely via our encrypted online portal or official WhatsApp support. Our dedicated compliance team verifies every document for completeness and maintains strict confidentiality protocols to protect your business data from day one.Share your sales invoices, purchase details, and GST credentials securely through our online system or WhatsApp. Our team ensures complete data confidentiality and accuracy from day one.",
        img: "/images/upload-docs.webp",
      },
      {
        title: "Expert Reconciliation by CAs",
        desc: " Our team of qualified Chartered Accountants performs detailed reconciliation of your sales and purchase records with GST portal data such as GSTR-2B and GSTR-1. By identifying mismatches, ineligible ITC, and reporting errors at an early stage, we help you avoid departmental notices, interest liabilities, and costly penalties.Our Chartered Accountants reconcile your purchase and sales data with GST portal records to detect mismatches and reduce risk of notices or penalties.",
        img: "/images/ca-review.png",
      },
      {
        title: "Draft Return Review",
        desc: " Before final submission, we provide you with a detailed draft of your GST returns showing tax liability, input tax credit, and invoice summaries. You can review all figures, verify transactions, and request corrections if needed, ensuring complete transparency and confidence before filing on the GST portal.Before final submission, we share a draft of your GST returns so you can review figures and confirm details with full transparency.",
        img: "/images/review.png",
      },
      {
        title: "Timely GST Return Filing",
        desc: "We file your GSTR-1, GSTR-3B, and all applicable GST returns well before the statutory due dates. Our proactive filing approach helps you avoid late fees, interest charges, and compliance risks, while ensuring uninterrupted input tax credit flow and a clean compliance record with the GST department. We file your GSTR-1, GSTR-3B and applicable returns well before due dates to help you avoid late fees and interest charges.",
        img: "/images/file-online.png",
      },
      {
        title: "Post-Filing Support & Compliance",
        desc: "After successful filing, we continue to support you with GST notices, return amendments, annual returns, and ongoing compliance advisory. Our experts assist in replying to departmental communications, correcting errors, and planning future filings, ensuring your business remains fully compliant with evolving GST regulations at all times. After filing, we provide continuous assistance for notices, amendments, annual returns and advisory to keep your business fully compliant.",
        img: "/images/support.png",
      },
    ].map((step, i) => (
      <div
        key={i}
        className={`grid md:grid-cols-2 gap-10 items-center mb-20 ${
          i % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
          <span className="text-[#D4AF37] font-bold text-lg">
            Step {i + 1}
          </span>
          <h3 className="text-2xl font-bold text-[#0B1C2D] mt-2 mb-4 ">
            {step.title}
          </h3>
          <p
  className="
    text-gray-600 leading-relaxed text-lg
    transition-all duration-500 ease-out
    hover:scale-[1.02]
    hover:text-gray-800
  "
>
  {step.desc}
</p>

        </div>

        {/* IMAGE */}
        <div className={`${i % 2 !== 0 ? "md:order-1" : ""} flex justify-center`}>
          <img
            src={step.img}
            alt={step.title}
            className="
        w-full max-w-sm object-contain
        transition-transform duration-500 ease-out
        hover:scale-110
      "
          />
        </div>
      </div>
    ))}
  </div>
</section>
      {/* CONTACT FORM */}
     {/* CONSULTATION INFO CARD (NO FORM) */}
<section className="bg-gray-50 py-20 px-6 pt-0.5">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT (SAME AS BEFORE) */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
        Get Started with Hassle-Free GST Returns
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Partner with ZAMEXO’s experienced GST professionals for accurate, timely,
        and fully compliant GST return filing. We simplify GST compliance so you
        can focus on growing your business.
      </p>

      <ul className="space-y-4 text-gray-700">
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Monthly, Quarterly & Annual GST Returns
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Dedicated CA & GST Expert Support
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Error-Free Filing & ITC Reconciliation
        </li>
        <li className="flex items-start gap-3">
          <span className="text-[#D4AF37] text-xl">✔</span>
          Pan-India Online Service
        </li>
      </ul>
    </div>

    {/* RIGHT PROFESSIONAL CARD */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10">
      <h3 className="text-2xl font-bold text-[#0B1C2D] mb-4">
        Free GST Consultation by Experts
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">
        Speak directly with our GST specialists and Chartered Accountants to
        understand your return filing requirements, deadlines, ITC eligibility,
        and compliance risks — absolutely free.
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            Applicable for Regular, Composition & Nil Returns
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            Guidance on GSTR-1, GSTR-3B & Annual Returns
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />
          <p className="text-gray-700">
            ITC reconciliation & mismatch resolution support
          </p>
        </div>
      </div>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/contact"
          className="flex-1 text-center bg-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          Talk to GST Expert
        </a>

        <a
          href="tel:+91XXXXXXXXXX"
          className="flex-1 text-center border border-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold hover:bg-[#D4AF37]/10 transition"
        >
          Call Now
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center">
        🔒 100% Confidential | No Obligation | Trusted by Businesses Across India
      </p>
    </div>

  </div>
</section>


      {/* CTA */}
      <section className="bg-[#0B1C2D] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">
          Need Assistance with GST Returns?
        </h3>
        <p className="mb-8 text-gray-300">
          Our experts will guide you through compliance and filing, ensuring peace of mind.
        </p>
        <a
          href="/contact"
          className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
        >
          Contact ZAMEXO
        </a>
      </section>
    </main>
  );
}
