import React, { useEffect } from "react";
import "./App.css";
import "./Square.css";
// import { thestack } from "./thestack";
//import { Link } from 'react-router';

function Square(props) {
  return (
    <div className="Square">
      <p>
        <span className="iconAlign">{props.icon_six}</span>
        <a className="link" href={props.username_link}>
          {props.username}
        </a>
        {""}
        <br /> <br />
        <span className="iconAlign"> {props.icon_one} </span>
        {props.sitcoms_one} 
        <span>{props.rating_one}</span><br />
        <span className="iconAlign"> {props.icon_two} </span>
        {props.sitcoms_two} {props.rating_two}<br />
        <span className="iconAlign">{props.icon_three} </span>
        {props.sitcoms_three}{props.rating_three} <br />
        <span className="iconAlign"> {props.icon_four}</span>
        {props.sitcoms_four} {props.rating_four}<br />
        <span className="iconAlign">{props.icon_five} </span>
        {props.sitcoms_five} {props.rating_five}<br />
      </p>
    </div>
  );
}

export default Square;

//{
/* <p>
                {thestack.map((data,key) => {
                    return(
                        <div key={data.id}>
                            {data.username + ',' + data.sitcoms}
                        </div>
                    );
                })}
            </p> */
//}
