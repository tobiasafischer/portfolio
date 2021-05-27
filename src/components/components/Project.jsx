import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import './Project.scss';

const Project = (props) => {
	const [{ title }] = useState(props);
	const [{ image }] = useState(props);
	const [{ hasDemo }] = useState(props);
	const [{ demoLink }] = useState(props);
	const [{ github }] = useState(props);

	return (
		<div id='project' style={{ maxWidth: '400px' }}>
			{title}
			<Image
				style={{
					width: '100vw',
					borderRadius: '50%',
				}}
				src={image}
				onError={(e) => {
					e.currentTarget.style = {};
					e.currentTarget.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
				}}
				alt='project'
				rounded
				thumbnail='true'
			/>
		</div>
	);
};

export default Project;
