// const React = require('react');
// const { Component } = React;
import React, { Component } from 'react';

function getNumbers() {

}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {

  };

  onChangeInput = () => {

  };

  // key에 index를 사용하면 성능 최적화에 좋지 않음.
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {['사과', '바나나', '포도', '귤', '감', '배', '밤'].map((v, i) => {
            return (
              <li key={v}>{v} - {i}</li>
            );
          })}
        </ul>
      </>
    );
  }
}

// 여러번 선언할 수 있는 방식
// export const hello = 'hello'; // import { hello }
// export const bye = 'hello'; // import { hello, bye }

// 한번만 선언할 수 있는 방식
// export default NumberBaseball; // import NumberBaseball;

export default NumberBaseball;  // module.exports = NumberBaseball;
