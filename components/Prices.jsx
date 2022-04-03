import React from 'react'
import Image from 'next/image'

import styles from './Prices.module.scss'

const Prices = () => {
  const imagesWidth = 118 * 0.8;
  const imagesHeight = 64 * 0.8;

  return (
    <div className={styles.root} id="preturi">
      <div className={styles.innerContainer}>
        <h3 className={styles.highlightTitle}>Preţuri valabile începând din 1 Octombrie 2019</h3>
        <p>
          O singură lecţie demonstrativă: <strong>80 RON / 60 min</strong>. Oferim preţuri reduse
          prin
          3 pachete de şedinţe săptămânale cu durata de o ora:
        </p>
        <div className={styles.pricesContainer}>
          <div className={styles.priceItem}>
            <Image alt="RockSchool.RO" src="/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Basic</h4>
              <h5>4 ședinṭe (ore)</h5>
              <p>report: maxim 1</p>
              <div className={styles.price}>
                310 RON/lunǎ
              </div>
            </div>
          </div>
          <div className={styles.priceItem}>
            <Image alt="RockSchool.RO" src="/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Acid</h4>
              <h5>8 ședinṭe (ore)</h5>
              <p>report: maxim 2</p>
              <div className={styles.price}>
                520 RON/lunǎ
              </div>
            </div>
          </div>
          <div className={styles.priceItem}>
            <Image alt="RockSchool.RO" src="/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Benzen</h4>
              <h5>12 ședinṭe (ore)</h5>
              <p>report: maxim 3</p>
              <div className={styles.price}>
                620 RON/lunǎ
              </div>
            </div>
          </div>
        </div>
        <p>Recuperarea lecṭiilor se va putea face, cu condiṭia anunṭǎrii absenṭei cu cel puṭin o zi
          ȋnainte (lecṭia poate recuperatǎ sau reportatǎ):</p>
        <ul>
          <li>Pachetul &#8220;Basic&#8221; – poate fi recuperatǎ 1 lecṭie</li>
          <li>Pachetul &#8220;Acid&#8221; – pot fi recuperate 2 lecṭii</li>
          <li>Pachetul &#8220;Benzen&#8221; – pot fi recuperate 3 lecṭii</li>
        </ul>
        <p>Pentru pachetele de familie, numărul total de lecţii ce pot fi reportate păstrează regula
          de mai sus. Absenţele neanunţate care depăşesc numărul de lecţii ce pot fi reportate, vor
          fi
          considerate lecţii efectuate, în consecinţă, trebuiesc plătite. Plata integrală a
          pachetului
          se face la prima lecţie din pachet. Lectia dureaza 60 de minute.</p>
        <h3 className={styles.highlightTitle}>Sesiuni intensive in vacanţa de vară (18 Iun &#8211; 7 Sep):</h3>
        <p>In vacanţa de vară oferim preţuri speciale prin 3 pachete de şedinţe săptămânale:</p>
        <div className={styles.pricesContainer}>
          <div className={styles.priceItem}>
            <Image alt="RockSchool.RO" src="/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Alternativ</h4>
              <h5>3 lecţii (ore)</h5>
              <div className={styles.price}>
                150 RON/săpt
              </div>
            </div>
          </div>
          <div className={styles.priceItem}>
            <Image alt="RockSchool.RO" src="/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Quasi-Daily</h4>
              <h5>4 lecţii (ore)</h5>
              <div className={styles.price}>
                190 RON/săpt
              </div>
            </div>
          </div>
          <div className={styles.priceItem}>
            <Image alt="RockSchool.RO" src="/RS-teaser.png" width={imagesWidth} height={imagesHeight}/>
            <div className={styles.priceItemText}>
              <h4>Daily</h4>
              <h5>5 lecţii (ore)</h5>
              <div className={styles.price}>
                225 RON/săpt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
