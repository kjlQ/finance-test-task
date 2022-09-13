import React from 'react';
import {Link} from 'react-router-dom'

const Stock = ({ticker,change_percent,price,profit}) => {
    return (
        <Link to={`/${ticker}`}>
            <div className="item">
                <div className="title">
                    {ticker}
                </div>
                <div className="price">
                    {price}
                </div>
                <div className="percent">
                <span className={profit > 1 ? 'profitable' : 'profitless'}>
                    <svg focusable="false" width="16" height="16" viewBox="0 0 24 24" className=" NMm5M">
                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                    </svg>
                    {change_percent}%
                </span>
                </div>
            </div>
        </Link>
    );
};

export default Stock;