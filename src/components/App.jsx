import React from 'react';
import { motion } from 'framer-motion';
import ProgressiveImage from 'react-progressive-image';
import './App.scss';
import image from '../assets/me and mikes.png';
import compressedImage from '../assets/me and mikes-min.png';
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const imageDetails = {
	width: 524,
	height: 'auto',
};

const App = () => {
	const populate = () => (
		<>
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
									<ProgressiveImage src={image} placeholder={compressedImage}>
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
									<span>33.6634° N</span>
									<span>116.3100° W</span>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
	return <div className='App'>{populate()}</div>;
};
// ebdbcd
// b78f8e
export default App;
