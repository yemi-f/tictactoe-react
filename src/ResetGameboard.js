import React from "react";

const ResetGameboard = ({ clearBoard }) => {

    return (
        <div className="mx-auto p-3 mb-4 reset-div" onClick={() => clearBoard()} style={{ cursor: "pointer" }}>
            <h4 className="text-secondary restart-text" style={{ textShadow: "0.2px 0.2px" }}>RESTART GAME</h4>
        </div>
    )
}

export default ResetGameboard;