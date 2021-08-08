import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import ProjectContainer from './components/Projects/ProjectContainer';
import About from './components/About/About';
import ContactPage from './components/Contact/ContactPage';
import './App.scss';

const App = () => {
	return (
		<div className='App' style={{ margin: 'auto' }}>
			<Navigation />
			<main>
				<div className='container'>
					<Home />
					<About />
					<div className='hr' style={{ width: '100%' }} />
					<ProjectContainer />
					<div className='hr' style={{ width: '100%' }} />
					<ContactPage />
				</div>
			</main>
		</div>
	);
};
//<ProjectContainer />
// ebdbcd
// b78f8e
export default App;
