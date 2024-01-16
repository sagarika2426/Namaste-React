import React from "react";
import ReactDOM from "react-dom/client";


/*
Header
    Icon
    Nav Lists
Body
    Seach
    Restaurant cards
        -Img
        - Name, star rating, cuisine, delivery time 
Foother
    address
    contact
*/

// Header component
const Header= () => {
    return (
        <div className="header">
            <div className="Logo_Container">
                <img  className="logo" src="https://t3.ftcdn.net/jpg/03/33/90/46/360_F_333904627_tnCepUpc3Uynb6stmEbverr8HeWS2VZl.jpg"/>
            </div>

            <div className="navItem">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>


        </div>
    )
}


// Restaurnt Component
const RestroCard = (props) =>{
    const{resData} = props;
    return(
        <div className="res-card"> 
        <img className="res-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}/>
        {/* We added the link adress which is common for every img and get the img id from resData */}

        <h3>{resData.info.name}</h3>
        <p>{resData.info.cuisines.join(", ")}</p>
        {/* with the help of join you can add space and comma in the cuisines */}

        <p>Rating: {resData.info.avgRating}</p>
        <p>Cost for two: {resData.info.costForTwo}</p>

        </div>
    )
}

// Restaaurant data from Swiggy
const resList = [
    {
    "info": {
    "id": "678577",
    "name": "BOX8 - Desi Meals",
    "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
    "locality": "Gaurav Industrial Estate",
    "areaName": "Kurla West",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Thalis",
    "Home Food"
    ],
    "avgRating": 4.6,
    "parentId": "10655",
    "avgRatingString": "4.6",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "17-27 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-17 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹179"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/box8-desi-meals-gaurav-industrial-estate-kurla-west-mumbai-678577",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "646672",
    "name": "Bakingo-Cakes & Desserts",
    "cloudinaryImageId": "05994df0e49725bd230146c320b8f7aa",
    "locality": "Chembur",
    "areaName": "Anwar Compound",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Beverages",
    "Snacks"
    ],
    "avgRating": 4.5,
    "parentId": "3818",
    "avgRatingString": "4.5",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 5.7,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "5.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-17 00:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
    "shortDescription": "Perfect Cake Delivery",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
    "shortDescription": "Perfect Cake Delivery"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-6d1fe67e-c7be-4e0a-8a56-197be5b4e18c"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/bakingo-cakes-and-desserts-chembur-anwar-compound-mumbai-646672",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "650753",
    "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
    "cloudinaryImageId": "53f88d009d0528792249fb282ef2e17b",
    "locality": "CST Road",
    "areaName": "Scruz Bandra East",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "North Indian",
    "Home Food",
    "Thalis"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "67608",
    "avgRatingString": "4.4",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 2.5,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "2.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-16 22:50:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-6d1fe67e-c7be-4e0a-8a56-197be5b4e18c"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dabba-garam-homestyle-combo-thali-and-more-cst-road-scruz-bandra-east-mumbai-650753",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "32399",
    "name": "McDonald's",
    "cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
    "locality": "Kalina Artista",
    "areaName": "Santacruz East",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "630",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 1.2,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "1.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-17 02:45:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-6d1fe67e-c7be-4e0a-8a56-197be5b4e18c"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-kalina-artista-santacruz-east-mumbai-32399",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "9052",
    "name": "Subway",
    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
    "locality": "Central Plaza, Kalina",
    "areaName": "Santacruz East",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "2",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-17 04:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-6d1fe67e-c7be-4e0a-8a56-197be5b4e18c"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-central-plaza-kalina-santacruz-east-mumbai-9052",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "78036",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Central Plaza, Kalina",
    "areaName": "Santacruz East",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.3,
    "parentId": "166",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-17 03:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-6d1fe67e-c7be-4e0a-8a56-197be5b4e18c"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-central-plaza-kalina-santacruz-east-mumbai-78036",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "243517",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Phoenix Market City",
    "areaName": "Saki Naka",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.1,
    "parentId": "547",
    "avgRatingString": "4.1",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 41,
    "lastMileTravel": 2.8,
    "serviceability": "SERVICEABLE",
    "slaString": "41 mins",
    "lastMileTravelString": "2.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-16 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-6d1fe67e-c7be-4e0a-8a56-197be5b4e18c"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-phoenix-market-city-saki-naka-mumbai-243517",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "24463",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "sxkkygjqz7e8mad1qnvw",
    "locality": "Near Sanagam Theatre",
    "areaName": "Kurla West",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 3.6,
    "parentId": "2456",
    "avgRatingString": "3.6",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-17 00:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-6d1fe67e-c7be-4e0a-8a56-197be5b4e18c"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-near-sanagam-theatre-kurla-west-mumbai-24463",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
    "id": "117397",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "pft1dcdx8udfepmcnuty",
    "locality": "Sion",
    "areaName": "Sion",
    "costForTwo": "₹550 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "4961",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 4.2,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "4.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-23 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {
    "context": "seo-data-6d1fe67e-c7be-4e0a-8a56-197be5b4e18c"
    },
    "cta": {
    "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-sion-mumbai-117397",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ]
// How to add inline style here - but not preffered
// color element
// const RestroColor = {
//     backgroundColor: "lightPink"
// }


// Body Component
const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search
            </div>

            <div className="restro-card"> 
               {/* <RestroCard resName="Pizza"/> */}
               {/* <RestroCard resData={resList[1]}/>
               <RestroCard resData={resList[2]}/>
               <RestroCard resData={resList[3]}/>
               <RestroCard resData={resList[4]}/>
               <RestroCard resData={resList[5]}/> */}
               {/* instead of repeating it like this we can use loop - map */}
               {resList.map((restaurant)=>(
                <RestroCard resData={restaurant}/>
               ))}





            {/* Restaurnt card - we will be reusing it a lot so we will make a different component */}
            </div>

        </div>
    )
}

// Main Layout
const AppLayout = () =>{
    return (
        <div id="app">
            {/* Add header component */}
            <Header/>
            <Body/>
             
        </div>
    )
}


var root2 = ReactDOM.createRoot(document.getElementById("container"));
root2.render(<AppLayout/>);

