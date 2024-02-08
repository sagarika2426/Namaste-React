import { useState, useEffect } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu = (ResId) => {
    // Fetch data
    const[resInfo, setResInfo] = useState(null);
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
    return resInfo;
}

export default useRestaurantMenu;