import React from 'react';
import {Carousel} from 'react-bootstrap';



class AboutUs extends React.Component {
  render() {
    return (
      <>
      <Carousel fade>
        <Carousel.Item>
          <div>
            <h2>Michael Maker</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h2>James Brooks</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h2>Chris Yamas</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <h2>Tai Egashira</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
          </div>
        </Carousel.Item>
</Carousel>
      </>
    )
  }
}

export default AboutUs;