import React from 'react';
import "../style/Square.scss";
import { Button } from 'react-bootstrap';

const Square = ({ value, onSquareClick, xIsNext, isWinningSquare }) => {
  const hoverColor = xIsNext ? '#add8e6' : '#fff176';

  return (
    <Button
      variant="outline-dark"
      onClick={ onSquareClick }
      className={ `square ${ isWinningSquare ? 'winning-square' : '' }` }
      style={{
        width: '60px',
        height: '60px',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0',
        margin: '5px',
        backgroundColor: isWinningSquare ? '#90ee90' : value ? 'white' : undefined,
        borderColor: isWinningSquare ? '#388e3c' : undefined,
      }}
      onMouseEnter={(e) => {
        if (!value && !isWinningSquare) e.target.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        if (!value && !isWinningSquare) e.target.style.backgroundColor = 'white';
      }}
    >
      { value }
    </Button>
  );
};

export default Square;
