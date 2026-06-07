import { useCart } from "../../context/CartContext";
import CartDeleteButton from "./CartDeleteButton";
import CartIncDecBut from "./CartIncDecBut";

function CartItems() {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();
  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div
          key={item.itemID}
          className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm"
        >
          <div className="flex gap-4">
            <img
              src={item.imageUrl}
              className="w-16 h-16 rounded-lg object-cover"
            />

            <div>
              <h2 className="font-semibold">{item.itemName}</h2>

              <p className="text-gray-500">₦{item.itemPrice}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CartIncDecBut item={item} />
            <CartDeleteButton />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
