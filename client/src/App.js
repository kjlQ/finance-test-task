import React , {useEffect} from 'react'
import './App.css';
import {io} from "socket.io-client";
function App() {
  const socket = io.connect('http://localhost:4000')
  useEffect(()=> {
    socket.emit('start')
    socket.on('ticker',e=>console.log(e))
  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
