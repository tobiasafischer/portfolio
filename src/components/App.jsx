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
			<div style={{ marginTop: '14vh' }}>
				<Project
					title='RecipEZ'
					image={recipez_demo}
					hasDemo={true}
					demoLink={'https://tobias-fischer-recipez.herokuapp.com/'}
					github={'https://github.com/tobiasafischer/RecipEZ'}
					description={`A full stack application build in MERN which compiles data through Edamam's API to create
					a recipe book + shopping list.`}
				/>
			</div>
			<div style={{ marginTop: '10vh', marginLeft: '50vw' }}>
				<Project
					title='Groupster'
					image={recipez_demo}
					hasDemo={true}
					demoLink={'https://tobias-fischer-recipez.herokuapp.com/'}
					github={'https://github.com/tobiasafischer/RecipEZ'}
					description={`A fullstack application as a chatroom platform for studying groups on a specific topic.`}
				/>
			</div>
			<div style={{ marginTop: '10vh' }}>
				<Project
					title='Project Catwalk'
					image={recipez_demo}
					hasDemo={true}
					demoLink={'https://tobias-fischer-recipez.herokuapp.com/'}
					github={'https://github.com/tobiasafischer/RecipEZ'}
					description={`a single-page application in which handles a review component for a retail store.`}
				/>
			</div>
		</div>
	);
};
// ebdbcd
// b78f8e
export default App;
