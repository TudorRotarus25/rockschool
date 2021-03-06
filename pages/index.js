import Head from 'next/head'

import HeroBanner from "../components/HeroBanner";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Profesori from "../components/Profesori";
import ScrollButton from "../components/ScrollButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>RockSchool</title>
        <meta name="description" content="Suntem o scoala... but we rock, indeed!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroBanner />
        <AboutUs />
        <FAQ />
        <Profesori />
        <Prices />
        <Contact />
        <ScrollButton />
      </main>
    </div>
  )
}
