import React from 'react'
import Image from 'next/image'

import styles from './Contact.module.scss'

const Contact = () => {
  const addressImageWidth = 2040 * 0.6;
  const addressImageHeight = 1540 * 0.6;

  return (
    <div className={styles.root}>
      <div className={styles.mapContainer} id="adresa">
        <h3>
          Strada Vasile Lascar, nr. 183, Bucuresti
        </h3>
        <Image src="/8.Vasile-Lascar-183.png" width={addressImageWidth} height={addressImageHeight} />
      </div>
      <div className={styles.infoContainer} id="contact">
        <div className={styles.infoContainerInner}>
          <h3>About to rock?</h3>
          <p>Informaţii şi înscrieri:
            Luni-Vineri <strong>14:30-20:30</strong> &amp; Sambata <strong>11:30-16:30</strong></p>
          <ul>
            <li>Sediul RockSchool: <strong>031.425.93.59</strong>
            </li>
            <li>Secretariat: <strong>0723.43.11.13</strong>
            </li>
            <li>Administraţie: <strong>0722.97.24.61</strong>
            </li>
          </ul>
          <p>In afara orelor de program trimite email prin formularul de contact de mai jos (sau email
            office at rockschool.ro)</p>
          <h3>We expect you&#8230; Let&#8217;s rock!</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
