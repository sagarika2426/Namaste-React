import { useRouteError } from "react-router-dom";
    // useRouterError is a hook

const Error = () =>{
    const err = useRouteError()
    console.log(err)
    return(
        <div>
        <h1>Error! Page Not Found</h1>
        <h2>
            {/* To show the error, access the keys of err */}
            {err.status}:{err.statusText}; 
        </h2>
        </div>
    )
}

export default Error;