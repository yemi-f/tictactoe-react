import React from "react";

const DisplayWinner = ({ winner }) => {
    return (
        <div className="mx-auto p-3 mb-4" style={{ width: "288px", height: "30px" }}>
            <h3 className="text-secondary">{winner}</h3>
        </div>
    )
}

export default DisplayWinner;