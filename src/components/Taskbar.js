import React, { useContext, useEffect } from 'react'
import DataContext from '../contexts/dataContext'
import { TaskBar, List } from '@react95/core'
import styled from 'styled-components'

const Link = styled.a`
    text-decoration: none;
    color: inherit;
`


function Taskbar() {
    const { projectRepo, react95Repo } = useContext(DataContext).getProjectInfo();
    const { socialLinks } = useContext(DataContext).getSocialLinks();
    const { agents } = useContext(DataContext).getAgents();
    const [newAgent, setNewAgent] = React.useState('Clippy');
    useContext(DataContext).changeAgent(newAgent);

    const writeNewAgent = (newAgent) => {
        setNewAgent(newAgent)
    }

    useEffect(() => {
        setNewAgent(newAgent);
    }, []);

    console.log('newAgent - ', useContext(DataContext).getCurrentAgent())

    return (
        <TaskBar
            list={
                <List> 
                    <List.Item icon="awfext32_6049">
                        Change Helper
                        <List>
                            {agents.map((item) => {
                                return (
                                    <List.Item 
                                        key={item}
                                        onClick={() => {writeNewAgent(item)}}
                                    >
                                        {item}
                                    </List.Item>
                                )
                            })}
                        </List>
                    </List.Item>
                    <List.Divider/>
                    <List.Item icon="awfext32_6049">
                        Contact Me
                        <List>
                            {socialLinks.map(({icon, name, url}) => {
                                return (
                                    <List.Item 
                                        as='a'
                                        href={url}
                                        icon={icon}
                                        key={name}
                                        rel='noopener noreferrer'
                                        target='_blank'
                                    >
                                        {name}
                                    </List.Item>
                                )
                            })}
                        </List>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="brush">
                        <Link href={react95Repo} target="_blank">Built with React95</Link>
                    </List.Item>
                    <List.Divider />
                    <List.Item className="pointer" icon="folder_file">
                        <Link href={projectRepo} target="_blank">Repo</Link>
                    </List.Item>
                </List>
            }
        />
    )
}

export default Taskbar
