import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';

import apollo from '../..assets/apollo';

const Skills = () => {
	// const StyledSkills = styled.div`
	//     margin: 3rem auto;
	//     display: flex;
	//     justify-content: center;

	//     .row {
	//         /* border: 1px solid red; */
	//         margin-right: 0;
	//         width: 18rem;
	//         padding: 5rem 0;

	//         h3 {
	//             padding: 2rem 0;
	//                 .icon {
	//                     font-size: 3rem;
	//                 }
	//         }
	//     }
	// `;

	const StyledSkills = styled.div``;
	return (
		<StyledSkills>
			{/* <div className='row'>
                <h3> <Icon className='icon' name='html5'></Icon> HTML</h3>
                <h3> <Icon className='icon' name='github square'></Icon> Github</h3>
            </div>
            <div className='row'>
                <h3> <Icon className='icon' name='css3'></Icon> CSS</h3>
                <h3><Icon className='icon' name='react'></Icon> React JS </h3>
            </div>
            <div className='row'>
                <h3> <Icon className='icon' name='js'></Icon> Javascript</h3>
                <h3> <Icon className='icon' name='node'></Icon> Node JS</h3>
            </div>
            <div>

            </div> */}
		</StyledSkills>
	);
};

export default Skills;
