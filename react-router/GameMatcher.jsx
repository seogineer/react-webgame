import React from 'react';
import { useParams } from 'react-router-dom';
import NumberBaseball from '../3.숫자야구/NumberBaseballClass';
import RSP from '../5.가위바위보/RSPClass';
import Lotto from '../6.로또추첨기/LottoClass';

const GameMatcher = () => {
  const { name } = useParams();

  if (name === 'number-baseball') {
    return <NumberBaseball />
  } else if (name === 'rock-scissors-paper') {
    return <RSP />
  } else if (name === 'lotto-generator') {
    return <Lotto />
  }
  return (
    <div>
      일치하는 게임이 없습니다.
    </div>
  );
}

export default GameMatcher;
