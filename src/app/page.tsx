import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import Materials from "@/components/Materials";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Projects />
        <Materials />
        <Process />
        <Gallery />
        <Connect />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
