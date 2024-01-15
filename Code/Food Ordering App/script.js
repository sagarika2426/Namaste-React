import React from "react";
import ReactDOM from "react-dom/client";


/*
Header
    Icon
    Nav Lists
Body
    Seach
    Restaurant cards
Foother
    address
    contact
*/

// Header component
const Headed = () => {
    return (
        <div className="header">
            <div className="Logo_Container">
                <img  className="logo" src="https://t3.ftcdn.net/jpg/03/33/90/46/360_F_333904627_tnCepUpc3Uynb6stmEbverr8HeWS2VZl.jpg"/>
            </div>

            <div className="navItem">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>


        </div>
    )
}

// body component
const AppLayout = () =>{
    return (
        <div id="app">
             
        </div>
    )
}


var root2 = ReactDOM.createRoot(document.getElementById("container"));
root2.render(AppLayout);

