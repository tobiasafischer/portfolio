import React, { useState, useRef } from 'react';
import { scroller } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './About.scss';

const Collapsible = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [date, setDate] = useState('');
	const parentRef = useRef();

	const bday = new Date(2000, 10, 21, 22, 59);

	const countUpFromTime = () => {
		let now = new Date();
		let countFrom = new Date(bday);
		let timeDifference = now - countFrom;

		var secondsInADay = 60 * 60 * 1000 * 24,
			secondsInAHour = 60 * 60 * 1000;

		let days = Math.floor((timeDifference / secondsInADay) * 1);
		let years = Math.floor(days / 365);
		if (years > 1) {
			days = days - years * 365;
		}
		let hours = Math.floor(((timeDifference % secondsInADay) / secondsInAHour) * 1);
		let mins = Math.floor((((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1);
		let secs = Math.floor(
			((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) / 1000) * 1,
		);
		return {
			days,
			years,
			hours,
			mins,
			secs,
		};
	};
	setInterval(() => {
		let { days, years, hours, mins, secs } = countUpFromTime();
		setDate(
			`${years} years, ${days} days, ${hours} hours, ${mins} minutes, and ${secs} seconds ago`,
		);
	}, 1000);

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
				<div className='content'>
					<h1>All about your boy t-dizzle</h1>
					<div className='hr' style={{ marginBottom: '0%', width: '70vw' }} />
					<h6>WHO AM I?</h6>
					<div className='paragraph-container'>
						<p>
							Born in and raised {date} in rainy Camas, WA (20 minutes north of Portland, OR), I
							grew up having the time of my life! Ever since a young age, I have always been
							fascinated with all things technology! This initially was sparked with playing through
							the Halo campaign with my dad!
						</p>
					</div>
					<h6>Where did I get my love of technology?</h6>
					<div className='paragraph-container'>
						<p>
							My love for technology continued to flourish as I found myself having the "magic
							touch" with fixing the cable box, setting up the new tv, or fixing the internet.
							Eventually, when I turned 10, my parents gifted me a brand new clunker of a pc with
							integrated graphics for Christmas and let me tell you, I did not for a second
							complain. Playing minecraft until the brink of dawn, or watching Linus Tech Tips
							dreaming of working with technology, this gift instilled the certainty of me wanting
							to work in tech when I grew up.
						</p>
					</div>
					<h6>Alright alright, but when did you start coding?</h6>
					<div className='paragraph-container'>
						<p>
							Well funny enough, it did not happen until WAYYYYY later on in my freshman year (not
							including a middleschool GameMaker 2 class and Scratch because can we really call it
							coding? 🤒)... Anyhoo, when I took my first terrible html, css, and weebly class, I
							actually hated coding and immedietely rethunk my entire existence. This existential
							crisis persisted me throughout my move to (way too) sunny Palm Springs my junior year
							of highschool! Once my lizard skin finally acclimated to the 120 degree summers, in
							senior year I decided to enroll in AP Comp Sci.
						</p>
					</div>
					<h6>The fun stuff</h6>
					<div className='paragraph-container'>
						<p>
							Needless to say to anyone who just starts out coding, my first few days I felt like
							the biggest idiot in the room. Working in the wonderfully hated language Java, I soon
							began to flourish in my CS fundamentals and fun fun fun algorithms (that we totally
							use day to day for centering divs 'n stuff)
						</p>
					</div>
				</div>
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
