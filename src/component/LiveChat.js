import {  useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () =>{

    useEffect (()=>{
        const i = setInterval(()=>{



        },2000);  
        return ()=> clearInterval(i);
            
        
    },[])

    return (
    <div className = "w-full h-[600px] ml-2 p-2 border border-black bg-slate-200 rounded-lg "> 
    <ChatMessage name ="Shubham Gaurav" message ="Video Streaming app."/>
    <ChatMessage name ="Shubham Gaurav" message ="Video Streaming app."/>
    <ChatMessage name ="Shubham Gaurav" message ="Video Streaming app."/>
    <ChatMessage name ="Shubham Gaurav" message ="Video Streaming app."/>
    <ChatMessage name ="Shubham Gaurav" message ="Video Streaming app."/>
    <ChatMessage name ="Shubham Gaurav" message ="Video Streaming app."/>
    
    </div>
    );
};

export default LiveChat;