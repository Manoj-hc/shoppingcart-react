import React from 'react';
import spinnerImg from "../images/spinner.gif";

function Spinner({ loadingText }) {
    return (
        <div className="spinner">
            <img src={spinnerImg} alt="loader" />
            <span>{loadingText}</span>
        </div>
    )
}

Spinner.defaultProps = {
    loadingText: "Loading..."
}

export default Spinner;