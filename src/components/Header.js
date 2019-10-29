
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import justinimg from '../assets/justinimg.JPG'

const Header = () => {


    return (
        <div>
            <StyledHeader>
                <NavLink to='/about'>about</NavLink>
                <NavLink to='/skills'>skills</NavLink>
                <NavLink to='/projects'>projects</NavLink>
            </StyledHeader>
            <StyledImg src={justinimg} />
        </div>
    )
}

const StyledHeader = styled.div`
        display: flex;
        justify-content: space-around;
        font-size: 2rem;
        padding: 4rem 35% 0 35%;
        background-color: #1F1F1F;
        

        a {
            text-decoration: none;
            color: #fff;
            padding: 1rem;
            font-weight: 900;
            opacity: .5;
        }

        a:first-child {
            text-decoration: none;
        }
        a.active {
            text-decoration: underline orange;
            transition-duration: 1s;
            opacity: 1;
        }
    `;

const StyledImg = styled.img`
        margin: 2rem 0 0 0;
        width: 20rem;
        border-radius: 50%;
    `;
export default Header;
