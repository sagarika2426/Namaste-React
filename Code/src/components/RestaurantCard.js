import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from '../utils/UserContext';


// Restaurnt card Component
const RestroCard = (props) =>{
    const{resData} = props;
    const {loggedInUser} = useContext(UserContext);

    return (
      <div className="res-card h-[400px] m-4 border bg-gray-100 rounded-lg hover:bg-gray-200 shadow-lg" style={{}}>
      <img
      className="res-img w-full h-[200px] object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
      src={CDN_URL + resData.info.cloudinaryImageId}
      alt="Restaurant Image"
    />
        {/* We added the link adress which is common for every img and get the img id from resData */}

        <h3 className="font-bold py-3 px-2 text-lg ">{resData.info.name}</h3>
        <p className=" px-2">{resData.info.cuisines.join(", ")}</p>
        {/* with the help of join you can add space and comma in the cuisines */}

        <div style={{ display: "flex", alignItems: "center" }} className=" py-3 px-2 font-bold">
          <img
            className="star-icon"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
            height={"24px"}
            width={"24px"}
            style={{ verticalAlign: "middle" }} // Use verticalAlign to adjust the alignment
          />
          {resData.info.avgRating} -  {resData.info.costForTwo}
          
        </div>
        <h3 className="m-3 font-semibold  text-red-900 " > Ordering For: {loggedInUser}</h3>
      </div>
    );
}

export default RestroCard;