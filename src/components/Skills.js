import React from 'react';
import SkillsStyles from '../styles/SkillsStyles'


import skillCards from './skillCards'

const Skills = (props) => {

	// inline style line 126
	const imgSize = {
		width: '64px',
	};

	
	return (
		<SkillsStyles>
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
