import React from "react";
import { ListGroup } from 'react-bootstrap';

const WeatherMap = (props) => {
  // console.log(Broken, typeof Broken)
  // console.log('./img/' + props.day.imgsrc +'.png')

  let weatherVar = props.day.imgsrc || 'Broken'

  return (

    <ListGroup.Item
      key={props.day.date}
      className="weather-list-group" >

      {/* <div
        className={props.day.imgsrc} /> */}
      
      <img
        src={`img/${weatherVar}.png`}
        alt="icon"
        className="test-img"/>

      <div
        className="dayofweek-list">
        <strong>{props.day.dayofweek}</strong>
      </div>


      <div
        className="inline-div">

        <span
          className="list-condition">{props.day.condition}</span>
        <span
          className="high-temp-span"
        >{props.day.high}°</span>

        <span
          className="low-temp-span">{props.day.low}°</span>
      </div>
    </ListGroup.Item>
  )
}
export default WeatherMap;