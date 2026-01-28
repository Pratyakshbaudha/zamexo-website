import Image from "next/image";

export default function GstBlogPage() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ===== Header ===== */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-600 font-semibold mb-2">GST Updates</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GST Return Filing: Common Mistakes Small Businesses Must Avoid
          </h1>
          <p className="text-gray-600">
            Many small businesses face penalties due to minor GST filing mistakes.
            Learn the most common errors and how to avoid them for smooth compliance.
          </p>
        </div>

        {/* ===== Section 1 ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Invoice Mismatch Issues
            </h2>
            <p className="text-gray-700 leading-relaxed">
              One of the most common mistakes is mismatching invoices with supplier
              data. If your purchase records do not match your supplier’s GSTR-1,
              your Input Tax Credit (ITC) may get blocked, leading to financial loss.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/gst-invoice.jpg"   // 👈 apni image ka path
              alt="GST Invoice Matching"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ===== Section 2 (Reverse) ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/gst-deadline.jpg"
              alt="GST Filing Deadline"
              fill
              className="object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Missing Filing Deadlines
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Late GST return filing attracts penalties and interest. Repeated
              delays may also lead to notices from the GST department and
              suspension of GST registration in extreme cases.
            </p>
          </div>
        </div>

        {/* ===== Section 3 ===== */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Incorrect Tax Classification
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Selecting the wrong GST category or tax rate can create serious
              compliance problems. It can result in short payment of tax and
              future legal complications.
            </p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/gst-calculation.jpg"
              alt="GST Calculation Error"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* ===== How to Avoid Section ===== */}
        <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How Small Businesses Can Avoid GST Mistakes
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            <li className="flex gap-3">
              ✅ Regularly reconcile invoices with suppliers
            </li>
            <li className="flex gap-3">
              ✅ Use reliable GST accounting software
            </li>
            <li className="flex gap-3">
              ✅ Track filing deadlines with reminders
            </li>
            <li className="flex gap-3">
              ✅ Consult GST professionals when needed
            </li>
          </ul>

          <p className="text-center text-gray-600 mt-8">
            Proper GST compliance ensures smooth business operations and protects
            you from unnecessary financial penalties.
          </p>
        </div>

      </div>
    </section>
  );
}
