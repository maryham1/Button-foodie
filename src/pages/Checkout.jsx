import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Order from "./Order";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardType, setCardType] = useState("");
  const [address, setAddress] = useState("📍 Getting location...");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // =========================
  // GET FULL ADDRESS (FIXED)
  // =========================
  useEffect(() => {
    if (!navigator.geolocation) {
      setAddress("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
          );

          const data = await res.json();

          // ✅ FULL ADDRESS (MOST IMPORTANT FIX)
          const fullAddress = data?.display_name || "Unable to detect location";

          setAddress(`📍 ${fullAddress}`);
        } catch (err) {
          console.log(err);
          setAddress("📍 Unable to fetch full address");
        }
      },
      (error) => {
        console.log(error);

        switch (error.code) {
          case 1:
            setAddress("📍 Permission denied");
            break;
          case 2:
            setAddress("📍 Location unavailable");
            break;
          case 3:
            setAddress("📍 Location timeout");
            break;
          default:
            setAddress("📍 Location error");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  }, []);

  // =========================
  // ADDRESS HANDLING
  // =========================
  function handleAddNewAddress() {
    setAddress("");
  }

  const isAddressValid = address.trim().length > 10;

  // =========================
  // PAYMENT VALIDATION
  // =========================
  const isCardValid = paymentMethod === "card" ? cardType !== "" : true;

  const canPlaceOrder = cart.length > 0 && isAddressValid && isCardValid;

  // =========================
  // PLACE ORDER
  // =========================
  function placeOrder() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // ✅ REAL ALERT (YOU REQUESTED THIS)
      alert("✅ Order placed successfully!");

      clearCart();

      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 1500);
  }

  // =========================
  // EMPTY CART
  // =========================
  if (!cart.length) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <h2 className="text-xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-8">
      {/* ================= LEFT ================= */}
      <div>
        <h2 className="text-xl font-bold mb-4">Delivery Address</h2>

        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleAddNewAddress}
          className="text-orange-500 text-sm mt-2"
        >
          + Add New Address
        </button>

        {!isAddressValid && (
          <p className="text-red-500 text-sm mt-2">
            Please enter a valid full address
          </p>
        )}

        {/* PAYMENT */}
        <h2 className="text-xl font-bold mt-6 mb-4">Payment Method</h2>

        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
            />
            Card Payment
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
            />
            Cash on Delivery
          </label>
        </div>

        {/* CARD TYPE */}
        {paymentMethod === "card" && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Select Card Type</h3>

            <div className="flex gap-3">
              {["visa", "mastercard", "verve"].map((type) => (
                <button
                  key={type}
                  onClick={() => setCardType(type)}
                  className={`px-4 py-2 border rounded-lg ${
                    cardType === type ? "bg-orange-500 text-white" : ""
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {!cardType && (
              <p className="text-red-500 text-sm mt-2">Please select a card</p>
            )}
          </div>
        )}
      </div>

      {/* ================= RIGHT ================= */}
      <Order success={success} setSuccess={setSuccess} loading={loading} placeOrder={placeOrder} canPlaceOrder={canPlaceOrder}/>
    </div>
  );
}

export default Checkout;
