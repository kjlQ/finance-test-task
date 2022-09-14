import React,{useEffect} from 'react'
import './App.scss';
import Stocks from "./pages/Stocks";
import Card from "./pages/Card";
import {Routes , Route} from 'react-router-dom'
import {changeStocks} from "./redux/slices/financeSlice";
import Loader from "./components/Loader";
import {io} from "socket.io-client";
import { useDispatch} from 'react-redux'

function App() {
    const dispatch = useDispatch()
    const socket = io('http://localhost:4000')

    useEffect(()=> {
        handleStart()
    },[])

    const handleStart = () => {
        socket.connect()
        socket.emit('start')
        socket.on('ticker',e=>dispatch(changeStocks(e)))
    }

    const handleStop = () => {
        socket.disconnect()
    }

  return (
    <div className="App">
        <button onClick={()=> handleStart()}>start</button>
        <button onClick={()=> handleStop()}>stop</button>
        <button onClick={()=> console.log(socket)}>socket</button>
      <Routes>
          <Route path={'/'} element={<Stocks />} />
          <Route path={'/:stockCompany'} element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
