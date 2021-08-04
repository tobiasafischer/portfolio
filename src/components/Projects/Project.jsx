import React, { useState, useEffect } from 'react';
import Overlay from './Overlay';
import './Project.scss';

const Project = (props) => {
	return (
		<div id='project'>
			<div id='container'>
				<img
					src={'https://bitsofco.de/content/images/2018/12/broken-1.png'}
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
