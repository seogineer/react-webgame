import React, { Component } from 'react';

class Try extends Component {
  render() {
    return (
      <li key={this.props.value}>{this.props.value} - {this.props.index}</li>
    );
  }
}

export default Try;
