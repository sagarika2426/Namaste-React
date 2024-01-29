import { useEffect, useState} from "react";
// import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null)

// fetch the dynamic data from the API
    useEffect(() => {
        fetchMenu();

    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0221791&lng=73.1098806&restaurantId=66810&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)

    };

    useEffect(()=>{
        console.log({resInfo})
    },[resInfo])

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
                {itemCards?.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.defaultPrice/100}</li>)}
            </ul>

        </div>
    )

};

export default RestaurantMenu;