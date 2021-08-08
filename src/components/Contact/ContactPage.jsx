import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './contact-page.scss';
const ContactPage = () => {
	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = ({ subject, from_name, message }) => {
		let templateParams = {
			from_name,
			to_name: 'tobias.alan.fischer@gmail.com',
			subject,
			message,
		};

		emailjs.send(
			process.env.REACT_APP_EMAIL_SERVICE_ID,
			process.env.REACT_APP_EMAIL_TEMPLATE_ID,
			templateParams,
			process.env.REACT_APP_EMAIL_USER_ID,
		);
		handleReset();
	};

	const handleReset = () => {
		reset(
			{
				from_name: '',
				subject: '',
				message: '',
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
								type='email'
								placeholder='EMAIL'
								{...register('from_name', {
									required: 'required',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'invalid email address',
									},
								})}
							/>
							{errors.from_name && errors.from_name.message}
						</div>
						<div className='app-form-group'>
							<input
								className='app-form-control'
								{...register('subject', { required: true })}
								placeholder='SUBJECT'
							/>
							{errors.subject && <p>Required</p>}
						</div>
						<div className='app-form-group message'>
							<input
								className='app-form-control'
								{...register('message', { required: true })}
								placeholder='MESSAGE'
							/>
							{errors.message && <p>Required</p>}
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
