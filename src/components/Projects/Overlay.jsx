import React, { useState, useEffect } from 'react';

const Overlay = (props) => {
	const [{ demo }] = useState(props);
	const [{ code }] = useState(props);

	const populate = () => {
		const buttons = [];
		if (demo) {
			buttons.push(
				<>
					<a class='transparent' href={demo}>
						<p>
							<span class='bg'></span>
							<span class='base'></span>
							<span class='text'>Demo</span>
						</p>
					</a>
					<a class='transparent' href={code}>
						<p>
							<span class='bg'></span>
							<span class='base'></span>
							<span class='text'>Code</span>
						</p>
					</a>
				</>,
			);
		} else {
			buttons.push(
				<a class='transparent' href={code} style={{ marginBottom: '8vh' }}>
					<p>
						<span class='bg'></span>
						<span class='base'></span>
						<span class='text'>Code</span>
					</p>
				</a>,
			);
		}

		return buttons;
	};

	return (
		<div style={{ alignItems: 'center', justifyContent: 'center' }} className='overlay'>
			{populate()}
		</div>
	);
};

export default Overlay;
