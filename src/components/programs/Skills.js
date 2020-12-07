import React, { useEffect,  useContext } from 'react'
import { Modal, Frame } from '@react95/core'
import { List, ListItem, Divider } from 'react95';
import SkillsData from './programsData/skillsData';
import DataContext from '../../contexts/dataContext';

const Skills = ({openSkills, showSkills}) => {
    const skillsContent = useContext(DataContext).getItem('skills');
    const [isMobile, setIsMobile] = React.useState(false);

    return (
        <Modal
            icon="pbrush_1"
            title={`Skills.exe`}
            closeModal={() => {openSkills()}}
            buttons={[{ value: "Close", onClick: () => {openSkills()} }]}
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
            <SkillsData isMobile={isMobile} skillsContent={skillsContent}/>
            </Frame>
        </Modal >
    )
}

export default Skills