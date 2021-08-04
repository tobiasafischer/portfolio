import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';
import Navigation from '../Navigation/Navigation';
import ScrollForMore from '../Misc/ScrollForMore';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const imageDetails = {
	width: 450,
	height: 'auto',
};

const getRandomNum = () => {
	return Math.floor(1000 + Math.random() * 9000);
};
const useMousePosition = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
		window.addEventListener('mousemove', setFromEvent);
		return () => {
			window.removeEventListener('mousemove', setFromEvent);
		};
	}, []);

	return position;
};

const Home = () => {
	const position = useMousePosition();
	return (
		<>
			<div>
				<Navigation />
				<main>
					<div className='container'>
						<div className='row center'>
							<div className='image-container'>
								<div
									className='thumbnail'
									style={{
										width: imageDetails.width,
										height: imageDetails.height,
									}}>
									<div className='frame'>
										<ProgressiveImage
											src={
												'https://firebasestorage.googleapis.com/v0/b/groupster-befe4.appspot.com/o/me%20and%20mikes.png?alt=media&token=cea1308f-a6c4-43a6-b2f5-3bfd1cb0cffa'
											}
											placeholder={
												'https://firebasestorage.googleapis.com/v0/b/groupster-befe4.appspot.com/o/me%20and%20mikes-min.png?alt=media&token=39fff497-14d5-4735-a7d6-a98dc49698bc'
											}>
											{(src) => (
												<motion.img
													src={src}
													alt='me and mikes'
													whileHover={{ scale: 1.1 }}
													transition={transition}
												/>
											)}
										</ProgressiveImage>
									</div>
								</div>
								<motion.div exit={{ opacity: 0 }} transition={transition} className='information'>
									<div className='title'>Tobias Fischer</div>
									<div className='location'>
										<span>
											{position.y}.{getRandomNum()}° N
										</span>
										<ScrollForMore />
										<span style={{ marginLeft: '5px' }}>
											{position.x}.{getRandomNum()}° W
										</span>
									</div>
								</motion.div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};
export default Home;
