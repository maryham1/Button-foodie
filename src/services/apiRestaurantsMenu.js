export async function getRestaurantMenu(id) {
  const res = await fetch(
    `https://corsproxy.io/?https://fakerestaurantapi.runasp.net/api/Restaurant/${id}/menu`,
  );
  const data = res.json();
  console.log(data);
  return data;
}
