import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components'
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import soundfile from '../assets/windows95-sound.mp3';
import Sound from 'react-sound';
// import useSound from 'react-sound';
// import windowsStartupSound from '../assets/windows95-sound.mp3'
import Taskbar from './Taskbar';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 14px
  }
`

const App = () => {

  //const [play] = useSound(windowsStartupSound);

  let loadScreen = () => {
    return new Promise(resolve => setTimeout(resolve, 4000)) // 2 seconds
  };

  React.useEffect(() => {
    //play();
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
    <DataContext.Provider value={dataService}>
      <ThemeProvider>
        <GlobalStyle />
        <BodyFontSizeOverride />

        <Taskbar />
        {/* <Sound
          url={soundfile}
          playStatus={Sound.status.PLAYING}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        /> */}

      </ThemeProvider>
    </DataContext.Provider>
  )
};

export default App;
