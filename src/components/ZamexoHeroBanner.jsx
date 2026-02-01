"use client";

export default function ZamexoHeroBanner({
  title = "India’s Trusted Tax & Compliance Partner",
  subtitle = "GST, ITR, Company Registration and complete business compliance — all under one roof with ZAMEXO experts.",
  primaryBtn = "Book Free Consultation",
  secondaryBtn = "Talk to Expert",
  image = "/images/hero-tax.gif",
}) {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#0B1C2D] mb-6">
            {title}
          </h1>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="/contact"
              className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition shadow-md"
            >
              {primaryBtn}
            </a>

            <a
              href="/contact"
              className="border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3 rounded-xl font-semibold hover:bg-[#0B1C2D] hover:text-white transition"
            >
              {secondaryBtn}
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Zamexo Services Banner"
            className="w-full max-w-md lg:max-w-xl object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
