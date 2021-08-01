import React, { useEffect } from 'react';
//client side routing
import { Router, Route, Switch, useLocation } from 'react-router-dom';

// libraries
import { useTransition, animated, config } from 'react-spring';
import { Helmet } from 'react-helmet'; // changes head tag to improve seo

// styles
import './App.css';
import HeaderStyles from './styles/HeaderStyles'

// images 
import me from './images/me.webp';
//components
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';


function App(props) {

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
	

	useEffect(() => {
		props.history.push('/about');
		return () => {};
	}, [props.history]);

	return (
		<div className='App'>
			<Helmet>
				<title>Justin McCutcheon Portfolio</title>
				<meta charSet='utf-8' />
				<meta
					name='justin mccutcheon portfolio'
					content='portfolio of software developer justin mccutcheon'
				/>
				<link rel='canonical' href='https://justinweb.dev' />
			</Helmet>
				<HeaderStyles className='top-content'>
					<div>
						<h1>Justin McCutcheon</h1>
						<h2>Full Stack Web Developer</h2>
					</div>
					<img src={me} alt='me' />
				</HeaderStyles>
			<Router {...props}>
				{transitions.map(({ item: location, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch>
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


export default App;
