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
        <div className="text-center bg-slate-200 mt-5 p-10">
            {/* <h1>About Us Page</h1> */}
           
            <h1 className="text-xl mb-6 font-bold">Welcome</h1>
            <p>At [Your Company Name], we're passionate about connecting people with delicious food from their favorite local restaurants. Founded with the vision of making food delivery convenient, reliable, and delightful, we've become a trusted partner for both customers and restaurants alike.</p>
             {/* <UserFn name= {"Sagarika - fn"}/> */}
             <UserClass name= {"Sagarika"}/>
            {/* <UserClass name= {"Second"}/>
            <UserClass name= {"Third"}/> */}
            <h2 className="mt-10 font-bold text-xl" >Contact Us</h2>
            <p>abc@gmail.com</p>
            <p>0000000000</p>



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