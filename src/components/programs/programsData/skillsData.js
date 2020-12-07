import React from 'react'
import { ProgressBar } from '@react95/core'
import styled from 'styled-components'

const StyledSkill = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`
const SkillsData = (skillsContent) => {
    console.log(skillsContent);

    return (
        <div>
            <h4>{skillsContent.skillsContent.content.soft}</h4>
            <div>
                {skillsContent.skillsContent.content.skills.map((skill, i) => {
                    return (
                        <div>
                            <StyledSkill key={i}>
                                <p style={{ flex: 1 }}>{skill.name}</p>
                                <ProgressBar style={{ flex: 1 }} width={200} percent={skill.progress} />
                            </StyledSkill>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillsData