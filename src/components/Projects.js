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
import fireImg from '../assets/fire.png';
import pokeImg from '../assets/poke.png';
import styledImg from '../assets/styled.jpg';
import mongo from '../assets/mongo.png';
import lodash from '../assets/lodash.png';

const Projects = (props) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [git, setGit] = useState(false);
	const [quality, setQuality] = useState(false);
	const [interview, setInterview] = useState(false);
	const [fire, setFire] = useState(false);
	const [poke, setPoke] = useState(false);

	const pokeFlip = () => {
		setPoke(!poke);
	};

	const fireFlip = () => {
		setFire(!fire);
	};

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
					<h3>Allegedly TCG</h3>
					<ReactCardFlip isFlipped={poke}>
						<div className='card-content'>
							<img src={pokeImg} alt='alleged' />
							<p>
								Allegedly TCG is a trading card game based on
								the pokemon <br></br>trading card game
							</p>
							<Icon
								name='share'
								className='sharebutton'
								onClick={pokeFlip}
							/>
						</div>
						<div className='card-content'>
							<div className='back'>
								{' '}
								<p>Built using</p>
								<div className='skills-imgages'>
									<img src={html} alt='html img' />
									<img
										src={styledImg}
										alt='styled components img'
									/>
									<img src={jsImg} alt='js img' />
									<img src={lodash} alt='lodash img' />
									<img src={reactImg} alt='react img' />
									<img src={mongo} alt='mongodb' />
									<img src={node} alt='node' />
								</div>
								<div className='power-statements'>
									<p>
										Discoved this public api{' '}
										<a href='https://pokemontcg.io/'>
											https://pokemontcg.io/
										</a>{' '}
										and wanted to build a game around it as
										a full stack web app
									</p>
								</div>
							</div>
							<Icon
								name='share'
								className='sharebutton'
								onClick={pokeFlip}
							/>
						</div>
					</ReactCardFlip>
					<a
						href='https://github.com/allegedlytcg'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View on Github</button>
					</a>
					<a
						href='https://www.allegedlytcg.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View Live Site</button>
					</a>
				</div>
				<div className='card'>
					<h3>Fire Emblem: The Binding Blade Support Tracker</h3>
					<ReactCardFlip isFlipped={fire}>
						<div className='card-content'>
							<img src={fireImg} alt='fireemblem' />
							<p>
								Fire Emblem: The Binding Blade Support Tracker
								is a piece of custom software built by request
								of a friend after he noticed this feature was
								missing from this particular Fire Emblem game
							</p>
							<Icon
								name='share'
								className='sharebutton'
								onClick={fireFlip}
							/>
						</div>
						<div className='card-content'>
							<div className='back'>
								{' '}
								<p>Built using</p>
								<div className='skills-imgages'>
									<img src={html} alt='html img' />
									<img src={css} alt='sass img' />
									<img src={jsImg} alt='js img' />
									<img src={reactImg} alt='react img' />
								</div>
								<div className='power-statements'>
									<p>
										Built from scratch in a few days
										<br></br>I decided a web app would best
										fit needs for ease of access in a
										browser <br></br>Designed data structure
										that was easy to work with <br></br>
										Utilzed users local storage to persist
										data
									</p>
								</div>
							</div>
							<Icon
								name='share'
								className='sharebutton'
								onClick={fireFlip}
							/>
						</div>
					</ReactCardFlip>
					<a
						href='https://github.com/Jtmccutcheon/febb_sup_tracker'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View on Github</button>
					</a>
					<a
						href='https://febbsuptracker.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View Live Site</button>
					</a>
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
					<a
						href='https://github.com/orgs/Lambda-School-Labs/teams/labs-18-quality-hub/repositories'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View on Github</button>
					</a>
					<a
						href='https://qhubfe.herokuapp.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View Live Site</button>
					</a>
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
					<a
						href='https://github.com/Lambda-School-Labs/quality-hub-core-fe/tree/master/src/InterviewQ'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View on Github</button>
					</a>
					<a
						href='https://qhubfe.herokuapp.com/interviewq'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View Live Site</button>
					</a>
				</div>
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
										styling with Reactstrap <br />
										Overall had fun working on this project
										as a former wait staff
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
						<a
							href='https://github.com/sep2019-bw-tipsease'
							target='_blank'
							rel='noopener noreferrer'
						>
							<button>View on Github</button>
						</a>
						<a
							href='https://besttipsease-app.netlify.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<button>View Live Site</button>
						</a>
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
					<a
						href='https://github.com/Build-GitHub-User-Breakdown'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View on Github</button>
					</a>
					<a
						href='https://git-status-app.netlify.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<button>View Live Site</button>
					</a>
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
				@media screen and (max-width: 419px) {
					top: 1rem;
				}
			}
			.skills-imgages {
				img {
					/* border-radius: 100%; */
					vertical-align: middle;
					border-radius: 0;
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
			@media screen and (max-width: 1352px) {
				left: 30.25rem;
			}
			@media screen and (max-width: 599px) {
				left: 30.1rem;
			}
			@media screen and (max-width: 568px) {
				left: 28.5rem;
			}
			@media screen and (max-width: 526px) {
				left: 26.5rem;
			}
			@media screen and (max-width: 500px) {
				left: 25.5rem;
			}
			@media screen and (max-width: 470px) {
				left: 23.5rem;
			}
			@media screen and (max-width: 445px) {
				left: 22.25rem;
			}
			@media screen and (max-width: 419px) {
				left: 1rem;
				top: 1rem;
			}
			/* @media screen and (max-width: 387px) {
				left: 20rem;
				top: 1rem;
			}
			@media screen and (max-width: 358px) {
				left: 18rem;
				top: 1rem;
			}
			@media screen and (max-width: 325px) {
				left: 15rem;
				top: 1rem;
			} */
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
				color: grey;
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
