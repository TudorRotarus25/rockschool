import React from 'react'

import styles from './EventDetails.module.scss'

const EventDetails = ({ event }) => {
  return (
    <div>
      <div>
        <img className={styles.heroBanner} src={event.heroBanner} alt={event.title} />
      </div>
      <h1 className={styles.eventTitle}>
        {event.title}
      </h1>
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
