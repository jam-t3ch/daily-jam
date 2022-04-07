import React from 'react';
import AboutUs from './AboutUs'
import {Accordion} from 'react-bootstrap';



const About = (props) => {

    return (
      <>
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>About Us</Accordion.Header>
    <Accordion.Body>
      <div className='about'>
      <AboutUs/>
      </div>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>About this Application</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </Accordion.Body>
  </Accordion.Item>
</Accordion> 
      </>
    )
  }


export default About;