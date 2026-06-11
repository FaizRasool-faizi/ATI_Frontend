import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Leadership } from "@/components/home/Leadership";
import { ProvincialCabinets } from "@/components/home/ProvincialCabinets";
import { AboutJourney } from "@/components/home/AboutJourney";
import { EventGallery } from "@/components/home/EventGallery";
import { InteractionForms } from "@/components/home/InteractionForms";
import { OfficeLocations } from "@/components/home/OfficeLocations";
import { DynamicSection } from "@/components/home/DynamicSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <DynamicSection />
      <Features />
      <Leadership />
      
      {/* Provincial Leadership Section */}
      <ProvincialCabinets />
      <AboutJourney />
      <OfficeLocations />
      <EventGallery />
      <InteractionForms />
    </div>
  );
}