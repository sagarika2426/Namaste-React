import RestroCard from "./RestaurantCard";

// import the data from Data.js which is present in utils
import resList from "../utils/Data";

// import useState from react;
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

// Body Component
const Body = () =>{

    // create state variable
    const [listOfRes, setListOfRes] = useState([]);

    // create a state variable only for the filtered res
    const[filteredRes, setFilteredRes] = useState([]);

    // decalring normal variable and modifying 
    // let list = [];
    // list.push("abc") 
    const [searchText, setSearchText] = useState("");

    useEffect(()=> {
        fetchData()
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const jsonFile = await data.json();
        console.log(jsonFile);
        // Optional chaining 
        setListOfRes(jsonFile?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(jsonFile?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);



    };
    const { loggedInUser, setUserInfo} = useContext(UserContext)
    // consitional rendering - when you render with a condition
    // when the page is emptry fter loading, insted of just keeping it blanck we can add fake cards
    // if (listOfRes.length === 0){
    //     return <Shimmer/>
    // }

    // You can use ternary operator to write the above code as below line
    return listOfRes.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex  justify-between h-20 items-center p-3"> 
                <div className="search">
                    <input type="text" className= " border border-solid border-black h-8 w-[300px] p-2 rounded-md" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="bg-red-300 m-3 px-4 py-1 border border-solid rounded-lg hover:bg-red-400"
                    onClick={() =>{
                        const FilteredData = listOfRes.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        // make it not case sensitive
                        );
                        // setListOfRes(FilteredData);
                        setFilteredRes(FilteredData);
                    }}>Search</button>
                </div>
                <button className = " mr-[450px] filter-btn border border-solid px-8 h-[40px] bg-red-700  rounded-lg hover:bg-red-800 text-white " onClick={()=>{
                    // (console.log("clicked"))
            
                    const filteredList = listOfRes.filter(
                        (res) => res.info.avgRating > 4
                    );
                    // console.log(filteredList)
                    
                    // update the variable with filteredList
                    setFilteredRes(filteredList);
                    }}
                    >
                        Show Top Rated Restaurants ⭐

                    </button> 

                    <div>
                        <label className="font-bold">Ordering For: </label>
                    <input 
                    value={loggedInUser}
                    type="text" className= " rounded-md border border-solid border-black h-8 w-[200px] p-2" onChange={(e) => setUserInfo(e.target.value)}></input>
        
                </div>
                
            </div>
            {/*  this is the callbck fn which will be clled when we clcik the button*/}

            <div className="grid grid-cols-5"> 
               {/* <RestroCard resName="Pizza"/> */}
               {/* <RestroCard resData={resList[1]}/>
               <RestroCard resData={resList[2]}/> */}

               {/* instead of repeating it like this we can use loop - map */}
               {filteredRes.map((restaurant)=>(
                <Link
                style={{
                    textDecoration: "none",
                }}
                key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}> <RestroCard 
                resData={restaurant}/>
                </Link>
                
               ))}
               {/* inside restro-card, I have looped over my resList and for each restro I am returning some piece of jsx */}
               {/* whenever you use map, always give key over here. key will have an unique identification of each product */}
               {/* react says that never take index as the key, use id */}
            {/* Restaurnt card - we will be reusing it a lot so we will make a different component */}
            </div>

        </div>
    )
}

export default Body;