import React, { useEffect, useState } from "react";
//client side routing
import { Router, Route, Switch } from "react-router-dom";
// libraries
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import { useTransition, animated, useSpring } from "react-spring";

// styles
import "./App.css";

import justinimg from "./assets/justinimg.JPG";
//components
import Header from "./components/Header";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App(props) {
	const { history } = props;
	// on app render pushs to the about page because of css active tab styles
	const [toggle, setToggle] = useState(true);

	const animate = useSpring({
		opacity: toggle ? 1 : 0,
	});

	const switchToggle = () => {
		setToggle(!toggle);
	};

	const transitions = useTransition(toggle, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	useEffect(() => {
		history.push("/about");
	}, [history]);

	return (
		<div className='App'>
			<div>
				{/* <Header toggle={toggle}></Header> */}
				{/* <animated.div style={animate}>
					<Header style={animate} toggle={toggle}></Header>
				</animated.div> */}
				{transitions.map(
					({ item, props, key }) =>
						item && (
							<animated.div key={key} style={props}>
								<Header toggle={toggle} />
							</animated.div>
						),
				)}
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
				<Switch>
					<Route path='/about' component={About} />
					<Route path='/skills' component={Skills} />
					<Route path='/projects' component={Projects} />
				</Switch>
			</Router>
			<Footer {...props} />
		</div>
	);
}

const HeaderDiv = styled.section`
	display: flex;
	justify-content: flex-end;
	padding: 3rem;
	background-image: url("https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 1;
	top: 0;
	width: 100%;
	/* position: fixed; */

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
	margin: 4rem auto 0 auto;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	text-align: center;
	line-height: 30px;
	padding: 21px;
	z-index: 2;
	cursor: pointer;
	justify-self: center;
	top: 0;
	left: 0%;
	/* position: static; */
	/* position: absolute; */
`;

export default App;
