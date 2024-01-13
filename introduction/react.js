// you need to import the rect from the node modules to use it here

import React from "react";
import ReactDOM from "react-dom/client";


// React Element
var jsxHeading2 = (<h1 id="heading2">
    Namaste React using JSX
    </h1>);

// React Components - everything in react is components
// class based - old
// functional - new - normal js function

// functional component - a js function which return an react element

const HeadingComponent = () => {
    return <h1 className="heading"> Namaste React</h1>
};

// Another syntax
const HeadingComponent2 = () => (
<h1 className="heading">Namaste React functional component</h1>
);

// how to render another functional component inside functional component

const HeadingComponent3 = () => (
    <div id="mainhead">
        <HeadingComponent2/>
        <h1>Namaste React</h1>
    </div>
)


// const fn = () => {
//    return true;
// }

// const fn = () => true;
//  these 2 are same


var root1 = ReactDOM.createRoot(document.getElementById("container"));
// root.render(jsxHeading2);
root1.render(<HeadingComponent3/>);
// this is how you have to rennder functional component



// writing js inside functional component by using {}

const HeadingComponent4 = () => (
    <div id="mainhead">
        <HeadingComponent2/>
        <h1>Namaste React</h1>
        <h3>{100+400}</h3>
        {jsxHeading2} 
        {/* putting react element in component */}
        {/* you can write react element inside react elment using same syntax */}
    </div>
);

var root2 = ReactDOM.createRoot(document.getElementById("container"));
root2.render(<HeadingComponent4/>);


// 