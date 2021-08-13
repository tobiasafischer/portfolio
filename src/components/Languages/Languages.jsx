import React, { useState, useEffect } from 'react';
import './languages.scss';

const Languages = () => (
	<div id='languages' className='language-container'>
		<div className='languages'>
			<h3>Front-end</h3>
			<i className='devicon-javascript-plain colored' />
			<i className='devicon-typescript-plain colored' />
			<i className='devicon-html5-plain colored' />
			<i className='devicon-css3-plain colored' />
			<i className='devicon-sass-original colored' />

			<i className='devicon-react-original colored' />
			<i className='devicon-redux-original colored' />
		</div>
		<div className='languages'>
			<h3>Back-end</h3>
			<i className='devicon-nodejs-plain colored' />
			<i className='devicon-express-original colored' />
			<i className='devicon-graphql-plain colored' />
			<i className='devicon-mongodb-plain colored' />
			<i className='devicon-postgresql-plain colored' />
	
		</div>
		<div className='languages'>
			<h3>Misc</h3>
			<i className='devicon-git-plain colored' />
			<i className='devicon-heroku-original colored' />
			<i className='devicon-firebase-plain colored' />
			<i className='devicon-amazonwebservices-original colored' />
			<i className='devicon-ubuntu-plain colored' />
			<i className='devicon-jest-plain colored' />
			<i className="devicon-webpack-plain colored" />


		</div>
	</div>
);

export default Languages;
