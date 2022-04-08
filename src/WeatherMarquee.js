import React from 'react';
// import { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './WeatherMarquee.css';

const WeatherMarquee = (props) => {

  // console.log('props.weather on marquee:', props)

  return (
    <>
      {

        props.weather && props.marqueeDisplay

          ?

          // DISPLAYING OUR CURRENT CITY WEATHER ON CAROUSEL ONCE WE HAVE WEATHER IN STATE ON APP.JS
          <Container style={{ width: '100%', height: '5vh' }}>
            <Carousel controls={false}>
              {props.weather.map(day => (

                <Carousel.Item
                  key={day.dayNum}
                  className="weather-marquee"
                >
                  <div
                  className={day.imgsrc}>
                  </div>

                  <div
                  className="inline-marquee-block">
                  <p>{day.dayofweek}, {day.month} {day.dayNum}</p>
                  <p>{day.high}°/{day.low}°  {day.condition}</p>
                  </div>

                </Carousel.Item>
              ))}
            </Carousel>
          </Container>

          :

          <Container className="weather-marquee"> Click weather to update marquee </Container>

      }
    </>
  )
}

export default WeatherMarquee