// import { AlertTriangle, CheckCircle2, Briefcase, Bookmark } from "lucide-react";

// export default function BlogContent({ content }) {
//   const lines = content.split("\n").filter(Boolean);

//   return (
//     <div className="space-y-10">

//       {lines.map((line, i) => {
//         /* ===== HEADINGS ===== */
//         if (line.startsWith("###")) {
//           return (
//             <h3
//               key={i}
//               className="text-2xl font-bold text-[#0B1C2D] border-l-4 border-[#D4AF37] pl-4"
//             >
//               {line.replace("###", "").trim()}
//             </h3>
//           );
//         }

//         /* ===== NUMBERED LIST ===== */
//         if (/^\d+\./.test(line)) {
//           return (
//             <div
//               key={i}
//               className="bg-gray-50 border rounded-xl p-4 flex gap-3"
//             >
//               <AlertTriangle className="text-red-500 mt-1" size={18} />
//               <p className="text-gray-700">{line}</p>
//             </div>
//           );
//         }

//         /* ===== BULLET POINTS ===== */
//         if (line.startsWith("•")) {
//           return (
//             <div key={i} className="flex gap-3 items-start">
//               <CheckCircle2 className="text-green-600 mt-1" size={16} />
//               <p className="text-gray-700">{line.replace("•", "")}</p>
//             </div>
//           );
//         }

//         /* ===== FINAL ADVICE / HIGHLIGHT ===== */
//         if (line.includes("Choose smart compliance")) {
//           return (
//             <div
//               key={i}
//               className="bg-[#0B1C2D] text-white p-6 rounded-2xl"
//             >
//               <div className="flex gap-3 items-start">
//                 <Bookmark className="text-[#D4AF37]" />
//                 <p className="leading-relaxed">{line}</p>
//               </div>
//             </div>
//           );
//         }

//         /* ===== NORMAL PARAGRAPH ===== */
//         return (
//           <p
//             key={i}
//             className="text-gray-700 leading-relaxed text-[17px]"
//           >
//             {line}
//           </p>
//         );
//       })}
//     </div>
//   );
// }
