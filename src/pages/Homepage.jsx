import { useState } from "react";
import Hero from "../features/Home/Hero";
import SearchBar from "../features/Home/SearchBar";
import RestaurantList from "../features/Home/RestaurantList";
import Navbar from "../components/Navbar";

function Homepage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <div className="">
        <Hero />

        <RestaurantList search={search} />
      </div>
    </>
  );
}

export default Homepage;
