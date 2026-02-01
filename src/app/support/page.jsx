"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SupportPage() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Header ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">
            ZAMEXO Support Center
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            One Nation, One Tax Desk — Get fast, reliable support for all your tax and compliance needs.
          </p>
        </motion.div>

        {/* ===== Support Options ===== */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">

          {[
            {
              title: "Client Support",
              desc: "Get help with GST, ITR, Accounting, ROC, Notices and more.",
              link: "/contact",
              btn: "Raise a Request"
            },
            {
              title: "Partner Support",
              desc: "Existing partners can get technical, compliance and lead support.",
              link: "/partner-support",
              btn: "Partner Login"
            },
            {
              title: "Sales & Pricing Help",
              desc: "Know service plans, packages and offers for your business.",
              link: "/pricing",
              btn: "View Pricing"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <Link
                href={item.link}
                className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
              >
                {item.btn}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ===== How Support Works ===== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How Zamexo Support Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              "Submit Requirement",
              "Professional Assigned",
              "Upload Documents",
              "Work Done & Reports"
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <div className="text-3xl font-bold text-yellow-500 mb-3">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== FAQs ===== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "Do I need to visit any office?",
                a: "No. All services are fully online with secure document upload and tracking."
              },
              {
                q: "Who will handle my tax work?",
                a: "Your case is handled by verified CA, CS or tax professionals from our national network."
              },
              {
                q: "Is my data safe?",
                a: "Yes. We use encrypted systems and secure dashboards for all documents."
              },
              {
                q: "Can professionals join Zamexo?",
                a: "Yes. Tax professionals across India can partner with Zamexo."
              }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h4 className="font-semibold text-gray-800 mb-2">{f.q}</h4>
                <p className="text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===== Contact CTA ===== */}
        <motion.div
          className="bg-yellow-50 p-12 rounded-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-4">
            Need Immediate Assistance?
          </h3>
          <p className="text-gray-700 mb-6">
            Our support team is ready to help you with any tax or compliance query.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              WhatsApp Support
            </a>
            <a
              href="/contact"
              className="bg-yellow-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-yellow-600 transition"
            >
              Contact Form
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
