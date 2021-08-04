import React, { useState, useEffect } from 'react';
import './Project.scss';

const Overlay = () => {
	return (
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
	);
};

export default Overlay;
