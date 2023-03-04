import style from './board.module.scss';

export default function Board() {
  const data = new Date().toLocaleDateString();
  return (
    <div className={style.board}>
      <h1 style={{ margin: 0 }}>Welcome to the remote board</h1>
      <p>当前： {data}</p>
    </div>
  );
}
