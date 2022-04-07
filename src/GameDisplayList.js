import {useState, useEffect} from 'react';
import { Accordion } from 'react-bootstrap';

const GameDisplayList = (props) => {

  const handleDisplayList2 = (array) => {
    let newArray = [];
    array.forEach(value => newArray.push(value))
    console.log(newArray);
  }

  handleDisplayList2(props.displayList)
 

  return (
    <>
      <Accordion.Item eventKey="0">
        <Accordion.Header>You've found {props.displayList.length} of {props.wordList.length} possibilities.</Accordion.Header>
        <Accordion.Body>
          <ul
            className="display-word-list">
            {props.displayList.map((value,index) => {
              return (
                <li
                key={index}>{value}</li>
              )
            } )}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

export default GameDisplayList;