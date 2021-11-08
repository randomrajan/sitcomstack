import React from 'react'
import App from './App'
import Header from './Header'
import Footer from './Footer'
import Dropdown from './Dropdown';

function Main(){
    return(
        <div>
            <Header />
            {/* <Dropdown /> */}
            <App />
            <Footer />
        </div>
    );
}

export default Main