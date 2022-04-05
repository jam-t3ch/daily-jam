import React from 'react';
import { Button, Modal, Card, Form } from 'react-bootstrap';

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

  closeCityModal = () => {
    this.setState({
      showCityModal: false
    })
  }

  // updates local state to city being typed
  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
    console.log(this.state.city);
  }

  // Called on submit this function calls handleCityWeather function on Main.js and passes state in local city to it as input for API call
  handleCitySubmit = (e) => {
    e.preventDefault();
    console.log('handle city submit is running', this.state.city);
    this.props.handleCityWeather({
      city: this.state.city
    })
    this.closeCityModal();
  }

  render() {
    return (
      <>
        {this.state.showCityModal
          ?
          <Modal.Dialog style={{ width: '18rem' }}>
            <Modal.Header>
              <Modal.Title>Weather Jam</Modal.Title>

              <Button
                variant="danger"
                onClick={this.closeCityModal}>
                X </Button>

            </Modal.Header>

            <Modal.Body>
              <h1>Seattle!!!</h1>
            </Modal.Body>

            <Modal.Footer>
              <Form >
                {/* FORM TO GET CITY FROM USER RENDERED AFTER BUTTON BELOW IS CLICKED */}
                <Form.Group className="mb-3" controlId="formBasicCity">
                  <Form.Label>Enter Your City:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Where we jammin'?"
                  />
                  <Form.Text className="text-muted"
                  onInput={this.handleCityInput}>
                    Please share your home city or some other location you're trying to jam at!
                  </Form.Text>
                </Form.Group>

                <Button
                  variant="primary"
                  onSubmit={this.handleCitySubmit}>
                  Save City
                </Button>

              </Form>
            </Modal.Footer>
          </Modal.Dialog>

          :

          <Card style={{ width: '18rem' }}>
            <Button onClick={this.openCityModal}>Click to open</Button>
          </Card>
        }
      </>
    );
  }
}

export default GetWeather;