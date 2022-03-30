import React from 'react'

import NavBar from "./NavBar";

import styles from './HeroBanner.module.scss'

const HeroBanner = () => (
  <div className={styles.root}>
    <NavBar/>
    <div className={styles.textContainer}>
      <h1>
        For those about to rock
      </h1>
      <h2>
        We salute you
      </h2>
    </div>
    <div className={styles.bottomContainer}>
      <h3 className={styles.content}>La timpuri virulente...
      </h3>
      <p className={styles.content}>
        Dragi viitoare rockstar-uri, în această perioadă facem lecţii atât online, cât şi la şcoală,
        după preferinţele fiecarui elev. Dacă doriţi să vă înscrieţi şi ezitaţi din diverse motive,
        vă invitam să ne vizitaţi marţi sau miercuri între 17.30 - 21.30, precum şi sambătă între
        10.30 şi 12.30. Nu este nevoie de vreo programare, dar vă rugăm să ne contactaţi.</p>
    </div>
  </div>
);

export default HeroBanner;
