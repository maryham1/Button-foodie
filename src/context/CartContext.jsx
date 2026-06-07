import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((cart) => {
      const existingItem = cart.find(
        (cartItem) => cartItem.itemID === item.itemID
      );

      // If item already exists, increase quantity
      if (existingItem) {
        return cart.map((cartItem) =>
          cartItem.itemID === item.itemID
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      // Add new item
      return [
        ...cart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function increaseQuantity(id) {
    setCart((cart) =>
      cart.map((item) =>
        item.itemID === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((cart) =>
      cart
        .map((item) =>
          item.itemID === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((cart) =>
      cart.filter((item) => item.itemID !== id)
    );
  }

  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) =>
      sum + item.itemPrice * item.quantity,
    0
  );
function clearCart() {
  setCart([]);
}
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}

export { CartProvider, useCart };