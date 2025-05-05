import { useState } from "react";
import Board from "./Board";
import "../style/Game.scss";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), moveIndex: null }]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove].squares;

  const handlePlay = (nextSquares, index) => {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquares, moveIndex: index }
    ];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const getRowCol = (index) => {
    if (index === null || index === undefined) return "";
    const row = Math.floor(index / 3) + 1;
    const col = (index % 3) + 1;
    return `Row ${row}, Col ${col}`;
  };

  const moves = history.map((step, move) => {
    const description = move > 0
      ? `Go to move #${move} (${getRowCol(step.moveIndex)})`
      : "Go to game start";

    return (
      <li key={ move }>
        <Button
          variant={ move === currentMove ? "primary" : "outline-secondary" }
          size="sm"
          onClick={ () => jumpTo(move) }
          className="my-1"
        >
          { description }
        </Button>
      </li>
    );
  });

  return (
    <Container className="text-center mt-5">
      <h1 className="mb-4">Tic Tac Toe Game</h1>
      <hr />
      <Row>
        <Col>
          <Board
            xIsNext={ xIsNext }
            squares={ currentSquares }
            onPlay={ handlePlay }
          />
        </Col>
        <Col className="game-info">
          <div className="game-info mt-4">
            <h5>Move History</h5>
            <ol>{ moves} </ol>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
