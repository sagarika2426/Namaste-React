===> useEffect

useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)


1. if there is no dependency then => useEffect will call after every render
 useEffect(()=> {
        fetchData()
    });

2. if there is an emptry dependency then => useEffect will call only once in the beginning 
 useEffect(()=> {
        fetchData()
    }, []);

3. if there is any variable in the dependency then =? useEffect will call everytime that variable updated
 useEffect(()=> {
        fetchData()
    }, [variable name]);


===> useState
1. Never make useEffect variable outside of component
2. It is used to make local state variable inside the component
3. Always write the code in the beginning of the component
4. Never create an useState inside conditional statement like if else - create inconsistency 
5. Never create an useState inside a fn



===? React Router Dom:
1. install router dom - npm i react-router-dom
2. Create routing config in app.js 
    -import createBrowserRouter from react-router-dom
    - const appRouter = creatBrowserRouter([
        {
            path:"/",
            element : <AppLayout/>
        }
    ])

    This means if the path is / the load my AppLayout component
3. About us page
4. import RouterProvider component
5. Render in root
    root.render(<RouterProvider router = {approuter}>)
6. Shortcut to create a component  - rafce - not do this if you are in a learning phase

7. if you put any random path in our url, it will give a 404 error with a clean ui instead of thorughing an error. This is handled by react-router-dom. You can customise it by creating and error component and put it in the ErrorElememt in BrowserRouter.
const appRouter = creatBrowserRouter([
        {
            path:"/",
            element : <AppLayout/>
            errorElement: <Error/>
        }
    ])

8. React-router-dom give access to a hook - useRouteError
    How this is a hook? whenever you see "use", then it's a hook.
    import useRouteError
    access it inside the component - const err = useRouteError();
    <!--  It will catch all the errors and show in form of obj -->

9. To show the error in the page you can access te error status and error statusText


