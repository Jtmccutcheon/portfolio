import React from 'react';
import styled from 'styled-components';

import apolloimg from '../assets/apolloimg';
import css from '../assets/css.png';
import GitHub from '../assets/GitHub.png';
import html5s from '../assets/html5s.png';
import jsImg from '../assets/js.png';
import reactimg from '../assets/reactimg.png';
import resticon from '../assets/resticon.png';
import nodeIcon from '../assets/node-icon.png';

const Skills = () => {
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
	];

	const imgSize = {
		width: '64px',
		// height: '64px',
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

	return <StyledSkills>{skillFunc()}</StyledSkills>;
};

const StyledSkills = styled.div`
	margin: 0 auto;
	margin-top: 5rem;
	margin-bottom: 5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	/* text-align: center; */
	width: 72%;
	.cards {
		width: 23%;
		border: 1px solid #1c2a35;
		margin: 1rem;
		padding: 1rem;
		border-radius: 14px;
		
		}
	}
`;

export default Skills;
