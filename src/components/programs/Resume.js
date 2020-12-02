import React, { useContext } from 'react'
import { Modal, Frame } from '@react95/core'
import DataContext from '../../contexts/dataContext'
import ResumeData from './programsData/resumeData'

const Resume = ({openResume, showResume}) => {
    const resumeContent = useContext(DataContext).getItem('resume');
    

    return (
        <Modal
            icon="notepad"
            title={`Notepad - resume.txt`}
            closeModal={showResume}
            buttons={[{ value: "Close", onClick: () => {openResume()} }]}
            style={{
                left: '50%',
                top: '15%',
                width: 450,
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