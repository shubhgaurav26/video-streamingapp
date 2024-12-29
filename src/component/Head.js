import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice"; 

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchedSuggestions(); 
        }
      } else {
        setSuggestions([]); 
      }
    }, 500);

    return () => clearTimeout(timer); 
  }, [searchQuery, searchCache]);

  const getSearchedSuggestions = async () => {
    console.log("API CALL-" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]); 

  
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

 
  const handleClickOutside = (e) => {
    if (!e.target.closest(".search-container")) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {

    const handleScroll = () => setShowSuggestions(false);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md">
     
      <div className="flex items-center space-x-4">
        <img
          onClick={() => toggleMenuHandler()}
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


      <div className="relative flex items-center w-1/2 space-x-2 search-container">
 
        <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none">
          <input
            type="text"
            placeholder="Search"
            className="w-full border-none focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="button"
            className="bg-gray-100 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-200"
          >
            🔍
          </button>
        </div>

       
        {showSuggestions && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg max-h-60 overflow-y-auto mt-2">
            <ul>
              {suggestions.map((s, index) => (
                <li key={index} className="px-5 py-2 border-b text-gray-700">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

   
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
