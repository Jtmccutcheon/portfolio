import React, { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

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
			title: 'Apollo',
			img: apolloimg,
			description:
				'Experience with Apollo graphql server using yoga prisma database on the backend. As well as setting up and appolo client store using React framewrk  with appolo graphql hooks on the front end',
		},
		{
			title: 'CSS',
			img: css,
			description:
				'Experience in using css to make UI with and without a UX designer. And Also have experience with the Sass, Less frameworks',
		},
		{
			title: 'Github',
			img: GitHub,
			description:
				'Experience working with online cloud version control utilizing seperate production, staging, development, feature branches',
		},
		{
			title: 'Html5',
			img: html5s,
			description:
				'Experince using html to seperate web elements into appropriate html tags and display data',
		},
		{
			title: 'Javascript',
			img: jsImg,
			description:
				'Experince in writing javascript functionality and logic on both front and back end',
		},
		{
			title: 'React',
			img: reactimg,
			description:
				'The bulk of my experience on building front end is in the React framework utilzing popular libraies',
		},
		{
			title: 'REStful apis',
			img: resticon,
			description:
				'Experince in working with and building restful api endpoints to build full crud functionality',
		},
	];

	const skillFunc = () => {
		return skillCards.map(card => {
			console.log(card);
			return (
				<div>
					<h4>{card.title}</h4>
					<img src={card.img} />
					<p>{card.description}</p>
				</div>
			);
		});
	};

	return <div>{skillFunc()}</div>;
};

export default Skills;
