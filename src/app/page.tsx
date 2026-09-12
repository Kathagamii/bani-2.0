import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Process from "@/components/Process";
import Formats from "@/components/Formats";
import Materials from "@/components/Materials";
import Gallery from "@/components/Gallery";
import Statement from "@/components/Statement";
import WhyUs from "@/components/WhyUs";
import Location from "@/components/Location";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Process />
        <Formats />
        <Materials />
        <Gallery />
        <Statement />
        <WhyUs />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
