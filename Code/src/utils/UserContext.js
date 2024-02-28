import { createContext } from "react";
// import { useActionData } from "react-router-dom";

 const UserContext = createContext({
    loggedInUser : "Default User"
});

export default UserContext;


