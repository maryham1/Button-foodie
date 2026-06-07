import { useCart } from "../../context/CartContext";

function OrderItems() {
  const { cart } = useCart();

  return (
    <div className="divide-y divide-gray-200">
      {cart.map((item) => (
        <div key={item.itemID} className="flex items-center gap-3 py-4">
          <img
            src={item.imageUrl}
            className="w-14 h-14 rounded-lg object-cover"
            alt={item.itemName}
          />

          <div className="flex-1">
            <h3 className="font-semibold">{item.itemName}</h3>
            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
          </div>

          <p className="font-bold">₦{item.itemPrice * item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderItems;
