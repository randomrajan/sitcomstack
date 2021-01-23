import React from 'react'
import App from './App'
import Header from './Header'
import Dropdown from './Dropdown';

function Main(){
    return(
        <div>
            <Header />
            <Dropdown />
            <App />
        </div>
    );
}

export default Main