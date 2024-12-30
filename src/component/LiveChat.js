import {  useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const LiveChat = () =>{

    const dispatch = useDispatch();

    const chatMessages = useSelector((store)=> store.chat.messages);




    useEffect (()=>{
        const i = setInterval(()=>{

            dispatch(addMessage({
                name: generateRandomName(),
                message: "Video Streaming App : Front-end Project",

            }));



        },2000);  
        return ()=> clearInterval(i);
            
        
    },[])

    return (
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex-col-reverse ">
        {chatMessages.map((c, i) => (
          <ChatMessage 
            key={i}
            name={c.name} 
            message={c.message} 
          />
        ))}
      </div>
      
    );
};

export default LiveChat;