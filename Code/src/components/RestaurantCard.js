import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestroCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="h-auto m-2 border bg-gray-100 rounded-lg overflow-hidden hover:bg-gray-200 shadow-lg">
      {/* Restaurant Image */}
      <img
        className="res-img w-full h-[200px] object-cover object-center rounded-lg transition-transform duration-300 hover:scale-105"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="Restaurant Image"
      />

      {/* Restaurant Name */}
      <h3 className="font-bold py-3 px-2 text-lg">{resData.info.name}</h3>

      {/* Cuisines */}
      <p className="px-2 text-gray-600">{resData.info.cuisines.join(", ")}</p>

      {/* Ratings and Cost for Two */}
      <div className="py-3 px-2 flex flex-col gap-2">
        {/* Ratings */}
        <div className="flex items-center">
          <img
            className="star-icon"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
            height={"24px"}
            width={"24px"}
            style={{ verticalAlign: "middle" }}
            alt="Star Icon"
          />
          <span className="ml-1 text-gray-700">{resData.info.avgRating}</span>
        </div>

        {/* Cost for Two */}
        <p className="text-gray-700">{resData.info.costForTwo}</p>
      </div>

      {/* Ordering Info */}
      {/* <h3 className="m-3 font-semibold text-red-900">Ordering For: {loggedInUser}</h3> */}
    </div>
  );
};

export default RestroCard;
