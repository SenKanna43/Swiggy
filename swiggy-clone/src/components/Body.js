import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Ratiing 4.0+
        </button>
      </div>
      <div className="search">
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
