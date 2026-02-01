"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    q: "What services does your platform provide?",
    a: "We provide end-to-end tax and compliance services including Income Tax Return (ITR) filing, GST registration and returns, company incorporation, MSME registration, and other legal and business compliance services."
  },
  {
    q: "What is online ITR filing?",
    a: "Online ITR filing means submitting your income tax return electronically through the government portal with the help of our assisted and self-filing services."
  },
  {
    q: "Who is required to file an Income Tax Return in India?",
    a: "Any individual or business whose income exceeds the basic exemption limit or who meets other mandatory conditions as per the Income Tax Act must file an ITR."
  },
  {
    q: "How can I file my Income Tax Return through your website?",
    a: "You can submit your details on our website, upload the required documents, and our tax experts will prepare and file your return on your behalf."
  },
  {
    q: "What happens if I miss the ITR filing deadline?",
    a: "You can file a belated return with applicable late fees and interest as per government rules, within the allowed time limit."
  },
  {
    q: "Can I file ITR without Form 16?",
    a: "Yes, you can file your return using salary slips, bank statements, and Form 26AS even if Form 16 is not available."
  },
  {
    q: "If TDS is already deducted, do I still need to file ITR?",
    a: "Yes, if your total income exceeds the exemption limit, filing an ITR is mandatory even if TDS has been deducted by your employer or bank."
  },
  {
    q: "What are the penalties for not filing ITR?",
    a: "Non-filing of ITR may attract late fees, interest on tax due, and disallowance of certain benefits such as carry-forward of losses."
  },
  {
    q: "What should I do after filing my ITR?",
    a: "After filing, you must verify your return within the prescribed time using Aadhaar OTP, net banking, or other available methods."
  },
  {
    q: "Is my personal and financial data secure on your website?",
    a: "Yes, we use secure systems and industry-standard data protection practices to ensure your personal and financial information remains safe."
  },
  {
    q: "What GST services do you provide?",
    a: "We offer GST registration, monthly and quarterly return filing, compliance support, advisory services, and assistance with GST notices."
  },
  {
    q: "Do you provide support for business registrations?",
    a: "Yes, we assist with company registration, LLP registration, MSME (Udyam) registration, and other business setup services."
  }
];
  
export default function FAQSection() {
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Support Line */}
        <p className="text-center text-gray-600 mb-6 pt-0 pb-10 text-4xl font-bold">
          For additional assistance, contact our customer support or visit our FAQ section.
        </p>

        <div className="flex justify-center mb-10">
          <Image
            src="/images/faq-banner.png"
            alt="Customer Support"
            width={320}
            height={180}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3 text-[#0B1C2D]">
          Trusted by <span className="text-red-600">1 Million+</span> Individuals and Businesses in India
        </h2>

        <p className="text-center text-[#0B1C2D] mb-14 text-5xl font-bold">
          Frequently Asked Questions
        </p>

        {/* FAQ List */}
        <div className="space-y-5">
          {visibleFaqs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-800 text-base md:text-lg">
                  {item.q}
                </span>
                {open === i ? (
                  <Minus className="text-red-600" />
                ) : (
                  <Plus className="text-red-600" />
                )}
              </button>

              {open === i && (
                <div className="px-6 pb-5 text-gray-600">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More / Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>

      </div>
    </section>
  );
}
