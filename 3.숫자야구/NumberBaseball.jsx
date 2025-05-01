// const React = require('react');
// const { Component } = React;
import React, { useState } from 'react';
import Try from './Try.jsx';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers); // NumberBaseball()가 매번 실행될 때마다 getNumbers()가 실행되는 문제가 있다. getNumbers를 사용하면 최초 한번만 실행된다. lazy init
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('홈런!');
      setTries((prevTries) => { // 옛날 state를 사용할 경우 함수형으로 바꾼다.
        return [...prevTries, { try: value, result: '홈런!' }];
      });
      alert(`게임을 다시 시작합니다!`);
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) { // 10번 이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
        alert(`게임을 다시 시작합니다!`);
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [...prevTries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` }];
        });
        setValue('');
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return (
            <Try key={`${i + 1}차 시도 : `} tryInfo={v} />
          );
        })}
      </ul>
    </>
  );
};

// 여러번 선언할 수 있는 방식
// export const hello = 'hello'; // import { hello }
// export const bye = 'hello'; // import { hello, bye }

// 한번만 선언할 수 있는 방식
// export default NumberBaseball; // import NumberBaseball;

export default NumberBaseball;  // module.exports = NumberBaseball;
