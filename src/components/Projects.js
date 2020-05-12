import React, { useState } from 'react';
import styled from 'styled-components';
import tipseaseLogo from '../assets/tipseaseimg.png';
import gitstatus from '../assets/gitstatus.png';
import qualityhub from '../assets/qualityhub.png';
import interviewq from '../assets/interviewq.png';

// https://www.npmjs.com/package/react-card-flip
import ReactCardFlip from 'react-card-flip';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//images
import html from '../assets/html5s.png';
import jsImg from '../assets/js.png';
import css from '../assets/css.png';
import node from '../assets/node-icon.png';
import reactImg from '../assets/reactimg.png';
import sass from '../assets/sass.png';
import apollo from '../assets/apolloimg.png';
import graphql from '../assets/graphql.png';
import rest from '../assets/resticon.png';

const Projects = (props) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [git, setGit] = useState(false);
	const [quality, setQuality] = useState(false);
	const [interview, setInterview] = useState(false);

	const flipCard = () => {
		setIsFlipped(!isFlipped);
	};

	const gitFlip = () => {
		setGit(!git);
	};

	const qualityFlip = () => {
		setQuality(!quality);
	};

	const interviewFlip = () => {
		setInterview(!interview);
	};

	return (
		<StyledProjects>
			<h2>Projects I've contributed to</h2>
			<p>(Heroku free tier please be patient on first load)</p>
			<section>
				<div className='card'>
					<h3>Tipsease</h3>
					<ReactCardFlip
						isFlipped={isFlipped}
						flipDirection='horizontal'
					>
						<div className='card-content'>
							<img src={tipseaseLogo} alt='Tipsease' />
							<p>
								Tipsease is an app to connect customers to their
								service workers directly and cuts out the place
								of buisness middleman and ensures that all of
								the tip goes to your favorite service workers
							</p>
							<Icon
								name='share'
								className='sharebutton'
								onClick={flipCard}
							/>
						</div>
						<div className='card-content'>
							<div className='back'>
								<p>Built using</p>
								<div className='skills-imgages'>
									<img src={html} alt='html img' />
									<img src={css} alt='css img' />
									<img src={jsImg} alt='js img' />
									<img src={node} alt='node img' />
									<img src={reactImg} alt='react img' />
								</div>
								<div className='power-statements'>
									<p>
										I served as senior frontend web
										developer on a team of 4 web developers{' '}
										<br></br>
										Delivered minimal viable product to spec
										sheet in 4 days
										<br></br>
										Built frontend using React and handled
										styling with Reactstrap Overall had fun
										working on this project as a former wait
										staff
										<br></br>
										With more time I would implement payment
										processing
									</p>
								</div>
								<Icon
									name='share'
									className='sharebutton'
									onClick={flipCard}
								/>
							</div>
						</div>
					</ReactCardFlip>
					<div>
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
				</div>

				<div className='card'>
					<h3>Git Status</h3>
					<ReactCardFlip isFlipped={git}>
						<div className='card-content'>
							<img src={gitstatus} alt='gitstatus' />
							<p>
								Git status is an app that uses githubs public
								api to make profile pages for github users with
								various info and lets our users favorite and add
								private notes
							</p>
							<Icon
								name='share'
								className='sharebutton'
								onClick={gitFlip}
							/>
						</div>
						<div className='card-content'>
							<div className='back'>
								<p>Built using</p>
								<div className='skills-imgages'>
									<img src={html} alt='html img' />
									<img src={css} alt='css img' />
									<img src={jsImg} alt='js img' />
									<img src={node} alt='node img' />
									<img src={reactImg} alt='react img' />
									<img src={rest} alt='react img' />
								</div>
								<div className='power-statements'>
									<p>
										I served as the only Backend developer
										on a team of 4 web developers <br></br>
										Delivered minimal viable product to spec
										sheet in 4 days
										<br></br>
										Designed database scehema using knex,
										and sql
										<br />
										Created Rest api using node and express
									</p>
								</div>
								<Icon
									name='share'
									className='sharebutton'
									onClick={gitFlip}
								/>
							</div>
						</div>
					</ReactCardFlip>
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
					<ReactCardFlip isFlipped={quality}>
						<div className='card-content'>
							<img src={qualityhub} alt='QualityHub' />
							<p>
								QualityHub is an all in one bundle of quality
								assesment services with one authentication for
								many microservices
							</p>
							<Icon
								name='share'
								className='sharebutton'
								onClick={qualityFlip}
							/>
						</div>
						<div className='card-content'>
							<div className='back'>
								{' '}
								<p>Built using</p>
								<div className='skills-imgages'>
									<img src={html} alt='html img' />
									<img src={sass} alt='sass img' />
									<img src={jsImg} alt='js img' />
									<img src={node} alt='node img' />
									<img src={reactImg} alt='react img' />
									<img src={apollo} alt='apollo img' />
									<img src={graphql} alt='graphql img' />
								</div>
								<div className='power-statements'>
									<p>
										I served as web developer on a team of 7
										web developers and 1 ui/ux designer{' '}
										<br></br>
										Built microservice architecture using
										Apollo Federation and Gateway
										Authenticated users across InterviewQ as
										well as other future Q’s using
										JSONwebtoken
									</p>
								</div>
							</div>
							<Icon
								name='share'
								className='sharebutton'
								onClick={qualityFlip}
							/>
						</div>
					</ReactCardFlip>
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
					<ReactCardFlip isFlipped={interview}>
						<div className='card-content'>
							<img src={interviewq} alt='InterviwQ' />
							<p>
								InterviewQ is a platform to connect job seekers
								and intview coachs to set up paid mock
								interviews with in app video calling as well
								feedback and rating system
							</p>
							<Icon
								name='share'
								className='sharebutton'
								onClick={interviewFlip}
							/>
						</div>
						<div className='card-content'>
							<div className='back'>
								<p>Built using</p>
								<div className='skills-imgages'>
									<img src={html} alt='html img' />
									<img src={sass} alt='sass img' />
									<img src={jsImg} alt='js img' />
									<img src={node} alt='node img' />
									<img src={reactImg} alt='react img' />
									<img src={apollo} alt='apollo img' />
									<img src={graphql} alt='graphql img' />
								</div>
								<div className='power-statements'>
									<p>
										I served as web developer on a team of 7
										web developers and 1 ui/ux designer
										<br /> Implemented Stripe allowing
										interview coaches to be paid for their
										services <br />
										Contributed to in-app video calling
										using webRTC Built custom feedback and
										rating system with Javascript
									</p>
								</div>
								<Icon
									name='share'
									className='sharebutton'
									onClick={interviewFlip}
								/>
							</div>
						</div>
					</ReactCardFlip>
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
		.card-content {
			height: 300px;
			.back {
				display: flex;
				flex-direction: column;
				width: 100%;
				p {
					text-align: center;
				}
				.power-statements {
					p {
						text-align: left;
					}
				}
				.sharebutton {
					top: 9rem;
				}
			}
			.skills-imgages {
				img {
					border-radius: 100%;
					width: 50px;
					margin: 0.5rem;
				}
			}
		}
		.sharebutton {
			position: absolute;
			background-color: #1c2a35;
			left: 33.75rem;
			border-radius: 50%;
			width: 50px;
			height: 50px;
			border-radius: 50%;
			text-align: center;
			line-height: 10px;
			padding: 20px;
			&:hover {
				cursor: pointer;
			}
		}
		@media screen and (max-width: 1352px) {
			max-width: 450px;
		}
		@media screen and (max-width: 420px) {
			width: 100%;
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
