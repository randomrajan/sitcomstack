import React, { useEffect } from "react";
//import Dropdown from "./Dropdown";
import Square from "./Square";
// import "./styles.css";
import { thestack } from "./thestack";

export default function App() {
  const [selectedUserName, setSelectedUserName] = React.useState("");
  const [tvShow, setTvShow] = React.useState(thestack);
  const [selectedTVShow, setSelectedTVShow] = React.useState("");
  useEffect(() => {
    if (selectedUserName !== "") {
      setTvShow(() =>
        thestack.filter((show) => show.username === selectedUserName)
      );
      console.log(thestack.filter((show) => show.username === selectedUserName));
      // for(let i=0;i<10;i++){
      //   if(thestack[i].username === selectedUserName){
      //     setTvShow(() =>
      //     thestack.filter((show) => show.username === selectedUserName)
      //     );
      //     } }
      
    }
  }, [selectedUserName]);
  useEffect(() => {
      if (selectedTVShow !== "") {
      let voila = [1,2,3,4,5,6]
      console.log(voila.length);
  // for(let i=0;i<10;i++){ 
      setTvShow(
      // [...thestack].forEach(item => thestack.filter((showme = [item]) => {return showme.sitcoms[item] === selectedTVShow}))
      // voila.forEach(item =>{  thestack.filter((showme=[item]) => {return showme.sitcoms[item] === selectedTVShow})            })      
      
        thestack.filter((showme) => showme.sitcoms[2] === selectedTVShow)
        );
                 // }
      voila.forEach(i =>{console.log(thestack.filter((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow}));})
                }
    
    
  }, [selectedTVShow]);
  let summedArray = thestack[1].sitcoms.concat(
    thestack[2].sitcoms,
    thestack[3].sitcoms,
    thestack[4].sitcoms,
    thestack[5].sitcoms
  );
  //console.log(summedArray)
  let newsummedArray = [...new Set(summedArray)];
  //console.log(newsummedArray);
  console.log(thestack[3].sitcoms[3]);
  let vola = newsummedArray.map((element) => {
    return element;
  });
  //console.log(vola)
  return (
    <div>
      <select
        className="usernamedropdown"
        placeholder="Sitcoms"
        onChange={(event) => setSelectedUserName(event.target.value) }
      >
        <option value="nothing">Select the username</option>
        <option value="priyansh__8">priyansh__8</option>
        <option value="shekhar_mandal_">shekhar_mandal_</option>
        <option value="h28h8_00">h28h8_00</option>
        <option value="iamneegam">iamneegam</option>
      </select>
      <span> </span>
      <button className="reloadButton" onClick={() => setTvShow(thestack)}>
        Reload
      </button>
      <select
        placeholder="TVShow"
        onChange={(event) => setSelectedTVShow(event.target.value)}
        className="TVdropdown"
      >
        <option>Choose any TV-Show</option>
        <option>{newsummedArray[0]}</option>  <option>{newsummedArray[1]}</option>  <option>{newsummedArray[2]}</option>  
      <option>{newsummedArray[3]}</option>  <option>{newsummedArray[4]}</option>  <option>{newsummedArray[5]}</option>  
      <option>{newsummedArray[6]}</option>  <option>{newsummedArray[7]}</option>  <option>{newsummedArray[8]}</option>  
      <option>{newsummedArray[9]}</option>  <option>{newsummedArray[10]}</option>  <option>{newsummedArray[11]}</option>  
      <option>{newsummedArray[12]}</option>  <option>{newsummedArray[13]}</option>  <option>{newsummedArray[14]}</option>  
      <option>{newsummedArray[15]}</option>  <option>{newsummedArray[16]}</option>  
      </select>

      <div className="App">
        {tvShow.map((item) => (
          <Square
            key={item.id}
            icon_six={item.icon[5]}
            username={item.username}
            username_link={item.username_link}
            icon_one={item.icon[0]}
            sitcoms_one={item.sitcoms[0]}
            icon_two={item.icon[1]}
            sitcoms_two={item.sitcoms[1]}
            icon_three={item.icon[2]}
            sitcoms_three={item.sitcoms[2]}
            icon_four={item.icon[3]}
            sitcoms_four={item.sitcoms[3]}
            icon_five={item.icon[4]}
            sitcoms_five={item.sitcoms[4]}
          />
        ))}
      </div>
    </div>
  );
}
