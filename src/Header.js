import React from 'react'
import WeatherMarquee from './WeatherMarquee'
import Profile from './Profile'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useState } from 'react'
import { withAuth0, useAuth0 } from '@auth0/auth0-react'
import './Header.css'
import { Button } from 'react-bootstrap'
import NewsCarousel from './NewsCarousel'


const Header = (props) => {
  const [marqueeDisplay, hideMarquee] = useState(true)
  const { isAuthenticated } = useAuth0()

  // hide and show marquee from dropdown
  const handleClick = () =>
    marqueeDisplay
      ?
      hideMarquee(false)
      :
      hideMarquee(true)

return (
  <>
    <header className='top-nav'>
      <h1>Daily Jam</h1>
      <div>
        <input id='menu-toggle' type='checkbox' />
        <label className='menu-button-container' htmlFor='menu-toggle'>
          <div className='menu-button'>
          </div>
        </label>
        <ul className='menu'>
          <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
          <li>{isAuthenticated ? <Profile /> : <p>Please Log in</p>}</li>
          {props.weather &&
  <li> <Button onClick={handleClick}>🌤️ Toggle Weather Marquee ⛈️</Button></li>
}
        </ul>
      </div>
    </header>

 <div id='weathermarqueebox'>
    {props.weather
      ?
      <WeatherMarquee
        weather={props.weather}
        marqueeDisplay={marqueeDisplay}
      />
      :
      <div id='noweather'>No Weather Data</div>
    }
    </div>
    {props.news
      ?
      <NewsCarousel
        news={props.news}
        />
        :
        <div id='noNews'>Set a city in weather to recieve news from with a headline containing that city</div>
    }
  </>
);

}

export default withAuth0(Header);
