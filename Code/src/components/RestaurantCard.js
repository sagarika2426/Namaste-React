import { CDN_URL } from "../utils/constants";

// Restaurnt card Component
const RestroCard = (props) =>{
    const{resData} = props;
    return (
      <div className="res-card" style={{}}>
        <img
          className="res-img"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
        {/* We added the link adress which is common for every img and get the img id from resData */}

        <h3>{resData.info.name}</h3>
        <p>{resData.info.cuisines.join(", ")}</p>
        {/* with the help of join you can add space and comma in the cuisines */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="star-icon"
            src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
            height={"24px"}
            width={"24px"}
            style={{ verticalAlign: "middle" }} // Use verticalAlign to adjust the alignment
          />
          {resData.info.avgRating}
        </div>
        <p>Cost for two: {resData.info.costForTwo}</p>
      </div>
    );
}

export default RestroCard;