import { useCart } from "../context/CartContext";

import OrderBtn from "../features/order/OrderBtn";
import OrderItems from "../features/order/OrderItems";
import TotalPrice from "../features/order/TotalPrice";

function Order({ success, setSuccess, loading, placeOrder, canPlaceOrder }) {
  const { cart, totalPrice, clearCart } = useCart();
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <OrderItems />

      <TotalPrice success={success} />
      <OrderBtn
        placeOrder={placeOrder}
        canPlaceOrder={canPlaceOrder}
        loading={loading}
      />
    </div>
  );
}

export default Order;
