import React, { useContext, useEffect } from 'react';
import { useClippy, ClippyProvider } from '@react95/clippy';
import DataContext from '../../contexts/dataContext'

const MyComponent = () => {
    return (<></>);
};

const Clippy = () => {

  const {currentAgent} = useContext(DataContext).getCurrentAgent();

  useEffect(() => {
    
  }, [currentAgent])
  
  return (
    <ClippyProvider agentName={currentAgent}>
        <MyComponent />
    </ClippyProvider>
  )
};

export default Clippy;