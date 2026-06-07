import {
  createContext,
  useContext,
  useState,
} from "react";

const FavoriteContext =
  createContext();

function FavoriteProvider({
  children,
}) {
  const [favorites, setFavorites] =
    useState([]);

  function addFavorite(
    restaurant
  ) {
    setFavorites((fav) => {
      const exists = fav.find(
        (item) =>
          item.restaurantID ===
          restaurant.restaurantID
      );

      if (exists) return fav;

      return [...fav, restaurant];
    });
  }

  function removeFavorite(id) {
    setFavorites((fav) =>
      fav.filter(
        (item) =>
          item.restaurantID !== id
      )
    );
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

function useFavorite() {
  return useContext(
    FavoriteContext
  );
}

export {
  FavoriteProvider,
  useFavorite,
};