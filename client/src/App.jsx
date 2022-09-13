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
    const socket = io.connect('http://localhost:4000')
    const dispatch = useDispatch()

    useEffect(()=> {
        socket.emit('start')
        socket.on('ticker',e=>dispatch(changeStocks(e)))
    },[])

  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Stocks />} />
          <Route path={'/:stockCompany'} element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
