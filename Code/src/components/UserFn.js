//  Functional Component

import { useState } from "react";

 const UserFn = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    const [count3] = useState(2);

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Count: {count}</h2>
        </div>
    );
 }
 export default UserFn;

// Functional Component is a function which 
// returns  piece of JSX