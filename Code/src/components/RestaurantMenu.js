import { useEffect, useState} from "react";
import ShimmerMenu from "./ShimmerMenu";

import {useParams} from "react-router-dom";
import  {CDN_URL, Menu_API} from "../utils/constants";

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
    if(resInfo === null) return <ShimmerMenu/>

   
    const{name, cuisines, clouseinaryImageId,costForTwoMessage} = (resInfo?.cards?.[0]?.card?.card?.info) || {};

    

    const{itemCards} = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card) || {};
    return (
        <div className="menu">
            {/* <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1> */}
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {/* <h2>Menu</h2> */}
            {/* itrte the menu */}
            <ul>
            {itemCards?.map(item => (
                <li key={item?.card?.info?.id}>
                <div className="item-details">
                    
                <div>
                                <img className="menuImg" src={CDN_URL + item?.card?.info?.imageId} height={"200px"}/>
                                </div>
                            <div className="item-name">{item?.card?.info?.name}
                            <p>{item.card.info.description}</p>
                            {/* <div><img src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"/> </div> */}
                            {/* <p>{item?.card?.info?.ratings?.aggregatedRating?.rating}</p> */}

                            <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                                className="star-icon"
                                src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                                height={"18px"}
                                width={"18px"}
                                style={{ verticalAlign: "middle" }} // Use verticalAlign to adjust the alignment
                            />
                            {item?.card?.info?.ratings?.aggregatedRating?.rating}
                            </div>
                            </div>


                            <div className="item-price">{"Rs"} {item?.card?.info?.price/100}</div>
                            <button className="add-button">Add</button>

                        </div>
                </li>
      ))}
    </ul>


        </div>
    )

};

export default RestaurantMenu;
