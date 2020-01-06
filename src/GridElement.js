import React from 'react'; 

class GridElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hover: false, link: false};
	}
	
	hoveredState() {
		const linkColor = this.state.link ? 'blue' : 'black';
		const tag_divs = this.props.project.tags.reduce((acc, tag) => {
			acc.push(<div className='proj_tag' key={tag}>{tag}</div>);
			return acc;
		}, []);
		return(
		<div className='grid_row_element_hovered_content'>
			<a 	style={{color: linkColor}}
				onMouseEnter={() => { this.setState({link: true}); } }
				onMouseLeave={() => { this.setState({link: false}); } }
				className='proj_link' rel='noopener noreferrer' target='_blank' href={this.props.project.link}>{this.props.project.name}
			</a>
			<div className='proj_tags'>{tag_divs}</div>
		</div>				
		);
	}
	
	render() {
		const renderHover = this.state.hover? this.hoveredState() : undefined;
		return(
		<div 	onMouseEnter={() => { this.setState({hover: true}); }} 
			onMouseLeave={() => { this.setState({hover: false}); }} 
			key={this.props.name} className='grid_row_element align_child_center'>
			<img alt={this.props.name} className='proj_img' src={this.props.project.img}></img>
			{renderHover}
		</div>
		);
	}
}

export default GridElement;
