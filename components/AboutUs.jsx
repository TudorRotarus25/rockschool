import React from 'react'
import Image from 'next/image'

import styles from './AboutUs.module.scss'

const AboutUs = () => (
  <div className={styles.root} id="scoala">
    <div className={styles.textContainer}>
      <h3>De ce rock?</h3>
      <p>De multe ori, Rock-ul si ”rockerii” au o imagine contestată in societate,
        nu rareori asociată cu tatuaje, exces de alcool şi violenţă.</p>
      <p>Noi credem ca Rock-ul este cu mult mai mult, iar valorile sale de bază sunt în fapt optimismul,
        armonia, deschiderea către nou, disciplina şi spiritul de echipă. Aceste valori pe care noi le
        asociem cu Rock-ul încă de la Beatles și Led Zeppelin, ori de la Tina Turner până la AC/DC,
        aplicate în viaţă, de multe ori fac diferenţa dintre succes şi eşec.</p>
    </div>
    <div className={styles.imageContainer}>
      <img className={styles.image} alt="La pian" src="https://rockschool-ro.imgix.net/2.closeup-piano.jpg" />
      <img className={styles.image} alt="La chitară" src="https://rockschool-ro.imgix.net/3.closeup-guitar.jpg" />
    </div>
  </div>
)

export default AboutUs
