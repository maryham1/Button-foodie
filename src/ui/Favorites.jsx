import {
  useFavorite,
} from "../context/FavoriteContext";

function Favorites() {
  const { favorites } =
    useFavorite();

  if (!favorites.length) {
    return (
      <h2>
        No favorite restaurants yet
      </h2>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">

      {favorites.map(
        (restaurant) => (
          <div
            key={
              restaurant.restaurantID
            }
            className="bg-white p-4 rounded-xl"
          >
            <img
              src={
                restaurant.imageUrl
              }
              className="rounded-xl"
            />

            <h2 className="font-bold mt-3">
              {
                restaurant.restaurantName
              }
            </h2>
          </div>
        )
      )}

    </div>
  );
}

export default Favorites;