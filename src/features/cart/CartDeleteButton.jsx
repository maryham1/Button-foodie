import { useCart } from "../../context/CartContext";
import { FiTrash2 } from "react-icons/fi";

function CartDeleteButton({ itemID }) {
  const { removeFromCart } = useCart();

  return (
    <button
      onClick={() => removeFromCart(itemID)}
      className="text-red-500 hover:text-red-600 transition"
      title="Remove item"
    >
      <FiTrash2 size={20} />
    </button>
  );
}

export default CartDeleteButton;
