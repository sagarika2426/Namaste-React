import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// Header component
const Header= () => {
    // Let's make a state variable for login and update it to logout if we click on it
    const [loginBtn, setLoginBtn] = useState("Login");

    // when we use state variable and call it, it rerender the whole header not just btn
    // How this const variable is getting changed?
    // when we call the state variable, the header will rerender and create a new varibale to store the login/logout text. 
    // it checks the whole code and update the difference 

    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext)
    // console.log(data)


    //Subscribing to the store using Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-red-900 py-4 text-white px-2">
            <div className="Logo_Container ">
                <img  className=" w-20 rounded-full ml-4" src={LOGO_URL}/>
            </div>

            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4 text-xl " >
                        Online Status : {onlineStatus ? "🟢": "🔴"}
                    </li>
                    <li className="px-4 text-xl hover:font-bold">
                        <Link to="/"  style={{
                    textDecoration: "none", color: "white"
                }}>Home</Link>
                    </li>
                    <li className="px-4 text-xl hover:font-bold">
                        <Link to="/about">
                            About Us</Link>
                    </li>
                     <li className="px-4 text-xl hover:font-bold">
                        <Link to="/grocery"  style={{
                    textDecoration: "none", color: "white"
                }}>Grocery</Link>
                    </li>
                    {/* <li className="px-4 text-xl" >About Us</li> */}
                    {/* <li className="px-4 text-xl hover:font-bold">Contact Us</li> */}
                    <li className="px-4 text-xl hover:font-bold">
                        <Link to="/cart">
                        Cart : ({cartItems.length} Items)</Link>
                    </li>
        
                    <button className="px-4 text-xl hover:font-bold" 
                    onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                        // setLoginBtn("Logout")
                    }}> 
                    {loginBtn}
                        
                    </button>
                    <div className="flex">
                    <li className="flex items-center px-4 text-xl font-bold">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" className="w-8 h-8 mr-2 rounded-2xl" alt="User Profile Icon"/>
                        <span>{loggedInUser}</span>
                    </li>
                    </div>
                   
                </ul>
            </div>
        </div>
    )
}

// Export Hearder from this file and import in the app.js
export default Header;
