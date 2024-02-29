// import { useEffect, useState} from "react";
import ShimmerMenu from "./ShimmerMenu";

import {useParams} from "react-router-dom";
import  {CDN_URL, Menu_API} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useEffect, useState } from "react";
import RestaurantCatergory from "./RestaurantCatergory";

const RestaurantMenu = () => {
    // const[resInfo, setResInfo] = useState(null)

    const { ResId } = useParams();

    const [showIndex, setShowIndex] = useState(0);
    // if showindex is 0 set true, if it's 1 set true. Whatever the number of ShowIndex is set that true


  
    // console.log(resId)

    // const params = useParams();
    // console.log(params)
    // params in an object with resID
   

// fetch the dynamic data from the API
    // useEffect(() => {
    //     fetchMenu();
    // },[]);
    // const fetchMenu = async () => {
    //     const data = await fetch(
    //         // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0221791&lng=73.1098806&restaurantId=37969&catalog_qa=undefined&submitAction=ENTER"
    //         // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0221791&lng=73.1098806&restaurantId=" + ResId+ "&catalog_qa=undefined&submitAction=ENTER"
    //         (Menu_API + ResId) 
    //     );
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data)

    // };
    // Instead of fetching the data here, we can create a custom hook and fetch the data there
    
    const resInfo = useRestaurantMenu (ResId)


    // useEffect(()=>{
    //     console.log({resInfo})
    // },[resInfo])
    if(resInfo === null) return <ShimmerMenu/>

   
    const{name, cuisines, costForTwoMessage} = (resInfo?.cards?.[0]?.card?.card?.info) || {};
  

    const{itemCards} = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card) || {};
    // console.log(resInfo);

    const categories = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    // console.log(categories)
    return (
      <div className="menu w-7/10 m-auto mt-8 px-3">
        {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1> */}
        {/* <h1>Hello</h1> */}
        <h1 className=" text-center text-2xl font-bold">{name}</h1>
        <p className="text-center my-6 text-lg font-bold ">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
        {/* <h2>Menu</h2> */}
        {/* itrte the menu */}
        {categories?.map((category, index) => (

          // Controlled Component
          <RestaurantCatergory 
          key = {categories?.card?.card?.title}
          data = {category?.card?.card}
          showItems = {index === showIndex ? true : false}
          setShowIndex ={() => setShowIndex(index)}/>
        ))}
        
      </div>
    );

};

export default RestaurantMenu;
