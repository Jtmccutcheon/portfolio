import React from 'react';
import styled from 'styled-components'

const Projects = () => {
    return (
        <StyledProjects>
            <h1>Projects Component</h1>
        </StyledProjects>
    )
}

const StyledProjects = styled.div`
    height: 47.5vh /* keeps footer in the same place on all pages during development */
`;

export default Projects