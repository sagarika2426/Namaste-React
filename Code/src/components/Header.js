import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

// Header component
const Header= () => {
    // Let's make a state variable for login and update it to logout if we click on it
    const [loginBtn, setLoginBtn] = useState("Login");

    // when we use state variable and call it, it rerender the whole header not just btn
    // How this const variable is getting changed?
    // when we call the state variable, the header will rerender and create a new varibale to store the login/logout text. 
    // it checks the whole code and update the difference 

    return (
        <div className="header">
            <div className="Logo_Container">
                <img  className="logo" src={LOGO_URL}/>
            </div>

            <div className="navItem">
                <ul>
                    <li>
                        <Link to="/"  style={{
                    textDecoration: "none", color: "white"
                }}>Home</Link>
                    </li>
                    {/* <li>
                        <Link to="/about">
                            About Us</Link>
                    </li> */}
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
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
