import React from 'react'

import NavBar from "./NavBar";
import Link from 'next/link'

import styles from './HeroBanner.module.scss'

const HeroBanner = () => (
  <div className={styles.root}>
    <NavBar/>
    <div className={styles.textContainer}>
      <h1>For those about to rock</h1>
      <h2>We salute you</h2>
    </div>
    {/*<div className={styles.eventContainer}>*/}
    {/*  <h2 className={styles.content}>Eveniment</h2>*/}
    {/*  <h1 className={styles.content}><Link href="/evenimente">Rock for Life - 17 Apr 2022</Link></h1>*/}
    {/*</div>*/}
    <div className={styles.bottomContainer}>
      <h3 className={styles.content}>Suntem o şcoala... but we rock!</h3>
      <p className={styles.content}>
        Învăţarea unui instrument muzical a fost prea des asociată cu lungi şi chinuitoare cursuri
        de teorie şi tehnică instrumentală. Noi vă propunem o variantă mai plăcută şi mai eficientă:
        pornim cu piese simple pe care le vom învăţa şi cânta împreună. Apoi pasiunea, dedicaţia şi
        exerciţiul vor putea muta limitele tot mai departe.
      </p>
    </div>
  </div>
);

export default HeroBanner;
