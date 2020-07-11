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
				<div>
					<form onSubmit={this.handleSubmit}>
						<div>
							<div>
								<form>
									<input
										type="text"
										autoComplete={'off'}
										value={this.state.comment}
										name="comment"
										onChange={this.handleChange}
										required
									/>
								</form>
							</div>
						</div>
						<div>
							<div>
								<button>Comment</button>
							</div>
						</div>
					</form>
				</div>
			</>
		);
	}
}