import React from 'react';
import Project from './Project';
import recipez from '../../assets/recipez.webp';

const ProjectContainer = () => {
	return (
		<div id='projects'>
			<Project
				title='Groupster'
				date='June, 2021'
				desc='A chatroom application designed for bringing study groups together to chat and share files.'
				demo='https://groupster-chat.herokuapp.com/'
				code='https://github.com/h2Ocean/Groupster'
			/>
			<Project
				title='RecipEZ'
				date='May, 2021'
				desc='A recipe / shopping list app built in 2 days that combines recipe books with a shopping list for single moms + meal preppers alike!'
				gif={recipez}
				demo='https://tobias-fischer-recipez.herokuapp.com/'
				code='https://github.com/tobiasafischer/RecipEZ'
			/>
			<Project
				title='Project Catwalk'
				date='May, 2021'
				desc='A front end retail store-front application.'
				code='https://github.com/tobiasafischer/Project-Catwalk-FEC'
			/>
		</div>
	);
};

export default ProjectContainer;
