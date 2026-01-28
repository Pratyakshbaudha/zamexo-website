"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "GST Updates",
  "Income Tax",
  "Business Compliance",
  "Startup Guides",
  "Franchise",
  "Accounting",
];

const featuredPost = {
  title: "GST Return Filing: Common Mistakes Small Businesses Must Avoid",
  excerpt:
    "Many small businesses face penalties due to minor GST filing mistakes. Learn the most common errors and how to avoid them for smooth compliance.",
  date: "10 Jan 2026",
  category: "GST Updates",
  image: "/images/featured-gst.jpg",
  slug: "/blog/gst-return-mistakes",
};

const posts = [
  {
    title: "ITR Filing for Salaried Employees: Step-by-Step Guide",
    excerpt:
      "Understand how salaried individuals can file income tax returns correctly and claim all eligible deductions.",
    date: "08 Jan 2026",
    category: "Income Tax",
    image: "/images/itr-guide.jpg",
    slug: "/blog/itr-filing-guide",
  },
  {
    title: "When Should You Register for GST?",
    excerpt:
      "Know the turnover limits, special cases and penalties related to delayed GST registration.",
    date: "06 Jan 2026",
    category: "GST Updates",
    image: "/images/gst-registration.jpg",
    slug: "/blog/gst-registration-rules",
  },
  {
    title: "ROC Compliance Calendar for Private Limited Companies",
    excerpt:
      "Missing ROC deadlines can lead to heavy penalties. Here is your yearly compliance checklist.",
    date: "04 Jan 2026",
    category: "Business Compliance",
    image: "/images/roc-calendar.jpg",
    slug: "/blog/roc-compliance-calendar",
  },
  {
    title: "How Startups Can Save Tax Legally in India",
    excerpt:
      "Explore tax exemptions, DPIIT benefits and structuring tips for early-stage startups.",
    date: "02 Jan 2026",
    category: "Startup Guides",
    image: "/images/startup-tax.jpg",
    slug: "/blog/startup-tax-saving",
  },
  {
    title: "Benefits of Outsourcing Accounting Services",
    excerpt:
      "Learn how outsourcing bookkeeping improves compliance and reduces operational costs.",
    date: "30 Dec 2025",
    category: "Accounting",
    image: "/images/accounting.jpg",
    slug: "/blog/outsourcing-accounting",
  },
  {
    title: "Why ZAMEXO Franchise is a Profitable Business Model",
    excerpt:
      "Low investment, recurring clients and full support make ZAMEXO franchise an attractive option.",
    date: "28 Dec 2025",
    category: "Franchise",
    image: "/images/franchise.jpg",
    slug: "/blog/franchise-benefits",
  },
];

export default function BlogPage() {
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
          ZAMEXO Knowledge Hub
        </motion.h1>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          Latest updates, expert guides and compliance tips for businesses,
          startups and taxpayers across India.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="border border-[#0B1C2D] text-[#0B1C2D] px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-[#0B1C2D] hover:text-white transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 border rounded-2xl p-6 shadow"
        >
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-sm text-[#D4AF37] mb-2">
              <Tag size={14} /> {featuredPost.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#0B1C2D]">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar size={14} /> {featuredPost.date}
              </span>
              <Link
                href={featuredPost.slug}
                className="text-[#0B1C2D] font-semibold flex items-center gap-1 hover:underline"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* LATEST POSTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
  <h2 className="text-3xl font-bold mb-12 text-center text-[#0B1C2D]">
    Latest Articles
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {posts.map((post, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.05 }}
        className="
          bg-white
          border border-gray-200
          rounded-2xl
          overflow-hidden
          shadow-sm
          hover:shadow-2xl
          hover:-translate-y-1
          transition-all duration-300 ease-out
        "
      >
        {/* IMAGE */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
            {post.category}
          </span>

          <h4 className="font-bold text-lg mt-2 mb-2 text-[#0B1C2D] leading-snug">
            {post.title}
          </h4>

          <p className="text-sm text-gray-700 mb-5 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 flex items-center gap-1 font-medium">
              <Calendar size={12} /> {post.date}
            </span>

            <Link
              href={post.slug}
              className="
                text-sm font-semibold text-[#0B1C2D]
                hover:text-[#D4AF37]
                transition-colors duration-200
              "
            >
              Read More →
            </Link>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* NEWSLETTER CTA */}
      <section className="bg-gradient-to-r from-[#0B1C2D] to-[#1e3a5f] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">
            Get Compliance Updates in Your Inbox
          </h3>
          <p className="text-gray-300 mb-8">
            Subscribe to receive latest GST, Income Tax and business compliance
            updates directly from ZAMEXO experts.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-5 py-3 rounded-xl text-black w-full sm:w-80"
            />
            <button className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition flex items-center justify-center gap-2">
              <Mail size={18} /> Subscribe
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
