/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const ContactForm = () => {
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [email, setEmail] = useState('');
	const classes = useStyles();
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			setError('');
			setLoading(true);
		} catch (err) {
			setError('Failed to work lol');
		}
		return setLoading(false);
	};

	return (
		<div className='contact-form' style={{ margin: 'auto' }}>
			<Container component='main' maxWidth='xs'>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<ContactMailIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Contact Me
					</Typography>
					{error && (
						<Alert style={{ marginTop: '1vh' }} severity='error'>
							{error}
						</Alert>
					)}
					<form className={classes.form} onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete='fname'
									name='name'
									variant='outlined'
									required
									fullWidth
									id='firstName'
									label='First Name'
									value={name}
									onChange={(e) => setName(e.target.value)}
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant='outlined'
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									name='subject'
									label='Subject'
									type='subject'
									id='subject'
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant='outlined'
									required
									fullWidth
									multiline='true'
									name='message'
									size='large'
									label='Message'
									type='message'
									id='message'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							disabled={loading}
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}>
							Send Email
						</Button>
					</form>
				</div>
			</Container>
		</div>
	);
};

export default ContactForm;
