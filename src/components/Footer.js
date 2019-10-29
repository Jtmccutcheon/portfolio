import React from 'react';
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
import 'semantic-ui-css/semantic.min.css';

const Footer = () => {
    return (
        <StyledFooter>
            <a href="https://www.linkedin.com/in/justin-mccutcheon-667b5a152/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' /> </a>
            <a href="https://github.com/Jtmccutcheon" target="_blank" rel="noopener noreferrer"><Icon name='github square' /> </a>
            <a href="https://twitter.com/Justin_WebDev" target="_blank" rel="noopener noreferrer" ><Icon name='twitter' /> </a>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    
    display: flex;
    text-align:center;
    align-items: center;
    padding: 4rem 35% 1rem 35%;
    background-color: #1F1F1F;
    font-size: 2rem;
    justify-content: center;

    a {
        text-decoration: none;
        color: #fff;
        font-weight: 900;
        opacity: .5;
        
    }
`;

export default Footer;