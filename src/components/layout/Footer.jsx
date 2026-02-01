import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2D] text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ===== COMPANY INFO ===== */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            ZAMEXO TAX SOLUTIONS
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            One Nation, One Tax Desk. Zamexo provides complete tax, compliance
            and business support services across India with expert CA/CS
            assistance.
          </p>

          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-[#D4AF37] transition"><Facebook size={18} /></a>
            <a href="#" className="hover:text-[#D4AF37] transition"><Instagram size={18} /></a>
            <a href="#" className="hover:text-[#D4AF37] transition"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-[#D4AF37] transition"><Twitter size={18} /></a>
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#D4AF37]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#D4AF37]">Services</Link></li>
            <li><Link href="/franchise" className="hover:text-[#D4AF37]">Franchise</Link></li>
            <li><Link href="/careers" className="hover:text-[#D4AF37]">Careers</Link></li>
            <li><Link href="/blog" className="hover:text-[#D4AF37]">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-[#D4AF37]">Contact</Link></li>
          </ul>
        </div>

        {/* ===== SERVICES ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/gst-registration" className="hover:text-[#D4AF37]">GST Registration</Link></li>
            <li><Link href="/services/gst-returns" className="hover:text-[#D4AF37]">GST Returns</Link></li>
            <li><Link href="/services/itr-filing" className="hover:text-[#D4AF37]">ITR Filing</Link></li>
            <li><Link href="/services/company-registration" className="hover:text-[#D4AF37]">Company Registration</Link></li>
            <li><Link href="/services/trademark-registration" className="hover:text-[#D4AF37]">Trademark Registration</Link></li>
            <li><Link href="/services/bookkeeping" className="hover:text-[#D4AF37]">Bookkeeping</Link></li>
            <li><Link href="/services/virtual-cfo" className="hover:text-[#D4AF37]">Virtual CFO</Link></li>
          </ul>
        </div>

        {/* ===== CONTACT INFO ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#D4AF37] mt-1" />
              <span>
                Head Office: New Delhi, India <br />
                (Pan India Services)
              </span>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#D4AF37]" />
              <span>+91 9410269960, +91 9560394109</span>
            </li>

           <li className="flex items-center gap-2">
  <Mail size={16} className="text-[#D4AF37]" />
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@zamexo.in"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline text-white"
  >
    info@zamexo.in
  </a>
</li>


          </ul>

          <Link
            href="/contact"
            className="inline-block mt-4 bg-[#D4AF37] text-[#0B1C2D] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Book Consultation
          </Link>
        </div>

      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10 mt-12 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Zamexo Tax Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}
