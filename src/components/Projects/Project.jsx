import React, { useState } from 'react';
import FancyButton from '../Misc/FancyButton';
import './project.scss';
const Project = (props) => {
	const [{ title }] = useState(props);
	const [{ desc }] = useState(props);
	const [{ gif }] = useState(props);
	const [{ img }] = useState(props);
	const [{ code }] = useState(props);
	const [{ demo }] = useState(props);

	return (
		<div id='project'>
			<div className='wrap'>
				<div className='title-container'></div>
				<h1>{title}</h1>
				<div className='tile'>
					<img
						src={
							gif ||
							'https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'
						}
						alt='gif'
					/>
					<div className='text'>
						<p className='animate-text'>{desc}</p>
						{demo ? <FancyButton title={'Demo'} link={demo} /> : <></>}
						<FancyButton title={'Code'} link={code} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;

/*



*/
