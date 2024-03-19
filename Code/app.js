import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import RestaurantMenu from "./src/components/RestaurantMenu";
import About from "./src/components/About";
import Error from "./src/components/Error";
import UserContext from "./src/utils/UserContext";
// import Grocery from "./src/components/Grocery";
// instead of importing like this, we will use lazy loading

import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const Grocery = lazy(() => import ("./src/components/Grocery"))
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

    const[useInfo, setUserInfo] = useState();

    // Autherntication
    useEffect(() => {
        const data = {
            name:"Sagarika",

        };
        setUserInfo(data.name);
    }, []);
    

    return (
        <Provider store={appStore}>
        {/* // if you wrap only header in the context then only header will have Sgarika, other places it will give default value
        // if you dont provide anything then it will take the default value */}
        <UserContext.Provider value={{loggedInUser:useInfo, setUserInfo}}> 
            <div id="app">
                {/* Add header component */}
                <Header/>
                <Outlet/>
             
            </div>
        </UserContext.Provider>
    //  </Provider>
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
                path:"/grocery",
                element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense>
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

