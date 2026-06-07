import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-4 tablet:px-6 py-2">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/logo.png"
            alt="Button Foodie"
            className="w-[60px] h-[60px] tablet:w-[70px] tablet:h-[70px] object-cover"
          />
        </div>

        {/* Laptop Navigation */}
        <div className="hidden laptop:flex gap-6 items-center text-orange-500 laptop:text-xl text-xl">
          <Link to="/">Home</Link>
          <a href="#restaurant">Restaurants</a>
        </div>

        {/* Laptop Buttons */}
        <div className="hidden laptop:flex gap-3 items-center">
          <Link className="bg-orange-500 px-5 py-2 text-white rounded-md ">
            Login
          </Link>

          <Link className="bg-orange-500 px-5 py-2 text-white rounded-md">
            Signup
          </Link>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="laptop:hidden text-orange-500"
        >
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="laptop:hidden bg-white border-t border-orange-500 shadow-md">
          <div className="flex flex-col p-4 gap-4">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-orange-500"
            >
              Home
            </Link>

            <a
              href="#restaurant"
              onClick={() => setIsOpen(false)}
              className="text-orange-500"
            >
              Restaurants
            </a>

            <Link className="bg-orange-500 px-4 py-2 text-white rounded-md text-center">
              Login
            </Link>

            <Link className="bg-orange-500 px-4 py-2 text-white rounded-md text-center">
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
