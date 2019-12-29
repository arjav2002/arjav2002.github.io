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
				<form className="feedback-form" onSubmit={this.handleSubmit}>
					<h1>Your Feedback</h1>
						<textarea
						className="text-input"
						id="feedback-entry"
						name="feedback-entry"
						onChange={this.handleChange}
						placeholder="Enter your feedback here"
						required
						value={this.state.feedback}
				  		/>
					<div className="btn-group">
				    		<input type="submit" value="Submit" className="btn btn--submit" />
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
