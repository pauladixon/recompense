import React, { Component } from 'react';

export default class AddLinkComment extends Component {
	state = {
		invalidForm: true,
		formData: {
            comment: ''
		},
	};

	handleSubmit = (e) => {
        e.preventDefault();
		this.props.handleAddLinkComment(this.state.formData);
	};

	handleChange = (e) => {
        const formData = {
            ...this.state.formData,
			[e.target.name]: e.target.value,
		};
		this.setState({ formData });
	};

	render() {
        return (
            <>
				<div className="row wrapper">
					<form className="col s12" onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="input-field col s6 mat-input">
								<form>
									<input
										type="text"
										autoComplete={'off'}
										value={this.state.comment}
										name="comment"
										onChange={this.handleChange}
										// required
									/>
								</form>
							</div>
						</div>
						<div>
							<div>
								<button className="waves-effect waves-light btn blue-grey darken-4 mat-input">REPLY</button>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}