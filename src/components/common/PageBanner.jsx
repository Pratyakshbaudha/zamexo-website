import Image from "next/image";
import Link from "next/link";

export default function PageBanner({ title, subtitle, image }) {
  return (
    <section className="relative w-full h-64 md:h-80 lg:h-96">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-75"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-lg md:text-xl">{subtitle}</p>
        )}
        <div className="mt-4 flex gap-4">
          <Link
            href="/contact"
            className="bg-[#D4AF37] text-[#0B1C2D] px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
