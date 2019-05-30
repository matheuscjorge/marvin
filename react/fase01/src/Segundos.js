import React, { Component } from 'react';
import moment from 'moment';

class Segundos extends Component {
  state = {
    segundos: 0,
  };
  componentDidMount () {
    var now = moment().format('ss').toString();
    this.setState({ segundos: now });
  }

  render() {
    return (
      <div>
        <h2>{this.state.segundos}</h2>
      </div>
    );
  }
}
export default Segundos;
