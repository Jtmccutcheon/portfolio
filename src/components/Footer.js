import React from 'react';

//libraries
import { Icon } from 'semantic-ui-react';
import FooterStyles from '../styles/FooterStyles'
import ArrowStyles from '../styles/ArrowStyles'
import 'semantic-ui-css/semantic.min.css';

const Footer = (props) => {
	// onClick handlers
	const arrowRight = () => {
		if (props.location.pathname === '/about') {
			props.history.push('skills');
		} else if (props.location.pathname === '/skills') {
			props.history.push('projects');
		} else if (props.location.pathname === '/projects') {
			props.history.push('/about');
		}
	};
	const arrowLeft = () => {
		if (props.location.pathname === '/about') {
			props.history.push('projects');
		} else if (props.location.pathname === '/projects') {
			props.history.push('skills');
		} else if (props.location.pathname === '/skills') {
			props.history.push('/about');
		}
	};

	const nextArrowTitle = () => {
		let title = props.location.pathname;
		if (title === '/about') {
			let nextTitle = 'skills';
			return <h4>to {nextTitle}</h4>;
		} else if (title === '/skills') {
			let nextTitle = 'projects';
			return <h4>to {nextTitle}</h4>;
		} else if (title === '/projects') {
			let nextTitle = 'about';
			return <h4>to {nextTitle}</h4>;
		}
	};

	const lastArrowTitle = () => {
		let title = props.location.pathname;
		if (title === '/about') {
			let lastTitle = 'projects';
			return <h4>to {lastTitle}</h4>;
		} else if (title === '/projects') {
			let lastTitle = 'skills';
			return <h4>to {lastTitle}</h4>;
		} else if (title === '/skills') {
			let lastTitle = 'about';
			return <h4>to {lastTitle}</h4>;
		}
	};

	//jsx starts here vvvvv
	return (
		<>
			{/* left and right arrows */}
			<ArrowStyles className='arrow'>
				<div className='rightdiv'>
					{lastArrowTitle()}
					<Icon
						onClick={arrowLeft}
						className='arrow-left'
						name='arrow left'
					></Icon>
				</div>

				<div className='leftdiv'>
					{nextArrowTitle()}
					<Icon
						onClick={arrowRight}
						className='arrow-right'
						name='arrow right'
					></Icon>
				</div>
			</ArrowStyles>

			{/* footer links */}
			<FooterStyles>
				<a
					href='https://www.linkedin.com/in/justinmccutcheon/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Icon name='linkedin' />
				</a>
				<a
					href='https://github.com/Jtmccutcheon'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Icon name='github square' />
				</a>
				<a
					href='https://twitter.com/Justin_WebDev'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Icon name='twitter' />
				</a>
			</FooterStyles>
		</>
	);
};


export default Footer;
