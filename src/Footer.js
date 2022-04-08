import React from 'react';
import About from './About';
import Spotify from 'react-spotify-embed';

const Footer = () => {

  return (
    <footer>
      <p>&copy; jam-t3ch</p>
      <About />
      <Spotify wide link="https://open.spotify.com/track/4aUCPal9bxTnQkEfdIY6sG" />
    </footer>
  );
}


export default Footer
