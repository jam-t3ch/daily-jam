import React from 'react';
import WeatherMarquee from './WeatherMarquee';
import Profile from './Profile'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { withAuth0, useAuth0 } from '@auth0/auth0-react';
import './Header.css'


const Header = (props) => {
  // console.log('weather on header', props.weather)
  const { isAuthenticated } = useAuth0();
  return (
    <>

        <header className='top-nav'>
          <h1>Daily Jam</h1>
          <div>
          <input id='menu-toggle' type='checkbox'/>
          <label className='menu-button-container' htmlFor='menu-toggle'>
            <div className='menu-button'>
            </div>
          </label>
          <ul className='menu'>
          <li>{isAuthenticated ? <LogoutButton/> : <LoginButton/>}</li>
          <li>{isAuthenticated ? <Profile/> : <p>Please Log in</p>}</li>
          </ul>
          </div>
        </header>

        {/* WEATHER MARQUEE RENDERS ONCE WE HAVE WEATHER DATA IN STATE */}
        {props.weather
          ?
          <WeatherMarquee
            weather={props.weather}
          />
          :
          <div id='noweather'>No Weather Data</div>
        }


    </>
  );
}


export default withAuth0(Header);