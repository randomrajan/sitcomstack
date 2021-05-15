import React, { useEffect } from "react";
import Square from "./Square";
// import "./styles.css";
import { thestack } from "./thestack";

export default function App() {
  const [selectedUserName, setSelectedUserName] = React.useState("");
  const [tvShow, setTvShow] = React.useState(thestack);
  useEffect(() => {
    if (selectedUserName !== "") {
      setTvShow(() =>
        thestack.filter((show) => show.username === selectedUserName)
      );
    }
  }, [selectedUserName]);
  return (
<div>
    <select
        placeholder="Sitcoms"
        onChange={(event) => setSelectedUserName(event.target.value)}
      >
        <option value="nothing">Select the username</option>
        <option value="priyansh__8">priyansh__8</option>
        <option value="shekhar_mandal_">shekhar_mandal_</option>
        <option value="h28h8_00">h28h8_00</option>
        <option value="iamneegam">iamneegam</option>
      </select>
      <span> </span>
      <button className="reloadButton" onClick = {()=> setTvShow(thestack)}>Reload</button>
      <div className="App">
      {tvShow.map((item) => (
        <Square
          key={item.id}
          username={item.username}
          username_link={item.username_link}
          sitcoms_one={item.sitcoms[0]}
          sitcoms_two={item.sitcoms[1]}
          sitcoms_three={item.sitcoms[2]}
          sitcoms_four={item.sitcoms[3]}
          sitcoms_five={item.sitcoms[4]}
        />
      ))}
    </div>
    </div>
  );
}
