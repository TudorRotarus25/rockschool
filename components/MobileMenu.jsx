import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import styles from "./MobileMenu.module.scss";
import clsx from "clsx";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={handleOpenToggle}>
        <AiOutlineMenu size={20} />
      </button>
      <div className={clsx(styles.menu, { [styles.hidden]: !isOpen })}>
        <button className={clsx(styles.button, styles.closeButton)} onClick={handleOpenToggle}>
          <AiOutlineClose size={20} />
        </button>
        <ul className={styles.navMenu} onClick={handleOpenToggle}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#scoala">Şcoala</Link></li>
          <li><Link href="/#profesori">Profesori</Link></li>
          <li><Link href="/#preturi">Preţuri</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><Link href="/evenimente">Evenimente</Link></li>
        </ul>
      </div>
    </div>
  )
};

export default MobileMenu;
