import React, {useState} from 'react'

import styles from './EventsContainer.module.scss'
import EventDetails from "./EventDetails";
import EventsCarousel from "./EventsCarousel";

const events = [
  {
    heroBanner: 'https://rockschool-ro.imgix.net/1.we-salute-you.jpg',
    title: 'Test event 1',
    body: (
      <>
        <p>
          Pe perioada vacanţei de vară, în intervalul 19 iunie – 28 iulie, copiii care n-au cântat
          niciodată la un instrument au ocazia să se distreze o întreagă săptămână cu unul sau mai
          multe instrumente, ghid fiindu-le profesorii RockSchool – muzicieni profesionişti.
        </p>
        <p>
          Copiii pot alege între chitară, pian, tobe sau voce sau, dacă sunt nehotărâţi, vor trece
          pe la fiecare dintre aceste instrumente. În afară de partea muzical-profesională, copiii
          se vor delecta cu variate jocuri educative şi desene animate.
        </p>
        <p>
          Seriile de tabără vor fi săptămânale, de luni până vineri, între orele 09:00 – 16:00 şi
          vor fi organizate pe două grupe de vârstă: 5 – 9 ani şi 7 – 11 ani. Al patrulea sezon al
          Taberei Urbane va avea loc, ca de obicei, la sediul RockScool, din strada Vasile Lascăr,
          nr. 183, sector 2, Bucureşti (casă cu curte).
        </p>
      </>
    ),
    contact: (
      <>
        <h4>
          Contact pentru înscriere:
        </h4>
        <ul>
          <li>office@rockschool.ro</li>
          <li>0723.431.113 (Andreea Macuc)</li>
          <li>0732.131.418 (Dana Rotarus)</li>
        </ul>
      </>
    )
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/1.we-salute-you.jpg',
    title: 'Test event 2',
    body: (
      <>
        <p>
          Pe perioada vacanţei de vară, în intervalul 19 iunie – 28 iulie, copiii care n-au cântat
          niciodată la un instrument au ocazia să se distreze o întreagă săptămână cu unul sau mai
          multe instrumente, ghid fiindu-le profesorii RockSchool – muzicieni profesionişti.
        </p>
      </>
    ),
    contact: (
      <>
        <h4>
          Contact pentru înscriere:
        </h4>
        <ul>
          <li>office@rockschool.ro</li>
          <li>0723.431.113 (Andreea Macuc)</li>
          <li>0732.131.418 (Dana Rotarus)</li>
        </ul>
      </>
    )
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/1.we-salute-you.jpg',
    title: 'Test event 3',
    body: (
      <>
        <p>
          Pe perioada vacanţei de vară, în intervalul 19 iunie – 28 iulie, copiii care n-au cântat
          niciodată la un instrument au ocazia să se distreze o întreagă săptămână cu unul sau mai
          multe instrumente, ghid fiindu-le profesorii RockSchool – muzicieni profesionişti.
        </p>
      </>
    ),
    contact: (
      <>
        <h4>
          Contact pentru înscriere:
        </h4>
        <ul>
          <li>office@rockschool.ro</li>
          <li>0723.431.113 (Andreea Macuc)</li>
          <li>0732.131.418 (Dana Rotarus)</li>
        </ul>
      </>
    )
  },
  {
    heroBanner: 'https://rockschool-ro.imgix.net/1.we-salute-you.jpg',
    title: 'Test event 4',
    body: (
      <>
        <p>
          Pe perioada vacanţei de vară, în intervalul 19 iunie – 28 iulie, copiii care n-au cântat
          niciodată la un instrument au ocazia să se distreze o întreagă săptămână cu unul sau mai
          multe instrumente, ghid fiindu-le profesorii RockSchool – muzicieni profesionişti.
        </p>
      </>
    ),
    contact: (
      <>
        <h4>
          Contact pentru înscriere:
        </h4>
        <ul>
          <li>office@rockschool.ro</li>
          <li>0723.431.113 (Andreea Macuc)</li>
          <li>0732.131.418 (Dana Rotarus)</li>
        </ul>
      </>
    )
  }
]

const EventsContainer = () => {
  const [selectedEvent, setSelectedEvent] = useState(0);

  const onEventChange = (eventIndex) => {
    setSelectedEvent(eventIndex);
    window.scrollTo(0, 0);
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
