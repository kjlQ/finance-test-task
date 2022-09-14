import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import Stock from "../components/Stock";
import Loader from "../components/Loader";
import Button from "../components/Button";
import {changeStocks} from "../redux/slices/financeSlice";
const Stocks = ({socket}) => {
    const {stocks} = useSelector(state=>state.financeSlice) // destructuring
    const dispatch = useDispatch()

    const handleStart = () => {
        handleStop() // clear other timer so the client isn't allowed to create a lot of timers
        socket.connect()
        socket.emit('start')
        socket.on('ticker',e=>dispatch(changeStocks(e)))
    }

    const handleStop = () => {
        socket.disconnect()
    }

    useEffect(()=> {
        handleStart()
        // without return cuz we want to change data in Card component
        // return () => handleStop()
    },[]) // when function rendered

    if(!stocks.length) { // loader if we dont have stocks ( data from socket )
        return (
            <Loader />
        )
    }
    return (
        <div className="stocks">
            <div className="listening-buttons">
                <Button action={()=>handleStart()} title={'start'} />
                <Button action={()=>handleStop()} title={'stop'} />
            </div>
            <div className="stocks-container">
                <h1 className="table-title">Some stocks</h1>
                {stocks.map((item,i)=><Stock key={i} {...item} profit={item.yield} />)}
            </div>
        </div>
    );
};

export default Stocks;