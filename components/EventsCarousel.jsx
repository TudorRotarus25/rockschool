import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import styles from './EventsCarousel.module.scss'

const EventsCarousel = ({ events, onEventChange }) => {
  const settings = {
    dots: true,
    dotsClass: styles.button__bar,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    infinite: true,
    arrows: true,
    swipe: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: true,
        }
      },
    ]
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.highlightTitle}>Istoria evenimentelor: </h3>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {events.map((event, eventIndex) => (
            <div key={event.title}>
              <a onClick={() => onEventChange(eventIndex)}>
                <div className={styles.carouselItem}>
                  <img className={styles.carouselImage} src={event.heroBanner} alt={event.title} />
                  <div>
                    <h3 className={styles.carouselTitle}>{event.title}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default EventsCarousel
