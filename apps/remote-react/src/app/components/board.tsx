import React from 'react';
import style from './board.module.scss';

const Board: React.FC<{ data?: string }> = props => {
  const data = new Date().toLocaleDateString();
  return (
    <div className={style.board}>
      <h1>
        Welcome to the <span style={{ color: 'red' }}>react</span> board
      </h1>
      <p>当前： {data}</p>
      <p>传参： {props.data}</p>
    </div>
  );
};
export default Board;
