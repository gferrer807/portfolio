import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'

const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    align-items: center;
    color: white;
`;

function Shortcuts({ openExplorer, openResume }) {

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
                <div>Media</div>
            </StyledShorcut>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="dolphin"
                    onClick={() => openYoutube()}
                />
                <div>Learn the secrets...</div>
            </StyledShorcut>
        </div>
    )
}

export default Shortcuts