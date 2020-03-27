import React, { useEffect, useState } from 'react';
//client side routing
import { Router, Route, Switch, useLocation } from 'react-router-dom';
// libraries
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { useTransition, animated, config } from 'react-spring';

// styles
import './App.css';

import justinimg from './assets/justinimg.JPG';
//components
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

import maybe from './assets/maybe.jpg';

function App(props) {
	const { history } = props;

	const location = useLocation();
	// on app render pushs to the about page because of css active tab styles
	const [toggle, setToggle] = useState(false);

	const switchToggle = () => {
		setToggle(!toggle);
	};

	const transitions = useTransition(location, location => location.pathname, {
		from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
		enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
		leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
		config: config.gentle,
	});

	useEffect(() => {
		history.push('/about');
	}, [history]);

	return (
		<div className='App'>
			<div>
				<Header toggle={toggle}></Header>
				<HeaderDiv className='top-content'>
					{/* <div></div> */}
					<div>
						<h1>Justin McCutcheon</h1>
						<h2>Full Stack Web Developer</h2>
					</div>
					<img src={justinimg} alt='headshot' />
				</HeaderDiv>
				<ButtonStyle onClick={switchToggle}>
					<Icon name='bars' />
				</ButtonStyle>
			</div>
			<Router {...props}>
				{transitions.map(({ item: location, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch location={location}>
							<Route path='/about' component={About} />
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
	background-image: url(${maybe});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 1;
	top: 0;
	width: 100%;

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

const ButtonStyle = styled.div`
	font-size: 2rem;
	background-color: #1c2a35;
	/* margin: 4rem auto 0 auto; */
	width: 50px;
	height: 50px;
	border-radius: 50%;
	text-align: center;
	line-height: 19px;
	padding: 9px;
	z-index: 2;
	cursor: pointer;
	justify-self: center;
`;

export default App;
