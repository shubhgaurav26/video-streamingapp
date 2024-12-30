import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMusic, FaGamepad, FaFilm, FaShoppingCart } from "react-icons/fa";

const Side = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 bg-blue-50">
      {/* Navigation Section */}
      <div className="flex items-center space-x-2 mb-5">
        <Link to="/" className="text-blue-600 font-bold text-lg">
          <FaHome className="h-8 w-8 text-blue-600" />
        </Link>
        <Link to="/" className="text-blue-600 font-bold text-lg">
          Home
        </Link>
      </div>

      {/* Links Section */}
      <div className="space-y-5 mb-5">
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
          </li>
          <li className="text-blue-600 hover:text-blue-800">Shorts</li>
          <li className="text-blue-600 hover:text-blue-800">Videos</li>
          <li className="text-blue-600 hover:text-blue-800">Live</li>
        </ul>
      </div>

      {/* Subscriptions Section */}
      <div className="space-y-5">
        <h1 className="font-bold pt-5 text-blue-600">Subscriptions</h1>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaMusic className="h-5 w-5 text-blue-600" />
            <span>Music</span>
          </li>
          <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaGamepad className="h-5 w-5 text-blue-600" />
            <span>Sports</span>
          </li>
          <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaGamepad className="h-5 w-5 text-blue-600" />
            <span>Gaming</span>
          </li>
          <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaFilm className="h-5 w-5 text-blue-600" />
            <span>Movies</span>
          </li>
        </ul>
      </div>

      {/* Watch Later Section */}
      <div className="space-y-5">
        <h1 className="font-bold pt-5 text-blue-600">Watch Later</h1>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaShoppingCart className="h-5 w-5 text-blue-600" />
            <span>Music</span>
          </li>
          <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaShoppingCart className="h-5 w-5 text-blue-600" />
            <span>Sports</span>
          </li>
          <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaShoppingCart className="h-5 w-5 text-blue-600" />
            <span>Gaming</span>
          </li>
          <li className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <FaShoppingCart className="h-5 w-5 text-blue-600" />
            <span>Movies</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Side;
