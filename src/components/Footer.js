import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

const Footer = props => {
	const arrowRight = () => {
		if (props.location.pathname === '/about') {
			props.history.push('skills');
		} else if (props.location.pathname === '/skills') {
			props.history.push('projects');
		} else if (props.location.pathname === '/projects') {
			props.history.push('about');
		}
	};
	const arrowLeft = () => {
		if (props.location.pathname === '/about') {
			props.history.push('projects');
		} else if (props.location.pathname === '/projects') {
			props.history.push('skills');
		} else if (props.location.pathname === '/skills') {
			props.history.push('about');
		}
	};

	return (
		<>
			<Arrow className='arrow'>
				<Icon
					onClick={arrowLeft}
					className='arrow-left'
					name='arrow left'></Icon>
				<Icon
					onClick={arrowRight}
					className='arrow-right'
					name='arrow right'></Icon>
			</Arrow>
			<StyledFooter>
				<a
					href='https://www.linkedin.com/in/justin-mccutcheon-667b5a152/'
					target='_blank'
					rel='noopener noreferrer'>
					<Icon name='linkedin' />{' '}
				</a>
				<a
					href='https://github.com/Jtmccutcheon'
					target='_blank'
					rel='noopener noreferrer'>
					<Icon name='github square' />{' '}
				</a>
				<a
					href='https://twitter.com/Justin_WebDev'
					target='_blank'
					rel='noopener noreferrer'>
					<Icon name='twitter' />{' '}
				</a>
			</StyledFooter>
		</>
	);
};

const Arrow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	.arrow-right {
		margin: 3rem 6rem 3rem 3rem;
		font-size: 3rem;
		background-color: #1c2a35;
		position: relative;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		padding: 26px;
		&:hover {
			background-color: #5d97c9;
			cursor: pointer;
		}
	}
	.arrow-left {
		margin: 3rem 3rem 3rem 6rem;
		font-size: 3rem;
		background-color: #1c2a35;
		position: relative;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		padding: 26px;
		&:hover {
			background-color: #5d97c9;
			cursor: pointer;
		}
	}
`;

const StyledFooter = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	padding: 4rem 35% 1rem 35%;
	background-color: #1c2a35;
	font-size: 2rem;
	justify-content: center;

	a {
		text-decoration: none;
		color: #fff;
		font-weight: 900;
		opacity: 0.5;
	}
`;

export default Footer;
