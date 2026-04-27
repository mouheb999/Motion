import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Packages />
      <Process />
      <Projects />
      <Testimonials />
      <About />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
