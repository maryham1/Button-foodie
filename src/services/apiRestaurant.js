export async function getRestaurants() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/6a252a85f5f4af5e29c57a5e ",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$Cbrd.nXJFZPW4gEbg2ken.IjS.XNZprFnV1VEK7e5nmdlLpwq/lT2",
      },
    },
  );

  const record = await res.json();
  const data = record.record;
  console.log(data);

  return data;
}
