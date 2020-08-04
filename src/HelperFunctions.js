
export const getWinner = (board) => {
    const winningLines = [
        board[0] + board[4] + board[8],
        board[6] + board[4] + board[2],
        board[0] + board[1] + board[2],
        board[3] + board[4] + board[5],
        board[6] + board[7] + board[8],
        board[0] + board[3] + board[6],
        board[1] + board[4] + board[7],
        board[2] + board[5] + board[8],
    ];

    for (let i = 0; i < winningLines.length; i++) {
        if (winningLines[i] === "XXX" || winningLines[i] === "OOO") {
            changeSquareColour(getWinningSquaresArray(i))
            return winningLines[i][0] + " wins";
        }
    }

    return null;
}

export const allSquaresOccupied = (board) => {
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            return false
        }
    }
    return true;
}

export const getWinningSquaresArray = (winningLinesIndex) => {
    if (winningLinesIndex === 0) {
        return [0, 4, 8]
    } else if (winningLinesIndex === 1) {
        return [6, 4, 2]
    } else if (winningLinesIndex === 2) {
        return [0, 1, 2]
    } else if (winningLinesIndex === 3) {
        return [3, 4, 5]
    } else if (winningLinesIndex === 4) {
        return [6, 7, 8]
    } else if (winningLinesIndex === 5) {
        return [0, 3, 6]
    } else if (winningLinesIndex === 6) {
        return [1, 4, 7]
    } else if (winningLinesIndex === 7) {
        return [2, 5, 8]
    }
    return []
}

export const changeSquareColour = (winningArray) => {
    winningArray.forEach((squareIndex) => {
        document.getElementById("square-" + squareIndex).style.backgroundColor = "red"
    })
}