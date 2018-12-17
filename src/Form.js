import React, {Component} from 'react';

class Form extends Component {
  // need to create constructor to use this keyword and to receive the props of the parent
  constructor(props) {
    super(props);

    // set initial state to be an object with empty properties
    this.initialState = {
      name: '',
      job: ''
    };

    // assign initialState to this.state;
    this.state = this.initialState;
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const {name, job} = this.state;
    return (
      <form>
        <label>Name</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input 
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
        <input 
          typ e="button"
          value="Submit"
          onClick={this.submitForm}
        />
      </form>
    );
  } 

}

export default Form;