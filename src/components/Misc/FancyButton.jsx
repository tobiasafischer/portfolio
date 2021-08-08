import React, { useState } from 'react';
import '../Projects/project.scss';

const FancyButton = (props) => {
	const [{ title }] = useState(props);
	const [{ link }] = useState(props);
	return (
		<a href={link} className='cta'>
			<span>{title}</span>
			<svg width='13px' height='10px' viewBox='0 0 13 10'>
				<path d='M1,5 L11,5'></path>
				<polyline points='8 1 12 5 8 9'></polyline>
			</svg>
		</a>
	);
};

export default FancyButton;
