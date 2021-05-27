import React from 'react';
import Home from './Home';
import Project from './components/Project';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import recipez_demo from '../assets/recipez_demo.gif';
import './App.scss';

const App = () => {
	return (
		<div className='App' style={{ margin: 'auto' }}>
			<Home />
			<Project
				title='RecipEZ'
				image={recipez_demo}
				hasDemo={true}
				demoLink={'https://tobias-fischer-recipez.herokuapp.com/'}
				github={'https://github.com/tobiasafischer/RecipEZ'}
			/>
		</div>
	);
};
// ebdbcd
// b78f8e
export default App;
