import React from 'react';
import { Button, Modal, Card, Form } from 'react-bootstrap';
import './GetWeather.css';
import WeatherList from './WeatherList';

class GetWeather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCityModal: false,
      city: "Seattle",
    }
  }

  openCityModal = () => {
    this.setState({
      showCityModal: true
    })
  }

  onHide = () => {
    this.setState({
      showCityModal: false
    })
  }

  // updates local state to city being typed
  handleCityInput = (e) => {
    // console.log(this.state.city);
    this.setState({
      city: e.target.value
    })

  }

  // Called on submit this function calls handleCityWeather function on Main.js and passes state in local city to it as input for API call
  handleCitySubmit = (e) => {
    e.preventDefault();
    // console.log('handle city submit is running', this.state.city);
    this.props.handleCityWeather(this.state.city);
    // this.closeCityModal();
  }

  render() {
    return (
      <>
        {this.state.showCityModal
          ?
          <Modal.Dialog style={{ width: '100%' }} >
            <Modal.Header closeButton onHide={this.onHide}>
              <Modal.Title>{this.props.currentLocation} Local Weather</Modal.Title>

              {/* <Button
                variant="danger"
                onClick={this.closeCityModal}>
                X </Button> */}

            </Modal.Header>

            <Modal.Body>
              {/* LIST OF WEATHER RENDERING ON MODAL VVVVVVVV */}
              {this.props.weather
                &&
                <WeatherList
                  weather={this.props.weather}
                />
              }
            </Modal.Body>


            <Modal.Footer>
              <Form onSubmit={this.handleCitySubmit}>
                {/* FORM TO GET CITY FROM USER RENDERED AFTER BUTTON BELOW IS CLICKED */}
                <Form.Group className="" controlId="formBasicCity">
                  <Form.Label>Enter Your City:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Where we jammin'?"
                    onInput={this.handleCityInput}
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
          </Modal.Dialog>

          :

          <Card>
            <Button
              onClick={this.openCityModal}
              className="feature-card"
            >
              <p>Find</p>
              <p>Your</p>
              <p>Weather!</p>
            </Button>
          </Card>
        }
      </>
    );
  }
}

export default GetWeather;