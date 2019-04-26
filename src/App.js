import React, { Component } from 'react';
import './App.css';

import { Animated } from 'react-animated-css';

import Drumpad from './Drumpad/Drumpad';
import percussion from './percussion';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: 'Use Keys, Click, or Tap to Play!'
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyup);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup(e) {
    let sound = document.getElementById(e.key.toUpperCase());
    sound.parentElement.classList.remove("active");
  }

  handleKeyPress(e) {

      let sound = document.getElementById(e.key.toUpperCase());
      sound.parentElement.classList.add("active");
      sound.play();
      let newDisplay = sound.parentElement.id;
      this.setState({
        display: newDisplay
      });
  }

  handleClick(e) {
    // console.log(e.target.innerText);
    let sound = document.getElementById(e.target.innerText);
    sound.play();
    let newDisplay = sound.parentElement.id;
    this.setState({
      display: newDisplay
    })
  }


  render() {
    let drumpads = percussion.map((item, index) => {
      return (
        <Animated animationIn="swing" animateOnMount="swing">
          <Drumpad 
            key={percussion[index].id}
            click={this.handleClick}
            willBeKey={percussion[index].id}
            id={percussion[index].id}
            url={percussion[index].sound}
            audioId={percussion[index].innerText}
            textToShow={percussion[index].innerText}/>
          </Animated>
      )
    })

    return (
      <div className="App inner-container" id="drum-machine">
        <p id="display">{this.state.display}</p>
        <div className="pad-array">
        {drumpads}
        </div>
      </div>

    );
  }
}






export default App;
