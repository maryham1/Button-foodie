import SearchBar from "./SearchBar";

function Hero({ search, setSearch }) {
  return (
    <section
      className="
        relative
        min-h-screen
        flex flex-col
        laptop:flex-row
        items-center
        justify-center
        laptop:justify-between
        bg-[url('/hero-food.png')]
        laptop:bg-none
        laptop:bg-stone-50
        bg-cover
        bg-center
        bg-no-repeat
        px-5
        laptop:px-16
        py-20
        laptop:py-10
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 laptop:bg-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-xl text-left laptop:text-left">
        <span className="inline-block bg-orange-100 text-orange-500 px-6 py-2 rounded-full text-sm font-medium">
          FAST DELIVERY
        </span>

        <h1 className="mt-6 text-4xl sm:text-5xl laptop:text-6xl font-bold leading-tight text-white laptop:text-black">
          Delicious food,
          <br />
          delivered to you
          <br />
          <span className="text-orange-500">at your doorstep</span>
        </h1>

        <p className="mt-6 text-gray-200 laptop:text-gray-500 text-base laptop:text-lg">
          Order from your favorite restaurants and enjoy fast delivery.
        </p>

        <div className="mt-8">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* Food Image */}
      <div className="relative z-10 hidden laptop:flex justify-center items-center w-[500px]">
        <img
          src="/hero-food.png"
          alt="Food"
          className="w-[400px]  h-auto object-contain -rotate-90"
        />
      </div>
    </section>
  );
}

export default Hero;
