import React, { useState } from 'react';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import './About.scss';

const Paragraph = (props) => {
	const [{ setIsVideo }] = useState(props);
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
		<div className='content'>
			<h1>All about your boy t-dizzle</h1>
			<div className='hr' style={{ marginBottom: '0%', width: '70vw' }} />
			<h6>WHO AM I?</h6>
			<div className='paragraph-container'>
				<p>
					Born and raised {date} in rainy Camas, WA (20 minutes north of Portland, OR), I grew up
					having the time of my life! Ever since a young age, I have always been fascinated with all
					things technology! This initially was sparked with playing through the Halo campaign with
					my dad!
				</p>
			</div>
			<h6>Where did I get my love of technology?</h6>
			<div className='paragraph-container'>
				<p>
					My love for technology continued to flourish as I found myself having the "magic touch"
					with fixing the cable box, setting up the new tv, or fixing the internet. Eventually, when
					I turned 10, my parents gifted me a brand new clunker of a pc with integrated graphics for
					Christmas and let me tell you, I did not for a second complain. Playing minecraft until
					the brink of dawn, or watching Linus Tech Tips dreaming of working with technology, this
					gift instilled the certainty of me wanting to work in tech when I grew up.
				</p>
			</div>
			<h6>Alright alright, but when did you start coding?</h6>
			<div className='paragraph-container'>
				<p>
					Well funny enough, it did not happen until WAYYYYY later on in my freshman year (not
					including a middleschool GameMaker 2 class and Scratch because can we really call it
					coding? 🤒)... Anyhoo, when I took my first terrible html, css, and weebly class, I
					actually hated coding and immedietely rethunk my entire existence. This existential crisis
					persisted me throughout my move to (way too) sunny Palm Springs my junior year of
					highschool! Once my lizard skin finally acclimated to the 120 degree summers, in senior
					year I decided to enroll in AP Comp Sci.
				</p>
			</div>
			<h6>The high school arc</h6>
			<div className='paragraph-container'>
				<p>
					Needless to say to anyone who just starts out coding, my first few days I felt like the
					biggest idiot in the room. Working in the wonderfully hated language Java, I soon began to
					flourish in my CS fundamentals and fun fun fun algorithms (that we totally use day to day
					for centering divs 'n stuff). Anyways, I built a few small projects here and there and
					actually ended up winning a{' '}
				</p>
				<a href='https://www.rcoe.us/Home/Components/News/News/163/14?npage=4&arch=1'>Hackathon!</a>
				<p> Following highschool, I ended up building out a </p>
				<a href='https://www.gmodstore.com/market/view/vector-dealer-darkrp-black-market-dealer'>
					game addon
				</a>
				<p>
					{' '}
					for Garry's mod with a partner and we ended up deploying with absolutely no success, but
					it was an amazing experience to finally transition from algorithmic based coding to
					project based.
				</p>
			</div>
			<h6>Alright, but what about your education?</h6>

			<div className='paragraph-container'>
				<p>
					Well, this is where things get a bit complicated. Following High school, I planned on
					attending my local community college and transfer to a four year university with my
					associates in Computer Science. However, during my 3 semesters there I found myself
					unchallenged and realized that the only reason I was attending college was for a degree,
					which the knowledge will be mostly irrelevant to my career. This is when I decided to take
					my life into my own hands and drop out of college to attend a bootcamp. I had the choice
					between App Academy and Hack Reactor, but ended up attending the latter.
				</p>
			</div>
			<h6>The fun stuff</h6>

			<div className='paragraph-container'>
				<p>
					I immedietely knew I made the best decision of my life during the first few days attending
					bootcamp in March 2021. Coming into the bootcamp I only had OOP experience under my belt
					and truth be told could not even write html (the best coding language). The program was
					set up into two 6 week sections the first being the 'junior phase' which is really just
					solid fundamentals and introduction to MERN / web best practices. The second phase
					however, is 6 weeks consisting of purely building projects with introduction to deployment
					such as heroku, aws, etc. as well as other services such as Docker and load testing. You
					can see examples of what I built out below (but I would love to get a chance to talk
					together to discuss it further hint hint ;) ). Ultimately my time at Hack Reactor was
					amazing and I am eager to start my career and become the best developer I can possibly be!
				</p>
			</div>
			<h6>Ok enough coding stuff what do you do for fun?</h6>
			<div className='paragraph-container'>
				<p>
					Well, honestly not much. I am a simple man with a simple life. However, my favorite thing
					in the whole wide world besides programming is skateboarding (: I started skating in March
					2019 and it helped me lose 100 lbs as well as decompress. Here are a few of my latest
					clips!
				</p>

				<button
					style={{ marginTop: '1vh', backgroundColor: '#bd8290', borderColor: '#bd8290' }}
					className='btn-primary'
					onClick={() => setIsVideo(true)}>
					SICK NASTY SKATE CLIPS🥵
				</button>
			</div>
		</div>
	);
};
// ebdbcd
// b78f8e
export default Paragraph;
