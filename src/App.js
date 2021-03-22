import React from "react";
import {useState} from "react"
import './App.css';
import Square from "./Square.js";
import './Square.css';
import thestack from './thestack';
import Dropdown from './Dropdown';
import { FaCouch,FaRegLaughSquint, FaTruck,FaHorse,FaLaptopCode,FaCoffee,FaChessKing,FaBlackTie } from 'react-icons/fa';
import { GiStoneThrone,GiWitchFlight,GiSherlockHolmes,GiInfinity,GiFamilyHouse, GiSpartanHelmet,GiSpaceSuit,GiEternalLove,GiDramaMasks } from 'react-icons/gi'
import { FiInstagram } from 'react-icons/fi'

// function App(props) {
//   const [humans, sethumans] = useState(thestack)

//   // function updatehumans()
//   // {
//   //   const newhumans[] = [...thestack]
//   // }

//   const selected = <select placeholder="Sitcoms" onChange = {()=> sethumans(thestack[2])}>
//     <option value='its_surajmaity'>its_surajmaity</option>
//     <option value='priyansh__8'>priyansh__8</option>
//     <option value='shekhar_mandal_'>shekhar_mandal_</option>
//     <option value='h28h8_00'>h28h8_00</option>
//     <option value='iamneegam'>iamneegam</option>
//     </select>
//     const stackme = humans.props.map(item => <Square key={item.id} 
//         username={item.username} 
//         username_link = {item.username_link} 
//         icon_one = {item.icon[0]}
//         icon_two = {item.icon[1]}
//         icon_three = {item.icon[2]}
//         icon_four = {item.icon[3]}
//         icon_five = {item.icon[4]}
//         icon_six = {item.icon[5]}
//         sitcoms_one={item.sitcoms[0]}
//         sitcoms_two={item.sitcoms[1]}
//         sitcoms_three={item.sitcoms[2]}
//         sitcoms_four={item.sitcoms[3]}
//         sitcoms_five={item.sitcoms[4]} />)

//     return (
//       <div>
//         {selected}
//       <div className="App">
//         {stackme}
//       </div>
//       </div>
//     )

// }

class App extends React.Component {
  constructor(props){
    super(props);
    this.state =
    {
      people : thestack
    }
    this.state.people.map(r => console.log(r))
    console.log(this.state.people[1])
    this.changeme = this.changeme.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  changeme=()=>{


    this.setState(
      {
        people : {
        id: 2,
        username: 'priyansh__8',
        sitcoms: ['Peaky Blinders','Mr Robot','Breaking Bad','Sherlock','Dark'],
        icon: [<FaHorse />, <FaLaptopCode />, <FaTruck />, <GiSherlockHolmes />, <GiInfinity />, <FiInstagram />],
        username_link: 'https://www.instagram.com/priyansh__8',
        
    }
      }
    )
  }

  handleChange(id) {
    let newlist = this.state.people[1]
    this.setState(
      // prevState => {
      //   // const updatedpeople = prevState.people.map(todo => {
      //   //     return todo[1]
      //   // })
      //   }
        {
            people : newlist
        });
}
  
  
  render() {
    // const w = this.state.people.map(r => r.username)  
    const selected = <select placeholder="Sitcoms" value={this.state.people} onChange={this.handleChange}>
    <option value='its_surajmaity'>its_surajmaity</option>
    <option value='priyansh__8'>priyansh__8</option>
    <option value='shekhar_mandal_'>shekhar_mandal_</option>
    <option value='h28h8_00'>h28h8_00</option>
    <option value='iamneegam'>iamneegam</option>
    <option value='shreypatel_23'>shreypatel_23</option>
    </select>
    // const stackme = this.state.people.map(item => <Square key={item.id} 
    //     username={item.username} 
    //     username_link = {item.username_link} 
    //     icon_one = {item.icon[0]}
    //     icon_two = {item.icon[1]}
    //     icon_three = {item.icon[2]}
    //     icon_four = {item.icon[3]}
    //     icon_five = {item.icon[4]}
    //     icon_six = {item.icon[5]}
    //     sitcoms_one={item.sitcoms[0]}
    //     sitcoms_two={item.sitcoms[1]}
    //     sitcoms_three={item.sitcoms[2]}
    //     sitcoms_four={item.sitcoms[3]}
    //     sitcoms_five={item.sitcoms[4]} />)
    
    return (
      <div>
        {selected}
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
        {
          thestack.map(item => <Square key={item.id} 
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
        }
          {/* {stackme}   */}
          {/* {whatup} */}
        </div>
        </div>
      );
    }
  }

export default App;
