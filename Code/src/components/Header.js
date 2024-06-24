import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <header className="bg-red-900 text-white py-3 px-4 lg:px-8">
            <div className="flex justify-between items-center">
                {/* Logo and Home Link */}
                <div className="flex items-center">
                    <Link to="/">
                        <img className="w-16 h-16 lg:w-20 lg:h-20 rounded-full" src={LOGO_URL} alt="Logo" />
                    </Link>
                </div>

                {/* Navigation Links and User Info */}
                <nav className="flex items-center flex-row lg:items-center lg:ml-auto gap-4">
                    {/* Online Status */}
                    <span className="hidden lg:block lg:text-xl mr-4 text-lg">
                        {onlineStatus ? "🟢" : "🔴"} Online
                    </span>

                    {/* Navigation Links */}
                    <ul className="flex space-x-4 lg:space-x-8 mb-2 lg:mb-0 text-lg lg:text-xl">
                        {/* <li className="text-xl hover:font-bold">
                            <Link to="/" className="hover:text-gray-300">Home</Link>
                        </li> */}
                        <li className="hover:font-bold text-md">
                            <Link to="/about" className="hover:text-gray-300">About Us</Link>
                        </li>
                        {/* <li className="text-xl hover:font-bold">
                            <Link to="/grocery" className="hover:text-gray-300">Grocery</Link>
                        </li> */}
                        <li className="lg:text-xl hover:font-bold">
                            <Link to="/cart" className="hover:text-gray-300">
                                Cart: ({cartItems.length})
                            </Link>
                        </li>
                    </ul>

                    {/* User Profile and Login/Logout Button */}
                    <div className="flex space-x-4 lg:space-x-8 mb-2 lg:mb-0 text-lg lg:text-xl">
                        {/* <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                            className="w-8 h-8 lg:w-10 lg:h-10 rounded-full mb-2 lg:mb-0 lg:mr-4"
                            alt="User Profile Icon"
                        /> */}
                        <button
                            className="text-lg lg:text-xl text-center justify-center"
                            onClick={() => setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")}
                        >
                            {loginBtn}
                        </button>
                        {/* <span className="hidden lg:inline-block ml-2 text-xl">{loggedInUser}</span> */}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
