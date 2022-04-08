import axios from 'axios'
import { useState } from 'react'
import { Col, Card, Modal, CardGroup } from 'react-bootstrap'
import GetWeather from './GetWeather'
import GameModal from './GameModal'
import './Main.css'

const SERVER = process.env.REACT_APP_SERVER

const Main = (props) => {
  // const [email, setEmail] = useState(null)
  const [location, setLocation] = useState('Seattle')
  // const [showWeatherCarousel, setCarousel] = useState(false)
  const [weather, setWeather] = useState(null)
  const [showGameModal, setGameModal] = useState(false)

  // GET WEATHER FROM SERVER Event listener for this is in GetWeather and parameter value should be user input of city
  const handleCityWeather = async (city) => {
    try {
      // console.log('fn on Main sending this to server/weatherCity:', city)
      let userWeather = await axios.get(`${SERVER}/weatherCity?cityName=${city}`)
      let receivedWeather = userWeather.data
      setWeather(receivedWeather)
      setLocation(city)
      props.locationObtained(city)
      props.weatherObtained(receivedWeather)
    } catch {
      console.log("didn't work")
    }
  }

  const gameModal = () => setGameModal(true)


  const onHide = () => setGameModal(false)


  return (
    <>
    <CardGroup>
    <div className='transparent'>
      <GetWeather
        handleCityWeather={(something)=>handleCityWeather(something)}
        currentLocation={location}
        weather={weather}
        />
        </div>
        <div className='transparent'>
          <Card.Body
          className="app-card"
          style={{ width: '18rem' }}
          onClick={() => gameModal()}>
          <p>Word Jam</p>
          </Card.Body>
        </div>
        </CardGroup>

      <Modal
      
      fullscreen={true}
      className="game-modal"
      show={showGameModal}
      onHide={() => onHide()}>
        <Modal.Header closeButton>WORD JAM</Modal.Header>
        <Modal.Body
          className="game">
          <GameModal />
        </Modal.Body>
      </Modal>

    </>
  );
}


export default Main




  // functional constructor
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     email: null,
  //     location: "Seattle",
  //     showWeatherCarousel: false,
  //     weather: null,
  //     showGameModal: false
  //   }
  // }