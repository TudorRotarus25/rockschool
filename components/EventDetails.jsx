import React from 'react'
import Image from 'next/image'

import styles from './EventDetails.module.scss'

const EventDetails = ({ event }) => {
  return (
    <div>
      <h1 className={styles.eventTitle}>{event.title}</h1>
      <div>
        <img className={styles.heroBanner} src={event.heroBanner} alt={event.title} />
      </div>
      <div>
        <div>
          {event.body}
        </div>
        <div className={styles.contact}>
          {event.contact}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
