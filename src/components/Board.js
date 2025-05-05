import React from 'react';
import { calculateWinner } from '../utils/calculateWinner';
import Square from "./Square";
import "../style/Board.scss";

const Board = ({ xIsNext, squares, onPlay }) => {
  const winnerInfo = calculateWinner(squares);
  const winningLine = winnerInfo?.line;
  const winner = winnerInfo?.winner;
  const isDraw = !winner && squares.every(Boolean);

  const handleClick = (i) => {
    if (squares[i] || winner) {
      return;
    }

    const newSquaresArray = squares.slice();
    newSquaresArray[i] = xIsNext ? "X" : "O";
    onPlay(newSquaresArray, i);
  };

  const isWinningSquare = (i) => winningLine?.includes(i);

  const status = winner
    ? "Winner is: " + winner
    : isDraw
    ? "It's a draw!"
    : "Next player is: " + (xIsNext ? "X" : "O");

  const renderSquare = (i) => (
    <Square
      value={ squares[i] }
      onSquareClick={ () => handleClick(i) }
      xIsNext={ xIsNext }
      isWinningSquare={ isWinningSquare(i) }
    />
  );

  return (
    <>
      <div className="status">{ status }</div>
      
      <div className="board-row">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
    </>
  );
};

export default Board;
