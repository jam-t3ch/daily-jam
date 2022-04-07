import {useState, useEffect} from 'react';
import { Container, Row, Col, Button, Accordion, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import GameDisplayList from './GameDisplayList';
import './GameModal.css';
import jamjar from './logo512.png'
import shuffleIcon from './shuffle.png'



const GameModal = (props) => {
  const [showGame, setShowGame] = useState(false)
  const [guess, setGuess] = useState('')
  const [correct, setCorrect] = useState(false)
  const [wordArr, setWordArr] = useState(['W','O','D','S'])
  const centerLetter = 'R'
  const wordList = ['DOR','ROD','ROO','ROW','DOOR','ODOR','RODS','ROOD','ROOS','ROWS','WORD','DOORS','DROSS','ODORS','ROODS','SWORD','WORDS','SORDOR','SORROW', 'SWORDS','SORDORS','SORROWS']
  const [displayList, setDisplayList] = useState([])
  const progress = Math.floor(100 * ((displayList.length)/(wordList.length)))
  console.log(progress);
  const [accuracyMsg, setAccuracyMsg] = useState('')
  
  useEffect(() => {
    // re-renders on shuffle
  },[wordArr])



  const handleGuess = (wordList, guess) => {
    console.log(guess)
    if(displayList.includes(guess)) {
      setCorrect(false)
      setAccuracyMsg('You already found that one!')
    } else if(guess === '') {
      setCorrect(false)
      setAccuracyMsg('Click or type a word.')
    } else if(wordList.includes(guess)) {
      setDisplayList([...displayList,guess])
      setCorrect(true)
      setAccuracyMsg('Well done!')
    } else {
      setCorrect(false)
      setAccuracyMsg('Not in word list.')
    }
    setGuess('')
    console.log('handle guess works')
    console.log(displayList)
    console.log(displayList.length)
  }

  

  const showWordJam = (e) => {
    setShowGame(true)
  }

  const handle0Click = (e) => {
    setGuess(guess + `${wordArr[0]}`)
    setAccuracyMsg('')
  }

  const handle1Click = (e) => {
    setGuess(guess + `${wordArr[1]}`)
    setAccuracyMsg('')
  }

  const handleCenterClick = (e) => {
    setGuess(guess + `${centerLetter}`)
    setAccuracyMsg('')
  }

  const handle2Click = (e) => {
    setGuess(guess + `${wordArr[2]}`)
    setAccuracyMsg('')
  }

  const handle3Click = (e) => {
    setGuess(guess + `${wordArr[3]}`)
    setAccuracyMsg('')
  }

  const handleDeleteClick = (e) => {
    setGuess(guess.slice(0, -1))
    setAccuracyMsg('')
  }

  const handleShuffleClick = (array) => {

    let currentIndex = array.length, randomIndex;
    let newArray = [];
    array.forEach(value => newArray.push(value))
    console.log(currentIndex)

    //while elements remain to shuffle
    while (currentIndex !== 0) {

      //pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      console.log(randomIndex)
      currentIndex--

      //and swap it with current element
      [newArray[currentIndex], newArray[randomIndex]] = [
        newArray[randomIndex], newArray[currentIndex]];
    }

    console.log(array);
    setWordArr(newArray);
    setAccuracyMsg('')
  }

  const handleBackspace = (e) => {
    if(e.key === 'Backspace') {
      setGuess(guess.slice(0, -1))
    }
    setAccuracyMsg('')
  }
  

  const handleKeyDown = (e) => {
    let keydown = '';
    console.log(e)
    if(e.key.toUpperCase() === `${wordArr[0]}`) {
      keydown = `${wordArr[0]}`;
    } else if(e.key.toUpperCase() === `${wordArr[1]}`) {
      keydown = `${wordArr[1]}`;
    } else if(e.key.toUpperCase() === `${centerLetter}`) {
      keydown = `${centerLetter}`;
    } else if(e.key.toUpperCase() === `${wordArr[2]}`) {
      keydown = `${wordArr[2]}`;
    } else if(e.key.toUpperCase() === `${wordArr[3]}`) {
      keydown = `${wordArr[3]}`;
    } else{
      keydown = '';
    }
      setGuess(guess + keydown)
      setAccuracyMsg('')
  }

  const doesBoth = (e) => {
    handleKeyDown(e);
    handleBackspace(e);
  }

  const styles = {
    response: {
      color: correct ? "green" : "red"
    }
  }

    return (
      <>

      
      <div
      className="game-body"
      onKeyDown={doesBoth}
      tabIndex="0">

        

        <Container>

        {showGame ? (

          <>

          <OverlayTrigger
            className="instructions-button"
            placement='bottom'
            overlay={
              <Tooltip>
              <p>Words <strong>must</strong> include center letter.</p>
              <p>Words <strong>must</strong> be 3+ letters long.</p>
              <p>No proper nouns or slang.</p>
              <p>Letters <strong>CAN</strong> be used more than once in a word.</p>
              </Tooltip>
            }
          >
            <Button
              className="instructions-button"
              variant="outline-secondary"
            >Rules
            </Button> 
          </OverlayTrigger>  
          <p
          style={styles.response}
          >{accuracyMsg}<span className="hidden-l">l</span></p>

          <ProgressBar
          now={progress}/>

          <h2>{guess}<span className="blinking-cursor"></span><span className="hidden-l">l</span></h2>
          
          <Row className="gameRowOne">
            <Col></Col>
            <Col>
              <Button
                key=""
                size="lg"
                onClick={() => handle0Click()}
                variant="outline-primary">{wordArr[0]}</Button>
            </Col>
            <Col></Col>
          </Row>
          <Row className="gameRowTwo">
              <Col>
                <Button
                  className="word-index-1"
                  size="lg"
                  onClick={() => handle1Click()}
                  variant="outline-primary">{wordArr[1]}</Button>
              </Col>
              <Col>
                <Button
                  size="lg"
                  onClick={() => handleCenterClick()}
                  variant="primary">{centerLetter}</Button>
              </Col>
              <Col>
                <Button
                  size="lg"
                  onClick={() => handle2Click()}
                  variant="outline-primary">{wordArr[2]}</Button>
              </Col>
            </Row><Row className="gameRowThree">
              <Col></Col>
              <Col>
                <Button
                  size="lg"
                  onClick={() => handle3Click()}
                  variant="outline-primary">{wordArr[3]}</Button>
              </Col>
              <Col></Col>
            </Row><Row className="gameRowFour">
              <Col>
                <Button
                  onClick={() => handleDeleteClick()}
                  variant="outline-danger">Delete</Button>
              </Col>
              <Col>
                <Button
                variant="outline-warning"
                  className="shuffle-button">
                  <img
                    className="shuffle-icon"
                    src={shuffleIcon}
                    alt="shuffle icon"
                    onClick={() => handleShuffleClick(wordArr)}
                    />
                </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => handleGuess(wordList, guess)}
                  variant="outline-success">Enter</Button>
              </Col>
            </Row>

            <>
              <Accordion defaultActiveKey="0">
                <GameDisplayList
                guess={guess}
                wordList={wordList}
                displayList={displayList}
                />
              </Accordion>
            </>
            </>
              ) :
          (
                <div
                  className="game-greeting-container">
                  <img
                    className="centered-image"
                    alt="jam jar logo"
                    src={jamjar} />
                  <p
                    className="word-jam-name">WordJam</p>
                  <Button
                    className="centered-play-button"
                    variant="dark"
                    onClick={() => showWordJam()}
                  >Click to play</Button>
                </div>
          )}
        </Container>

       </div>
      </> 
    )
  }

export default GameModal;