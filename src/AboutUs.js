import React from 'react';
import {Carousel} from 'react-bootstrap';



const AboutUs = (props) => {

    return (
      <>
      <Carousel>
        <Carousel.Item>
          <div className='about'>
            <Carousel.Caption>
            <h2>Michael Maker</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </Carousel.Caption>
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