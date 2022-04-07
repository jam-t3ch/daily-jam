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
            <AboutUs />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Daily Jam</Accordion.Header>
          <Accordion.Body>
            Daily Jam is a multi-purpose application with different features loosely based around JAM puns. These will include entertaining and useful functionality using APIs with flexibility to add more features if desired. Currently a user can save memos so they don't spread their memory too thin. A user may also look up their local weather if they're trying to jam at their picnic in the park.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default About;