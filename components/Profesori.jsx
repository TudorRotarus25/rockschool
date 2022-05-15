import React, { useState } from 'react'
import clsx from 'clsx'

import styles from './Profesori.module.scss'

const teachersTabs = [
  {
    label: 'Chitară',
    items: [
      {
        title: 'Marius "Neuro" Bob',
        description: (
          <p>
            Un chitarist impresionant şi un pedagog dedicat, pentru care transmiterea pasiunii pentru chitara
            şi muzica este cel mai mare dar pe care poti sa îl faci. Preda atat chitara electrica cât şi clasica,
            deşi a fost surprins având elevi şi la pian sau teorie muzicala. A studiat la conservatorul Gheorghe Dima din Cluj.
            A cântat cu Feli, Bere Gratis, HiQ, Seven, etc. Ne-a fost imposibil sa alegem o piesa din multele de pe canalul sau de YouTube,
            asadar am inchis ochii şi am nimerit.
            <a href="https://youtu.be/X51qA0ls1-0" target="_blank" rel="noreferrer">Burns Groove</a>
          </p>
        )
      },
      {
        title: 'Vlad Goian',
        description: (
          <p>
            Când îl vezi bland şi rabdator cu copiii n-ai zice ca pe scena se transforma intr-un un djentleman metalist.
            Membru fondator al <a href="https://youtu.be/pXO2H5TzgFA" target="_blank" rel="noreferrer">System Error</a>,
            a mai cantat în diverse formule, de gen Lyceum sau N&F.
          </p>
        )
      }
    ]
  },
  {
    label: 'Tobe',
    items: [
      {
        title: 'Naim Vahidi',
        description: (
          <p>
            Reuşeşte să creeze o relaţie cu cei mai neastampărati copii, care îl iubesc din primul minut.
            Cel mai complicat ritm, explicat de el pare o joaca. A cântat în liceu în The Purple Dandies, dupa care,
            în timpul studenţiei la Londra, a colaborat cu mai multe trupe şi acum coace un nou proiect despre
            care o sa auzim în curând. A studiat la BIMM Institute în Londra. Hai să îl vedem în emisiunea
            <a href="https://www.youtube.com/watch?v=-f14pEewYNU#t=26m22s" target="_blank" rel="noreferrer">Luaţi un Rock</a>
          </p>
        )
      },
      {
        title: 'Alin David',
        description: (
          <p>
            Unii cred că s-a născut la RockSchool. In realitate avea deja cativa anisori când a venit prima dată
            şi s-a inscris la bas. Am trecut impreună prin experienta traumatizanta a bac-ului, după care a trecut
            la tobe şi a facut o frumoasă carieră muzicală în trupe underground ca Skins from my eyes,
            Ten times treason, <a href="https://youtu.be/Q_1PgWxhsmg" target="_blank" rel="noreferrer">Tiarra</a> şi altele.
            Când ni s-a alăturat în calitate de profesor ne-am bucurat foarte mult,
            fiindca n-a mai trebuit să explicăm care este spiritul RockSchool şi de ce e aşa de important.
          </p>
        )
      }
    ]
  },
  {
    label: 'Voce',
    items: [
      {
        title: 'Stefan Mardale',
        description: (
          <p>
            Compozitor, scriitor, poet, vocalist şi, la nevoie, basist şi chitarist, fondator al trupei Cri Gri,
            pasionat de tenis şi critic vehement al oricărei orânduiri sociale. A cântat în Arca, Foileton.
            Nea Fane de la RockSchool, cu rabdare, tact şi imaginaţie, reuseste să ajungă aproape de sufletul
            fiecarui elev. Il putem auzi
            <a href="https://youtu.be/ouEYyKzEYyA" target="_blank" rel="noreferrer">aici</a>
          </p>
        )
      }
    ]
  },
  {
    label: 'Pian',
    items: [
      {
        title: 'Alin Maghiar',
        description: (
          <p>
            Un suflet sensibil, pianist, vocalist, compozitor, poet şi mare microbist
            (Tine cu o celebră echipa Bucuresteană a cărei nume îmi scapă). Are o răbdare infinită cu copii mici
            şi găseste calea spre motivatiile subtile ale fiecărui elev. Timid. (nu poate fi găsit pe YouTube)
          </p>
        )
      },
      {
        title: 'Raluca Strambeanu',
        description: (
          <p>
            Cu o educatie clasică, dar cu un vibe neconventional şi un zâmbet irezistibil,
            e iubită de la prima vedere de toţi copiii, care nu se pot hotâri dacă invaţă pian
            <a href="https://youtu.be/Thm-Na7tA-o" target="_blank" rel="noreferrer">de dragul muzicii</a> sau
            de dragul ei.
          </p>
        )
      }
    ]
  },
  {
    label: 'Bass',
    items: [
      {
        title: 'Soe',
        description: (
          <p>
            Ca să întelegi frumusetea bass-ului trebuie să-l vezi şi să-l auzi pe Soe cum ascultă o piesa,
            identifică nota aceea, apuca bass-ul şi ajunge la ea printr-un slide. Fondator Holograf, Formula 5,
            VH2, a cântat în diverse trupe, de la big band-uri la cover band-uri, fiind întotdeauna o insula
            de calm şi echilibru în peisajul agitat al scenelor rock din România. Il putem vedea cu greu în
            filmări şi pe scena - de obicei se ascunde în spatele celorlalti membri ai trupei. Cu greu am găsit o
            <a href="https://youtu.be/gKQBsGkQHXA" target="_blank" rel="noreferrer">filmare</a> în care să-l putem identifica.
          </p>
        )
      }
    ]
  }
]

const Profesori = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabChange = (tabIndex) => {
    setSelectedTab(tabIndex);
  }

  return (
    <div className={styles.root} id="profesori">
      <div className={styles.rootInner}>
        <h3>
          Profesorii
        </h3>
        <p>
          RockSchool, Şcoala de Rock, este o iniţiativă a mai multor oameni de profesii diferite.
          Unii dintre noi au ales cariera de muzician profesionist, alţii marketing, publicitate sau chiar inginerie,
          dar pe toţi ne uneşte dragostea pentru muzică în general şi pentru Rock în special.
        </p>
        <div className={styles.tabsContainer}>
          <ul className={styles.tabsList}>
            {teachersTabs.map((tab, tabIndex) => (
              <li key={tab.label} className={styles.tab}>
                <button
                  className={clsx(styles.tabButton, tabIndex === selectedTab && styles.selected)}
                  onClick={() => onTabChange(tabIndex)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {teachersTabs[selectedTab].items.map((item) => (
            <div key={item.title}>
              <h4>
                {item.title}
              </h4>
              {item.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profesori;
