import React from 'react';
import styled from 'styled-components';
import ReactContactForm from 'react-mail-form';
//images

import lambda from '../assets/lambda.png';

const About = () => {
	return (
		<StyledAbout>
			<section className='middle-content'>
				<img src={lambda} alt='lambdalogo' />
				<div>
					<h3>
						Hello, my name is Justin McCutcheon. Welcome to my
						portfolio website.
					</h3>
					<p>
						I am from Toledo, Ohio and finding Lambda school sparked
						the biggest change in my life for the better. In Toledo
						the job market is basically restaurants or
						manufacturing.
					</p>
					<p>
						Lambda School is where I acquired the skills and
						confidence to work towards a better future. Over their 9
						month bootcamp, I spent well over 40 hours a week fully
						immersed in learning, reading, and developing web
						applications.
					</p>
				</div>
			</section>
			<section className='bottom-form'>
				<h3 className='bottom-title'>
					Contact me with job offers, questions, comments, feedback,
					trolls, etc...
				</h3>
				<ReactContactForm
					className='form-start'
					to='jt.mccutcheon@live.com'
					titlePlaceholder='subject'
					contentsPlaceholder='your message'
				></ReactContactForm>
			</section>
		</StyledAbout>
	);
};

const StyledAbout = styled.div`
	margin: 0 auto;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;

	/* lambda logo and and story */
	.middle-content {
		display: flex;
		justify-content: space-around;
		flex-direction: row-reverse
		/* margin: 3rem; */
		padding: 3rem;
		overflow: visible;
		width: 60%;
		margin: 0 auto;
		position: relative;
		text-align: left;
		@media screen and (max-width: 1520px) {
			align-items: center;
			flex-direction: column;
			margin: 0;
			padding: 0;
			width: 100%;
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

			margin-right: 2rem;
			@media screen and (max-width: 1520px) {
				text-align: center;
			}
		}
	}

	.bottom-form {
		width: 60%;
		display: flex;
		flex-direction: column;
		margin: 5rem auto 0 auto;
		.form-start {
			width: 50%;
			display: flex;
			flex-direction: column;
			align-self: center;
			margin: 1rem;
			@media screen and (max-width: 550px) {
				width: 100%;
			}
			@media screen and (max-width: 1000px) {
				width: 100%;
				margin: 0;
			}
			input {
				margin: 2rem;
				border-style: none;
				padding: 0.5rem 1rem;
				border-radius: 14px;
				&:focus {
					outline: none;
				}
			}
			textarea {
				margin: 2rem;
				border-style: none;
				padding: 0.5rem 1rem;
				border-radius: 15px;
				&:focus {
					outline: none;
				}
			}
			a {
				margin: 2rem;
				border: 1px solid #1c2a35;
				border-radius: 30px;
				padding: 1rem 0;
				color: white;
				background-color: #5d97c9;
				&:hover {
					background-color: #171e24;
				}
			}
		}
	}
`;

export default About;
