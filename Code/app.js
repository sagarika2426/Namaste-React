import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";
import About from "./src/components/About";
import Error from "./src/components/Error";

import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";





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
    // create routing config
    

    return (
        <div id="app">
            {/* Add header component */}
            <Header/>
            <Outlet/>
             
        </div>
    )
}

const appRouter = createBrowserRouter([

    // create a main branch and put children route, so that whenever we laod any page, the header will remain intact
    {
        path:"/",
        element:<AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                // this is dynmic route. : means the resID cn be dynamic
                path:"/restaurants/:ResId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    }
    // Here we created childeren routes inside appLayout
    
]);


var root2 = ReactDOM.createRoot(document.getElementById("container"));

// Render the RouterProvider in root
root2.render(<RouterProvider router={appRouter}/>);

