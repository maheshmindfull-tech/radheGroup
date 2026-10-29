import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Projects from "../components/Projects";
import Expertise from "../components/Expertise";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Expertise />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  );
}
