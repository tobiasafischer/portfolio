import React, { useState } from 'react';
import Project from './Project';

const ProjectContainer = () => {
	return (
		<div id='projects'>
			<Project
				title='Groupster'
				date='June, 2021'
				gif='https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/Animation.gif?alt=media&token=b1014180-3e3f-4ea6-887d-9b5f3839ad13'
				description='A chatroom application designed for bringing study groups together to chat and share files.'
				demo='https://groupster-chat.herokuapp.com/'
				code='https://github.com/h2Ocean/Groupster'
			/>
			<Project />
			<Project />
		</div>
	);
};

export default ProjectContainer;
