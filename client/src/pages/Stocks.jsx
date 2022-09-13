import React , {useEffect} from 'react';
import { useSelector } from 'react-redux'

import Stock from "../components/Stock";
import Loader from "../components/Loader";
const Stocks = () => {
    const {stocks} = useSelector(state=>state.financeSlice)

    if(!stocks.length) {
        return (
            <Loader />
        )
    }
    return (
        <div className="stocks">
            <div className="stocks-container">
                <h1 className="table-title">Some stocks</h1>
                {stocks.map(item=><Stock {...item} profit={item.yield} />)}
            </div>
        </div>
    );
};

export default Stocks;