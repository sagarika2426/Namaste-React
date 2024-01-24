Monolith:
A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface.

Microservices:
-separtions of concerns
-It follows single responsible principle
-Microservices architecture is a collection of smaller, independently deployable services.
-you can have diff tech stack for diff any services depending on the usecase
- they run on their own specific port
- how a react app will work together with other services/ call other services

-how we can fetch dynamically data from api?
1. As soon as page load - Make API call - Render the data
2. As soon s page load - Render the UI - Make API call - Rerender the data - We will be using this approach in react. Why ?
 - Better UX - user sees something in the beginning instead of a blank page 
 - 2 times render isn't a problem as it renders really fast

useEffect Hook :
Hook is nothing but  normal js fn. 
As soon as the render is finished, the useEffect is called

Shimmer UI 
Shows the fake card when the page loads. It is a vetter ux instead of showing just black page before the data get populated

conditional rednder:
render something with a condition 

Ternary Operator:
condition ? exprIfTrue : exprIfFalse





