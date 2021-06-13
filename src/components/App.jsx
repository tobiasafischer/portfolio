import React from 'react';
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
			<div style={{ marginTop: '14vh' }}>
				<Project
					title='RecipEZ'
					image={`https://firebasestorage.googleapis.com/v0/b/groupster-befe4.appspot.com/o/recipez_demo.gif?alt=media&token=b564ae89-4b31-418c-8dc7-6cd491c373f0`}
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
					image={`https://firebasestorage.googleapis.com/v0/b/groupster-befe4.appspot.com/o/recipez_demo.gif?alt=media&token=b564ae89-4b31-418c-8dc7-6cd491c373f0`}
					hasDemo={true}
					demoLink={'https://tobias-fischer-recipez.herokuapp.com/'}
					github={'https://github.com/tobiasafischer/RecipEZ'}
					description={`A fullstack application as a chatroom platform for studying groups on a specific topic.`}
				/>
			</div>
			<div style={{ marginTop: '10vh' }}>
				<Project
					title='Project Catwalk'
					image={`https://firebasestorage.googleapis.com/v0/b/groupster-befe4.appspot.com/o/recipez_demo.gif?alt=media&token=b564ae89-4b31-418c-8dc7-6cd491c373f0`}
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
