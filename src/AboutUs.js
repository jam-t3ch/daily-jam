import React from 'react';
import {Carousel} from 'react-bootstrap';



const AboutUs = (props) => {

    return (
      <>
      <Carousel>
        <Carousel.Item>
          <div className='about'>
            <h2>Michael Maker</h2>
            <p>Yo! I'm a Software Developer currently having fun developing dynamic front & back-end applications. In my free time I love skating, climbing, and gardening :) </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='about'>
            <h2>James Brooks</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='about'>
            <h2>Chris Yamas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className='about'>
            <h2>Tai Egashira</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
          </div>
        </Carousel.Item>
</Carousel>
      </>
    )
  }

export default AboutUs;