import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Sports from "@/components/Sports";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Experience />
        <Skills />
        <Sports />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
