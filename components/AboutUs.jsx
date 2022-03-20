import React from 'react'

import styles from './AboutUs.module.scss'

const AboutUs = () => (
  <div className={styles.root} id="scoala">
    <div className={styles.textContainer}>
      <h3>Suntem o scoala... but we rock, indeed!</h3>
      <p>Învăţarea unui instrument muzical a fost prea des asociată cu lungi şi chinuitoare cursuri de
        teorie şi tehnică instrumentală. Noi vă propunem o variantă mai plăcută şi mai eficientă:
        pornim cu piese rock simple pe care le vom învăţa şi cânta împreună. Apoi pasiunea, dedicaţia
        şi exerciţiul vor putea muta limitele tot mai departe.</p>
      <p>Şedinţele durează o oră şi sunt individuale. Teoria şi tehnica vor fi asimilate pe parcurs,
        într-un mod agreabil, şi ca răspuns la nevoile ce apar pe parcursul învăţării pieselor alese
        pentru invătare. Pe măsura ce un elev va evolua, va fi invitat sa formeze o trupă, impreună cu
        alţi elevi de nivelul său (şi pe cât posibil varstă şi afinităţi). Repetiţiile ce vor urma,
        asistate de profesori, vor fi o revelaţie, procesul naşterii unei piese din ceea ce cânta
        fiecare, e fascinant.</p>
      <p>
        După care, fiecare band astfel format, va cânta pe scenă, in cadrul serbarilor si concertelor
        organizate regulat, pe scene adevărate, în faţa familiei, prietenilor, cunoscuţilor. Ideea
        fundamentală a şcolii este de a învăţa atât un anumit instrument principal, cât şi celelalte
        instrumente din formaţie, la un nivel poate mai redus, precum şi noţiuni de mixaj, sonorizare,
        operarea diverselor dispozitive necesare.
      </p>
    </div>
    <div className={styles.imageContainer}>
      <img className={styles.image} src="/2.closeup-piano.jpg" />
      <img className={styles.image} src="/3.closeup-guitar.jpg" />
    </div>
  </div>
)

export default AboutUs
