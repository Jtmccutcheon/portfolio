import React from 'react';
import styled from 'styled-components';
import justinimg from '../assets/justinimg.JPG';
import lambda from '../assets/lambda.png';

const About = props => {
	return (
		<StyledAbout>
			<section className='top-content'>
				<div>
					<h1>Justin McCutcheon</h1>
					<h2>Full Stack Web Developer</h2>
				</div>
				<img src={justinimg} alt='headshot' />
			</section>
			<section className='middle-content'>
				<img src={lambda} alt='lambdalogo' />
				<div>
					<h3>
						Hello, my name is Justin McCutcheon. Welcome to my portfolio
						website.
					</h3>
					<p>
						I am from Toledo, Ohio and finding Lambda school sparked the biggest
						change in my life for the better. In Toledo the job market is
						basically restaurants or manufacturing.
					</p>
					<p>
						Lambda School is where I acquired the skills and confidence to work
						towards a better future. Over their 9 month bootcamp where I spent
						well over 40 hours a week fully immersed in learning, reading, and
						developing web applications.
					</p>
				</div>
			</section>
		</StyledAbout>
	);
};

const StyledAbout = styled.div`
	height: 100vh;
	width: 60%;
	margin: 0 auto;
	display: flex;
	flex-direction column;
	.top-content {
		display: flex;
		justify-content: space-around;
		margin: 3rem;
		padding: 3rem;
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		img {
			width: 20rem;
			border-radius: 50%;
		}
	}
	.middle-content {
		display: flex;
		justify-content: space-around;
		margin: 3rem;
		padding: 3rem;
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: left;
		}
		img {
			width: 20rem;
			margin: 3.5rem 7rem;
		}
	}
`;

export default About;
