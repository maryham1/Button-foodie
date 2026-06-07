import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Favorites from "./ui/Favorites";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CartProvider>
        <FavoriteProvider>
          <BrowserRouter>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
              theme="colored"
            />
            <Routes>
              <Route path="/" element={<Applayout />}>
                <Route index element={<Homepage />} />
                <Route path="menu/:restaurantId" element={<Menu />} />
                <Route path="cart" element={<Cart />} />
                <Route path="order" element={<Order />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="favorites" element={<Favorites />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </FavoriteProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
