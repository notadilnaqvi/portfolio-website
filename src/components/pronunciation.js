/*
"Pronunciation" compenent credited to "Nick Major" from https://coderrocketfuel.com/article/how-to-play-a-mp3-sound-file-in-react-js
*/

import React, { Component } from "react";
import audioFile from '../media/adil-pronunciation.mp3'


export default class Pronunciation extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }
 
  render() {
    return (
      <div style={{display: 'inline-block'}}>
        <p onClick={this.playAudio} className="know-more-link">Adil <span role="img" aria-label="speaker">🔊</span></p>
        <audio className="audio-element">
          <source src={audioFile}></source>
        </audio>
      </div>
    )
  }
}