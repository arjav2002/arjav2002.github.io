import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = { feedback: '' }
	}

	handleSubmit(event) {
		console.log('lol');
	}

	handleChange(event) {
		this.setState({ feedback: event.target.value});
	}

	render() {
		return(
			<div id='form_div'>
				<h1>Contact Details</h1>
				<form
					action="https://formspree.io/mdoarden"
					method="POST"
				>
					<label>
						Your email:
					<input type="text" name="_reply"></input>
				  </label>
				  <label>
				    Your message:
				    <textarea name="message"></textarea>
				  </label>

				  <button type="submit">Send</button>
				</form>
			</div>
		);
	}
}

export default Form;
