import { useState, useEffect } from "react";
import { Menu_API } from "./constants";

const useRestaurantMenu = (ResId) => {
    // Fetch data
    const[resInfo, setResInfo] = useState(null);
      useEffect(() => {
        fetchMenu();
    },[]);
    const fetchMenu = async () => {
        try {
            const data = await fetch(Menu_API + ResId);
            const json = await data.json();
            // console.log(json);
            setResInfo(json.data);
        } catch (error) {
            // Handle the error here
            console.error('Error fetching menu:', error);
        }
    };
    return resInfo;
}

export default useRestaurantMenu;