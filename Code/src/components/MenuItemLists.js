import { useState } from "react";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuItemLists = ({ items, showRemoveButton }) => {
    const dispatch = useDispatch();
    const [expandedItem, setExpandedItem] = useState(null);

    const handleAction = (item) => {
        if (showRemoveButton) {
            dispatch(removeItem(item));
            toast.success('Item removed from cart');
        } else {
            dispatch(addItem(item));
            toast.success('Item added to cart');
        }
    };

    const toggleExpand = (itemId) => {
        if (expandedItem === itemId) {
            setExpandedItem(null);
        } else {
            setExpandedItem(itemId);
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            <ul className="list-none">
                {items.map((item) => (
                    <li key={item?.card?.info?.id}>
                        <div className="item-details flex items-center border border-solid mt-4 rounded-lg shadow-lg bg-white hover:bg-slate-200">
                            {/* Image */}
                            <div className="w-40 overflow-hidden w-max-40 rounded-lg p-1">
                                <img
                                    className="menuImg w-36 h-44 object-center object-cover"
                                    src={CDN_URL + item?.card?.info?.imageId}
                                    alt={item?.card?.info?.name}
                                />
                            </div>
                            
                            {/* Item info */}
                            <div className="item-info flex flex-col justify-between flex-grow lg:px-4 px-2 w-full">
                                {/* Item name */}
                                <h1 className="font-bold lg:text-lg mt-4 mb-2 lg:mb-4">{item?.card?.info?.name}</h1>
                                
                                {/* Price and Description */}
                                <div className="flex justify-between items-center mb-2 lg:mb-4">
                                    <div>
                                        {/* Item price */}
                                        <h2 className="item-price font-bold">
                                            {"₹"} {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
                                        </h2>
                                        
                                        {/* Ratings */}
                                        <div className="flex items-center">
                                            {/* Star icon */}
                                            <img
                                                className="star-icon"
                                                src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                                                height={"18px"}
                                                width={"18px"}
                                                alt="Star Icon"
                                                style={{ verticalAlign: "middle" }}
                                            />
                                            {/* Rating value */}
                                            <span className="ml-1">
                                                {item?.card?.info?.ratings?.aggregatedRating?.rating}
                                            </span>
                                        </div>
                                        
                                        {/* Truncated description */}
                                        <p className="text-sm text-gray-500 mt-4">
                                            {item?.card?.info?.description
                                                .split(' ')
                                                .slice(0, 5)
                                                .join(' ')}
                                            {item?.card?.info?.description.split(' ').length > 5 && (
                                                <span>
                                                    {" "}
                                                    <button
                                                        className="text-blue-500 hover:underline focus:outline-none"
                                                        onClick={() => toggleExpand(item?.card?.info?.id)}
                                                    >
                                                        {expandedItem === item?.card?.info?.id ? 'Show Less' : 'Show More'}
                                                    </button>
                                                </span>
                                            )}
                                        </p>
                                        {/* Full description */}
                                        {expandedItem === item?.card?.info?.id && (
                                            <p className="text-sm text-gray-500">
                                                {item?.card?.info?.description}
                                            </p>
                                        )}
                                    </div>
                                    
                                    {/* Add/Remove Button */}
                                    <button
                                        className={`px-4 py-2 rounded-lg text-white ml-2 ${showRemoveButton ? 'bg-red-600 hover:bg-red-700' : 'bg-lime-600 hover:bg-lime-700'}`}
                                        onClick={() => handleAction(item)}
                                    >
                                        {showRemoveButton ? 'Remove' : 'Add'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MenuItemLists;
