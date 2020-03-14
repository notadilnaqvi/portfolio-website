import React, { Component } from 'react';


export class Form extends Component {

	constructor(props) {
		super(props)

		this.state = {
			name: "",
			email: "",
			org: "",
			msg: ""
		}
	}

	handleNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	handleOrgChange = (event) => {
		this.setState({
			org: event.target.value
		})
	}

	handleMsgChange = (event) => {
		this.setState({
			msg: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		alert("Form submitted!");
		this.setState({
			name: "",
			email: "",
			org: "",
			msg: ""
		})
	}

	render() {
		return (
			<form name="contact" onSubmit={this.handleSubmit} method="post" className="contact-form">
				<input type="hidden" name="form-name" value="messages" />
				<div className="form-field">
					<label>name<span className='salmon-ify'>*</span></label>
					<input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} required />
				</div>

				<div className="form-field">
					<label>email<span className='salmon-ify'>*</span></label>
					<input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} required />
				</div>

				<div className="form-field">
					<label>organization</label>
					<input type="text" name="org" value={this.state.org} onChange={this.handleOrgChange} />
				</div>

				<div className="form-field">
					<label>message<span className='salmon-ify'>*</span></label>
					<textarea type="text" name="msg" value={this.state.msg} onChange={this.handleMsgChange} required />
				</div>
				<div className="form-field">
					<button type="submit">submit</button>
				</div>
			</form>
		)
	}
}

export default Form;

