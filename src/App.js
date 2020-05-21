import React, { useEffect } from 'react';
//client side routing
import { Router, Route, Switch, useLocation } from 'react-router-dom';
// libraries
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';
import { Helmet } from 'react-helmet'; // changes head tag to improve seo

// styles
import './App.css';

import justinimg from './assets/justinimg.JPG';
//components
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

import headerimg from './assets/maybe.jpg';

function App(props) {
	const { history } = props;

	const location = useLocation();

	const transitions = useTransition(
		location,
		(location) => location.pathname,
		{
			from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
			enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
			leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
			config: config.gentle,
		},
	);

	// useEffect(() => {
	// 	history.push('/about');
	// }, [history]);

	return (
		<div className='App'>
			<Helmet>
				<title>Justin McCutcheon Portfolio</title>
				<meta
					name='justin mccutcheon portfolio'
					content='portfolio of software developer justin mccutcheon'
				/>
			</Helmet>
			<div>
				<HeaderDiv className='top-content'>
					<div>
						<h1>Justin McCutcheon</h1>
						<h2>Full Stack Web Developer</h2>
					</div>
					<img src={justinimg} alt='headshot' />
				</HeaderDiv>
			</div>
			{location.pathname === '/' ? <About /> : null}
			<Router {...props}>
				{transitions.map(({ item: location, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch>
							{/* <Route path='/about' component={About} /> */}
							<Route path='/skills' component={Skills} />
							<Route path='/projects' component={Projects} />
						</Switch>
					</animated.div>
				))}
			</Router>
			<Footer {...props} />
		</div>
	);
}

const HeaderDiv = styled.section`
	display: flex;
	justify-content: flex-end;
	padding: 3rem;
	background-image: url(${headerimg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 1;
	top: 0;
	width: 100%;
	border-radius: 0 0 14px 14px;

	@media screen and (max-width: 1520px) {
		align-items: center;
		flex-direction: column-reverse;
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 2rem;
	}
	img {
		align-self: center;
		width: 20rem;
		border-radius: 50%;
		margin-right: 1rem;
	}
`;

export default App;
