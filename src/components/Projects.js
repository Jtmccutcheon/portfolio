import React, { useState } from 'react';
import styled from 'styled-components';
import tipseaseLogo from '../assets/tipseaseimg.png';
import gitstatus from '../assets/gitstatus.png';
import qualityhub from '../assets/qualityhub.png';
import interviewq from '../assets/interviewq.png';

// https://www.npmjs.com/package/react-card-flip

const Projects = props => {
	return (
		<StyledProjects>
			<h2>Projects I've contributed to</h2>
			<p>(Heroku free tier please be patient on first load)</p>
			<section>
				<div className='card'>
					<h3>Tipsease</h3>
					<div className='card-content'>
						<img src={tipseaseLogo} alt='Tipsease' />
						<p>
							Tipsease is an app to connect customers to their
							service workers directly and cuts out the place of
							buisness middleman and ensures that all of the tip
							goes to your favorite service workers
						</p>
					</div>
					<button>
						<a
							href='https://github.com/sep2019-bw-tipsease'
							target='_blank'
							rel='noopener noreferrer'
						>
							View on Github
						</a>
					</button>
					<button>
						<a
							href='https://besttipsease-app.netlify.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							View Live Site
						</a>
					</button>
				</div>
				<div className='card'>
					<h3>Git Status</h3>
					<div className='card-content'>
						<img src={gitstatus} alt='gitstatus' />
						<p>
							Git status is an app that uses githubs public api to
							make profile pages for github users with various
							info and lets our users favorite and add private
							notes
						</p>
					</div>
					<button>
						<a
							href='https://github.com/Build-GitHub-User-Breakdown'
							target='_blank'
							rel='noopener noreferrer'
						>
							View on Github
						</a>
					</button>
					<button>
						<a
							href='https://git-status-app.netlify.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							View Live Site
						</a>
					</button>
				</div>
				<div className='card'>
					<h3>QualityHub</h3>
					<div className='card-content'>
						<img src={qualityhub} alt='QualityHub' />
						<p>
							QualityHub is an all in one bundle of quality
							assesment services with one login for many
							microservices
						</p>
					</div>
					<button disabled>
						<a
							href='https://github.com/orgs/Lambda-School-Labs/teams/labs-18-quality-hub/repositories'
							target='_blank'
							rel='noopener noreferrer'
						>
							View on Github
						</a>
					</button>
					<button>
						<a
							href='https://qhubfe.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							View Live Site
						</a>
					</button>
				</div>
				<div className='card'>
					<h3>InterviewQ</h3>
					<div className='card-content'>
						<img src={interviewq} alt='InterviwQ' />
						<p>
							InterviewQ is a platform to connect job seekers and
							intview coachs to set up paid mock interviews with
							in app video calling as well feedback and rating
							system
						</p>
					</div>
					<button disabled>
						<a
							href='https://github.com/Lambda-School-Labs/quality-hub-core-fe/tree/master/src/InterviewQ'
							target='_blank'
							rel='noopener noreferrer'
						>
							View on Github
						</a>
					</button>
					<button>
						<a
							href='https://qhubfe.herokuapp.com/interviewq'
							target='_blank'
							rel='noopener noreferrer'
						>
							View Live Site
						</a>
					</button>
				</div>
			</section>
		</StyledProjects>
	);
};

const StyledProjects = styled.div`
	/* width: 60%; */
	margin: 0 8rem;
	@media screen and (max-width: 790px) {
		margin: 0;
	}

	h2 {
		margin: 0;
		padding-top: 5rem;
	}
	section {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}

	.card {
		border: 1px solid #1c2a35;
		padding-top: 2%;
		max-width: 500px;
		width: 75%;
		margin: 2.5%;
		border-radius: 2%;
		background-color: #1c2a35;
		box-shadow: 5px 5px 8px #171e24;
		transition-duration: 0.09s;
		@media screen and (max-width: 1352px) {
			max-width: 450px;
		}
		@media screen and (max-width: 420px) {
			width: 100%;
		}
		&:hover {
			box-shadow: 10px 10px 8px #bf9737;
			-ms-transform: translate(-2px, -2px); /* IE 9 */
			-webkit-transform: translate(-1rem, -1rem); /* Safari 3-8 */
			transform: translate(-1.2rem, -1.2rem);
			transition-duration: 0.2s;
		}
		h3 {
			color: lightgray;
		}

		.card-content {
			display: flex;
			align-items: center;
			padding: 2%;
			width: 100%;
			background-color: #171e24;

			p {
				padding: 2%;
				text-align: left;
			}
		}
		img {
			width: 50%;
			border-radius: 50%;
		}
		button {
			margin: 3%;
			color: white;
			background-color: transparent;
			border-radius: 0.25rem;
			padding: 5px 7px;
			border: 2px solid white;
			transition-duration: 0.5s;
			&:hover {
				border-color: #1f1f1f;
				background-color: white;
				transition-duration: 0.5s;
				cursor: pointer;
				a {
					color: black;
				}
			}
			a {
				color: white;
				&:hover {
					color: black;
				}
			}
		}
	}
`;

export default Projects;
