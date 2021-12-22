import { useState } from 'react';
import * as React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export function XOGAME() {
  const { width, height } = useWindowSize();

  // initially all 9 boxes have null values
  const [board, setboard] = useState([null, null, null, null, null, null, null, null, null]);

  // isxtrun to see whose turn is it x or o
  const [isxturn, setisxturn] = useState(true);

  //when box is clicked from null to x or o based on ixturn value
  const handleClick = (index) => {
    console.log(index);

    //initially box values null ==> so can change to x or o
    //with index values we track which box has which value
    //after that use should not be able to change
    if (board[index] === null && (winner === null || winner === undefined)) { //if someone won the game cannot play further
      const copy = [...board];
      copy[index] = isxturn ? "X" : "O";
      setboard(copy);
      console.log("setting boiard", board);
      setisxturn(!isxturn);
    }
  };


  //function to decide WINNER
  const decidewinner = board => {
    //getting all lines which decides the winner
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]; //instead of nested loop , destructuring it






      //a b c are just indexses of winning lines
      // console.log(a,b,c)
      // console.log(board[a],board[b],board[c])
      //initially all values are null so to filter it we have a condition
      if ((board[a]) === (board[b]) && (board[b]) === (board[c]) && (board[c]) === (board[a])) {
        console.log(a, b, c);
        console.log(board[a], board[b], board[c]);
        if (board[a] === "X" || board[a] === "O") {
          return board[a];
        } else {
          return null;
        }
        // return board[a]
      }
    }
  };

  const isdraw = board => {

    const values = board.filter((val) => val === null);
    console.log("values", values.length);
    if (winner !== "X" || winner !== "O") {
      if (values.length === 0) {
        return true;
      } else {
        return null;
      }

    }

  };


  const winner = decidewinner(board);
  console.log("winner", winner);
  console.log("boiard", board);
  const draw = isdraw(board);
  console.log("draw", draw);

  const confeti = (winner) ? <Confetti width={width} height={height} gravity={0.07} numberOfPieces={100} /> : "";
  const winnerannounce = (winner) ? <h1>The winner is {winner}</h1> : "";
  const drawannounce = (winner) ? "" : (draw) ? <h1>The match ended in DRAW</h1> : "";

  const player = (winner) ? "" : (draw) ? "" : (isxturn) ? <h2>X's turn</h2> : <h2>O's turn</h2>;

  const [visible, setvisible] = useState(true);
  const style1 = (visible) ? { display: "block" } : { display: "none" };
  const style2 = (visible) ? { display: "none" } : { display: "block" };

  const style3 = (winner) ? { display: "block" } : (draw) ? { display: "block" } : { display: "none" };

  return (


    <div style={{ color: "white" }, { textAlign: "center" }} className='gamebg'>
      {confeti}
      <br></br>
      <div className='choosePlayer' style={style1}>
        <div><h1>Who is the first player</h1></div>
        <button onClick={() => { setisxturn(true); setvisible(false); }}>X</button>
        <button onClick={() => { setisxturn(false); setvisible(false); }}>O</button>
      </div>

      <div>
        {winnerannounce}
      </div>
      <div>
        {drawannounce}
      </div>

      <div className='gameArea' style={style2}>
        <br></br>
        <div>{player}</div>
        <div className='board'>
          {
            //with index we will find which boox is clicked
            board.map((val, index) => (
              <GameBox val={val} onPlayerClick={() => handleClick(index)} />
            ))}

        </div>
        <div>
          <button style={style3} onClick={() => {
            setboard([null, null, null, null, null, null, null, null, null]);
            setvisible(true);
          }}>RESTART GAME</button>
        </div>
      </div>
      <br />
    </div>

  );
}
function GameBox({ val, onPlayerClick }) {
  const style1 = (val === "X") ? { color: "yellow" } : { color: "orange" };
  return (
    <div>
      <div className='gamebox' style={style1} onClick={onPlayerClick}>
        {val}
      </div>
    </div>
  );

}
