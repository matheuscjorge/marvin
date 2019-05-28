import React, { Component } from 'react';

class Botao extends Component {
  state = {
    count: 0,
    count2: 0,
  };
  plus2 = () => {
    this.setState(({ count2, count }) => ({
      count2: count2 + 2,
      count: count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h2>{this.state.count2}</h2>
        <button onClick={this.plus2}>Clique aqui!</button>
      </div>
    );
  }
}

export default Botao;
