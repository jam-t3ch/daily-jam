import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import WeatherMap from './WeatherMap'
// import Broken from './img/Broken.png';
// import Clear from './img/Clear.png';
// import Few from './img/Few.png';
// import Heavy from './img/Heavy.png';
// import Light from './img/Light.png';
// import Mix from './img/Mix.png';
// import Moderate from './img/Moderate.png';
// import Overcast from './img/Overcast.png';
// import Scattered from './img/Scattered.png';
// import Thunderstorm from './img/Thunderstorm.png';

const WeatherList = (props) => {
  const weather = props.weather.map((day) => (
<WeatherMap
key = {day.date}
day = {day}
/>
  ))

  return (
    <Container>
      <ListGroup>
        {weather}
      </ListGroup>
    </Container>
  )
}

export default WeatherList;