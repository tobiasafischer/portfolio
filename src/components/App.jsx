import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
	return (
		<div className='App' style={{ margin: 'auto' }}>
			<div>
				<Router>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/projects' component={Projects} />
						<Route path='/contact' component={Contact} />
					</Switch>
				</Router>
			</div>
		</div>
	);
};
// ebdbcd
// b78f8e
export default App;
