import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'
import Loader from "../components/Loader";
import Button from "../components/Button";

const attributes = [  // attributes to withdraw data in cycle
    {name: "Company Name", value: "ticker"},
    {name: "Price", value: "price"},
    {name: "Change", value: "change"},
    {name: "Dividend", value: "dividend"},
    {name: "Yield", value: "yield"},
    {name: "Marketplace", value: "exchange"},
]

const Card = () => {
    const [stock, setStock] = useState() // it should be picked stock
    const {stockCompany} = useParams() // take param from the link
    const navigate = useNavigate()

    const {stocks} = useSelector(state => state.financeSlice)

    useEffect(() => {
        setStock(stocks.find(obj => obj.ticker === stockCompany))
    }, [stocks])

    if (!stock) {
        return (
            <Loader/>
        )
    }
    return (
        <div className="card">
            <Button action={()=>navigate(-1)} title="back" />
            <div className="card-container">
                <h1 className="table-title">{stock.ticker}</h1>
                {attributes.map(item => (
                    <div className="item">
                        <div className="name">
                            {item.name}
                        </div>
                        <div className="value">
                            {stock[item.value]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;