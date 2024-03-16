import React, {useState} from 'react'

import styles from './EventsContainer.module.scss'
import EventDetails from "./EventDetails";
import EventsCarousel from "./EventsCarousel";

const events = [
  // Poster-One-Way-Rock-n-Roll.jpg
  {
    heroBanner: 'https://rockportal.ro/images/Poster-One-Way-Rock-n-Roll.jpg',
    title: 'One Way: Rock`n`Roll - 19 Noiembrie 2023',
    body: (
      <>
        <p> Rockeri planetari,</p>
        <p>
          Ne vedem duminică, 19 noiembrie, la The Pub Universității, din Bulevardul Regina Elisabeta,
          nr. 9, pentru o nouă urgie sonică, tendențios intitulată serbare școlară.
          <a href="https://www.facebook.com/thepubuniv" target="_blank" rel="noreferrer" className={styles.highlight}> The Pub Universității</a>, din Bulevardul Regina Elisabeta, nr. 9, à la queue du cheval.
        </p>
        <p>
          Puterea se dezlănțuie la ora 12:00.</p>
        <h2 className={styles.highlight}>One Way: Rock`n`Roll</h2>
        <p>
          Asupritorii publicului vor veni la club cu minim 30 de minute înaintea recitalului înscris în program.
          Să amușinăm, să vedem cum stă treaba și, mai ales, să ne acordăm. De altfel, vă recomandăm să veniți
          cât mai devreme, să observați supunerea spațiului și de către opresorii colegi.
          Programul recitalurilor va fi postat în event-ul FB. </p>
        <h3>
          Echipa RockSchool
        </h3>
      </>
    ),
    contact: (
      <>
        <h4>Contact: </h4>
        <ul>
          <li>contact@rockschool.ro</li>
          <li>031.425.93.59 (Sediul RockSchool)</li>
          <li>0723.43.11.13 (Secretariat)</li>
        </ul>
      </>
    )
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-RocksyMusic-28Mai.2023.jpg',
    title: 'Rocksy Music - 28 Mai 2023',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-November-Grain-13Nov.2022.jpg',
    title: 'November Grain - 13 Noiembrie 2022',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Rock-for-Life-17Apr2022.jpg',
    title: 'Rock for Life - 17 Aprilie 2022',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-BackToLive-Iunie-2021.jpg',
    title: 'Back To Live - Iunie 2021',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-TeoriaHaosului-Dec-2019.jpg',
    title: 'Teoria Haosului Persistent - 22 Dec 2019',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-DosareleX.jpg',
    title: 'Dosarele X - 12 Mai 2019',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Oda-Veseliei-14-Apr-2019.jpg',
    title: 'Oda Veseliei - 14 Apr 2019',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Ciocanu-Iarna-Feb-2019.jpg',
    title: 'Ciocanu de Iarna - 24 Feb 2019',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Ageless-24Mai.2013.jpg',
    title: 'Ageless Live Sessions - 24 Mai 2013',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Al9leaCer-Mai-2016.jpg',
    title: 'Al 9-lea Cer - Mai 2016',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Auchan-Dec.2015.jpg',
    title: 'Auchan - Dec 2015',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-BackToRockSchool.jpg',
    title: 'Back To RockSchool',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-BackToSchool.jpg',
    title: 'Back To School',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-BreakinTheSchool-Iunie-2012.jpg',
    title: 'Breakin` The School - Iunie 2012',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-ChristmasParty-2012.jpg',
    title: 'Christmas Party - 2012',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Ciocanu-11-Iunie.jpg',
    title: 'Ciocanu 11 Iunie',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Ciocanu-Unirii-1.jpg',
    title: 'Ciocanu Unirii',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-CiocanuNFabrica-2016.jpg',
    title: 'Ciocanu-n Fabrica - 2016',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-CiocanuLaCentru-2015.jpg',
    title: 'Ciocanu La Centru - 2015',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Faurock-Dec-2014.jpg',
    title: ' Faurock - 2014',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-LiveSesions-Feb2013.jpg',
    title: 'Ageless Live Sessions - Feb 2013',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-LiveSessions-27-Nov.jpg',
    title: 'Ageless Live Sessions - Nov 2013',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-LiveSessions-Ian-31.jpg',
    title: 'Ageless Live Sessions - Ian 2013',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Piata-Pipera-Mai-2013.png',
    title: 'Piața Pipera - Mai 2013',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-ClubulTaranulu-12Oct.jpg',
    title: 'Clubul Ţăranului - Oct 2012',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Fabrica-Tshirt.jpg',
    title: 'Fabrica - 17/24 Mai',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-WingClub-Iunie-2011.jpg',
    title: 'Wing Club - Iunie 2011',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-CiocanuFaur-Oct-2011.jpg',
    title: 'Ciocanu Faur - Oct 2011',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-Live-Sessions-21-Martie.jpg',
    title: 'Ageless Live Sessions - 21 Martie',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-RockStar-ClubulFabrica.jpg',
    title: 'RockStar - Clubul Fabrica',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-RS-3-Ani.jpg',
    title: 'RockSchool 3 Ani',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-RS-2-Ani.jpg',
    title: 'RockSchool 2 Ani',
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/Poster-ClasaZero-Apr-2010.jpg',
    title: 'Clasa Zero - Apr 2010',
  }
]

const EventsContainer = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const onEventChange = (eventIndex) => {
    if (eventIndex !== selectedEvent) {
      setSelectedEvent(eventIndex);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.root}>
        <EventDetails event={events[selectedEvent]} />
        <EventsCarousel events={events} onEventChange={onEventChange} />
      </div>
    </div>
  )
};

export default EventsContainer;
