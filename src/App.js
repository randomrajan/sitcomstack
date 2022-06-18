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
      //console.log(thestack.filter((show) => show.username === selectedUserName));
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
        let voila=[1,2,3,4,5,6,7,8,9]
        let i
        // for(let i in voila){
        setTvShow(()=> 
        thestack.filter((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow}));
    
    // voila.forEach(setTvShow);
    for(let i in voila){  
    console.log(
        thestack.filter((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow})
        );}
      //return updatetvshow
      }
    }
    , [selectedTVShow]);
  let summedArray = thestack[1].sitcoms.concat(
    thestack[2].sitcoms,
    thestack[3].sitcoms,
    thestack[4].sitcoms,
    thestack[5].sitcoms
  );
  //console.log(summedArray)
  let newsummedArray = [...new Set(summedArray)];
  //console.log(newsummedArray);
 // console.log(thestack[3].sitcoms);
  //console.log(thestack.username);
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
            ratings_one={item.ratings}
            icon_two={item.icon[1]}
            sitcoms_two={item.sitcoms[1]}
            ratings_two={item.ratings[1]}
            icon_three={item.icon[2]}
            sitcoms_three={item.sitcoms[2]}
            ratings_three={item.ratings[2]}
            icon_four={item.icon[3]}
            sitcoms_four={item.sitcoms[3]}
            ratings_four={item.ratings[3]}
            icon_five={item.icon[4]}
            sitcoms_five={item.sitcoms[4]}
            ratings_five={item.ratings[4]}
          />
        ))}
      </div>
    </div>
  );
}


// let voila = [1,2,3,4,5,6]
      // let see = voila.forEach(i => {return i})
      //  console.log(voila.length);
      // let storeString;
      // var i;
      // // let mainArray = voila.forEach(i =>{thestack.filter((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow});})
      // console.log(mainArray);
      // if (thestack.forEach((showme = [i]) => showme.sitcoms[i]) === selectedTVShow)
      // {
      //   console.log('yipee');
      // }
      // const founddd = voila.forEach(i =>{thestack.find((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow});})
      // let foundarray = []
      // foundarray.push(voila.forEach(i =>{thestack.find((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow});}))
      // console.log(foundarray);
      // voila.forEach(i =>{console.log(thestack.find((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow}));})
      // console.log(
      //   thestack.find( (sit) => sit.sitcoms[2] === selectedTVShow)
      // );
      // for(let i=0;i<10;i++){ 


      // [...thestack].forEach(item => thestack.filter((showme = [item]) => {return showme.sitcoms[item] === selectedTVShow}))
      // voila.forEach(item =>{  thestack.filter((showme=[item]) => {return showme.sitcoms[item] === selectedTVShow})            })      
      
        // thestack.filter((showme = [voila]) => [showme.sitcoms[voila]] === selectedTVShow)
        // voila.forEach(i =>{thestack.find((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow});})
        
        // voila.forEach(i =>{thestack.filter((showme = [i]) => {return showme.sitcoms[i] === selectedTVShow});})
        //);
                 // }
      // console.log(thestack.filter((showme) => showme.sitcoms[showme] === selectedTVShow));
      // console.log(
      //   thestack.flatMap(x => x.filter((showme=[x])=>{return showme.sitcoms[x] === selectedTVShow}))