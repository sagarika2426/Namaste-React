import { CDN_URL } from "../utils/constants";

// Restaurnt card Component
const RestroCard = (props) =>{
    const{resData} = props;
    return(
        <div className="res-card"> 
        <img className="res-img"
        src={CDN_URL + resData.info.cloudinaryImageId}/>
        {/* We added the link adress which is common for every img and get the img id from resData */}

        <h3>{resData.info.name}</h3>
        <p>{resData.info.cuisines.join(", ")}</p>
        {/* with the help of join you can add space and comma in the cuisines */}

        <p>Rating: {resData.info.avgRating}</p>
        <p>Cost for two: {resData.info.costForTwo}</p>

        </div>
    )
}

export default RestroCard;