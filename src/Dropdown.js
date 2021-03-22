import React from 'react';
import thestack from './thestack';

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            namez: thestack
        }
        //this.state.namez.map(r => console.log(r.username))
        this.handlechange = this.handlechange.bind(this)
    }

    handlechange =()=> {
        this.setState(prevState => {
            const list = prevState.namez[0]
            return {
                namez: prevState.list
            }
            console.log(list)
        })
    };

    render(){
        // console.log(list);
        console.log(this.handlechange.list)
        const w = thestack.map(r => r.username)
        return(
            <select placeholder="Sitcoms" >
                <option value='its_surajmaity'>{w[0]}</option>
                <option value='priyansh__8'>priyansh__8</option>
                <option value='shekhar_mandal_'>shekhar_mandal_</option>
                <option value='h28h8_00'>h28h8_00</option>
                <option value='iamneegam'>iamneegam</option>
                <option value='shreypatel_23'>shreypatel_23</option>
            </select>
        );
        }
}

export default Dropdown;

// this.setState(prevState => {
        //     // return {
        //     //     namez: prevState.thestack.username
        //     // }
            // this.setState.map((prevState,r) => {return {namez: prevState.r.username}})
        // })
        // this.state.people.map(r => console.log(r.username))