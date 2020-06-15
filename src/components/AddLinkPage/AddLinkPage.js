import React, { Component} from 'react';

class AddLinkPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      description: '',
      cashapp: '',
      venmo: '',
      paypal: '',
      contactEmail: ''
    }
  }
  formRef = React.createRef()

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAddLink(this.state.formData)
  }
  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value, }
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    })
  }
  render() {

    return (
      <div className="Home">
        <p>add link</p>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
        </form>
      </div>
    );
  }
}
export default AddLinkPage;