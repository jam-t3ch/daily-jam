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
      location: "seattle",
      showWeatherCarousel: false,
      weather: null
    }
  }

  // Event listener for this is in GetWeather and parameter value should be user input of city
  handleCityWeather = async (city) => {
    try {
      console.log(city);
      let userWeather = await axios.get(`${SERVER}/weather`, city);
      let receivedWeather = userWeather.data;
      this.setState({
        weather: receivedWeather
      })

    } catch {
      console.log("didn't work");
    }
  }

  render() {
    return (
      <>
        <Col xs={1} sm={2} md={3} lg={4} xl={4}></Col>

        <GetWeather
          handleCityWeather={this.handleCityWeather}
        />

      </>
    );
  }
}

export default Main;