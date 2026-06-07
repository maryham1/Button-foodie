function CategoryFilter({ categories, setActiveCategory, activeCategory }) {
  return (
    <div className="flex gap-3 overflow-x-auto mb-8">
      {categories.map((filterIt) => (
        <button
          key={filterIt}
          onClick={() => setActiveCategory(filterIt)}
          className={`px-5 py-2 rounded-full whitespace-nowrap ${
            activeCategory === filterIt
              ? "bg-orange-500 text-white"
              : "bg-white border"
          }`}
        >
          {filterIt}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
