import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'

const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    align-items: center;
    color: white;
`;

function Shortcuts({ openExplorer, openResume, openSkills }) {

    const openYoutube = () => {
        const url = 'https://www.youtube.com/watch?v=OE2NPmqZ9nM';
        window.open(url, "_blank")
    }

    return (
        <div>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="notepad"
                    onClick={() => {openResume()}}
                />
                <div>resume.txt</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="media_cd"
                />
                <div>Media.exe</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="pbrush_1"
                    onClick={() => {openSkills()}}
                />
                <div>Skills.exe</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="actmovie_303"
                    onClick={() => openYoutube()}
                />
                <div>Learn the secrets...</div> 
                {/* will eventually be dolphin.ico */}
            </StyledShorcut>
        </div>
    )
}

export default Shortcuts