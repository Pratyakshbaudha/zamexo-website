"use client";
import {
  FileText,
  MessageCircle,
  BarChart3,
  Target,
  Database,
  ShieldCheck,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Online Service Request System",
    desc: "Clients can submit service requests 24/7 through secure online forms with instant routing to concerned teams.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Instant Chat Support",
    desc: "Floating WhatsApp chat button enables real-time communication and higher inquiry conversion.",
  },
  {
    icon: BarChart3,
    title: "Google Analytics & Search Console",
    desc: "Track website traffic, conversions and SEO performance with full Google integration.",
  },
  {
    icon: Target,
    title: "Meta Pixel Ad Tracking",
    desc: "Advanced Facebook & Instagram ad tracking with remarketing and audience optimization.",
  },
  {
    icon: Database,
    title: "Automatic Lead Management",
    desc: "All form submissions are auto-saved into CRM or Google Sheets for organized follow-ups.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Handling",
    desc: "Client data and documents are protected using encrypted systems and secure storage.",
  },
  {
    icon: Settings,
    title: "Centralized Expert Processing",
    desc: "All compliance handled by qualified CA & legal experts from central processing unit.",
  },
];

export default function SpecialFeatures() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1C2D] mb-4">
            Smart Features That Power Your Business
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our digital-first platform ensures faster service delivery, better
            lead management and scalable franchise operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition"
            >
              <item.icon className="text-[#D4AF37] mb-5" size={36} />
              <h3 className="text-lg font-bold text-[#0B1C2D] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
