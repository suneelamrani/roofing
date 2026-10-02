import Hero from "@/app/components/home/Hero";
import PressLogos from "@/app/components/home/PressLogos";
import Owners from "@/app/components/home/Owners";
import Standards from "@/app/components/home/Standards";
import Services from "@/app/components/services/Services";
import Testimonials from "@/app/components/sections/Testimonials";
import About from "@/app/components/sections/About";
import InstagramFeed from "@/app/components/home/InstagramFeed";
import Contact from "@/app/components/sections/Contact";
import Faq from "@/app/components/sections/Faq";
import { All_FAQS } from "@/app/lib/faqs";

export default function Home() {
  return (
    <main>
      <Hero />

      <PressLogos />

      <Owners />

      <Standards />

      <Services />

      <Testimonials />

      <About />

      <InstagramFeed />

      <Contact />

      <Faq items={All_FAQS.slice(0, 5)} showAllLink={true} />
    </main>
  );
}
