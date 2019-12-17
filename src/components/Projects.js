import React from 'react';
import styled from 'styled-components';
import tipseaseLogo from '../assets/tipseaseimg.png';
import gitstatus from '../assets/gitstatus.png';
import qualityhub from '../assets/qualityhub.png';

const Projects = props => {
	return (
		<StyledProjects>
			<h2>Projects I've contributed to</h2>
			<section>
				<div className='card'>
					<h3>Tipsease</h3>
					<div className='card-content'>
						<img src={tipseaseLogo} alt='Tipsease' />
						<p>
							Tipsease is an app to connect customers to their service workers
							directly and cuts out the place of buisness middleman and ensures
							that all of the tip goes to your favorite service workers
						</p>
					</div>
					<button>
						<a href='#'>View on Github</a>
					</button>
					<button>
						<a href='#'>View Live Site</a>
					</button>
				</div>
				<div className='card'>
					<h3>Git Status</h3>
					<div className='card-content'>
						<img src={gitstatus} alt='gitstatus' />
						<p>
							Git status is an app that uses githubs public api to make profile
							pages for github users with various info and lets our users
							favorite and add private notes
						</p>
					</div>
					<button>
						<a href='#'>View on Github</a>
					</button>
					<button>
						<a href='#'>View Live Site</a>
					</button>
				</div>
				<div className='card'>
					<h3>QualityHub</h3>
					<div className='card-content'>
						<img src={qualityhub} alt='QualityHub' />
						<p>
							QualityHub is an all in one bundle of quality assesment services
							with one login for many microservices
						</p>
					</div>
					<button>
						<a href='#'>View on Github</a>
					</button>
					<button>
						<a href='#'>View Live Site</a>
					</button>
				</div>
				<div className='card'>
					<h3>InterviewQ</h3>
					<div className='card-content'>
						<img src={gitstatus} alt='InterviwQ' />
						<p>
							InterviewQ is a platform to connect job seekers and intview coachs
							to set up paid mock interviews with in app video calling as well
							feedback and rating system
						</p>
					</div>
					<button>
						<a href='#'>View on Github</a>
					</button>
					<button>
						<a href='https://www.explorequality.com/'>View Live Site</a>
					</button>
				</div>
			</section>
		</StyledProjects>
	);
};

const StyledProjects = styled.div`
	/* width: 60%; */
	margin: 0 8rem;

	h2 {
		margin: 0;
		margin-top: 5rem;
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
