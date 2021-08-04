import React, { useState, useEffect } from 'react';
import Overlay from './Overlay';
import './Project.scss';

const Project = (props) => {
	return (
		<div id='project'>
			<div id='title-container'>
				<h3>
					<strong>Title</strong>
				</h3>
				<h3 style={{ fontSize: '0.9em', color: '#505050' }}>
					<a>AUGUST 4th, 2021</a>
				</h3>
			</div>
			<div id='container'>
				<img
					src={
						'https://firebasestorage.googleapis.com/v0/b/portfolio-30db7.appspot.com/o/Animation.gif?alt=media&token=b1014180-3e3f-4ea6-887d-9b5f3839ad13'
					}
					onError={(e) => {
						e.currentTarget.style = {};
						e.currentTarget.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
					}}
					alt='project'
					rounded
					thumbnail='true'
				/>
				<Overlay />
			</div>
		</div>
	);
};

export default Project;

/*



*/
