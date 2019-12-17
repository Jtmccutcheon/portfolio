import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import apolloimg from '../assets/apolloimg';
import css from '../assets/css.png';
import GitHub from '../assets/GitHub.png';
import html5s from '../assets/html5s.png';
import jsImg from '../assets/js.png';
import reactimg from '../assets/reactimg.png';
import resticon from '../assets/resticon.png';
import nodeIcon from '../assets/node-icon.png';
import graphql from '../assets/graphql.png';
import sql3 from '../assets/sql3.png';
import heroku from '../assets/heroku.png';

const Skills = props => {
	console.log(props);
	let skillCards = [
		{
			title: 'Html5',
			img: html5s,
			description:
				'Experince using html to seperate web elements into appropriate html tags and display data',
		},
		{
			title: 'CSS',
			img: css,
			description:
				'Experience in using css to make UI with and without a UX designer. And Also have experience with the Sass and Less frameworks',
		},
		{
			title: 'Javascript',
			img: jsImg,
			description:
				'Experince writing javascript es6, DOM manipulation, writing functions, bulit in methods,',
		},
		{
			title: 'React',
			img: reactimg,
			description:
				'The bulk of my experience on building front end is in the React framework utilzing popular libraies',
		},
		{
			title: 'Node',
			img: nodeIcon,
			description: 'Experience building node servers withe express framwork',
		},
		{
			title: 'REStful apis',
			img: resticon,
			description:
				'Experince in working with and building restful api endpoints to build full crud functionality',
		},
		{
			title: 'Apollo',
			img: apolloimg,
			description:
				'Experience with Apollo servers using apollo gateway/federation on back end and apollo client store on the front end',
		},
		{
			title: 'Github',
			img: GitHub,
			description:
				'Experience working with online cloud version control utilizing seperate production, staging, development, feature branches',
		},
		{
			title: 'Graphql',
			img: graphql,
			description:
				'Experience building graphql apis writing resovers, queries, mutations',
		},
		{
			title: 'Sqlite 3',
			img: sql3,
			description: 'Experience using sqlite3 databases tables, queries, joins',
		},
		{
			title: 'Heroku',
			img: heroku,
			description:
				'Experince with live deployment/configuration using heroku linked with a github repository master branch',
		},
	];

	const imgSize = {
		width: '64px',
		// height: '64px',
	};

	const skillHeader = () => {
		return (
			<div className='skill-header'>
				<h2>Proficient with these technologies</h2>
			</div>
		);
	};
	const skillFunc = () => {
		return skillCards.map(card => {
			// console.log(card);
			return (
				<div className='cards'>
					<img src={card.img} alt='technologies' style={imgSize} />
					<h4>{card.title}</h4>

					<p>{card.description}</p>
				</div>
			);
		});
	};

	const toProjects = () => {
		props.history.push('/projects');
		window.scrollTo(0, 0);
	};
	const toAbout = () => {
		props.history.push('/about');
		window.scrollTo(0, 0);
	};

	return (
		<StyledSkills>
			{skillHeader()}
			{skillFunc()}
			{/* <Icon onClick={toAbout} className='arrow-left' name='arrow left'></Icon>
			<Icon
				onClick={toProjects}
				className='arrow-right'
				name='arrow right'></Icon> */}
		</StyledSkills>
	);
};

const StyledSkills = styled.div`
	margin: 0 auto;
	/* margin-top: 5rem; */
	margin-bottom: 5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	.arrow-right {
		font-size: 3rem;
		background-color: #1c2a35;
		position: relative;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		padding: 26px;
		top: -22.5rem;
		left: 16.9rem;
		/* align-self: flex-end; */
		&:hover {
			background-color: #5d97c9;
			cursor: pointer;
		}
	}

	.arrow-left {
		font-size: 3rem;
		background-color: #1c2a35;
		position: relative;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		text-align: center;
		line-height: 50px;
		padding: 26px;
		top: -9.5rem;
		left: -66rem;
		/* align-self: flex-start; */
		&:hover {
			background-color: #5d97c9;
			cursor: pointer;
		}
	}

	/* text-align: center; */
	width: 61%;
	.skill-header {
		width: 100%;
		margin: 0;

		padding-top: 5rem;
		padding-bottom: 2.5rem;
	}
	.cards {
		width: 15rem;
		border: 1px solid #1c2a35;
		margin: 1rem;
		padding: 1rem;
		border-radius: 14px;

		p {
			cursor: default;
		}
		h1 {
			cursor: default;
		}
		&:hover {
			trasition: 0.6s;
			transform: scale(1.2);
			animation: glowing 1300ms infinite;
			@keyframes glowing {
				0% {
					background-color: #1c2a35;
					box-shadow: 0 0 5px #1c2a35;
				}
				50% {
					background-color: #1c2a35;
					box-shadow: 0 0 20px #1c2a35;
				}
				100% {
					background-color: #1c2a35;
					box-shadow: 0 0 5px #1c2a35;
				}
			}
		}
	}
`;

export default Skills;
