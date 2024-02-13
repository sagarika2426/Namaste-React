import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header component
const Header= () => {
    // Let's make a state variable for login and update it to logout if we click on it
    const [loginBtn, setLoginBtn] = useState("Login");

    // when we use state variable and call it, it rerender the whole header not just btn
    // How this const variable is getting changed?
    // when we call the state variable, the header will rerender and create a new varibale to store the login/logout text. 
    // it checks the whole code and update the difference 

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex border-4 justify-between">
            <div className="Logo_Container">
                <img  className=" w-20" src={LOGO_URL}/>
            </div>

            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-4 text-xl" >
                        Online Status : {onlineStatus ? "🟢": "🔴"}
                    </li>
                    <li className="px-4 text-xl">
                        <Link to="/"  style={{
                    textDecoration: "none", color: "black"
                }}>Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/about">
                            About Us</Link>
                    </li> */}
                     <li className="px-4 text-xl">
                        <Link to="/grocery"  style={{
                    textDecoration: "none", color: "black"
                }}>Grocery</Link>
                    </li>
                    <li className="px-4 text-xl" >About Us</li>
                    <li className="px-4 text-xl">Contact Us</li>
                    <li className="px-4 text-xl">Cart</li>
                    <button className="px-4 text-xl" 
                    onClick={() => {
                        loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                        // setLoginBtn("Logout")
                    }}> 
                    {loginBtn}
                        
                    </button>
              </ul>
            </div>
        </div>
    )
}

// Export Hearder from this file and import in the app.js
export default Header;
