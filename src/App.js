import logo from './logo.svg';
import React from 'react';
import useSound from 'use-sound';
import soundOnLoad from './assets/windows95-sound.mp3';

import './App.css';

const App = () => {

  const [play] = useSound(soundOnLoad);

  let loadScreen = () => {
    return new Promise(resolve => setTimeout(resolve, 4000)) // 2 seconds
  };

  React.useEffect(() => {
    play();
    loadScreen().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
