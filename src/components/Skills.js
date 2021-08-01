import React from 'react';
import { Helmet } from 'react-helmet'; // changes head tag to improve seo
import SkillsStyles from '../styles/SkillsStyles';

import skillCards from './skillCards';

const Skills = (props) => {
	// inline style line 126
	const imgSize = {
		width: '64px',
	};

	return (
		<SkillsStyles>
			<Helmet>
				<title>Justin McCutcheon Portfolio</title>
				<meta charSet='utf-8' />
				<meta
					name='justin mccutcheon portfolio'
					content='portfolio of software developer justin mccutcheon'
				/>
				<link rel='canonical' href='https://justinweb.dev' />
			</Helmet>
			<div className='skill-header'>
				<h2>Proficient in these technologies</h2>
			</div>
			{skillCards.map((card) => {
				return (
					<div className='cards'>
						<img
							src={card.img}
							alt='technologies'
							style={imgSize}
						/>
						<h4>{card.title}</h4>
						<p>{card.description}</p>
					</div>
				);
			})}
		</SkillsStyles>
	);
};

export default Skills;
