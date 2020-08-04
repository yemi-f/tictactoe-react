import React from 'react';

const Square = ({ addToArray, boardArray, index }) => {

    const pinkText = "#ff9999";
    const purpleText = "#9999ff"

    const squareStyle = {
        width: "96px",
        height: "96px",
        borderRadius: "16px",
        backgroundColor: "#FFFFFF",
        color: boardArray[index] === "X" ? pinkText : purpleText,
    }


    return (
        <button className="border-0 m-1 square-btn shadow" id={"square-" + index}
            onClick={() => addToArray(index)}
            style={squareStyle}>
            <h1 className="font-weight-bolder">{boardArray[index]}</h1>
        </button>
    )
}

export default Square;