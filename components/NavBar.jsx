import React from 'react'
import Image from 'next/image'

import styles from './NavBar.module.scss'

const NavBar = () => {
  const multiplier = 0.45;
  const logoWidth = 513 * multiplier;
  const logoHeight = 100 * multiplier;

  return (
    <div className={styles.root}>
      <div>
        <Image src="/RS-logo.png" width={logoWidth} height={logoHeight}/>
      </div>
      <ul className={styles.navMenu}>
        <li><a href="#scoala">Şcoala</a></li>
        <li><a href="#adresa">Adresa</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
