import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchMenuItem from "../features/menu/SearchMenuItem";
import { FiShoppingCart } from "react-icons/fi";

function MenuNavBar({ search, setSearch }) {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      {/* MAIN NAV */}
      <div className="grid grid-cols-3 items-center px-4 tablet:px-6 py-3">
        {/* LEFT: LOGO */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/logo.png"
            alt="Button Foodie"
            className="w-[60px] h-[60px] tablet:w-[70px] tablet:h-[70px] object-cover"
          />
        </div>

        {/* CENTER: SEARCH (desktop only) */}
        <div className="hidden laptop:flex justify-center">
          <SearchMenuItem search={search} setSearch={setSearch} />
        </div>

        {/* RIGHT: DESKTOP */}
        <div className="hidden laptop:flex items-center gap-8 justify-self-end text-orange-500 text-xl">
          {/* HOME TEXT */}
          <button onClick={() => navigate("/")}>Home</button>

          {/* CART */}
          <button
            className="relative flex items-center"
            onClick={() => navigate("/cart")}
          >
            <FiShoppingCart size={24} />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* MOBILE RIGHT */}
        <div className="flex laptop:hidden items-center gap-6 justify-self-end text-orange-500">
          {/* HOME TEXT */}
          <button
            onClick={() => navigate("/")}
            className="text-base font-medium"
          >
            Home
          </button>

          {/* CART */}
          <button className="relative" onClick={() => navigate("/cart")}>
            <FiShoppingCart size={22} />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default MenuNavBar;
