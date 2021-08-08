import React, { useState, useEffect } from 'react';
import FancyButton from '../Misc/FancyButton';
import './project.scss';
const Project = (props) => {
	const [{ title }] = useState(props);
	const [{ desc }] = useState(props);
	const [{ gif }] = useState(props);
	const [{ img }] = useState(props);

	return (
		<div id='project'>
			<div className='wrap'>
				<div className='title-container'></div>
				<h1>gorp</h1>
				<div className='tile'>
					<img
						src={
							gif ||
							'https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'
						}
					/>
					<div className='text'>
						<p className='animate-text'>
							Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken
							meatloaf. Flank sirloin strip steak prosciutto kevin turducken.{' '}
						</p>
						<FancyButton title={'Demo'} />
						<FancyButton title={'Code'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;

/*



*/
