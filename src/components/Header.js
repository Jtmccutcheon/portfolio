import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import justinimg from '../assets/justinimg.JPG';

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
	);
};

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-around;
	font-size: 2rem;
	padding: 4rem 35% 0 35%;
	background-color: #1c2a35;
	margin: 0 auto;

	a {
		text-decoration: none;
		color: #fff;
		padding: 1rem;
		font-weight: 900;
		opacity: 0.5;
		&:hover {
			color: white;
			opacity: 1;
		}
	}

	a.active {
		text-decoration: underline #5d97c9;
		color: #5d97c9;
		transition-duration: 1s;
		opacity: 1;
	}
`;

const StyledImg = styled.img`
	/* margin: 0 auto; */
	margin: 2rem 0 0 0;
	width: 20rem;
	border-radius: 50%;
`;
export default Header;
