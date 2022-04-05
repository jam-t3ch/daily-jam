import axios from 'axios';
import React from 'react';
import { Col } from 'react-bootstrap';
import GetWeather from './GetWeather';

const SERVER = process.env.REACT_APP_SERVER;


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      location: "Seattle",
      showWeatherCarousel: false,
      weather: null
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

  render() {
    return (
      <>
        <Col xs={2} sm={2} md={3} lg={4} xl={4}></Col>

        <GetWeather
          handleCityWeather={this.handleCityWeather}
          currentLocation={this.state.location}
          weather={this.state.weather}
        />

      </>
    );
  }
}

export default Main;