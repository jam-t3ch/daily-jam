import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const WeatherList = (props) => {

  let weather = props.weather.map(day => (
    <ListGroup.Item key={day.date} >
      Date: {day.date} Weather: {day.description}
    </ListGroup.Item>
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