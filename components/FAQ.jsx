import React from 'react'

import styles from './FAQ.module.scss'

const AboutUs = () => (
  <div className={styles.root} id="scoala">
    <div className={styles.textContainer}>
      <h3>De ce rock!</h3>
      <p><ul><li>Rock-ul nu este numai o categorie muzicală, noi credem că este chiar un stil de viaţă.
        Pornind de la muzica pe care o asculţi, hainele pe care le îmbraci, modul cum îţi alegi prietenii,
        ajungând pîna la modul în care abordezi deciziile în viaţă. Apoi sunt valorile Rock –
        optimism, armonie, deschidere catre nou, disciplină şi spirit de echipă – aplicate în viaţă,
        de multe ori fac diferenţa dintre succes şi eşec.</li></ul></p>
      <h4>Cum plătesc şedinţele/lecţiile?</h4>
      <p><ul><li>Plata se face pentru întreg pachetul ales la şfirsitul primei lecţii.</li></ul></p>
      <h4>Am nevoie de instrument muzical?</h4>
      <p><ul><li>Pentru şedinţele din şcoală elevii folosesc de regulă instrumentele şcolii,
        dar pentru pregatirea individuală, acasă, este cu siguranţă de mare folos un
        instrument similar (profesorii pot să ofere recomandări specifice).</li></ul></p>
      <h4>Este această şcoală atestată de Ministerul Învăţământului şi Educaţiei
        şi poate oferi diplome sau atestate avizate/aprobate de acest minister?</h4>
      <p><ul><li>Rockschool este o şcoală independentă ce nu primeşte fonduri şi nu
        funcţionează dupa criteriile Ministerul Învăţământului şi Educaţiei
        şi ca urmare nu oferă diplome şi atestate acreditate de acest minister.</li></ul></p>
      <h4>Care este vârsta minimă de inscriere?</h4>
      <p><ul><li>Şcoala are şi elevi de vârste foarte fragede, dar este necesară o
        testare individuală de către profesorul de specialitate pentru a oferi
        recomandări relevante.</li></ul></p>
    </div>
  </div>
)

export default AboutUs
