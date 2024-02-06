// Class based Component
import React from 'react';
import { useState } from 'react';

class UserClass extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2: 1,
            count3: 2,
        }
        console.log(this.props.name + "Child constructor")

    }

    componentDidMount(){
        console.log(this.props.name + "child ComponentDidMount")
    }

    render(){
        // Using destructuring
        const{count, count2, count3} = this.state;
        console.log( this.props.name + "child render");

        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h2>Count: {count}</h2>
                <h2>Count2: {count2}</h2>
                {/* Updating the state variable */}
                <button onClick={() => {
                    this.setState({
                      count : this.state.count+1,  
                      count2 : this.state.count2+2,
                    }
                    )
                }}> Increase Count
                </button>
            </div>
        );
   };
}
export default UserClass;

// Class based Component is a class which bas a render method
// Render methos returns some piece of JSX