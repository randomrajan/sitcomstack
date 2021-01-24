import React from 'react';
import thestack from './thestack';

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            namez: thestack
        }
        this.state.namez.map(r => console.log(r.username))
    }

    // Function handlechange()
    // {
    //     return 0
    // }
    render(){
        const w = this.state.namez.map(r => r.username)
        return(
            
            <select placeholder="Sitcoms" onChange={this.handlechange}>
                <option value={w[0]}>{w[0]}</option>
                <option value={w[1]}>{w[1]}</option>
                <option value={w[2]}>{w[2]}</option>
                <option value={w[3]}>{w[3]}</option>
                <option value={w[4]}>{w[4]}</option>
            </select>
        );
        }
}

export default Dropdown;