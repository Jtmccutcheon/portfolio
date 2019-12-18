import React, { useEffect } from 'react';
//client side routing
import { Router, Route, Switch } from 'react-router-dom';
// global styles
import './App.css';

//components
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App(props) {
	// on app render pushs to the about page because of css active tab styles
	useEffect(() => {
		props.history.push('/about');
	}, [props.history]);

	return (
		<div className='App'>
			<Header /> {/* always rendering */}
			<Router {...props}>
				<Switch>
					<Route path='/about' component={About} />
					<Route path='/skills' component={Skills} />
					<Route path='/projects' component={Projects} />
				</Switch>
			</Router>
			<Footer {...props} /> {/* always rendering */}
		</div>
	);
}

export default App;
