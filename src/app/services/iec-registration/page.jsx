"use client";
import CallbackPage from "@/components/home/CallbackForm";
import { useState } from "react";
import {
  Globe,
  TrendingUp,
  BadgeCheck,
  FileText,
  ShieldCheck,
  Building2,
  Send,
  PhoneCall,
  Ship,
} from "lucide-react";
import ZamexoHeroBanner from "@/components/ZamexoHeroBanner";

export default function IECRegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    business: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="bg-white">

{/* ================= HERO ================= */}
<ZamexoHeroBanner
  title="IEC Registration for Import Export Business in India"
  subtitle="Start your international trade journey with Import Export Code (IEC). Get fast, hassle-free IEC registration with expert support from ZAMEXO across India."
  primaryBtn="Apply for IEC"
  secondaryBtn="Consult Trade Expert"
  image="/images/hero-import-export.gif"
/>

{/* ================= WHAT IS IEC ================= */}
<section className="py-24 px-6 max-w-7xl mx-auto">
  <div className="grid md:grid-cols-2 gap-14 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-6">
        What is Import Export Code (IEC)?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4">
        Import Export Code (IEC) is a 10-digit business identification number
        issued by the Directorate General of Foreign Trade (DGFT), Government of
        India. It is mandatory for any business involved in import or export of
        goods or services from India.
      </p>

      <p className="text-gray-600 leading-relaxed mb-4">
        Without IEC, no importer can clear customs and no exporter can receive
        foreign payments into their bank account.
      </p>

      <p className="text-gray-600 leading-relaxed">
        IEC is a lifetime registration and does not require annual renewal.
      </p>
    </div>

    <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border">
      <h4 className="font-semibold text-xl mb-6 text-[#0B1C2D]">
        Who Needs IEC Registration?
      </h4>
      <ul className="space-y-3 text-gray-700">
        <li className="flex gap-2"><Ship size={18}/> Importers of Goods</li>
        <li className="flex gap-2"><Ship size={18}/> Exporters of Goods</li>
        <li className="flex gap-2"><Globe size={18}/> Service Exporters</li>
        <li className="flex gap-2"><Building2 size={18}/> Manufacturers Exporting Directly</li>
        <li className="flex gap-2"><TrendingUp size={18}/> Online Sellers Selling Abroad</li>
        <li className="flex gap-2"><BadgeCheck size={18}/> Merchant Exporters</li>
      </ul>
    </div>
  </div>
</section>

{/* ================= BENEFITS ================= */}
<section className="bg-gray-50 py-24 px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1C2D] mb-14">
    Benefits of IEC Registration
  </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
    {[
      ["Global Market Access", "Sell your products and services across international borders legally.", Globe],
      ["Government Export Schemes", "Avail benefits under export promotion schemes and incentives.", BadgeCheck],
      ["Easy Bank Transactions", "Smooth foreign currency receipts and remittances.", ShieldCheck],
      ["Customs Clearance", "Mandatory requirement for import and export clearance.", FileText],
      ["Business Expansion", "Expand customer base beyond India and increase revenue.", TrendingUp],
      ["Lifetime Validity", "No renewal required once IEC is issued.", Building2],
    ].map(([t, d, I], i) => (
      <div key={i} className="bg-white p-8 rounded-2xl border shadow hover:shadow-xl transition">
        <I className="text-[#D4AF37] mb-4" size={34} />
        <h4 className="font-semibold text-lg text-[#0B1C2D] mb-2">{t}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{d}</p>
      </div>
    ))}
  </div>
</section>

{/* ================= DOCUMENTS ================= */}
<section className="py-24 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1C2D] mb-12">
    Documents Required for IEC Registration
  </h2>

  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {[
      "PAN Card of Individual or Business",
      "Aadhaar Card of Applicant",
      "Cancelled Cheque or Bank Certificate",
      "Business Address Proof",
      "Digital Photograph of Applicant",
      "Class 3 DSC (in some cases)",
    ].map((d, i) => (
      <div key={i} className="bg-gray-50 border p-5 rounded-xl flex gap-3 items-start">
        <BadgeCheck className="text-[#D4AF37] mt-1" size={18} />
        <span className="text-gray-700">{d}</span>
      </div>
    ))}
  </div>
</section>

{/* ================= PROCESS ================= */}
<section className="bg-[#0B1C2D] text-white py-24 px-6">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
    IEC Registration Process with ZAMEXO
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
    {[
      ["Submit Details", "Share PAN, Aadhaar and business details."],
      ["Document Verification", "Experts verify documents as per DGFT rules."],
      ["Online DGFT Filing", "IEC application filed on DGFT portal."],
      ["Certificate Issued", "IEC number and certificate delivered by email."],
    ].map(([t, d], i) => (
      <div key={i} className="bg-white/10 p-7 rounded-xl">
        <p className="font-bold mb-2 text-lg">Step {i + 1}</p>
        <p className="font-semibold mb-1">{t}</p>
        <p className="text-sm text-gray-300">{d}</p>
      </div>
    ))}
  </div>
</section>

{/* ================= WHY ZAMEXO ================= */}
<section className="py-24 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#0B1C2D]">
    Why Choose ZAMEXO for IEC Registration?
  </h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      ["Expert Trade Consultants", "Handled by professionals experienced in export-import compliance."],
      ["Fast Turnaround Time", "Most IEC registrations completed within 24–48 hours."],
      ["End-to-End Support", "From application to certificate delivery and post-registration guidance."],
      ["Affordable Pricing", "Transparent and budget-friendly professional charges."],
      ["Pan India Service", "We serve exporters and importers across all states."],
      ["Dedicated Relationship Manager", "Personal support for every business client."],
    ].map(([t, d], i) => (
      <div key={i} className="bg-gray-50 p-8 rounded-2xl border shadow hover:shadow-xl transition">
        <ShieldCheck className="text-[#D4AF37] mb-4" size={30} />
        <h4 className="font-semibold text-lg mb-2 text-[#0B1C2D]">{t}</h4>
        <p className="text-gray-600 text-sm">{d}</p>
      </div>
    ))}
  </div>
</section>
<CallbackPage/>
{/* ================= LEAD FORM ================= */}
{/* <section className="max-w-4xl mx-auto py-28 px-6">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0B1C2D] mb-3">
      Apply for IEC Registration Today
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Submit your details and our trade compliance experts will connect with you shortly.
    </p>
  </div>

  <form className="bg-white p-10 md:p-12 rounded-2xl shadow-xl border grid gap-6">
    {[
      ["name","Full Name"],
      ["phone","Mobile Number"],
      ["email","Email Address"],
      ["city","City"],
    ].map(([n,l])=>(
      <div key={n}>
        <label className="text-sm font-medium">{l}</label>
        <input name={n} onChange={handleChange} placeholder={`Enter your ${l.toLowerCase()}`}
          className="w-full border mt-1 p-3 rounded focus:ring-2 focus:ring-[#D4AF37]/50"/>
      </div>
    ))}

    <div>
      <label className="text-sm font-medium">Business Type</label>
      <select name="business" onChange={handleChange}
        className="w-full border mt-1 p-3 rounded focus:ring-2 focus:ring-[#D4AF37]/50">
        <option>Select Business Type</option>
        <option>Proprietorship</option>
        <option>Partnership</option>
        <option>LLP</option>
        <option>Private Limited</option>
      </select>
    </div>

    <button className="bg-[#D4AF37] text-[#0B1C2D] py-3.5 rounded-xl font-semibold flex justify-center gap-2 items-center">
      <Send size={18}/> Submit Application
    </button>

    <p className="text-xs text-center text-gray-500">
      🔒 Your information is safe & confidential.
    </p>
  </form>
</section> */}

{/* ================= CTA ================= */}
<section className="bg-gray-900 text-white py-20 text-center px-6">
  <h3 className="text-3xl font-bold mb-4">
    Take Your Business Global with ZAMEXO
  </h3>
  <p className="text-gray-400 mb-6">
    Start importing and exporting legally with IEC registration today.
  </p>
  <a
    href="/contact"
    className="bg-[#D4AF37] text-black px-8 py-3 rounded-xl font-semibold inline-flex gap-2"
  >
    <PhoneCall size={18}/> Talk to Trade Expert
  </a>
</section>

</main>
);
}
