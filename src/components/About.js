import React from 'react';
import styled from 'styled-components'

const About = () => {

    return (
        <StyledAbout>
            <h1>Justin McCutcheon</h1>
            <h2>Full Stack Web Developer</h2>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    height: 47.5vh /* keeps footer in the same place on all pages during development */
`;

export default About