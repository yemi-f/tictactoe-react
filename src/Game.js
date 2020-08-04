import React, { useState } from 'react';
import DisplayWinner from './DisplayWinner';
import Clear from './Clear';
import Gameboard from "./Gameboard"
import { allSquaresOccupied, getWinner } from "./HelperFunctions"

const Game = () => {

    const [boardArray, setBoardArray] = useState(
        Array(9).fill("")
    )

    const winner = (getWinner(boardArray) === null && allSquaresOccupied(boardArray)) ? "It's a draw" : getWinner(boardArray);

    const [char, setChar] = useState("X")

    const addToArray = (index) => {

        const newBoardArray = [...boardArray]

        if (winner != null || boardArray[index] !== "") return;

        setChar(char === "X" ? "O" : "X");
        newBoardArray[index] = char;
        setBoardArray(newBoardArray)
    }

    const clearBoard = () => {
        const defaultBtnColour = "#EFEFEF"
        setBoardArray(Array(9).fill(""));
        [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(squareIndex => {
            document.getElementsByClassName("square-btn")[squareIndex].style.backgroundColor = defaultBtnColour;
        })
        setChar("X")
    }

    return (
        <div className="text-center mx-auto">
            <DisplayWinner winner={winner} />
            <Gameboard addToArray={addToArray} boardArray={boardArray} winner={winner} />
            <Clear clearBoard={clearBoard} />
        </div>
    )
}

export default Game;