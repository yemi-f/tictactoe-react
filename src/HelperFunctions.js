
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