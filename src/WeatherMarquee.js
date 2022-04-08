import React from 'react';
// import { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './WeatherMarquee.css';

const WeatherMarquee = (props) => {
  // console.log('props.weather on marquee:', props.weather)
  return (
    <>
      {
        props.weather
          ?
          
          // DISPLAYING OUR CURRENT CITY WEATHER ON CAROUSEL ONCE WE HAVE WEATHER IN STATE ON APP.JS
          <Container style={{ width: '100%', height: '5vh' }}>
            <Carousel controls={false} className='weathercarousel'>
              {props.weather.map(day => (

                <Carousel.Item
                  key={day.date}
                  className="carousel-item"
                >
                  <div id='weatherdiv'>
                  <p>Date: {day.date}</p>
                  <p>Weather: {day.description}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>

          :

          <Container className="carousel-item"> No weather data pulled </Container>
      }
    </>
  )
}

export default WeatherMarquee