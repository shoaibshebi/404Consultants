import Banner from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import About from "./components/About";
import Services from "./components/Services";
import OurClients from "./components/OurClients";
import CTA from "./components/CTA";
import Process from "./components/Process";

export default function Home() {
  return (
    <>
      <Banner />
      <WhatWeDo />
      <About />
      <Process />
      <Services />
      <OurClients />
      <CTA />
    </>
  );
}
