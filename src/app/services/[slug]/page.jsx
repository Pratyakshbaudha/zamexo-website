import Link from "next/link";

const individualPlans = [
  {
    title: "FILE TAX (Assisted)",
    slug: "file-tax-assisted",
    price: "₹ 499",
    bestFor: "Assisted Tax Return E-Filing",
  },
  {
    title: "Foreign Income Solution",
    slug: "foreign-income-solution",
    price: "₹ 3,999",
    bestFor: "Foreign Income Solution", 
  },
  {
    title: "FILE & SAVE TAX (CA Assisted)",
    slug: "file-save-tax-ca",
    price: "₹ 1,299",
    bestFor: "CA Assisted Tax Filing & Saving",
  },
];

export default function IndividualServicesPage() {
  return (
    
    <section className="py-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Individual Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {individualPlans.map((plan, i) => (
          <div
            key={i}
            className="border rounded-2xl p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
            <p className="text-gray-600 mb-2">{plan.bestFor}</p>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>

            <Link
              href={`/services/${plan.slug}`}
              className="inline-block bg-[#D4AF37] px-6 py-2 rounded-lg font-semibold"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
