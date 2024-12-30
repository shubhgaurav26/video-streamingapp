import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Video Streaming App : Front-end Project",
        })
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (liveMessage.trim()) {
      dispatch(
        addMessage({
          name: "You",
          message: liveMessage,
        })
      );
      setLiveMessage("");
    }
  };

  return (
    <>
      {/* Chat Container */}
      <div className="w-full h-[600px] ml-2 p-4 border border-blue-200 bg-blue-50 rounded-lg overflow-y-scroll flex flex-col-reverse shadow-md">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      {/* Message Input Form */}
      <form
        className="mt-4 flex p-3 bg-white rounded-lg shadow-lg border border-blue-200"
        onSubmit={handleMessageSubmit}
      >
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-3 border border-blue-300 rounded-lg text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
