function OrderBtn({ canPlaceOrder, loading, placeOrder }) {
  return (
    <button
      disabled={!canPlaceOrder || loading}
      onClick={placeOrder}
      className={`w-full mt-4 py-3 rounded-xl text-white font-semibold ${
        canPlaceOrder
          ? "bg-orange-500 hover:bg-orange-600"
          : "bg-gray-400 cursor-not-allowed"
      }`}
    >
      {loading ? "Placing Order..." : "Place Order"}
    </button>
  );
}

export default OrderBtn;
