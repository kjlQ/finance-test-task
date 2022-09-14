import React from 'react'
import './App.scss';
import Stocks from "./pages/Stocks";
import Card from "./pages/Card";
import {Routes , Route} from 'react-router-dom'
import {io} from "socket.io-client";

function App() {
    const socket = io('http://localhost:4000')

  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<Stocks socket={socket} />} />
          <Route path={'/:stockCompany'} element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
