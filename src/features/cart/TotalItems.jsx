import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function TotalItems() {
  const navigate = useNavigate();
  const { totalPrice, cart } = useCart();
  return (
    <div className="mt-8 border-t pt-4">
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₦{totalPrice}</span>
      </div>

      {/* ✅ CONDITION: ONLY SHOW IF CART EXISTS */}
      {cart.length > 0 && (
        <button
          onClick={() => navigate("/checkout")}
          className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl"
        >
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default TotalItems;
