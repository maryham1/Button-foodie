import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../features/cart/EmptyCart";
import CartItems from "../features/cart/CartItems";
import TotalItems from "../features/cart/TotalItems";

function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  // EMPTY CART STATE
  if (!cart.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center  px-4 py-6">
      {/* CENTERED CART CONTAINER */}
      <div className="w-full max-w-3xl">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-orange-500">Your Cart</h1>

          {/* BACK TO MENU */}
          <button
            onClick={() => navigate(-1)}
            className="text-orange-500 font-medium hover:underline"
          >
            ← Back to Menu
          </button>
        </div>

        {/* CART ITEMS */}
        <CartItems />

        {/* TOTAL + CHECKOUT */}
        <TotalItems />
      </div>
    </div>
  );
}

export default Cart;
