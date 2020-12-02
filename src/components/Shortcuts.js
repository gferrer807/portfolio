import React from 'react'
import styled from 'styled-components'
import { Icon } from '@react95/core'

const StyledShorcut = styled.div`
    margin-left: 20px;
    margin-top: 20px;
    align-items: center;
    color: white;
`;

function Shortcuts({ openExplorer }) {

    const openYoutube = () => {
        const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        window.open(url, "_blank")
    }

    return (
        <div>
            <StyledShorcut>
                <Icon
                    className="pointer"
                    name="windows_explorer"
                    onClick={() => openExplorer()}
                />
                <div>Explorer</div>
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