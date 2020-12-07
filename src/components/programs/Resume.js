import React, { useContext, useEffect } from 'react'
import { Modal, Frame } from '@react95/core'
import DataContext from '../../contexts/dataContext'
import ResumeData from './programsData/resumeData'
import { isMobile } from "react-device-detect";

const Resume = ({openResume, showResume}) => {
    const resumeContent = useContext(DataContext).getItem('resume');
    const [isMobile, setIsMobile] = React.useState(false);    

    return (
        <Modal
            icon="notepad"
            title={`Notepad - resume.txt`}
            closeModal={() => {openResume()}}
            buttons={[{ value: "Close", onClick: () => {openResume()} }]}
            style={{
                left: isMobile ? '3%' : '50%',
                top: isMobile ? '3%' : '15%',
                width: isMobile ? '80%' : 450,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] }
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
                padding={20}
                style={{
					overflowY: "auto",
					maxHeight: "60vh",
				}}
            >
            <ResumeData content={resumeContent.content}/>
            </Frame>
        </Modal >
    )
}

export default Resume