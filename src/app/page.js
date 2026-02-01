import Hero from "@/components/home/Hero";
// import Services from "@/components/home/Services/Services";
import TestimonialsPage from "@/components/home/Testimonials";
import WhyZamexoPage from "@/components/home/WhyZamexo";
 import FranchisePage from "@/components/home/FranchiseCTA";
import CallbackFormSection from "@/components/home/CallbackForm";
import FAQSection from "@/components/FAQSection";
import BestPartnersSection from "@/components/BestPartnersSection";
// import FranchiseInvitationPage from "@/components/home/FranchiseCTA";
import SpecialFeatures from "@/components/SpecialFeatures";
export default function Page() {
  return (
    <main>
      <Hero />
      {/* <Services/> */}
        <WhyZamexoPage />
        <FranchisePage />
      {/* <FranchiseInvitationPage /> */}
      <SpecialFeatures />
      <TestimonialsPage />
      <FAQSection />
      <BestPartnersSection />
      <CallbackFormSection />
    </main>
  );
}
