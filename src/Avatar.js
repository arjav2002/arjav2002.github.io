import React from 'react'
import {avatar_img} from './Constants'

class Avatar extends React.Component {

// using two elements, a background and an image
// in order to have a variable border width on resizing

	render() {
		return(
			<div className='avatar_img_border'>
				<img alt='avatar_img' className='avatar_img' src={avatar_img}></img>					
			</div>		
		);
	}

}

export default Avatar;
