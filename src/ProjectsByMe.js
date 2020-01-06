import React from 'react';
import ViewToggleButton from './ViewToggleButton.js'
import ProjectsList from './ProjectsList';

class ProjectsByMe extends React.Component {
	
	render() {
		return(
			<div id='projects_by_me'>
				<div id='projects_by_me_title'>
					<div id='filler'></div>
					<div id='projects_by_me_title_text'>PROJECTS BY ME</div>
					<ViewToggleButton />
				</div>
				<ProjectsList />
			</div>	
		);
	}
	
}

export default ProjectsByMe;
