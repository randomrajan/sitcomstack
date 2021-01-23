import React from 'react';
import thestack from './thestack';

class Dropdown extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         theusername: thestack.username
    //     }
    // }
    render(){
        return(
            <select placeholder="Sitcoms">
                <option value='Rajan'>Rajan</option>
                <option value='Flaky'>Flaky</option>
                <option value='Adorable'>Adorable</option>
                <option value='Arey'>Arey</option>
            </select>
        );
        }
}

export default Dropdown;