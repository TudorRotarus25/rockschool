import React from 'react'
import Slider from 'react-slick'

import styles from './EventsCarousel.module.scss'

const EventsCarousel = ({ events, onEventChange }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <div className={styles.root}>
      <h2>
        Toate evenimentele
      </h2>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {events.map((event, eventIndex) => (
            <div key={event.title}>
              <div className={styles.carouselItem} onClick={() => onEventChange(eventIndex)}>
                <img className={styles.carouselImage} src={event.heroBanner} alt={event.title} />
                <div>
                  <h3 className={styles.carouselTitle}>{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default EventsCarousel
