import React, { useState } from 'react';
import { Navbar, Nav, Modal } from 'react-bootstrap';
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
						<Nav.Link href='/'>
							<span id='navigation'>home</span>
						</Nav.Link>
						<Nav.Link href='/about'>
							<span id='navigation'>about me</span>
						</Nav.Link>
						<Nav.Link href='#title-container'>
							<span id='navigation'>projects</span>
						</Nav.Link>
						<button
							onClick={handleShow}
							style={{
								background: 'none',
								border: 'none',
								margin: 0,
								padding: 0,
								cursor: 'pointer',
								marginLeft: '1vw',
							}}>
							<span id='navigation'>contact me</span>
						</button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
// ebdbcd
// b78f8e
export default Navigation;
