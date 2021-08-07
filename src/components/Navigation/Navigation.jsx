import React, { useState } from 'react';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import { scroller } from 'react-scroll';

import ContactForm from '../Contact/ContactForm';
const Navigation = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div id='navbar' style={{ position: 'fixed' }}>
			<Modal show={show} onHide={handleClose} centered>
				<ContactForm style={{ backgroundColor: '#f0d8bb' }} />
			</Modal>
			<Navbar className='ml-auto'>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav>
						<Nav.Link
							onClick={() => {
								scroller.scrollTo('home', {
									smooth: true,
									offset: -70,
									duration: 500,
								});
							}}>
							<span id='navigation'>home</span>
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								scroller.scrollTo('about', {
									smooth: true,
									offset: -70,
									duration: 500,
								});
							}}>
							<span id='navigation'>about me</span>
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								scroller.scrollTo('projects', {
									smooth: true,
									offset: -70,
									duration: 500,
								});
							}}>
							<span id='navigation'>projects</span>
						</Nav.Link>
						<Nav.Link onClick={handleShow}>
							<span id='navigation'>contact me</span>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
// ebdbcd
// b78f8e
export default Navigation;
