import React from 'react';
import Swal from 'sweetalert2';


const encode = (data) => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.state = { name: "", email: "", organization: "", message: "" };
	}

	handleSubmit = event => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state })
		});
		this.setState({
			name: "",
			email: "",
			organization: "",
			message: ""
		});

		Swal.fire({
			position: "top-center",
			icon: "success",
			title: "Submitted!",
			width: 250,
			confirmButtonColor: "#0000FF"
		})

		event.preventDefault();
	};

	handleChange = event => this.setState({ [event.target.name]: event.target.value });

	render() {
		const { name, email, organization, message } = this.state;
		return (
			<form onSubmit={this.handleSubmit} className="contact-form">
				<input type="hidden" name="form-name" value="messages" />
				<div className="form-field">
					<label>Name<span className='salmon-ify'>*</span></label>
					<input type="text" name="name" value={name} onChange={this.handleChange} required />
				</div>

				<div className="form-field">
					<label>Email<span className='salmon-ify'>*</span></label>
					<input type="email" name="email" value={email} onChange={this.handleChange} required />
				</div>

				<div className="form-field">
					<label>Organization</label>
					<input type="text" name="organization" value={organization} onChange={this.handleChange} />
				</div>

				<div className="form-field">
					<label>Message<span className='salmon-ify'>*</span></label>
					<textarea type="text" name="message" value={message} onChange={this.handleChange} required />
				</div>
				<div className="form-field">
					<button type="submit" className="submit">Submit</button>
				</div>
			</form>
		);
	}
}


export default Form;

