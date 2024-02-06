import UserClass from "./UserClass";
import UserFn from "./UserFn";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent ComponentDidMount")
    }

    render(){
        console.log("Parent Render");

         return(
        <div>
            <h1>About Us Page</h1>
            {/* <UserFn name= {"Sagarika - fn"}/> */}
            <UserClass name= {"First"}/>
            <UserClass name= {"Second"}/>
            <UserClass name= {"Third"}/>



        </div>      
           )

    }

}

// const About = () => {
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <UserFn name= {"Sagarika - fn"}/>
//             <UserClass name= {"Sagarika - classbased"}/>

//         </div>
        
        
//     )
// }

export default About; 