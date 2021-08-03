import React, { useState, useEffect } from 'react';
import './Project.scss';

const Project = (props) => {
	const [{ title }] = useState(props);
	const [{ image }] = useState(props);
	const [{ description }] = useState(props);
	const [{ hasDemo }] = useState(props);
	const [{ demoLink }] = useState(props);
	const [{ github }] = useState(props);

	return (
		<div id='project'>
			<div id='container' style={{ width: '100%', height: 'auto' }}>
				<img
					src={image}
					onError={(e) => {
						e.currentTarget.style = {};
						e.currentTarget.src = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
					}}
					alt='project'
					rounded
					thumbnail='true'
				/>
				<div style={{ alignItems: 'center', justifyContent: 'center' }} className='overlay'>
					<a class='transparent' href='.overlay'>
						<p>
							<span class='bg'></span>
							<span class='base'></span>
							<span class='text'>Demo</span>
						</p>
					</a>
					<a class='transparent' href='.overlay'>
						<p>
							<span class='bg'></span>
							<span class='base'></span>
							<span class='text'>Code</span>
						</p>
					</a>
				</div>
			</div>
			<h6>{title}</h6>
			<div id='paragraph'>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Project;
