import React, { useState, useRef } from 'react';
import { scroller } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ModalVideo from 'react-modal-video';
import Paragraph from './Paragraph';
import './About.scss';

const Collapsible = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isVideo, setIsVideo] = useState(false);
	const parentRef = useRef();

	const handleExpand = () => {
		setIsOpen(!isOpen);
		// DO NOT TOUCH AT ALL OH MY GOD
		setTimeout(() => {
			if (isOpen) {
				// contract
				scroller.scrollTo('collapsible', {
					smooth: true,
					offset: -150,
					duration: 500,
				});
			} else {
				// expand
				scroller.scrollTo('end', {
					smooth: true,
					offset: -500,
					duration: 500,
				});
			}
		}, 100);
	};

	return (
		<div className='collapsible' id='collapsible'>
			<ModalVideo
				channel='youtube'
				autoplay
				isOpen={isVideo}
				videoId='ym268Swoeu4'
				onClose={() => setIsVideo(false)}
			/>
			<div
				className='content-parent'
				ref={parentRef}
				style={
					isOpen
						? {
								height: parentRef.current.scrollHeight + 'px',
								WebkitMaskImage: 'linear-gradient(to bottom, black 100%, transparent 0%)',
						  }
						: {
								height: '35vh',
						  }
				}>
				<Paragraph setIsVideo={setIsVideo} />
			</div>

			<div
				id='end'
				className={isOpen ? 'content-icon-container-open' : 'content-icon-container-close'}
				onClick={handleExpand}>
				<p>{isOpen ? 'Who cares lol' : 'Ooo yes king tell me more'}</p>
				<ExpandMoreIcon id='content-icon' style={{ marginTop: '-15px' }} />
			</div>
			<div />
		</div>
	);
};
// ebdbcd
// b78f8e
export default Collapsible;
