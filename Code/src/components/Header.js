import { LOGO_URL } from "../utils/constants";

// Header component
const Header= () => {
    return (
        <div className="header">
            <div className="Logo_Container">
                <img  className="logo" src={LOGO_URL}/>
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

// Export Hearder from this file and import in the app.js
export default Header;
