import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
	return (
		<div id='navbar'>
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
						<Nav.Link href='/projects'>
							<span id='navigation'>projects</span>
						</Nav.Link>
						<Nav.Link href='/contact'>
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
