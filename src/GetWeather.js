import React from 'react';
import { useState } from 'react';
import WeatherList from './WeatherList';
import { Button, Modal, Form, Card } from 'react-bootstrap';
import './GetWeather.css';

const GetWeather = (props) => {
  const [showModal, openModal] = useState(false)
  const [city, updateCity] = useState('Seattle')

  const openWeatherModal = () => {
    openModal(true)
  }

  const closeWeatherModal = () => {
    openModal(false)
  }

  // updates local state to city being typed
  const handleCityInput = (e) => {
    updateCity(e.target.value)
  }

  // Called on submit this function calls handleCityWeather function on Main.js and passes state in local city to it as input for API call
  const handleCitySubmit = (e) => {
    e.preventDefault();
    // console.log('handle city submit is running', this.state.city);
    props.handleCityWeather(city);
    // this.closeCityModal();
  }


  return (
    <>
      <Modal show={showModal} onHide={closeWeatherModal}>
        <Modal.Header closeButton onHide={closeWeatherModal}>
          <Modal.Title>{props.currentLocation} Local Weather</Modal.Title>

          {/* <Button
                variant="danger"
                onClick={this.closeCityModal}>
                X </Button> */}

        </Modal.Header>

        <Modal.Body>
          {/* LIST OF WEATHER RENDERING ON MODAL VVVVVVVV */}
          {props.weather
            &&
            <WeatherList
              weather={props.weather}
            />
          }
        </Modal.Body>


        <Modal.Footer>
          <Form onSubmit={handleCitySubmit}>
            {/* FORM TO GET CITY FROM USER RENDERED AFTER BUTTON BELOW IS CLICKED */}
            <Form.Group className="" controlId="formBasicCity">
              <Form.Label>Enter Your City:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Where we jammin'?"
                onInput={handleCityInput}
              />
              <Form.Text className="text-muted"
              >
                Please share your home city or some other location you're trying to jam at!
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type='submit'
            >
              Go
            </Button>

          </Form>
        </Modal.Footer>
      </Modal>


      <Card.Body 
      className='weathercard'
        style={{ width: '18rem' }}
        onClick={openWeatherModal}
      >
        <p>Find Your Weather!</p>
      </Card.Body>
    </>
  )
}

export default GetWeather;