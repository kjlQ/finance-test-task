import React from 'react';

const Button = ({action,title}) => {
    return (
        <div className="button">
            <button onClick={action}>{title}</button>
        </div>
    );
};

export default Button;