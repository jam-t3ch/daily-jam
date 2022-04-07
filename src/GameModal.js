import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class GameModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: ''
    }
  }

  handleWClick = (e) => {
    this.setState({
      guess: this.state.guess + 'W'
    })
  }

  handleOClick = (e) => {
    this.setState({
      guess: this.state.guess + 'O'
    })
  }

  handleRClick = (e) => {
    this.setState({
      guess: this.state.guess + 'R'
    })
  }

  handleDClick = (e) => {
    this.setState({
      guess: this.state.guess + 'D'
    })
  }

  handleSClick = (e) => {
    this.setState({
      guess: this.state.guess + 'S'
    })
  }

  handleDeleteClick = (e) => {
    this.setState({
      guess: this.state.guess.slice(0, -1)
    })
  }

  handleBackspace = (e) => {
    if (e.key === 'Backspace') {
      this.setState({
        guess: this.state.guess.slice(0, -1)
      });
      console.log('backspace function ran.')
    }
  }

  handleKeyDown = (e) => {
    let keydown = '';
    console.log(e.key);
    if (e.key.toUpperCase() === 'W') {
      keydown = 'W';
    } else if (e.key.toUpperCase() === 'O') {
      keydown = 'O';
    } else if (e.key.toUpperCase() === 'R') {
      keydown = 'R';
    } else if (e.key.toUpperCase() === 'D') {
      keydown = 'D';
    } else if (e.key.toUpperCase() === 'S') {
      keydown = 'S';
    } /*else if(e.key === 'Backspace') {
      this.setState({
        guess: this.state.guess.slice(0, -1)
      });
    }*/ else {
      keydown = '';
    }
    // console.log(keydown);
    this.setState({
      guess: this.state.guess + keydown
    })
  }



  render() {

    return (

      <div
        onKeyDown={this.handleBackspace}
        tabIndex="0"
      >

        <div
          className="game-body"
          onKeyDown={this.handleKeyDown}
          tabIndex="0"
        >

          <h2>{this.state.guess}<span className="blinking-cursor"></span><span className="hidden-l">l</span></h2>

          <Container>

            <Row className="gameRowOne">
              <Col></Col>
              <Col>
                <Button
                  size="lg"
                  onClick={() => this.handleWClick()}
                  variant="outline-primary">W</Button>
              </Col>
              <Col></Col>
            </Row>

            <Row className="gameRowTwo">
              <Col>
                <Button
                  size="lg"
                  onClick={() => this.handleOClick()}
                  variant="outline-primary">O</Button>
              </Col>
              <Col>
                <Button
                  size="lg"
                  onClick={() => this.handleRClick()}
                  variant="primary">R</Button>
              </Col>
              <Col>
                <Button
                  size="lg"
                  onClick={() => this.handleDClick()}
                  variant="outline-primary">D</Button>
              </Col>
            </Row>

            <Row className="gameRowThree">
              <Col></Col>
              <Col>
                <Button
                  size="lg"
                  onClick={() => this.handleSClick()}
                  variant="outline-primary">S</Button>
              </Col>
              <Col></Col>
            </Row>

            <Row className="gameRowFour">
              <Col>
                <Button
                  onClick={() => this.handleDeleteClick()}
                  variant="outline-danger">Delete</Button>
              </Col>
              <Col>
                <Button variant="outline-warning">Shuffle</Button>
              </Col>
              <Col>
                <Button variant="outline-success">Enter</Button>
              </Col>
            </Row>

          </Container>

        </div>

      </div>
    )
  }
}

export default GameModal;