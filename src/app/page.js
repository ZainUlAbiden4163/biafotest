import Header from "./_components/Header";
import HeroSection from "./_sections/HeroSection";
import SectionProblem1 from "./_sections/SectionProblem1";

import SectionPillars3 from "./_sections/SectionPillars3";
import SectionCompliance5 from "./_sections/SectionCompliance5";
import SectionFaq6 from "./_sections/SectionFaq6";

import Footer from "./_sections/Footer";
import SectionConnect8 from "./_sections/SectionConnect8";
import SectionSystemFlow from "./_sections/SectionSystemFlow";
import SectionPlatformStack4 from "./_sections/SectionPlatformStack4";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SectionProblem1 />
      <SectionSystemFlow />
      <SectionPlatformStack4 />
      {/* <SectionPillars3 /> */}
      <SectionCompliance5 />
      <SectionFaq6 />
      <SectionConnect8 />
      <Footer />
    </>
  );
}
