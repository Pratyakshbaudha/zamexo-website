import "../app/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { icons } from "lucide-react";


export const metadata = {
  title: "Zamexo Tax Solutions – One Nation One Tax Desk",
  description:
    "Zamexo Tax Solutions provides GST, ITR, Company Registration, Accounting and Compliance services across India.",
  icons: {
  icon: "/logo.png",
},

};  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body bg-white text-gray-800">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}
