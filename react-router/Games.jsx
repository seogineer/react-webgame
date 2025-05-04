import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom';
import NumberBaseball from '../3.숫자야구/NumberBaseballClass';
import RSP from '../5.가위바위보/RSPClass';
import Lotto from '../6.로또추첨기/LottoClass';

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to='/number-baseball'>숫자야구</Link>
        &nbsp;
        <Link to='/rock-scissors-paper'>가위바위보</Link>
        &nbsp;
        <Link to='/lotto-generator'>로또생성기</Link>
      </div>
      <Routes>
        <Route path="/number-baseball" element={<NumberBaseball />} />
        <Route path="/rock-scissors-paper" element={<RSP />} />
        <Route path="/lotto-generator" element={<Lotto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Games;
