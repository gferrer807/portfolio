import React, { useState, useContext, useEffect } from 'react'
import DataContext from '../contexts/dataContext'
import Shortcuts from './Shortcuts';
import Resume from './programs/Resume'
import Clippy from './programs/Clippy'
import Skills from './programs/Skills'

const playlist = [
    {
      url: 'https://archive.org/download/CC1301_windows_95/CC1301_windows_95_512kb.mp4',
      title: 'Computer Chronicles - Windows 95'
    }
  ];

const Desktop = () => {

    const [showResume, setShowResume] = React.useState(false);
    const [showSkills, setShowSkills] = React.useState(false);

    const openResume = () => {
        setShowResume(!showResume);
    }

    const openSkills = () => {
        setShowSkills(!showSkills);
    }

    useEffect(
        () => {
            setShowResume(showResume);
        }, []);
        
    return (
        <React.Fragment>
            <Shortcuts openResume={openResume} openSkills={openSkills}/>
            {showResume ? <Resume openResume={openResume} showResume={showResume}></Resume> : <></>}
            {showSkills ? <Skills openSkills={openSkills} showSkills={showSkills}></Skills> : <></>}
            <Clippy/>
        </React.Fragment>
    )
}

export default Desktop