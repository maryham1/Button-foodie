import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRestaurants } from "../../services/apiRestaurant";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({ search }) {
  const [showAll, setShowAll] = useState(false);

  const { data = [], isLoading } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurants,
  });

  const filteredRestaurants = data.filter(
    (restaurant) =>
      restaurant.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.type.toLowerCase().includes(search.toLowerCase()),
  );

  // Show only 10 unless View All is clicked
  const displayedRestaurants = showAll
    ? filteredRestaurants
    : filteredRestaurants.slice(0, 8);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section
      className="mt-12 px-5 tablet:px-6 laptop:px-10 py-8 scroll-mt-20"
      id="restaurant"
    >
      <div className="flex justify-between items-start tablet:items-center gap-4">
        <h2 className="text-xl laptop:text-2xl tablet:text-3xl font-bold">
          Popular Restaurants
        </h2>

        {filteredRestaurants.length > 8 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-orange-500 font-bold cursor-pointer text-xl tablet:text-lg"
          >
            {showAll ? "Show Less ↑" : "View All →"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 tablet:gap-6 mt-6">
        {displayedRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.restaurantID}
            restaurant={restaurant}
          />
        ))}
      </div>
    </section>
  );
}

export default RestaurantList;
