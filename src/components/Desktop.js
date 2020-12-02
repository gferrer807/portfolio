import React, { useState, useContext, useEffect } from 'react'
import DataContext from '../contexts/dataContext'
import Shortcuts from './Shortcuts';

const playlist = [
    {
      url: 'https://archive.org/download/CC1301_windows_95/CC1301_windows_95_512kb.mp4',
      title: 'Computer Chronicles - Windows 95'
    }
  ];

const Desktop = () => {

    useEffect(
        () => {

        }, []);

    return (
        <React.Fragment>
            {/* <MediaPlayer
                className="player"
                playlist={playlist}
                showVideo
                fullscreenEnabled
            /> */}
        </React.Fragment>
    )
}

export default Desktop