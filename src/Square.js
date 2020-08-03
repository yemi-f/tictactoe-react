import React from 'react';

const Square = ({ addToArray, boardArray, index }) => {

    const squareStyle = {
        width: "96px",
        height: "96px",
    }

    return (
        <button className="" id={"square-" + index}
            onClick={() => addToArray(index)}
            style={squareStyle}>
            <h1 className="">{boardArray[index]}</h1>
        </button>
    )
}

export default Square;