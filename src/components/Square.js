import React from 'react';
import "../style/Square.scss";

const Square = ({ value, onSquareClick }) => {
    return (
      <button className="square" onClick={ onSquareClick }>
        { value } 
      </button>
    );
}  

export default Square;