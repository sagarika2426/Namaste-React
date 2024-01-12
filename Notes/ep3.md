🔹 About JSX
--->It is a syntax extension for JavaScript used in React to write concise and readable code. It is HTML-like/XML-like syntax. JSX not HTML for react.

🔹 How to create element using JSX
--->JSX provides a more concise and readable syntax for defining React elements. It is easier to understand, making the code visually cleaner compared to the more verbose createElement() method.

🔹 Role of Babel and parcel in JSX
--->Babel turns JSX code into regular JavaScript so browsers can understand it. Parcel helps manage and bundle all the code, making it easy to work with JSX and Babel in the projects.

// --->jsx - create element using jsx
var jsxHeading = <h1 id="heading2">Namaste React using JSX</h1>
// this is not pure js as js engine wont be able understand this
// parcel is doing the job behind the scene
// before this code goes to js engine it get transpiled so that js engine can read the code
// transpile - this code will transform into the code which js engine can understand
// parcel alone isnt doing it - it has babel who does this work

imp - if you want to give attributes to the jsx then you need to use camelCase 

