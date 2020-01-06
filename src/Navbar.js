import React from 'react';
import './index.css';
import Avatar from './Avatar.js'

class Navbar extends React.Component {
	

	render() {
		return(
		<div id="navbar">
			<a href='#top' id='home_link' className='align_child_center' >
				<Avatar />
			</a>
			<a href='#projects_by_me' id='scroll_to_projects_link' className='align_child_center'>
				<div><strong>PROJECTS BY ME</strong></div>
			</a>
			<div id='nav_fil'></div>
		<div id='nav_buttons'></div>
		</div>
		);
	}
}

export default Navbar;
