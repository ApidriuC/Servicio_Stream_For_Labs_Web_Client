import React from 'react';

const Spinner = ({ color ="secondary"}) => {
    return (
        <div className={`spinner-border text-${color}`} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Spinner