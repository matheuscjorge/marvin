import React, { Component } from 'react';

class Nome extends Component {
  state = {
    value: '',
    result: '',
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    this.setState({ result: this.state.value });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Nome;
