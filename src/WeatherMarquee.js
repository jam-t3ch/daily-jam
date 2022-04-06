import React from 'react';
// import { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './WeatherMarquee.css';

const WeatherMarquee = (props) => {
  console.log('on marquee:', props.weather)
  return (
    <>
      {
        props.weather
          ?
          
          // DISPLAYING OUR CURRENT CITY WEATHER ON CAROUSEL ONCE WE HAVE WEATHER IN STATE ON APP.JS
          <Container style={{ width: '100%', height: '5vh' }}>
            <Carousel>
              {props.weather.map(day => (

                <Carousel.Item
                  key={day.date}
                  className="carousel-item"
                >
                  <p>Date: {day.date} Weather: {day.description}</p>
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