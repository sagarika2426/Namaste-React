import RestroCard from "./RestaurantCard";

// import the data from Data.js which is present in utils
import resList from "../utils/Data";

// import useState from react;
import { useState } from "react";


// Body Component
const Body = () =>{

    // create state variable
    const [listOfRes, setListOfRes] = useState(resList);

    // decalring normal variable and modifying 
    // let list = [];
    // list.push("abc") 


    return(
        <div className="body">
            <div className="filter">
                <button className = "filter-btn" onClick={()=>{
                    // (console.log("clicked"))
            
                    const filteredList = listOfRes.filter(
                        (res) => res.info.avgRating > 4
                    );
                    // console.log(filteredList)
                    
                    // update the variable with filteredList
                    setListOfRes(filteredList);
                    }}
                    >
                        Filter

                    </button>
            </div>
            {/*  this is the callbck fn which will be clled when we clcik the button*/}

            <div className="restro-card"> 
               {/* <RestroCard resName="Pizza"/> */}
               {/* <RestroCard resData={resList[1]}/>
               <RestroCard resData={resList[2]}/> */}

               {/* instead of repeating it like this we can use loop - map */}
               {listOfRes.map((restaurant)=>(
                <RestroCard key={restaurant.info.id}
                 resData={restaurant}/>
               ))}
               {/* inside restro-card, I have looped over my resList and for each restro I am returning some piece of jsx */}
               {/* whenever you use map, always give key over here. key will have an unique identification of each product */}
               {/* react says that never take index as the key, use id */}





            {/* Restaurnt card - we will be reusing it a lot so we will make a different component */}
            </div>

        </div>
    )
}

export default Body;