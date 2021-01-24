import React from "react";
import './App.css';
import Square from "./Square.js";
import './Square.css';
import thestack  from './thestack';
import Dropdown from './Dropdown';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =
    {
      people : thestack
    }
    this.state.people.map(r => console.log(r.username))
    console.log(this.state.people)
  }
  
  
  render(){
    const w = this.state.people.map(r => r.username)  
    const stackme = thestack.map(item => <Square key={item.id} 
        username={item.username} 
        username_link = {item.username_link} 
        icon_one = {item.icon[0]}
        icon_two = {item.icon[1]}
        icon_three = {item.icon[2]}
        icon_four = {item.icon[3]}
        icon_five = {item.icon[4]}
        icon_six = {item.icon[5]}
        sitcoms_one={item.sitcoms[0]}
        sitcoms_two={item.sitcoms[1]}
        sitcoms_three={item.sitcoms[2]}
        sitcoms_four={item.sitcoms[3]}
        sitcoms_five={item.sitcoms[4]}/>)
    return (
      <div className="App">
        <Dropdown />
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
          {/* {whatup} */}
        </div>
      );
    }
  }

export default App;
