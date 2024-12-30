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
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Video Streaming App : Front-end Project",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="mt-2 flex"
        onSubmit={(e) => {
          e.preventDefault();
          if (liveMessage.trim()) {
            console.log("On form submit", liveMessage);
            dispatch(
              addMessage({
                name: "You",
                message: liveMessage,
              })
            );
            setLiveMessage("");
          }
        }}
      >
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-grow p-2 border border-gray-400 rounded-lg"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
