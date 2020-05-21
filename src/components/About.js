import React from 'react';
import styled from 'styled-components';
import ReactContactForm from 'react-mail-form';
//images
import dogaroos from '../assets/dogaroos.jpg';

const About = () => {
	return (
		<StyledAbout>
			<h2>Welcome to my Portfolio</h2>
			<section className='middle-content'>
				<img src={dogaroos} alt='dogaroos' />
				<div>
					<h3>a little about me...</h3>
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
					<p>
						When I'm not working on improving my skills you can
						catch me playing video games, hanging out with my dogs,
						and having a good fun time.
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
	h2 {
		margin-bottom: 4.5rem;
	}

	/* lambda logo and and story */
	.middle-content {
		display: flex;
		justify-content: center;
		flex-direction: row;
		padding: 3rem;
		overflow: visible;
		width: 60%;
		margin: 0 auto;
		position: relative;
		text-align: left;
		background-color: #1c2a35;
		border-radius: 14px;

		@media screen and (max-width: 1520px) {
			align-items: center;
			flex-direction: column;
			margin: 0;
			padding: 0;
			width: 100%;
		}
		img {
			max-width: 26rem;
			/* max-height: 10rem; */
			border-radius: 14px;
			margin: 3.5rem 7rem;
		}
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			/* margin-right: 2rem; */
			border: 1px solid #1c2a35;
			border-radius: 14px;
			height: 20rem;
			padding: 1rem;
			align-self: center;
			max-width: 28rem;
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
				border-radius: 10px;
				&:focus {
					outline: none;
				}
			}
			textarea {
				margin: 2rem;
				border-style: none;
				padding: 0.5rem 1rem;
				border-radius: 10px;
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
				width: 10rem;
				align-self: center;
				&:hover {
					background-color: #171e24;
				}
			}
		}
	}
`;

export default About;
