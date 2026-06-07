import { useNavigate } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/menu/${restaurant.restaurantID}`)}
      className="
    cursor-pointer
    bg-white
    rounded-2xl
    overflow-hidden
    shadow-sm
    hover:shadow-xl
    hover:scale-[0.9]
    transition-all
    duration-300
    flex flex-col gap-20 laptop:flex-row flex-wrap
  "
    >
      <div className="p-4 tablet:p-5 laptop:p-6">
        <h3 className="font-semibold text-lg tablet:text-xl text-orange-500">
          {restaurant.restaurantName}
        </h3>

        <p className="text-sm tablet:text-base text-gray-500 mt-2">
          {restaurant.type}
        </p>
      </div>
    </div>
  );
}

export default RestaurantCard;
