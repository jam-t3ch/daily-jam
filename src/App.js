import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      location: "seattle"
    }
  }

  render() {
    return (
      <>

        <Header />
        <Main />
        <Footer />

      </>
    )
  }
}


export default App;
