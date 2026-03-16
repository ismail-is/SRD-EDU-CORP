import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Mentorship } from "@/components/sections/Mentorship";
import { Programs } from "@/components/sections/Programs";
import { VisionMission } from "@/components/sections/VisionMission";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-0">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Mentorship />
        <Programs />
        <VisionMission />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
