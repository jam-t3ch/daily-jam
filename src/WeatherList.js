import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import WeatherMap from './WeatherMap'

const WeatherList = (props) => {
  const weather = props.weather.map((day) => (
    <WeatherMap
      key={day.date}
      day={day}
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