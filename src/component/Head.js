import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

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
    <div className="flex items-center justify-between px-4 py-4 shadow-md">
      <div className="flex items-center space-x-4">
        <img
          onClick={() => toggleMenuHandler()}
          alt="Menu icon for navigation"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          className="h-8 w-8 cursor-pointer"
        />
        {/* Make logo larger and circular */}
        <img
          alt="YouTube logo"
          src="https://scontent.fixc4-3.fna.fbcdn.net/v/t39.30808-6/471917462_3712593189052467_6108914131633363152_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8pH5SS-FVg8Q7kNvgEscyXQ&_nc_zt=23&_nc_ht=scontent.fixc4-3.fna&_nc_gid=ArweA_6Ky-QDQuDdC8KxmPw&oh=00_AYClRYGyhA-EavpoStL1oYpO0ZCmZ9U5rml-xdT_BTeodA&oe=677876D0"
          className="h-12 w-12 rounded-full cursor-pointer"
        />
      </div>

      <div className="relative flex items-center w-1/2 space-x-2 search-container">
        <div className="flex items-center w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none bg-white">
          <input
            type="text"
            placeholder="Search"
            className="w-full border-none focus:outline-none text-gray-700"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="button"
            className="bg-blue-200 border border-blue-300 rounded-full px-4 py-2 hover:bg-blue-300"
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
