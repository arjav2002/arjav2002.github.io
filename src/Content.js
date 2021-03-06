import React from 'react';
import Avatar from './Avatar';
import AboutMePts from './AboutMePts';
import ProjectsByMe from './ProjectsByMe';
import Form from './Form';

class Content extends React.Component {
	
	render() {
		return(
		<div id='content'>
			<div id='about_me'>
				<div id='about_me_avatar_holder'><Avatar /></div>
				<div id='about_me_text'>
					<div id='about_me_title'>ABOUT ME</div>
					<div id='about_me_pts'><AboutMePts /></div>				
				</div>
			</div>
			<ProjectsByMe />
			<Form />
		</div>
		);
	}
}

export default Content;
