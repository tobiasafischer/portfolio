import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import Home from './Home';
import Project from './components/Project';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import './App.scss';

const App = () => {
	return (
		<div className='App' style={{ margin: 'auto' }}>
			<Home />
			<Parallax x={[3, 5]} y={[5, 10]}>
				<div style={{ marginTop: '14vh' }}>
					<Project
						title='RecipEZ'
						image={`https://firebasestorage.googleapis.com/v0/b/groupster-befe4.appspot.com/o/recipez_demo.gif?alt=media&token=63bf5d8c-8ff2-4524-be94-8d8dc5c20ab0`}
						hasDemo={true}
						demoLink={'https://tobias-fischer-recipez.herokuapp.com/'}
						github={'https://github.com/tobiasafischer/RecipEZ'}
						description={`A full stack application build in MERN which compiles data through Edamam's API to create
						a recipe book + shopping list.`}
					/>
				</div>
			</Parallax>
			<Parallax x={[-3, -5]} y={[5, 10]}>
				<div style={{ marginTop: '10vh', marginLeft: '50vw' }}>
					<Project
						title='Groupster'
						image={`https://firebasestorage.googleapis.com/v0/b/groupster-befe4.appspot.com/o/recipez_demo.gif?alt=media&token=63bf5d8c-8ff2-4524-be94-8d8dc5c20ab0`}
						hasDemo={true}
						demoLink={'https://tobias-fischer-recipez.herokuapp.com/'}
						github={'https://github.com/tobiasafischer/RecipEZ'}
						description={`A fullstack application as a chatroom platform for studying groups on a specific topic.`}
					/>
				</div>
			</Parallax>

			<Parallax x={[3, 5]} y={[5, 10]}>
				<div style={{ marginTop: '10vh' }}>
					<Project
						title='Project Catwalk'
						image={`https://firebasestorage.googleapis.com/v0/b/groupster-befe4.appspot.com/o/recipez_demo.gif?alt=media&token=63bf5d8c-8ff2-4524-be94-8d8dc5c20ab0`}
						hasDemo={true}
						demoLink={'https://tobias-fischer-recipez.herokuapp.com/'}
						github={'https://github.com/tobiasafischer/RecipEZ'}
						description={`a single-page application in which handles a review component for a retail store.`}
					/>
				</div>
			</Parallax>
		</div>
	);
};
// ebdbcd
// b78f8e
export default App;
