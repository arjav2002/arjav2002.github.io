import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Content from './Content';
import Form from './Form';
import { Provider } from 'react-redux';
import {store} from './ReduxStuff';

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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementsByTagName('body')[0]);
