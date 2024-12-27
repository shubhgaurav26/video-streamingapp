import React from "react";
import { useDispatch } from "react-redux";
import {toggleMenu }from "../utils/appSlice"

const Head = () => {
    const dispatch = useDispatch ();

    const toggleMenuHandler =() =>{
        dispatch(toggleMenu());
         
    }; 
  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <img
        onClick ={() => toggleMenuHandler ()}   
          alt="Menu icon for navigation"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          className="h-8 w-8 cursor-pointer"
        />
        <img
          alt="YouTube logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          className="h-10 w-auto cursor-pointer"
        />
      </div>

      {/* Center Section */}
      <div className="flex items-center w-1/2 space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
        />
        <button
          type="button"
          className="bg-gray-100 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200"
        >
          🔍
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <img
          alt="User profile icon"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          className="h-8 w-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;
