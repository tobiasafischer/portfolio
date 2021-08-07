import React, { useState } from 'react';

import './About.scss';

const About = () => {
	const [date, setDate] = useState('');
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
	return (
		<div className='about'>
			<h1>All about your boy t-dizzle</h1>
			<div className='hr' style={{ marginBottom: '0%', width: '70vw' }} />
			<h6>WHO AM I?</h6>
			<div className='paragraph-container'>
				<p>
					Born in and raised {date} in rainy Camas, WA (20 minutes north of Portland, OR), I grew up
					having the time of my life! Ever since a young age, I have always been fascinated with all
					things technology! This initially was sparked with playing through the Halo campaign with
					my dad!
				</p>
				<br />
				<p>
					My passion in technology continued to flourish as I found myself having the "magic touch"
					with fixing the cable box, setting up the new tv, or fixing the internet.
				</p>
			</div>
		</div>
	);
};
// ebdbcd
// b78f8e
export default About;
