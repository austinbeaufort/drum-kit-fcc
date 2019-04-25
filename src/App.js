import React, { Component } from 'react';
import './App.css';

let percussion = [
  {
    innerText: 'Q',
    keyCode: 81,
    id: 'bass',
    sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Beat%20Box%20Kick%203-3174-Free-Loops.com.mp3'
  },
  {
    innerText: 'W',
    keyCode: 87,
    id: 'snare',
    sound: 'http://s1download-universal-soundbank.com/mp3/sounds/4388.mp3'
  },
  {
    innerText: 'E',
    keyCode: 69,
    id: 'clap',
    sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/CR%20800%20Clap-20859-Free-Loops.com.mp3'
  },
  {
    innerText: 'A',
    keyCode: 65,
    id: 'crash-cymbal',
    sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Crash%2003-5820-Free-Loops.com.mp3'
  },
  {
    innerText: 'S',
    keyCode: 83,
    id: 'hi-hat',
    sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/707%20Hi%20Hat-1035-Free-Loops.com.mp3'
  },
  {
    innerText: 'D',
    keyCode: 68,
    id: 'ride-cymbal',
    sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Korg%20Ride%20Cymbal%202-2526-Free-Loops.com.mp3'
  },
  {
    innerText: 'Z',
    keyCode: 90,
    id: 'low-tom',
    sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/CR%20800%20Tom.wav-20922-Free-Loops.com.mp3'
  },
  {
    innerText: 'X',
    keyCode: 88,
    id: 'hi-tom',
    sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/909%20Mid%20Tom.wav-21921-Free-Loops.com.mp3'
  },
  {
    innerText: 'C',
    keyCode: 67,
    id: 'cowbell',
    sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Cowbell%20Hit-8994-Free-Loops.com.mp3'
  },
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      display: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    let sound = document.getElementById(e.key.toUpperCase());
    sound.play();
    let newDisplay = sound.parentElement.id;
    this.setState({
      display: newDisplay
    })
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
        <Drumpad 
          key={percussion[index].id}
          click={this.handleClick}
          willBeKey={percussion[index].id}
          id={percussion[index].id}
          url={percussion[index].sound}
          audioId={percussion[index].innerText}
          textToShow={percussion[index].innerText}/>
      )
    })

    return (
      <div className="App inner-container" id="drum-machine">
        <h1>hi</h1>
        <p id="display">{this.state.display}</p>
        {drumpads}
      </div>

    );
  }
}



class Drumpad extends Component {

  render() {
    return (
      <div 
        key={this.props.willBeKey}
        onClick={this.props.click}
        className="drum-pad" 
        id={this.props.id}>
        <audio src={this.props.url} 
          id={this.props.audioId} 
          className="clip"></audio>
        {this.props.textToShow}
      </div>
    )
  }

}


export default App;
