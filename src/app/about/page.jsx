"use client";

// import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  MapPin,
  Award,
  Briefcase,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#0B1C2D] text-white py-24 text-center px-6">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">
    About ZAMEXO Tax Solutions
  </h1>
  <p className="max-w-3xl mx-auto text-gray-300 text-lg">
    Building India’s most trusted Pan-India Tax & Compliance Network for individuals, startups, and businesses. Empowering entrepreneurs with expert support, technology, and nationwide reach.
  </p>
</section>

{/* WHO WE ARE */}
<section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
  <div>
    <h2 className="text-3xl font-bold text-[#0B1C2D] mb-4">Who We Are</h2>
    <p className="text-gray-600 text-lg leading-relaxed mb-4">
      ZAMEXO Tax Solutions is a premier tax, accounting, and compliance platform designed to simplify GST, Income Tax, Company Registration, ROC filings, Payroll, PF/ESIC, and bookkeeping services for businesses across India.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed mb-4">
      Our mission is to make compliance easy, affordable, and reliable by connecting clients with verified Chartered Accountants, Company Secretaries, and legal experts through a centralized service ecosystem.
    </p>
    <p className="text-gray-600 text-lg leading-relaxed">
      Founded by experienced industry professionals, ZAMEXO combines deep domain knowledge, technology-driven solutions, and a Pan-India presence to serve startups, SMEs, and large enterprises with unmatched reliability.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 gap-6">
    {[ 
      { icon: Users, title: "Expert Professionals", desc: "Team of CA, CS & Legal Advisors" },
      { icon: ShieldCheck, title: "100% Compliance", desc: "Accurate & legally compliant services" },
      { icon: MapPin, title: "Pan-India Network", desc: "Presence across 30+ cities" },
      { icon: Award, title: "Quality Assurance", desc: "Centralized review & audit system" },
    ].map((item, i) => {
      const Icon = item.icon;
      return (
        <div key={i} className="bg-gray-50 p-6 rounded-xl border shadow-sm">
          <Icon className="text-[#D4AF37] mb-3" size={28} />
          <h4 className="font-semibold mb-1">{item.title}</h4>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
      );
    })}
  </div>
</section>


    {/* MISSION VISION VALUES */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0B1C2D]">
      Our Mission, Vision & Core Values
    </h2>

    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          icon: Target,
          title: "Our Mission",
          desc: "To simplify tax, accounting, and compliance for Indian businesses. We leverage expert-driven solutions, technology, and real-time advisory to help entrepreneurs save time, reduce errors, and focus on growth. Every service is designed to deliver accuracy, reliability, and peace of mind.",
        },
        {
          icon: Eye,
          title: "Our Vision",
          desc: "To build India’s largest, most trusted tax & compliance network across cities. We aim to empower franchise partners and clients alike, creating a scalable ecosystem where every business receives top-quality professional support, locally and nationally.",
        },
        {
          icon: ShieldCheck,
          title: "Our Values",
          desc: "Integrity, transparency, customer success, innovation, and continuous improvement guide every decision at ZAMEXO. We focus on ethical practices, professional excellence, and empowering businesses through knowledge and technology.",
        },
        {
          icon: Users,
          title: "Expert Team",
          desc: "Our qualified CA, CS, and legal advisors bring decades of combined experience. They ensure 100% compliance, provide advisory for complex tax scenarios, and help clients navigate regulatory frameworks confidently.",
        },
        {
          icon: MapPin,
          title: "Pan-India Presence",
          desc: "With operations across 30+ cities, ZAMEXO ensures local support for all clients. Businesses nationwide can access professional compliance services without geographical limitations.",
        },
        {
          icon: Award,
          title: "Quality & Recognition",
          desc: "We are committed to excellence through centralized audits, client satisfaction metrics, and continual training for our professionals. Our approach guarantees consistent, high-quality service across all locations.",
        },
      ].map((v, i) => {
        const Icon = v.icon;
        return (
          <div
            key={i}
            className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-200 text-center transform transition hover:-translate-y-3 hover:shadow-2xl hover:border-[#D4AF37] duration-500"
          >
            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition duration-500">
              <Icon className="text-[#D4AF37] group-hover:text-white transition duration-500" size={32} />
            </div>
            <h4 className="font-semibold text-xl mb-4 text-[#0B1C2D] group-hover:text-[#D4AF37] transition duration-500">{v.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>
      {/* FOUNDER EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 py-28 space-y-28">

  {/* ===== BLOCK 1 ===== */}
  <div className="grid lg:grid-cols-2 gap-14 items-center">
    <div>
      <h2 className="text-4xl font-bold text-[#0B1C2D] mb-6">
        Strong Foundation of Professional Expertise
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4 transform transition duration-300 hover:scale-[1.02]">
  ZAMEXO Tax Solutions was founded by professionals with deep knowledge of
  taxation, accounting, and business compliance. The leadership team has
  worked closely with startups, MSMEs, and growing enterprises across
  multiple industries.
</p>

<p className="text-gray-700 text-lg leading-relaxed transform transition duration-300 hover:scale-[1.02]">
  This strong foundation ensures that every service is built on practical
  experience, legal accuracy, and business-friendly solutions.
</p>

    </div>

   <div className="flex justify-center overflow-hidden rounded-3xl">
  <img
    src="/images/founder-1.webp"
    alt="Professional Expertise"
    className="rounded-3xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-110"
  />
</div>
  </div>

  {/* ===== BLOCK 2 (ZIG ZAG) ===== */}
  <div className="grid lg:grid-cols-2 gap-14 items-center">
    <div className="order-2 lg:order-1 flex justify-center overflow-hidden rounded-3xl">
  <img
    src="/images/founder-2.webp"
    alt="Business Advisory Experience"
    className="w-full max-w-md rounded-3xl shadow-2xl transform transition duration-500 ease-out hover:scale-110"
  />
</div>


    <div className="order-1 lg:order-2">
      <h3 className="text-3xl font-bold text-[#0B1C2D] mb-6">
        Real-World Business Advisory Experience
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Our founder has personally guided thousands of clients in GST filing,
        Income Tax returns, company incorporation, payroll systems, and labour
        law compliance including PF and ESIC.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        This hands-on experience allows ZAMEXO to design service models that are
        not only legally correct but also cost-effective and scalable for
        growing businesses.
      </p>
    </div>
  </div>

  {/* ===== BLOCK 3 ===== */}
  <div className="grid lg:grid-cols-2 gap-14 items-center">
    <div>
      <h3 className="text-3xl font-bold text-[#0B1C2D] mb-6">
        Visionary Leadership with Growth Mindset
      </h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        The core vision behind ZAMEXO is to create a nationwide professional
        ecosystem where businesses can access trusted compliance services from
        any city in India.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        By combining technology platforms, centralized quality checks, and
        franchise-based local presence, ZAMEXO ensures consistent service
        delivery and long-term business partnerships.
      </p>

      {/* STATS */}
      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { value: "10+ Years", label: "Industry Experience" },
          { value: "5000+", label: "Clients Guided" },
          { value: "30+ Cities", label: "Pan-India Reach" },
        ].map((s, i) => (
          <div
            key={i}
            className="bg-gray-50 border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
          >
            <p className="text-2xl font-bold text-[#D4AF37]">{s.value}</p>
            <p className="text-sm text-gray-600 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center">
      <img
        src="/images/founder-3.webp"
        alt="Growth Vision"
        className="rounded-3xl shadow-2xl w-full max-w-md"
      />
    </div>
  </div>

</section>


{/* ===== PROFESSIONAL SUPPORT NETWORK ===== */}
<section className="bg-gray-50 py-28 px-6">
  <div className="max-w-7xl mx-auto space-y-24">

    {/* ===== TOP INTRO ===== */}
    <div className="text-center">
      <h2 className="text-4xl font-bold text-[#0B1C2D] mb-6">
        Powered by a Strong CA, CS & Legal Expert Network
      </h2>
      <p className="max-w-4xl mx-auto text-gray-600 text-lg leading-relaxed">
        At ZAMEXO, every client is supported by certified professionals who
        specialize in taxation, corporate compliance, and legal advisory. Our
        structured expert network ensures that all filings, registrations, and
        advisory services meet statutory requirements with complete accuracy.
      </p>
    </div>

    {/* ===== ZIG ZAG BLOCK ===== */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* IMAGE */}
      <div className="flex justify-center">
        <img
          src="/images/professional-team.webp"
          alt="CA CS Advocate Support Network"
          className="rounded-3xl shadow-2xl w-full max-w-xl"
        />
      </div>

      {/* CONTENT */}
      <div>
        <h3 className="text-3xl font-bold text-[#0B1C2D] mb-6">
          Multi-Layer Professional Support System
        </h3>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          ZAMEXO operates on a centralized professional model where every case
          is assigned to domain-specific experts. Whether it is GST, ITR, ROC,
          payroll, or labour compliance, your work is handled by specialists in
          that area.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          All submissions go through internal quality checks before final
          filing, ensuring zero errors, reduced notices, and full legal
          protection for businesses.
        </p>

        {/* MINI POINTS */}
        <ul className="space-y-3 text-gray-700">
          {[
            "Dedicated CA for taxation and audit cases",
            "CS handling company law and ROC filings",
            "Legal experts for labour and regulatory matters",
            "Centralized compliance review system",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <ShieldCheck className="text-[#D4AF37] mt-1" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* ===== EXPERT CARDS ===== */}
    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          icon: Users,
          title: "Chartered Accountants (CA)",
          desc: "GST filing, Income Tax returns, audits, financial reporting, and strategic tax planning handled by qualified CAs.",
        },
        {
          icon: GraduationCap,
          title: "Company Secretaries (CS)",
          desc: "Company incorporation, ROC filings, annual compliance, board resolutions, and corporate governance.",
        },
        {
          icon: BookOpen,
          title: "Legal Advisors",
          desc: "Labour law compliance, notices, drafting agreements, and regulatory advisory for businesses.",
        },
        {
          icon: ShieldCheck,
          title: "Verified Professionals",
          desc: "All experts are verified, experienced, and continuously trained to meet changing regulations.",
        },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={i}
            className="group bg-white rounded-3xl p-8 border shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500"
          >
            <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#D4AF37] transition">
              <Icon className="text-[#D4AF37] group-hover:text-white transition" size={28} />
            </div>
            <h4 className="font-semibold text-lg mb-3 text-[#0B1C2D]">
              {item.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        );
      })}
    </div>

    {/* ===== TRUST METRICS ===== */}
    <div className="bg-white rounded-3xl shadow-xl border p-10">
      <div className="grid md:grid-cols-4 text-center gap-8">
        {[
          { value: "1000+", label: "Professional Experts" },
          { value: "50,000+", label: "Cases Handled" },
          { value: "99.8%", label: "Compliance Accuracy" },
          { value: "24x7", label: "Support Assistance" },
        ].map((m, i) => (
          <div key={i}>
            <p className="text-3xl font-bold text-[#D4AF37]">{m.value}</p>
            <p className="text-gray-600 mt-1">{m.label}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

      {/* PAN-INDIA GROWTH VISION */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0B1C2D] mb-6">Pan-India Growth Vision</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-10">
          ZAMEXO is expanding rapidly across India, aiming to provide quality tax, accounting, and compliance services to businesses in every city. Our Pan-India growth ensures accessibility, reliability, and local support for all clients.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            "30+ Cities Coverage",
            "1000+ Certified Professionals",
            "1M+ Clients Served",
            "Nationwide Franchise Opportunities",
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 border rounded-xl p-6 w-60 shadow-md">
              <p className="font-bold text-[#D4AF37] mb-2">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#0B1C2D] to-[#1e3a5f] text-white py-20 text-center px-6">
        <h3 className="text-3xl font-bold mb-4">Partner with ZAMEXO Today</h3>
        <p className="mb-8 text-gray-300">
          Whether you are a business owner, aspiring franchise partner, or looking for expert compliance solutions, ZAMEXO is your trusted growth partner.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/services/individual"
            className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
          >
            Explore Services
          </a>

          <a
            href="#"
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#0B1C2D] transition"
          >
            Become a Franchise Partner
          </a>
        </div>
      </section>

    </main>
  );
}
