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
        title: 'Alex Gibson',
        description: (
          <p>
            Are doua pasiuni în viaţa, chitara şi baschetul. Si o rabdare de invidiat. Poli-instrumentist,
            e bucuria trupelor pe care le îndruma, atunci când lipseşte cineva, Alex îi şi ţine locul, fie ca e vorba de clapa,
            bas sau tobe. A studiat la conservatorul Gheorghe Dima din Cluj. A cântat în mai multe trupe din Cluj,
            printre care celebra Semnal M, a fondat trupa Toto tribute Romania şi are cateva compoziţii solo foarte interesante.
            Il puteţi vedea
            <a href="https://youtu.be/6IdEJ2eh21c" target="_blank" rel="noreferrer">aici</a>
          </p>
        )
      }
    ]
  },
  {
    label: 'Tobe',
    items: [
      {
        title: 'Felix Mircea Moldovan',
        description: (
          <p>
            Un copil teribil al percutiei, plin tot timpul de idei şi pasionat de tot ce suna altfel,
            de la tobe sud-americane la brelocul de la cheile masinii. Il gasim cantand jazz, muzica simfonica,
            rock, pop, samba, funk, in maniera sa proprie. A cântat în prea multe trupe&#8230; alegem la întamplare VH2,
            Cats love dogs, SPIN, Talking Drums, Bosquito, Urma, One, Morandi, Slang. Fondator al Project Barbarossa.
            A studiat la conservatorul Gheorghe Dima din Cluj. Rezistam tentatiei de a vi-l arata in cea mai mare discoteca
            din Ibiza, şi alegem un
            <a href="https://youtu.be/D6_YXSU7NxQ" target="_blank" rel="noreferrer">clip mai cuminte</a>
          </p>
        )
      },
      {
        title: 'Naim Vahidi',
        description: (
          <p>
            Reuseste sa creeze o relaţie cu cei mai neastamparati copii, care îl iubesc din primul minut.
            Cel mai complicat ritm, explicat de el pare o joaca. A cântat în liceu in The Purple Dandies, dupa care,
            în timpul studenţiei la Londra, a colaborat cu mai multe trupe si acum coace un nou proiect despre care o sa
            auzim in curând. A studiat la BIMM Londra. Hai sa il vedem in emisiunea
            <a href="https://www.youtube.com/watch?v=-f14pEewYNU#t=26m22s" target="_blank" rel="noreferrer">Luaţi un Rock</a>
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
            Compozitor, scriitor, poet, vocalist şi, la nevoie, basist si chitarist, fondator al trupei Cri Gri,
            pasionat de tenis şi critic vehement al oricarei oranduiri sociale. A cântat in Arca, Foileton.
            Nea Fane de la Rockschool, cu rabdare, tact si imaginaţie, reuseste sa ajunga aproape de sufletul fiecarui elev.
            Il putem auzi
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
            (Tine cu o celebra echipa Bucuresteana al carui nume îmi scapa). Are o rabdare infinita cu copii mici
            şi gaseste calea spre motivatiile subtile ale fiecarui elev. Timid. (nu poate fi gasit pe YouTube)
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
            Ca sa întelegi frumusetea bassului trebuie sa îl vezi şi sa-l auzi pe Soe cum asculta o piesa,
            identifica nota aceea, apuca bassul şi ajunge la ea printr-un slide. Fondator Holograf, Formula 5, VH2,
            a cantat în diverse trupe, de la big banduri la cover band-uri, fiind întotdeauna o insula de calm
            şi echilibru in peisajul agitat al scenelor rock din România. Il putem vedea cu greu in filmari şi pe scena -
            de obicei se ascunde în spatele celorlalti membri ai trupei. Cu greu am gasit o
            <a href="https://youtu.be/gKQBsGkQHXA" target="_blank" rel="noreferrer">filmare</a> în care sa il putem identifica.
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
          RockSchool, Şcoala de Rock, este o iniţiativă a mai multor oameni de profesii diferite. Unii dintre noi au ales cariera de muzician profesionist, alţii marketing, publicitate sau chiar inginerie, dar pe toţi ne uneşte dragostea pentru muzică în general şi pentru Rock în special.
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
