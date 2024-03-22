import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";



const MenuItemLists = ({items, showRemoveButton}) => {
    // console.log(items)

    // To dispatch an action we need a Dispatch hook
    const dispatch = useDispatch();

      //when the fn is called dispatch an action
      //here the action is - addItem


    const handleAction = (item) => {
        if (showRemoveButton) {
            // Remove button action
            dispatch(removeItem(item));
        } else {
            // Add button action
            dispatch(addItem(item));
        }


    }
    return (
        <ul className="list-none">
            {items.map((item) => (
                  
                  <li key={item?.card?.info?.id}>
                  <div className="item-details flex m-auto items-center border border-solid mt-4 rounded-lg shadow-lg pr-4 bg-white hover:bg-slate-200">
                    <div className="w-[256px] overflow-hidden max-w-[256px] rounded-lg" >
                      <img
                        className="menuImg w-[250px] h-[163px] object-center object-cover"
                        src={CDN_URL + item?.card?.info?.imageId}
                        height={"200px"}
                      />
                    </div>
                    <div className="item-names px-4 w-full">
                      <h1 className="font-bold text-lg mt-4">{item?.card?.info?.name}</h1>
                      <h2 className="item-price font-bold w-16 mb-4">
                        {"₹"} {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice/100}
                      </h2>
                      <p className="text-[13px] text-gray-500">{item?.card?.info?.description}</p>
                      {/* <div><img src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"/> </div> */}
                      {/* <p>{item?.card?.info?.ratings?.aggregatedRating?.rating}</p> */}
    
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className=" my-4"
                      >
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
    
                    {/* <div className="item-price ml-4 font-bold w-7">{"₹"} {item?.card?.info?.price/100}</div> */}
                    
                    {/* <button className="add-button bg-lime-700 text-white px-4 py-2 rounded-lg mx-2  hover:bg-lime-900"
                    // onClick={handleAddItems}
                    // onClick={handleAddItems(Item)}
                    onClick={() => handleAddItems(item)}>
                      Add
                    </button> */}

                    <button className={`${showRemoveButton ? 'remove-button' : 'add-button'} bg-lime-700 text-white px-4 py-2 rounded-lg mx-2 hover:bg-lime-900`}
                            onClick={() => handleAction(item)}>
                            {showRemoveButton ? 'Remove' : 'Add'}
                        </button>
                  </div>
                </li>

            ))}
        </ul>

    );
};

export default MenuItemLists;