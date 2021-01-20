import React from "react";
import './App.css';
import './Square.css'
import { thestack } from './thestack';
function Square(props)
{
    return(
        <div className="Square">
            {props.username} <br />
            {props.sitcoms_one} <br />
            {props.sitcoms_two} <br />
            {props.sitcoms_three} <br />
            {props.sitcoms_four} <br />
            {props.sitcoms_five}
        </div>    
    )
}

export default Square;

{/* <p>
                {thestack.map((data,key) => {
                    return(
                        <div key={data.id}>
                            {data.username + ',' + data.sitcoms}
                        </div>
                    );
                })}
            </p> */}