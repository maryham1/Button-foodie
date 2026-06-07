import { useEffect } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";

function TotalPrice({ success }) {
  const { totalPrice } = useCart();

  useEffect(() => {
    if (success) {
      toast.success("Order successfully placed! 🎉");
    }
  }, [success]);

  return (
    <div className="border-t mt-4 pt-4 flex justify-between font-bold">
      <span>Total</span>
      <span>₦{totalPrice}</span>
    </div>
  );
}

export default TotalPrice;
