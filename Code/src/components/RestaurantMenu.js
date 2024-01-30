import { useEffect, useState} from "react";
import Shimmer from "./Shimmer";

import {useParams} from "react-router-dom";
import  {Menu_API} from "../utils/constants";

const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null)

    const { ResId } = useParams();
    // console.log(resId)

    // const params = useParams();
    // console.log(params)
    // params in an object with resID
   

// fetch the dynamic data from the API
    useEffect(() => {
        fetchMenu();

    },[]);

   

    const fetchMenu = async () => {
        const data = await fetch(
            // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0221791&lng=73.1098806&restaurantId=37969&catalog_qa=undefined&submitAction=ENTER"
            // "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0221791&lng=73.1098806&restaurantId=" + ResId+ "&catalog_qa=undefined&submitAction=ENTER"
            (Menu_API + ResId) 
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)

    };

    // useEffect(()=>{
    //     console.log({resInfo})
    // },[resInfo])
    // if(resInfo === null) return <Shimmer/>

   
    const{name, cuisines, clouseinaryImageId,costForTwoMessage} = (resInfo?.cards?.[0]?.card?.card?.info) || {};

    

    const{itemCards} = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card) || {};
    return (
        <div className="menu">
            {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1> */}
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            {/* itrte the menu */}
            <ul>
                {itemCards?.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs"} {item?.card?.info?.price/100}</li>)}
            </ul>

        </div>
    )

};

export default RestaurantMenu;
