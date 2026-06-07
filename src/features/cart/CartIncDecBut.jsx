import { useCart } from "../../context/CartContext";

function CartIncDecBut({ item }) {
  const { decreaseQuantity, increaseQuantity } = useCart();
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => decreaseQuantity(item.itemID)}
        className="px-3 py-1 border border-orange-500 rounded-md text-orange-500 font-bold text-xl"
      >
        -
      </button>

      <span className="text-xl text-orange-500">{item.quantity}</span>

      <button
        onClick={() => increaseQuantity(item.itemID)}
        className="px-3 py-1 border rounded border-orange-500 rounded-md text-orange-500 font-bold text-xl"
      >
        +
      </button>
    </div>
  );
}

export default CartIncDecBut;
