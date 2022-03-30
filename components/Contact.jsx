import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Contact.module.scss'

const Contact = () => {
  const addressImageWidth = 1200 * 0.6;
  const addressImageHeight = 906 * 0.6;

  return (
    <div className={styles.root}>
      <div className={styles.infoContainer} id="contact">
        <div className={styles.infoContainerInner}>
          <h3 className={styles.highlightTitle}>About to rock?</h3>
          <p>Informaţii şi înscrieri:
            <ul>
              <li>Luni-Vineri <strong>14:30-20:30</strong></li>
              <li>Sambata <strong>11:30-16:30</strong></li>
            </ul>
          <ul>
            <li>Sediul RockSchool: <strong>031.425.93.59</strong></li>
            <li>Secretariat: <strong>0723.43.11.13</strong></li>
            <li>Administraţie: <strong>0722.97.24.61</strong></li>
          </ul></p>
          <p>In afara orelor de program poţi trimite email:
            <ul><li>
              <Link href="mailto: contact+rs@rockschool.ro" passHref><strong> contact@rockschool.ro</strong></Link>
            </li></ul></p>
          <h3 className={styles.highlightTitle}>We expect you&#8230; Let&#8217;s rock!</h3>
        </div>
      </div>
      <div className={styles.mapContainer} id="adresa">
        <Link href="https://goo.gl/maps/ESrwVfy9xsPMoXmc7" passHref>
        <h3 className={styles.highlightTitle}>Strada Vasile Lascar, nr. 183, Bucuresti</h3>
        </Link>
        <Link href="https://goo.gl/maps/ESrwVfy9xsPMoXmc7" passHref>
          <Image src="/8.Vasile-Lascar-183.jpg" alt="Vasile Lascar, nr. 183"
                 width={addressImageWidth} height={addressImageHeight} />
        </Link>
      </div>
      <div className={styles.mapContainer} id="copyright">
        <p>RockSchool.RO © 2022</p>
      </div>
    </div>
  );
};

export default Contact;
