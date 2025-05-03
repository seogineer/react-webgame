import React, { useState, useReducer, useCallback } from 'react';
import Table from './Table';

const initialState = {
  winner: '',
  turn: '0',
  tableData: [['', '', ''], ['', '', ''], ['', '', '']],
};

const SET_WINNER = 'SET_WINNER';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner; 이렇게 하면 안 됨.
      return {
        ...state,
        winner: action.winner,
      }

  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, turn, winner, recentCell } = state;

  // const [winner, setWinner] = useState('');
  // const [turn, setTurn] = useState('0');
  // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

  const onClickTable = useCallback(() => {
    dispatch({ type: 'SET_WINNER', winner: '0' });
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
