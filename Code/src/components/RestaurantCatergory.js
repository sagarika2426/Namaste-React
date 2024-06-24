import MenuItemLists from "./MenuItemLists";
import { useState } from "react";

const RestaurantCatergory = ({data, showItems, setShowIndex}) => {

    // Take showItems as props from parent
    // Give control to showItem to the parent instead of children



    // const [showItems, setShowItems] = useState(false)
    // // console.log(data);
    const handleClick = () => {
        // console.log("clicked")
        // setShowItems(!showItems)
        setShowIndex();
        // // if the showItem is true make it false and viceversa

    }
    return(
        <div>
            {/* Accordion Header */}
            <div className=" bg-slate-100 m-auto lg:w-3/4 mt-4 py-3 lg:px-5 rounded-md"  >
                <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                    <span className="font-bold lg:text-lg text-md">{data?.title} ({data.itemCards.length})</span>
                    <span>🔻</span>
                </div>
                {/* Body */}

                {showItems && <MenuItemLists items = {data.itemCards}/>}


               
            </div>

        </div>
    )
}

export default RestaurantCatergory;