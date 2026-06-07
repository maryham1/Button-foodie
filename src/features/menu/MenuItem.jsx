import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartIncDecBut from "../cart/CartIncDecBut";

function MenuItem({ filteredMenu }) {
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {filteredMenu.map((item) => {
        const inCart = cart.find((c) => c.itemID === item.itemID);

        return (
          <div
            key={item.itemID}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.imageUrl}
              className="w-full h-56 object-cover"
              alt={item.itemName}
            />

            <div className="p-5">
              <h3 className="text-xl font-bold text-orange-500">
                {item.itemName}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.description || "Freshly prepared delicious meal"}
              </p>

              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold text-lg text-orange-500">
                  ₦{item.itemPrice}
                </span>

                {inCart ? (
                  <CartIncDecBut item={inCart} />
                ) : (
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-orange-500 text-white px-5 py-2 rounded-xl"
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItem;
