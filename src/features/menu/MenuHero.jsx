function MenuHero({
  restaurant,
  isFavorite,
  addFavorite,
  restaurantId,
  setIsFavorite,
}) {
  return (
    <div className="relative h-80 overflow-hidden rounded-b-xl mt-20 laptop:mt-25 ">
      <img
        src={
          restaurant?.imageUrl ||
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
        }
        className="w-full h-full object-cover"
        alt="restaurant"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* restaurant name */}
      <div className="absolute bottom-6 left-6 text-white">
        <h1 className="text-4xl font-bold">{restaurant?.restaurantName}</h1>

        <p className="text-gray-200 mt-2">Fresh meals delivered fast</p>
      </div>

      {/* favorite button */}
      <button
        onClick={() => {
          if (!isFavorite) {
            addFavorite({
              restaurantID: restaurantId,
              restaurantName: restaurant?.restaurantName,
              imageUrl: restaurant?.imageUrl,
            });
          }

          setIsFavorite(!isFavorite);
        }}
        className="absolute top-5 right-5 bg-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default MenuHero;
