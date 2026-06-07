function SearchMenuItem({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search dishes..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-[320px] laptop:w-[400px]  border-orange-500 text-orange-500 border p-4 rounded-2xl outline-none mb-6"
    />
  );
}

export default SearchMenuItem;
