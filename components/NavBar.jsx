import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import MobileMenu from './MobileMenu'

import styles from './NavBar.module.scss'

const NavBar = ({ addBackground = false }) => {
  return (
    <div className={clsx(styles.root, { [styles.withBackground]: addBackground })}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img
            className={styles.logo}
            alt="RockSchool.RO"
            src="https://rockschool-ro.imgix.net/RS-logo.png"
          />
        </Link>
      </div>
      <ul className={styles.navMenu}>
        <li><Link href="/#scoala">Şcoala</Link></li>
        <li><Link href="/#profesori">Profesori</Link></li>
        <li><Link href="/#preturi">Preţuri</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
        <li><Link href="/evenimente">Evenimente</Link></li>
      </ul>
      <MobileMenu />
    </div>
  );
};

export default NavBar;
