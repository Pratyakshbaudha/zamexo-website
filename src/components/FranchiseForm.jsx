// "use client";

// import { useState } from "react";
// import { Send } from "lucide-react";
// import FranchiseModels from "@/components/franchise/FranchiseModels";
// import Earnings from "@/components/franchise/Earnings";

// export default function FranchisePage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     model: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/lead", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...formData, type: "franchise" }),
//       });
//       if (res.ok) {
//         setSubmitted(true);
//         setFormData({ name: "", email: "", phone: "", city: "", model: "", message: "" });
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <main className="bg-white">

//       {/* HERO SECTION */}
//       <section
//         className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: "url('/images/home/franchise-banner.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative text-center px-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Start Your Franchise Journey with ZAMEXO
//           </h1>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Become part of India’s fastest growing tax & compliance network. Choose a franchise model that suits you and grow with expert support.
//           </p>
//         </div>
//       </section>

//       {/* FRANCHISE MODELS */}
//       <FranchiseModels />

//       {/* EARNINGS SECTION */}
//       <Earnings />

//       {/* FRANCHISE FORM */}
//       <section className="bg-gray-50 py-20 px-6 md:px-12">
//         <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
//           <h2 className="text-3xl font-bold text-[#0B1C2D] mb-6 text-center">
//             Join ZAMEXO Franchise
//           </h2>
//           <p className="text-gray-600 text-center mb-8">
//             Fill out this form and our franchise support team will get in touch with you.
//           </p>

//           {submitted && (
//             <div className="bg-green-100 text-green-800 p-4 mb-6 rounded-lg text-center">
//               Thank you! Our team will contact you soon.
//             </div>
//           )}

//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-6"
//           >
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Full Name"
//               required
//               className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email"
//               required
//               className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Mobile Number"
//               required
//               className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
//             />
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               placeholder="City"
//               required
//               className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
//             />
//             <select
//               name="model"
//               value={formData.model}
//               onChange={handleChange}
//               required
//               className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none"
//             >
//               <option value="">Select Franchise Model</option>
//               <option value="Standard">Standard Franchise</option>
//               <option value="Premium">Premium Franchise</option>
//               <option value="Exclusive">Exclusive Franchise</option>
//             </select>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message (Optional)"
//               className="border p-3 rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none md:col-span-2"
//               rows={4}
//             />
//             <button
//               type="submit"
//               className="md:col-span-2 bg-[#D4AF37] text-[#0B1C2D] py-3 rounded-xl font-semibold hover:bg-yellow-400 transition flex justify-center items-center gap-2"
//             >
//               <Send size={18} /> Submit Application
//             </button>
//           </form>
//         </div>
//       </section>

//     </main>
//   );
// }
