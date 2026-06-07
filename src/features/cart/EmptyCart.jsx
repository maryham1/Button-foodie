import { useNavigate } from "react-router-dom";

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      {/* <img src="/empty-cart.png" className="w-40 mb-4" /> */}

      <h2 className="text-2xl font-bold text-orange-500">Your cart is empty</h2>

      <p className="text-gray-500 mt-2">Add delicious meals from restaurants</p>

      <button
        onClick={() => navigate("/")}
        className="mt-5 bg-orange-500 text-white px-6 py-3 rounded-xl"
      >
        Browse Restaurants
      </button>
    </div>
  );
}

export default EmptyCart;
