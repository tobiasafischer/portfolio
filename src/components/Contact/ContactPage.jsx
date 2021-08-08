import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import emailjs from 'emailjs-com';

import './contact-page.scss';
const ContactPage = (props) => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	const handleReset = () => {
		reset(
			{
				name: '',
				email: '',
				msg: '',
			},
			{
				keepErrors: false,
				keepIsValid: true,
			},
		);
	};

	return (
		<div id='contact' className='screen-body'>
			<div className='screen-body-item left'>
				<div className='app-title'>
					<span>CONTACT ME {'<3'}</span>
				</div>
				<div className='app-contact'>CONTACT INFO : (503) 413-9265</div>
			</div>
			<div className='screen-body-item'>
				<div className='app-form'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='app-form-group'>
							<input
								className='app-form-control'
								{...register('name', { required: true })}
								placeholder='NAME'
							/>
							{errors.name && <p>Required</p>}
						</div>
						<div className='app-form-group'>
							<input
								className='app-form-control'
								type='email'
								placeholder='EMAIL'
								{...register('email', {
									required: 'required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'invalid email address',
									},
								})}
							/>
							{errors.email && errors.email.message}
						</div>

						<div className='app-form-group message'>
							<input
								className='app-form-control'
								{...register('msg', { required: true })}
								placeholder='MESSAGE'
							/>
							{errors.msg && <p>Required</p>}
						</div>
						<div className='app-form-group buttons'>
							<button className='app-form-button' onClick={handleReset}>
								CANCEL
							</button>
							<button className='app-form-button' type='submit'>
								SEND
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
