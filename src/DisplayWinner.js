import React from "react";

const DisplayWinner = (props) => {
    return (
        <div className="mx-auto p-3 mb-4" style={{ width: "288px", height: "30px" }}>
            <h3>{props.winner}</h3>
        </div>
    )
}

export default DisplayWinner;