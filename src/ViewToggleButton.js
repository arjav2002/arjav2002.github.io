import React from 'react';
import { store, toggleAction } from './ReduxStuff';
import { button_icons }  from './Constants';

class ViewToggleButton extends React.Component {

	constructor(props) {
		super(props);
		this.state = {view: true}; // true for grid, false for list view
		this.toggleView = this.toggleView.bind(this);
	}

	toggleView() {
		this.setState({view: !this.state.view});
		store.dispatch(toggleAction());
	}

	render() {
		const [grid, list] = button_icons;
		return(
			<div id='view_toggle_btn_div'>
				<button onClick={this.toggleView} id='view_toggle_btn'><i className={this.state.view? list: grid}></i></button>		
			</div>
		);
	}

}

export default ViewToggleButton;
