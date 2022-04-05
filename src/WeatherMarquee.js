import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './WeatherMarquee.css';

class WeatherMarquee extends React.Component {
  render() {
    // console.log('on marquee:', this.props);
    return (
      <>
        {
          this.props.weather
            ?
            // DISPLAYING OUR CURRENT CITY WEATHER ON CAROUSEL ONCE WE HAVE WEATHER IN STATE ON APP.JS
            <Container style={{ width: '100%', height: '5vh' }}>
              <Carousel>
                {this.props.weather.map(day => (

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
    );
  }
}

export default WeatherMarquee;