import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';

const Header = props => {
	const { toggle } = props;
	console.log(toggle);

	const animate = useSpring({
		marginLeft: toggle ? 0 : -100,
	});

	return toggle ? (
		<animated.div style={animate}>
			<StyledHeader>
				<NavLink to='/about'>about</NavLink>
				<NavLink to='/skills'>skills</NavLink>
				<NavLink to='/projects'>projects</NavLink>
			</StyledHeader>
		</animated.div>
	) : null;
};

const StyledHeader = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	/* position: fixed; */
	position: absolute;
	top: 32rem;
	font-size: 1.2rem;
	background-color: #1c2a35;
	text-align: left;
	border-radius: 0 1rem 1rem 0;
	border-width: 50px 0 50px 75px;
	width: 200px;
	height: 200px;
	z-index: 2;

	@media screen and (max-width: 670px) {
		top: 0;
		border-radius: 0 0 1rem;
		width: 120px;
		position: fixed;
	}

	a {
		margin: 0;
		text-decoration: none;
		color: #fff;
		padding: 0.5rem;

		opacity: 0.5;
		padding-left: 40px;
		padding-top: 20px;
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
export default Header;
