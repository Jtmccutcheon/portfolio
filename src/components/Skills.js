import React from 'react';
import styled from 'styled-components';

//images
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
	// card objects
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

	// inline style line 105
	const imgSize = {
		width: '64px',
	};

	// returning the header as a function to keep it above  the skill cards
	const skillHeader = () => {
		return (
			<div className='skill-header'>
				<h2>Proficient with these technologies</h2>
			</div>
		);
	};

	// function to map out the skill card object
	const skillFunc = () => {
		return skillCards.map(card => {
			return (
				<div className='cards'>
					<img src={card.img} alt='technologies' style={imgSize} />
					<h4>{card.title}</h4>
					<p>{card.description}</p>
				</div>
			);
		});
	};

	// jsx that calls the above functions
	return (
		<StyledSkills>
			{skillHeader()}
			{skillFunc()}
		</StyledSkills>
	);
};

// css starts here
const StyledSkills = styled.div`
	/* body-container */
	margin: 0 auto;
	margin-bottom: 5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 61%;
	/* h2 */
	@media screen and (max-width: 800px) {
		width: 100%;
	}
	.skill-header {
		width: 100%;
		margin: 0;
		padding-top: 5rem;
		padding-bottom: 2.5rem;
	}
	/* card styles */
	.cards {
		width: 15rem;
		border: 1px solid #1c2a35;
		margin: 1rem;
		padding: 1rem;
		border-radius: 14px;
		&:hover {
			trasition: 1s;
			transform: scale(1.2);
			animation: glowing 2000ms infinite;
			@keyframes glowing {
				0% {
					background-color: #1c2a35;
					box-shadow: 0 0 5px #bf9737;
				}
				50% {
					background-color: #1c2a35;
					box-shadow: 0 0 20px #bf9737;
				}
				100% {
					background-color: #1c2a35;
					box-shadow: 0 0 5px #bf9737;
				}
			}
		}
	}
`;

export default Skills;
