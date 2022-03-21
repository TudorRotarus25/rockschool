import React from 'react'

import styles from './Profesori.module.scss'

const Profesori = () => {

   function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

  return (
    <div className={styles.tabsCenter}>
      <div className="tab">
        <button className={styles.tablinks} onmouseover="openTab(event, 'Chitara')">Chitară</button>
        <button className={styles.tablinks} onmouseover="openTab(event, 'Tobe')">Tobe</button>
        <button className={styles.tablinks} onmouseover="openTab(event, 'Voce')">Voce</button>
        <button className={styles.tablinks} onmouseover="openTab(event, 'Pian')">Pian</button>
        <button className={styles.tablinks} onmouseover="openTab(event, 'Bass')">Bass</button>
      </div>
      <div id="Chitara" className={styles.tabcontent}>
        <h2>Marius &ldquo;Neuro&rdquo; Bob</h2>
        <p id="fontadj2">Un chitarist impresionant şi un pedagog dedicat, pentru care transmiterea pasiunii pentru chitara
          şi muzica este cel mai mare dar pe care poti sa îl faci. Preda atat chitara electrica cât şi clasica,
          deşi a fost surprins având elevi şi la pian sau teorie muzicala. A studiat la conservatorul Gheorghe Dima din Cluj.
          A cântat cu Feli, Bere Gratis, HiQ, Seven, etc. Ne-a fost imposibil sa alegem o piesa din multele de pe canalul sau de YouTube,
          asadar am inchis ochii şi am nimerit&#8230;&#8220;
          <span style="color: #ffff00;">
            <em><strong>
              <a style="color: #ffff00;" href="https://youtu.be/X51qA0ls1-0" target="_blank" rel="noopener">Burns Groove</a>
            </strong></em></span>&#8220;</p>
        <div className={styles.spacediv}></div>
        <h2>Alex Gibson</h2>
        <p id="fontadj2">Are doua pasiuni în viaţa, chitara şi baschetul. Si o rabdare de invidiat. Poli-instrumentist,
          e bucuria trupelor pe care le îndruma, atunci când lipseşte cineva, Alex îi şi ţine locul, fie ca e vorba de clapa,
          bas sau tobe. A studiat la conservatorul Gheorghe Dima din Cluj. A cântat în mai multe trupe din Cluj,
          printre care celebra Semnal M, a fondat trupa Toto tribute Romania şi are cateva compoziţii solo foarte interesante.
          Il puteţi vedea
          <span style="color: #ffff00;"><strong>
            <a style="color: #ffff00;" href="https://youtu.be/6IdEJ2eh21c" target="_blank" rel="noopener"><em>aici</em></a>
          </strong></span></p>
      </div>
      <div id="Tobe" className={styles.tabcontent}>
        <h2>Felix Mircea Moldovan</h2>
        <p id="fontadj2">Un copil teribil al percutiei, plin tot timpul de idei şi pasionat de tot ce suna altfel,
          de la tobe sud-americane la brelocul de la cheile masinii. Il gasim cantand jazz, muzica simfonica,
          rock, pop, samba, funk, in maniera sa proprie. A cântat în prea multe trupe&#8230; alegem la întamplare VH2,
          Cats love dogs, SPIN, Talking Drums, Bosquito, Urma, One, Morandi, Slang. Fondator al Project Barbarossa.
          A studiat la conservatorul Gheorghe Dima din Cluj. Rezistam tentatiei de a vi-l arata in cea mai mare discoteca
          din Ibiza, şi alegem un
          <span style="color: #ffff00;">
            <em><strong>
              <a style="color: #ffff00;" href="https://youtu.be/D6_YXSU7NxQ" target="_blank" rel="noopener">clip mai cuminte</a>
            </strong></em></span>&#8230;</p>
        <div className={styles.spacediv}></div>
        <h2>Naim Vahidi</h2>
        <p id="fontadj2">Reuseste sa creeze o relaţie cu cei mai neastamparati copii, care îl iubesc din primul minut.
          Cel mai complicat ritm, explicat de el pare o joaca. A cântat în liceu in The Purple Dandies, dupa care,
          în timpul studenţiei la Londra, a colaborat cu mai multe trupe si acum coace un nou proiect despre care o sa
          auzim in curând. A studiat la BIMM Londra. Hai sa il vedem in emisiunea &#8220;
          <a href="https://www.youtube.com/watch?v=-f14pEewYNU#t=26m22s" target="_blank" rel="noopener">
            <span style="color: #ffff00;"><em><strong>Luaţi un Rock</strong></em></span></a>&#8220;.</p>
      </div>
      <div id="Voce" className={styles.tabcontent}>
        <h2>Stefan Mardale</h2>
        <p id="fontadj2">Compozitor, scriitor, poet, vocalist şi, la nevoie, basist si chitarist, fondator al trupei Cri Gri,
          pasionat de tenis şi critic vehement al oricarei oranduiri sociale. A cântat in Arca, Foileton.
          Nea Fane de la Rockschool, cu rabdare, tact si imaginaţie, reuseste sa ajunga aproape de sufletul fiecarui elev.
          Il putem auzi
          <a href="https://youtu.be/ouEYyKzEYyA" target="_blank" rel="noopener">
            <span style="color: #ffff00;"><em><strong>aici</strong></em></span></a></p>
        <div className={styles.spacediv}></div>
      </div>
      <div id="Pian" className={styles.tabcontent}>
        <h2>Alin Maghiar</h2>
        <p id="fontadj2">Un suflet sensibil, pianist, vocalist, compozitor, poet şi mare microbist
          (Tine cu o celebra echipa Bucuresteana al carui nume îmi scapa). Are o rabdare infinita cu copii mici
          şi gaseste calea spre motivatiile subtile ale fiecarui elev. Timid. (nu poate fi gasit pe YouTube)</p>
      </div>
      <div id="Bass" className={styles.tabcontent}>
        <h2>Soe</h2>
        <p id="fontadj2">Ca sa întelegi frumusetea bassului trebuie sa îl vezi şi sa-l auzi pe Soe cum asculta o piesa,
          identifica nota aceea, apuca bassul şi ajunge la ea printr-un slide. Fondator Holograf, Formula 5, VH2,
          a cantat în diverse trupe, de la big banduri la cover band-uri, fiind întotdeauna o insula de calm
          şi echilibru in peisajul agitat al scenelor rock din România. Il putem vedea cu greu in filmari şi pe scena &#8211;
          de obicei se ascunde în spatele celorlalti membri ai trupei. Cu greu am gasit o
          <span style="color: #ffff00;"><a style="color: #ffff00;" href="https://youtu.be/gKQBsGkQHXA" target="_blank" rel="noopener">
            <em><strong>filmare</strong></em></a></span> în care sa il putem identifica&#8230;</p>
      </div>
      <div className={styles.clearfix}></div>
    </div>
  );
};

export default Profesori;
