import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import ProjectContainer from './components/Projects/ProjectContainer';
import About from './components/About/About';
import './App.scss';

const App = () => {
	return (
		<div className='App' style={{ margin: 'auto' }}>
			<Navigation />
			<main>
				<div className='container'>
					<Home />
					<About />
				</div>
			</main>
			<div className='hr' style={{ width: '70%', marginLeft: '15%' }} />

			<ProjectContainer />
		</div>
	);
};
// ebdbcd
// b78f8e
export default App;
