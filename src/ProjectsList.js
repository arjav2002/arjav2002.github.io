import React from 'react';
import { store } from './ReduxStuff';
import { proj_imgs, proj_names, proj_tags, proj_links } from './Constants';
import GridElement from './GridElement';
import ListElement from './ListElement';

class ProjectsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = { grid_view: true };
		this.onViewToggle = this.onViewToggle.bind(this);
		this.gridView = this.gridView.bind(this);
		this.listView = this.listView.bind(this);
		this.projects = [];
		for(let i = 0; i < proj_imgs.length; i++) this.projects.push({name: proj_names[i], img: proj_imgs[i], link: proj_links[i], tags: proj_tags[i]});
		store.subscribe(this.onViewToggle);
	}

	onViewToggle() {
		this.setState({grid_view: store.getState().view});
	}

	gridView() {
		const row_height = 100.0/(proj_imgs.length/2 + proj_imgs.length%2);
		const nProjs = proj_imgs.length;
		let grid_rows = [];
		for(let i = 0; i < nProjs; i+=2) {
			if(nProjs - i > 1) {
				grid_rows.push(
					<div style={{height: row_height+'%'}} key={'project_row' + i} className='grid_row'>
						<GridElement 
				project={this.projects[i]}
				height={row_height}/>
						<GridElement 
				project={this.projects[i+1]}
				height={row_height}/>
					</div>);
			}
			else grid_rows.push(<div style={{height: row_height+'%'}} key={'project_row' + i} className='grid_row'>
							<GridElement 
				project={this.projects[i]}
				height={row_height}/>
						 </div>);
		}
		return grid_rows;
	}

	listView() {
		const row_height = 100.0/proj_imgs.length;
		const list_rows = this.projects.map((x) => {
							return (<ListElement key={x.name} project={x} height={row_height} ></ListElement>);
							}); 
		return list_rows;
	}
	
	render() {	
		const projects = this.state.grid_view? this.gridView() : this.listView();
		return(
			<div id='projects_list'>
				{projects}
			</div>		
		);
	}

}
export default ProjectsList;
