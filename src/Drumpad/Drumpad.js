import React, { Component } from 'react';

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


export default Drumpad;