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
const Body = () => {
  // create state variable
  const [listOfRes, setListOfRes] = useState([]);

  // create a state variable only for the filtered res
  const [filteredRes, setFilteredRes] = useState([]);

  // decalring normal variable and modifying
  // let list = [];
  // list.push("abc")
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://food-ordering-app-be.onrender.com/restaurants/list?lat=19.0759837&long=72.8776559"
    );

    const jsonFile = await data.json();
    console.log(jsonFile);
    // Optional chaining
    setListOfRes(
      jsonFile?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      jsonFile?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const { loggedInUser, setUserInfo } = useContext(UserContext);
  // consitional rendering - when you render with a condition
  // when the page is emptry fter loading, insted of just keeping it blanck we can add fake cards
  // if (listOfRes.length === 0){
  //     return <Shimmer/>
  // }

  // You can use ternary operator to write the above code as below line
  return listOfRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mt-4">
     <div className="filter flex justify-between flex-col lg:flex-row mb-4 lg:mb-8 px-3">
    {/* Search Input and Button */}
    <div className="search flex justify-between items-center mb-4">
        <input
            type="text"
            className="border border-solid border-black h-10 lg:w-[300px] px-3 rounded-md mr-2 mb-2 lg:mb-0 w-full"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
        <button
            className="bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800 text-white"
            onClick={() => {
                const filteredData = listOfRes.filter(
                    (res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRes(filteredData);
            }}
        >
            Search
        </button>
    </div>

    {/* Show Top Rated Restaurants Button */}
    <div className="justify-start flex items-center mb-2 lg:mb-0 w-full lg:w-1/4">
        <button
            className=" bg-red-800 px-6 lg:px-8 py-2 rounded-lg hover:bg-red-900 w-full shadow-lg text-white"
            onClick={() => {
                const filteredList = listOfRes.filter(
                    (res) => res.info.avgRating > 4
                );
                setFilteredRes(filteredList);
            }}
        >
            Show Top Rated Restaurants ⭐
        </button>
    </div>

    {/* Ordering For Input */}
    {/* <div className="flex justify-end items-center w-full lg:w-auto">
        <label className="font-bold lg:inline-block">Ordering For:</label>
        <input
            value={loggedInUser}
            type="text"
            className="rounded-md border border-solid border-black h-10 lg:w-[200px] px-3"
            placeholder="Enter your name"
            onChange={(e) => setUserInfo(e.target.value)}
        />
    </div> */}
</div>

      {/*  this is the callbck fn which will be clled when we clcik the button*/}

      <div className="grid lg:grid-cols-5 grid-cols-2">
        {/* <RestroCard resName="Pizza"/> */}
        {/* <RestroCard resData={resList[1]}/>
               <RestroCard resData={resList[2]}/> */}

        {/* instead of repeating it like this we can use loop - map */}
        {filteredRes.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
            }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestroCard resData={restaurant} />
          </Link>
        ))}
        {/* inside restro-card, I have looped over my resList and for each restro I am returning some piece of jsx */}
        {/* whenever you use map, always give key over here. key will have an unique identification of each product */}
        {/* react says that never take index as the key, use id */}
        {/* Restaurnt card - we will be reusing it a lot so we will make a different component */}
      </div>
    </div>
  );
};

export default Body;
