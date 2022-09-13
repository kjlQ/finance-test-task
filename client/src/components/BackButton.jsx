import React from 'react';
import { useNavigate  } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate()

    return (
        <div className="button">
            <button onClick={()=>navigate(-1)}>back</button>
        </div>
    );
};

export default BackButton;