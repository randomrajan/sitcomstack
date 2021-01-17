import React from "react";
import './App.css';
import './Square.js';
import Square from "./Square.js";

function App() {
  return (
    <div className="App">
      <Square className="square"/>
      <Square className="square"/>
      <Square className="square"/>
      <Square className="square"/>
      <Square className="square"/>
      <Square className="square"/>
    </div>
  );
}

export default App;
