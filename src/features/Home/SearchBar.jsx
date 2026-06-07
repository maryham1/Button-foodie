function SearchBar({ search, setSearch }) {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search restaurants..."
        className="w-auto laptop:w-[400px] text-orange-500 border p-3 rounded-xl border-orange-500 outline-0"
      />
      {/* <button className="bg-orange-500 text-white p-2 rounded-xl -ml-26 w-[100px]">
        Search
      </button> */}
    </>
  );
}
export default SearchBar;
