import React from 'react';
import AboutUs from './AboutUs'
import { Accordion } from 'react-bootstrap';



const About = (props) => {

  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>About Us</Accordion.Header>
          <Accordion.Body>
            <AboutUs/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>About this Application</Accordion.Header>
          <Accordion.Body>

            <p>We got tired of every day boring home pages especially ones that didn't really fit the mood of the morning.</p>
            <p>So we bring to you the Daily Jam, a breakfast jam themed web page that really sets the mood for the morning!</p> 
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default About;