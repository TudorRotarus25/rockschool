import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { AiOutlineUp } from 'react-icons/ai'

import styles from './ScrollButton.module.scss'

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollPositionY = document.documentElement.scrollTop || document.body.scrollTop;

      if (!isVisible && scrollPositionY > 20) {
        setIsVisible(true);
        return;
      }

      if (isVisible && scrollPositionY === 0) {
        setIsVisible(false);
      }
    });
  }, [isVisible]);

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className={clsx(styles.root, { [styles.hidden]: !isVisible })}>
      <button className={styles.button} onClick={handleClick} name="Scroll to the top">
        <AiOutlineUp size={20} />
      </button>
    </div>
  );
}

export default ScrollButton;
