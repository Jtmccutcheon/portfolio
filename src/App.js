import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';

function App(props) {

  useEffect(() => {
    // props.history.push('/about')
  }, [])

  return (
    <div className="App">
      <Header />
      <Route exact path='/about' component={About} />
      <Route path='/skills' component={Skills} />
      <Route path='/projects' component={Projects} />
    </div>
  );
}

export default App;
