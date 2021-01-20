import React from "react";
import './App.css';
import Square from "./Square.js";
import './Square.css';
import Header from './Header.js';
import { thestack } from './thestack';

function App() {
  const stackme = thestack.map(item => <Square key={item.id} 
    username={item.username} 
    sitcoms_one={item.sitcoms[0]}
    sitcoms_two={item.sitcoms[1]}
    sitcoms_three={item.sitcoms[2]}
    sitcoms_four={item.sitcoms[3]}
    sitcoms_five={item.sitcoms[4]}/>)
  return (
    <div className="App">
      {/* <Square id = {1}/>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square /> */}
      {/* {thestack.map(item => <Square key={item.id} 
    username={item.username} 
    sitcoms_one={item.sitcoms[0]}
    sitcoms_two={item.sitcoms[1]}
    sitcoms_three={item.sitcoms[2]}
    sitcoms_four={item.sitcoms[3]}
    sitcoms_five={item.sitcoms[4]}/>)} */}
      {stackme} 
    </div>
  );
}

export default App;
