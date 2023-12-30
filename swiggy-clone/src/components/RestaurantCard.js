import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = resData?.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h4>{name}</h4>
      <h5>{avgRating} • Rating</h5>
      <h5>{deliveryTime} mins</h5>
      <h5>{cuisines.join(", ")}</h5>
    </div>
  );
};

export default RestaurantCard;
