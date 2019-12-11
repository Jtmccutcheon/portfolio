import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App(props) {
	// useEffect(() => {
	//   props.history.push('/about')
	// }, [props.history])

	return (
		<div className='App'>
			<Header />
			<Router {...props}>
				<Switch>
					<Route path='/about' component={About} />
					<Route path='/skills' component={Skills} />
					<Route path='/projects' component={Projects} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
