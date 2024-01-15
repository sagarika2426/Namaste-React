import React from "react";
import ReactDOM from "react-dom/client";


/*
Header
    Icon
    Nav Lists
Body
    Seach
    Restaurant cards
        -Img
        - Name, star rating, cuisine, delivery time 
Foother
    address
    contact
*/

// Header component
const Header= () => {
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

// Restaurnt Component
const RestroCard = () =>{
    return(
        <div className="res-card"> 
        <h3>Name</h3>

        </div>
    )
}

// How to add inline style here - but not preffered
// color element
const RestroColor = {
    backgroundColor: "lightPink"
}


// Body Component
const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search
            </div>

            <div className="restro-card" style={RestroColor}> 
               <RestroCard/>
            {/* Restaurnt card - we will be reusing it a lot so we will make a different component */}
            </div>

        </div>
    )
}

// Main Layout
const AppLayout = () =>{
    return (
        <div id="app">
            {/* Add header component */}
            <Header/>
            <Body/>
             
        </div>
    )
}


var root2 = ReactDOM.createRoot(document.getElementById("container"));
root2.render(<AppLayout/>);

