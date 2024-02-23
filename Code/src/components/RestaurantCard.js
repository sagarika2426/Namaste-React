import { CDN_URL } from "../utils/constants";

// Restaurnt card Component
const RestroCard = (props) =>{
    const{resData} = props;
    return (
      <div className="res-card h-96 m-4 border bg-gray-100 rounded-lg hover:bg-gray-200 shadow-lg" style={{}}>
        <img
          className="res-img w-full h-[200px] object-cover object-center rounded-lg"
          src={CDN_URL + resData.info.cloudinaryImageId}
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
      </div>
    );
}

export default RestroCard;