import axios from 'axios';
import React from 'react';
import { Col, Card, Modal } from 'react-bootstrap';
import GetWeather from './GetWeather';
import GameModal from './GameModal';

const SERVER = process.env.REACT_APP_SERVER;


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      location: "Seattle",
      showWeatherCarousel: false,
      weather: null,
      showGameModal: false
    }
  }

  // GET WEATHER FROM SERVER Event listener for this is in GetWeather and parameter value should be user input of city
  handleCityWeather = async (city) => {
    try {
      console.log('fn on Main sending this to server/weatherCity:', city);
      let userWeather = await axios.get(`${SERVER}/weatherCity`, city);
      let receivedWeather = userWeather.data;
      this.setState({
        weather: receivedWeather,
        location: city
      })
      this.props.locationObtained(this.state.location);
      this.props.weatherObtained(this.state.weather);

    } catch {
      console.log("didn't work");
    }
  }

  gameModal = () => {
    this.setState({
      showGameModal: true
    })
  }

  onHide = () => {
    this.setState({
      showGameModal: false
    })
  }

  render() {
    return (
      <>

        <GetWeather
          handleCityWeather={this.handleCityWeather}
          currentLocation={this.state.location}
          weather={this.state.weather}
        />

        <Col
        className="app-column"
        xs={2} sm={2} md={3} lg={4} xl={4}>
          <Card
          className="app-card"
          style={{ width: '18rem' }}
          onClick={() => this.gameModal()}>
            <Card.Body
            className="app-card-body">
              Word Jam
            </Card.Body>
          </Card>
        </Col>

        <Modal
          fullscreen={true}
          className="game-modal"
          show={this.state.showGameModal}
          onHide={this.onHide}>
          <Modal.Header closeButton>WORD JAM</Modal.Header>
          <Modal.Body
            className="modal-body">
            <GameModal/>
          </Modal.Body>
        </Modal>

      </>
    );
  }
}

export default Main;