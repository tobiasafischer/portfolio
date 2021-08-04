import React, { useState, useEffect } from 'react';
import Overlay from './Overlay';
import './Project.scss';

const Project = (props) => {
	const [{ title }] = useState(props);
	const [{ date }] = useState(props);
	const [{ description }] = useState(props);
	const [{ gif }] = useState(props);
	const [{ demo }] = useState(props);
	const [{ code }] = useState(props);

	return (
		<div id='project'>
			<div id='title-container'>
				<h3>
					<strong>{title}</strong>
				</h3>
				<h3 style={{ fontSize: '0.9em', color: '#505050' }}>
					<a>{date}</a>
				</h3>
			</div>
			<div id='container'>
				<img
					src={gif}
					onError={(e) => {
						e.currentTarget.style = {};
						e.currentTarget.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
					}}
					alt='project'
					rounded
					thumbnail='true'
				/>
				<Overlay demo={demo} code={code} />
			</div>
			<div className='description'>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Project;

/*



*/
