import React from 'react';
// import { useState } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './NewsCarousel.css';

const NewsCarousel = (props) => {
  // console.log('props.news on carousel:', props)
  return (
    <>
      {

        props.news

          ?
          <Container style={{ width: '100%', height: 'max-content' }} id="newsCarouselbox">
              <Carousel controls={false}>
                {props.news.map((story, i) => (

                  <Carousel.Item
                    key={i}
                    className="news-carousel"
                  >
                    <p>{story.title}</p>
                    <p>{story.description}</p>
                  </Carousel.Item>
                ))}
              </Carousel>
          </Container>

          :
          null

      }
    </>
  )
}

export default NewsCarousel