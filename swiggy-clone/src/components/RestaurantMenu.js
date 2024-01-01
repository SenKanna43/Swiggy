import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9974873&lng=80.2006371&restaurantId=199089&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.data.cards[0].card.card.info.name}</h1>

      <h2>Menu</h2>
      <ul>
        <li>Briyani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
