import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="px-5 py-8 flex flex-col lg:flex-row gap-10">
        <div className="flex-1 max-w-full bg-black rounded-lg shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mt-4">Video Title or Description</h2>
          <p className="text-gray-600">This is where a short video description can go, to give more context.</p>
        </div>

        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-xl p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Chat</h2>
          <LiveChat />
        </div>
      </div>

      <div className="px-5 py-8 bg-white rounded-lg shadow-lg mt-8 mx-4 lg:mx-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Comments</h2>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
