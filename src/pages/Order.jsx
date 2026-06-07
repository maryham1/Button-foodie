import { useCart } from "../context/CartContext";
import TotalItems from "../features/cart/TotalItems";
import OrderBtn from "../features/order/OrderBtn";
import OrderItems from "../features/order/OrderItems";

function Order({ success, setSuccess, loading, placeOrder, canPlaceOrder }) {
  const { cart, totalPrice, clearCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>

      <OrderItems />

      <TotalItems success={success} />

      <OrderBtn
        loading={loading}
        placeOrder={placeOrder}
        canPlaceOrder={canPlaceOrder}
      />
    </div>
  );
}

export default Order;
