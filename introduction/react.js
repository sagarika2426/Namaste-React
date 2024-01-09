// creating element in react(core React)- react.createElement("tag", {attributes}, "innerHTML")
var ReactHeading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from React")

console.log(ReactHeading);
// it will return obj

// creating root to append the element (React Dom)

var root1 = ReactDOM.createRoot(document.getElementById("container"));
root1.render(ReactHeading);



//   creating nested html structure
/*
*<div id="parent">
    <div id = "child">
        <h1>Heading1</h1>
    </div>
</div>
*/
const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        React.createElement("h1", {}, "Heading1")));

var root2 = ReactDOM.createRoot(document.getElementById("container"));
root2.render(parent);

// when you createlement it doesn't create and HTML element. 
// It creates a object and when you render into the root it converts the obj into html and display the outcome

//  if you want to create sibling elements :
/*
*<div id="parent">
    <div id = "child">
        <h1>Heading1</h1>
        <h1>Heading1</h1>
    </div>
</div>
*/
// just create an array and add the sibling elements
const parent2 = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "child" }, 
        [React.createElement("h1", {}, "Heading1"), React.createElement("h1", {}, "Heading1")]));

var root2 = ReactDOM.createRoot(document.getElementById("container"));
root2.render(parent2);

// jsx will make the code easier

// React is library not framework!


