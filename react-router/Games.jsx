import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom';
import GameMatcher from './GameMatcher';

// HashRouter는 검색엔진에 노출하는데 제약이 있어서 잘 사용하지 않는다.
// 관리자 페이지에서 사용할 수 있다.
const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to='/game/number-baseball'>숫자야구</Link>
        &nbsp;
        <Link to='/game/rock-scissors-paper'>가위바위보</Link>
        &nbsp;
        <Link to='/game/lotto-generator'>로또생성기</Link>
        &nbsp;
        <Link to='/game/index'>게임 매쳐</Link>
      </div>
      <Routes>
        <Route path="/game/:name" element={<GameMatcher />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Games;
