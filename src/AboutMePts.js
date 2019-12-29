import React from 'react';
import {about_me_pts} from './Constants';

class AboutMePts extends React.Component {

	render() {
		let i = 0;
		const list_elements = about_me_pts.map((point) => <li key={i++}>{point}</li>);
		return(
			<div>
				<ul>
					{list_elements}
				</ul>
			</div>
		);
	}
}

export default AboutMePts;
