import React from 'react';
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Skills = () => {

    const StyledSkills = styled.div`
        /* i {
        font-size: 1rem;
        color: #000;
        border: 1px solid red;
        } */
    `;

    return (
        <StyledSkills>
            <h1>Skills Component</h1>
            <Icon name='github square' size='small' />
        </StyledSkills>
    )
}

export default Skills