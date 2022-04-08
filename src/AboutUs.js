import React from 'react';
import {Carousel} from 'react-bootstrap';
import './AboutUs.css'



const AboutUs = (props) => {

    return (
      <>
      <Carousel id='aboutcarousel'>
        <Carousel.Item>
          <div className='about'>
            <h2>Michael Maker</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
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
            <p>Favorite Jam: Marmalade</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
          </div>
        </Carousel.Item>
</Carousel>
      </>
    )
  }

export default AboutUs;