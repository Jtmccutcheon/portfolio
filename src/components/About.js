import React from 'react';
import styled from 'styled-components';
import ReactContactForm from 'react-mail-form';
//images
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
						towards a better future. Over their 9 month bootcamp, I spent
						well over 40 hours a week fully immersed in learning, reading, and
						developing web applications.
					</p>
				</div>
			</section>
			<section className='bottom-form'>
				<h3 className='bottom-title'>Contact me with job offers, questions, comments, feedback, trolls, etc...</h3>
				<ReactContactForm className='form-start' to="jt.mccutcheon@live.com" titlePlaceholder='subject' contentsPlaceholder='your message' >
				</ReactContactForm>
			</section>
		</StyledAbout>
	);
};

const StyledAbout = styled.div`

	/* body container */
	/* height: 100vh; */
	width: 60%;
	margin: 0 auto;
	display: flex;
	flex-direction column;
	/* name title banner img */
	.top-content {
		display: flex;
		justify-content: space-around;
		/* margin: 3rem; */
		padding: 3rem;
		@media screen and (max-width: 1520px) {
			align-items: center;
			flex-direction: column-reverse;
		}
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		img {
			align-self: center;
			width: 20rem;
			border-radius: 50%;
		}
	}
	/* lambda logo and and story */
	.middle-content {
		display: flex;
		justify-content: space-around;
		/* margin: 3rem; */
		padding: 3rem;
		overflow: visible;
		@media screen and (max-width: 1520px) {
			align-items: center;
			flex-direction: column;
		}
		img {
			max-width: 22rem;
			max-height: 10rem;
			margin: 3.5rem 7rem;
			
		}
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: left;
				@media screen and (max-width: 1520px) {
					text-align: center;
			}
		}
	}

	.bottom-form {
			width: 100%;
			display: flex;
			flex-direction: column;
			margin: 3rem 0;
		.form-start{
			width: 50%;
			display: flex;
			flex-direction: column;
			align-self: center;
			margin: 1rem;
			@media screen and (max-width: 550px) {
				width: 100%;
			}	
			input {
				margin: 2rem;
				border-style: none;
				padding: .5rem 1rem;
				border-radius: 14px;
				&:focus {
				outline: none;
			}
			}
			textarea{ 
				margin: 2rem;
				border-style: none;
				padding: .5rem 1rem;
				border-radius: 14px;
				&:focus {
				outline: none;
			}
			}
			a {
				margin: 2rem;
				border: 1px solid #1c2a35;
				border-radius: 14px;
				padding: 1rem 0;
				color: white;
				background-color: #5d97c9;
				&:hover {
					background-color: #171E24
				}
			}
		}
	}
`;

export default About;
