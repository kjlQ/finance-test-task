import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux'
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";

const attributes = [
    {name: "Company Name", value: "ticker"},
    {name: "Price", value: "price"},
    {name: "Change", value: "change"},
    {name: "Dividend", value: "dividend"},
    {name: "Yield", value: "yield"},
    {name: "Marketplace", value: "exchange"},
]

const Card = () => {
    const [stock, setStock] = useState()

    const {stockCompany} = useParams()

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
            <BackButton/>
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