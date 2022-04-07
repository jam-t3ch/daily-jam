import React from 'react';
import {Carousel} from 'react-bootstrap';
import './AboutUs.css';



const AboutUs = (props) => {

    return (
      <>
      <Carousel>
        <Carousel.Item>
          <div className='about'>
            <h2>Michael Maker</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='about'>
            <h2>James Brooks</h2>
            <p>Hello, My name is James Brooks and I’m a Software Developer who recently graduated from a coding bootcamp. Before starting my journey into Software Development I was a retail employee where I learned social skills and other general skills that I can apply to any job. I started this journey when I evaluated my strengths and passions which led me to further my skills down the path of programming that I have some previous experience in as well as having a general enthusiasm for working on a computer that I picked up when I was young. I have the most experience working in Back-End development, most recently JavaScript and some libraries associated with it. I also have experience with some Front-End Development in HTML and CSS and associated libraries. My ideal work environment is one where I have a clear direction and purpose to use my developed skill to contribute to the success of the company I work for while improving my own skills along the way.</p>
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