import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";



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

// How to add inline style here - but not preffered
// color element
// const RestroColor = {
//     backgroundColor: "lightPink"
// }


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

