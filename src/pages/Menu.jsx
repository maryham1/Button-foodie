import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getRestaurantMenu } from "../services/apiRestaurantsMenu";
import { useCart } from "../context/CartContext";
import { useFavorite } from "../context/FavoriteContext";
import MenuNavBar from "../components/MenuNavBar";
import MenuHero from "../features/menu/MenuHero";
import SearchMenuItem from "../features/menu/SearchMenuItem";
import MenuItem from "../features/menu/MenuItem";
import CategoryFilter from "../features/menu/CategoryFilter";
import { useParams } from "react-router-dom";

function Menu() {
  const { restaurantId } = useParams();

  const { addToCart } = useCart();
  const { addFavorite } = useFavorite();

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFavorite, setIsFavorite] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["menu", restaurantId],
    queryFn: () => getRestaurantMenu(restaurantId),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-20 text-gray-500">
        Loading menu...
      </div>
    );
  }

  const menu = data || [];
  const restaurant = menu[0];

  const categories = [
    "All",
    "Drinks",
    ...new Set(menu.map((item) => item.category || "Food")),
  ];

  const filteredMenu = menu.filter((item) => {
    const categoryMatch =
      activeCategory === "All"
        ? true
        : (item.category || "Food") === activeCategory;

    const searchMatch = item.itemName
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <MenuNavBar search={search} setSearch={setSearch} />
      <MenuHero
        restaurant={restaurant}
        isFavorite={isFavorite}
        addFavorite={addFavorite}
        restaurantId={restaurantId}
        setIsFavorite={setIsFavorite}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <SearchMenuItem search={search} setSearch={setSearch} />
        <CategoryFilter
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <MenuItem filteredMenu={filteredMenu} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default Menu;
