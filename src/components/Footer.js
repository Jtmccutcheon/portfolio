import React from "react";

//libraries
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";

const Footer = props => {
	console.log(props);
	// onClick handlers
	const arrowRight = () => {
		if (props.location.pathname === "/about") {
			props.history.push("skills");
		} else if (props.location.pathname === "/skills") {
			props.history.push("projects");
		} else if (props.location.pathname === "/projects") {
			props.history.push("about");
		}
	};
	const arrowLeft = () => {
		if (props.location.pathname === "/about") {
			props.history.push("projects");
		} else if (props.location.pathname === "/projects") {
			props.history.push("skills");
		} else if (props.location.pathname === "/skills") {
			props.history.push("about");
		}
	};

	const nextArrowTitle = () => {
		let title = props.location.pathname.slice(1);
		if (title === "about") {
			let nextTitle = "skills";
			return <h4>to {nextTitle}</h4>;
		} else if (title === "skills") {
			let nextTitle = "projects";
			return <h4>to {nextTitle}</h4>;
		} else if (title === "projects") {
			let nextTitle = "about";
			return <h4>to {nextTitle}</h4>;
		}
	};

	const lastArrowTitle = () => {
		let title = props.location.pathname.slice(1);
		if (title === "about") {
			let lastTitle = "projects";
			return <h4>to {lastTitle}</h4>;
		} else if (title === "projects") {
			let lastTitle = "skills";
			return <h4>to {lastTitle}</h4>;
		} else if (title === "skills") {
			let lastTitle = "about";
			return <h4>to {lastTitle}</h4>;
		}
	};

	//jsx starts here vvvvv
	return (
		<>
			{/* left and right arrows */}
			<Arrow className='arrow'>
				<div className='rightdiv'>
					{lastArrowTitle()}
					<Icon
						onClick={arrowLeft}
						className='arrow-left'
						name='arrow left'
					></Icon>
				</div>

				<div classname='leftdiv'>
					{nextArrowTitle()}
					<Icon
						onClick={arrowRight}
						className='arrow-right'
						name='arrow right'
					></Icon>
				</div>
			</Arrow>

			{/* footer links */}
			<StyledFooter>
				<a
					href='https://www.linkedin.com/in/justin-mccutcheon-667b5a152/'
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
			</StyledFooter>
		</>
	);
};

// css starts here vvvv

const Arrow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 5rem;
	padding: 3rem;
	/* margin-bottom: 18rem; */
	position: absolute;
	bottom: 1rem;
	z-index: 1;
	@media screen and (max-width: 500px) {
		display: none;
	}
	/* .leftdiv {
		bottom: 2rem;
	}
	.rightdiv {
		bottom: 2rem;
	} */

	.arrow-right {
		/* margin: 3rem 6rem 3rem 3rem; */
		font-size: 3rem;
		background-color: #1c2a35;
		/* position: relative; */
		width: 75px;
		height: 75px;
		border-radius: 50%;
		text-align: center;
		line-height: 30px;
		padding: 21px;
		&:hover {
			background-color: #5d97c9;
			cursor: pointer;
		}
	}
	.arrow-left {
		/* margin: 3rem 3rem 3rem 6rem; */
		font-size: 3rem;
		background-color: #1c2a35;
		/* position: relative; */
		width: 75px;
		height: 75px;
		border-radius: 50%;
		text-align: center;
		line-height: 30px;
		padding: 21px;
		&:hover {
			background-color: #5d97c9;
			cursor: pointer;
		}
	}
`;

const StyledFooter = styled.div`
	/* margin-top: 4rem; */
	display: flex;
	text-align: center;
	align-items: center;
	padding: 2rem 35% 1rem 35%;
	background-color: #1c2a35;
	font-size: 2rem;
	justify-content: center;
	/* max-height: 5rem; */

	a {
		text-decoration: none;
		color: #fff;
		font-weight: 900;
		opacity: 0.5;
		margin: 0;
	}
`;

export default Footer;
