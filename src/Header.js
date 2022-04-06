import React from 'react';
import { Card } from 'react-bootstrap';
import WeatherMarquee from './WeatherMarquee';
import Profile from './Profile'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { withAuth0, useAuth0 } from '@auth0/auth0-react';
import './Header.css'


const Header = (props) => {
  console.log(props)
  const { isAuthenticated } = useAuth0();
    return (
      <>

        <header>
          <Profile/>
          Daily Jam
          {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </header>

        {/* WEATHER MARQUEE RENDERS ONCE WE HAVE WEATHER DATA IN STATE */}
        {props.weather
          ?
          <WeatherMarquee
            weather={props.weather}
          />
          :
          <Card>Empty weather marquee. no weather data yet.</Card>
        }

      </>
    );
  }


export default withAuth0(Header);