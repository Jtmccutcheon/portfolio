import React from 'react';
import styled from 'styled-components'

const About = () => {

    return (
        <StyledAbout>
            <h1>Justin McCutcheon</h1>
            <h2>Full Stack Web Developer</h2>
            <p>hello my name is justin mccutcheon. I am one of the top young rising developers</p>
            <p>I am also super fortunate to have the most wonderful girlfriend in the universe. #blessed if you are hiring hire us both. We are looking for long term multi year deals in a location that has fall but never goes lower than 40 degrees Also for sure have a bring your dog to work day</p>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    height: 47.5vh; /* keeps footer in the same place on all pages during development */
    /* background-color: red; */
    h1 {
        
    }
`;

export default About