import Head from 'next/head'

import NavBar from '../components/NavBar'
import EventsContainer from '../components/EventsContainer'
import Contact from '../components/Contact'

export default function Evenimente() {
  return (
    <div>
      <Head>
        <title>RockSchool events</title>
        <meta name="description" content="Suntem o scoala... but we rock, indeed!"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <NavBar addBackground />
        <EventsContainer />
        <Contact />
      </main>
    </div>
  );
};
