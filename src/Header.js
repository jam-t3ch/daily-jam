import React from 'react';
import { Card } from 'react-bootstrap';
import WeatherMarquee from './WeatherMarquee';


class Header extends React.Component {

  render() {
    return (
      <>

        <header>
          Daily Jam
        </header>

        {/* WEATHER MARQUEE RENDERS ONCE WE HAVE WEATHER DATA IN STATE */}
        {this.props.weather
          ?
          <WeatherMarquee
            weather={this.props.weather}
          />
          :
          <Card>Empty weather marquee. no weather data yet.</Card>
        }

      </>
    );
  }
}

export default Header;