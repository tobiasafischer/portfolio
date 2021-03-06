import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { scroller } from 'react-scroll';

const Navigation = () => {
	return (
		<div id='navbar' style={{ position: 'fixed' }}>
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
						<Nav.Link
							onClick={() => {
								scroller.scrollTo('languages', {
									smooth: true,
									offset: -70,
									duration: 500,
								});
							}}>							
							<span id='navigation'>languages</span>
						</Nav.Link>
						<Nav.Link
							onClick={() => {
								scroller.scrollTo('contact', {
									smooth: true,
									offset: -70,
									duration: 500,
								});
							}}>
							<span id='navigation'>contact me</span>
						</Nav.Link>
						
						<Nav.Link
							onClick={() => {
								scroller.scrollTo('contact', {
									smooth: true,
									offset: -70,
									duration: 500,
								});
							}}></Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};
// ebdbcd
// b78f8e
export default Navigation;
