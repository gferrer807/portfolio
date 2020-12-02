import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components'
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Taskbar from './Taskbar';
import Shortcuts from './Shortcuts';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 14px
  }
`

const App = () => {

  let loadScreen = () => {
    return new Promise(resolve => setTimeout(resolve, 4000)) // 2 seconds
  };

  React.useEffect(() => {
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
        <Shortcuts />

      </ThemeProvider>
    </DataContext.Provider>
  )
};

export default App;
