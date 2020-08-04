import React from 'react';
import Square from './Square';

const Gameboard = ({ addToArray, boardArray, winner }) => {

    const gameboardRows = [0, 1, 2].map(row => {
        return (
            <div className="row mx-auto" key={row}>
                {[0, 1, 2].map(btn => {
                    return (
                        <Square addToArray={addToArray}
                            boardArray={boardArray}
                            index={row * 3 + btn}
                            key={row * 3 + btn}
                            winner={winner} />
                    )
                })}
            </div>
        );
    })

    return (
        <div className="gameboard-complete mx-auto">
            {gameboardRows}
        </div>
    )
}

export default Gameboard;