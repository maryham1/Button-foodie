export async function getRestaurants() {
  const res = await fetch(
    "https://corsproxy.io/?https://fakerestaurantapi.runasp.net/api/Restaurant",
  );
  const data = await res.json();

  return data;
}
