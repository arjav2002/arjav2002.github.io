import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Content from './Content';
import Form from './Form';

class App extends React.Component {
	
	render() {
		return(
			<>
				<Navbar />
				<Content />
			</>
		);
	}

}

ReactDOM.render(<App />, document.getElementsByTagName('body')[0]);
ReactDOM.render(<Form />, document.getElementsByTagName('footer')[0]);
