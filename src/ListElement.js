import React from 'react';

class ListElement extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {link_hover: false};
	}

	
	render() {
		const tag_divs = this.props.project.tags.reduce((acc, tag) => {
			acc.push(<div className='proj_tag' key={tag}>{tag}</div>);
			return acc;
		}, []);
		return(	
			<div className='list_row' style={{height: this.props.height+'%'}}>
				<div className='align_child_center list_img_div'>
					<img alt={this.props.project.name} src={this.props.project.img} className='proj_img'></img>
				</div>
				<div className='list_proj_info'>
					<a 	onMouseEnter={() => { this.setState({link_hover: true}); }} 
						onMouseLeave={() => { this.setState({link_hover: false}); } }
						href={this.props.project.link}
						className='proj_link'
						style={{color: this.state.link_hover? 'blue':'black'}}>{this.props.project.name}</a>
					<div className='proj_tags'>{tag_divs}</div>
				</div>
			</div>);
	}
}

export default ListElement;
