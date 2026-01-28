"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [franchiseOpen, setFranchiseOpen] = useState(false);

  const servicesData = [
    {
      category: "GST",
      items: [
        { name: "GST Registration", link: "/services/gst-registration" },
        { name: "GST Returns", link: "/services/gst-returns" },
        { name: "GST Notice Reply", link: "/services/gst-notice-reply" },
      ],
    },
    {
      category: "Income Tax",
      items: [
        { name: "ITR Filing", link: "/services/itr-filing" },
        { name: "Scrutiny Support", link: "/services/scrutiny-support" },
      ],
    },
    {
      category: "Company & Compliance",
      items: [
        { name: "Company Registration", link: "/services/company-registration" },
        { name: "ROC Filings", link: "/services/roc-compliance" },
        { name: "PF & ESIC", link: "/services/pf-esic" },
        { name: "MSME Registration", link: "/services/msme-registration" },
        { name: "IEC Registration", link: "/services/iec-registration" },
        { name: "Trademark Registration", link: "/services/trademark-registration" },
      ],
    },
    {
      category: "Business Support",
      items: [
        { name: "Bookkeeping", link: "/services/bookkeeping" },
        { name: "Payroll", link: "/services/payroll" },
        { name: "Virtual CFO", link: "/services/virtual-cfo" },
      ],
    },
  ];

  const franchiseData = [
    { name: "Franchise Models", link: "/franchise/models" },
    { name: "Earnings", link: "/franchise/earnings" },
    { name: "Franchise Form", link: "/franchise/form" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1C2D]/95 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo/logo-light2.png"
              alt="Zamexo Logo"
              width={150}
              height={75}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">

            <Link href="/" className="hover:text-[#D4AF37] transition">Home</Link>
            <Link href="/about" className="hover:text-[#D4AF37] transition">About</Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#D4AF37] transition">
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 top-full mt-4 w-[520px] bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                <div className="p-6 grid grid-cols-2 gap-6 text-sm">
                  {servicesData.map((group, i) => (
                    <div key={i}>
                      <p className="font-semibold text-[#0B1C2D] mb-2">{group.category}</p>
                      <div className="flex flex-col gap-2">
                        {group.items.map((item, j) => (
                          <Link
                            key={j}
                            href={item.link}
                            className="group/item flex items-center gap-2 p-2 rounded-lg hover:bg-[#0B1C2D]/5 transition"
                          >
                            <span className="h-2 w-2 rounded-full bg-[#D4AF37] opacity-0 group-hover/item:opacity-100 transition"></span>
                            <span className="text-gray-700 group-hover/item:text-[#0B1C2D]">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FRANCHISE DROPDOWN */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#D4AF37] transition">
                Franchise
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute left-0 top-full mt-4 w-48 bg-white rounded-2xl shadow-2xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                <div className="p-4 flex flex-col gap-2">
                  {franchiseData.map((item, i) => (
                    <Link
                      key={i}
                      href={item.link}
                      className="text-gray-700 hover:text-[#0B1C2D] p-2 rounded-lg hover:bg-[#0B1C2D]/5 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/blog" className="hover:text-[#D4AF37] transition">Blog</Link>
            <Link href="/careers" className="hover:text-[#D4AF37] transition">Careers</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link>

          </nav>

          {/* RIGHT ACTIONS */}
          <div className="hidden md:flex items-center gap-4">

            {/* LOGIN / SIGNUP */}
            <Link
              href="/login"
              className="border border-white px-5 py-2 rounded-lg font-semibold text-white hover:bg-white hover:text-[#0B1C2D] transition"
            >
              Login / Signup
            </Link>

            {/* SUPPORT BUTTON */}
            <Link
              href="/support"
              className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#0B1C2D] transition"
            >
              Support
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0B1C2D] text-white px-6 pb-6 shadow-xl max-h-[80vh] overflow-y-auto scroll-smooth">
          <nav className="flex flex-col gap-4 pt-4 font-medium">

            <Link onClick={() => setOpen(false)} href="/">Home</Link>
            <Link onClick={() => setOpen(false)} href="/about">About</Link>

            {/* MOBILE SERVICES */}
            <button onClick={() => setServiceOpen(!serviceOpen)} className="flex items-center justify-between">
              Services <ChevronDown className={`${serviceOpen ? "rotate-180" : ""} transition`} />
            </button>
            {serviceOpen && (
              <div className="ml-3 flex flex-col gap-4 text-sm text-gray-300">
                {servicesData.map((group, i) => (
                  <div key={i}>
                    <p className="text-white font-semibold mb-1">{group.category}</p>
                    <div className="ml-3 flex flex-col gap-2">
                      {group.items.map((item, j) => (
                        <Link key={j} onClick={() => setOpen(false)} href={item.link}>{item.name}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* MOBILE FRANCHISE */}
            <button onClick={() => setFranchiseOpen(!franchiseOpen)} className="flex items-center justify-between">
              Franchise <ChevronDown className={`${franchiseOpen ? "rotate-180" : ""} transition`} />
            </button>
            {franchiseOpen && (
              <div className="ml-3 flex flex-col gap-2 text-sm text-gray-300">
                {franchiseData.map((item, i) => (
                  <Link key={i} onClick={() => setOpen(false)} href={item.link}>{item.name}</Link>
                ))}
              </div>
            )}

            <Link onClick={() => setOpen(false)} href="/blog">Blog</Link>
            <Link onClick={() => setOpen(false)} href="/careers">Careers</Link>
            <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>

            {/* MOBILE ACTIONS */}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                onClick={() => setOpen(false)}
                href="/login"
                className="border border-white text-center py-2 rounded-lg font-semibold"
              >
                Login / Signup
              </Link>

              <Link
                onClick={() => setOpen(false)}
                href="/support"
                className="border border-[#D4AF37] text-[#D4AF37] text-center py-2 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-[#0B1C2D] transition"
              >
                Support
              </Link>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}
