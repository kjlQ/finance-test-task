import React , {useEffect} from 'react'
import './App.css';
import {io} from "socket.io-client";
import { useSelector , useDispatch} from 'react-redux'
import {changeStocks} from './redux/slices/financeSlice'
function App() {
  const socket = io.connect('http://localhost:4000')
  const dispatch = useDispatch()
  useEffect(()=> {
    socket.emit('start')
    socket.on('ticker',e=>dispatch(changeStocks(e)))
  },[])
  const {stocks} = useSelector(state=>state.financeSlice)
  console.log(stocks)

  return (
    <div className="App">

    </div>
  );
}

export default App;
