import React, { useState, useContext, useEffect } from 'react'
import DataContext from '../contexts/dataContext'
import Shortcuts from './Shortcuts';
import Resume from './programs/Resume'
import Clippy from './programs/Clippy'

const playlist = [
    {
      url: 'https://archive.org/download/CC1301_windows_95/CC1301_windows_95_512kb.mp4',
      title: 'Computer Chronicles - Windows 95'
    }
  ];

const Desktop = () => {

    const [showResume, setShowResume] = React.useState(false);

    const openResume = () => {
        setShowResume(!showResume);
    }

    useEffect(
        () => {
            setShowResume(showResume);
        }, []);
        
    return (
        <React.Fragment>
            <Shortcuts openResume={openResume}/>
            {showResume ? <Resume openResume={openResume} showResume={showResume}></Resume> : <></>}
            <Clippy/>
        </React.Fragment>
    )
}

export default Desktop