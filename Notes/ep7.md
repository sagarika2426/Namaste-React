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

