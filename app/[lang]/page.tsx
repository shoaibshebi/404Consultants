// @ts-nocheck
import Banner from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import About from "../components/About";
import Services from "../components/Services";
import OurClients from "../components/OurClients";
import CTA from "../components/CTA";
import Process from "../components/Process";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  // const ln = lang.split("-")[0];
  // const dict = await getDictionary(ln); // en
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
