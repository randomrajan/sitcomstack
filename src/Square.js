import React from "react";
import "./App.css";
import "./Square.css";
import { thestack } from "./thestack";
//import { Link } from 'react-router';

function Square(props) {
  return (
    <div className="Square">
      <p>
        {props.icon_six} <span /> <span />
        <a className='link' href= {props.username_link}>{props.username}</a> <br /> <br />
        {props.icon_one} <span /> <span />
        {props.sitcoms_one} <br />
        {props.icon_two} <span /> <span />
        {props.sitcoms_two} <br />
        {props.icon_three} <span /> <span />
        {props.sitcoms_three} <br />
        {props.icon_four} <span /> <span />
        {props.sitcoms_four} <br />
        {props.icon_five} <span /> <span />
        {props.sitcoms_five}
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
