import React from "react";

const Clear = (props) => {
    return (
        <div className="mx-auto p-3 mb-4" onClick={() => props.clearBoard()} style={{ cursor: "pointer" }}>
            <h4>RESTART GAME</h4>
        </div>
    )
}

export default Clear;