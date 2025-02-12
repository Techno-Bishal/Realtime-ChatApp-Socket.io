import React from "react";
import Chatuser from "./Chatuser";
import Message from "./Message";
import MessageSend from "./MessageSend";
import MessageData from "./MessageData";

const Rightpart = () => {
  return (
    <div className="w-[70%]  bg-slate-900 text-white">
      <Chatuser />
      <div
        className="flex-1 overflow-y-auto"
        style={{ maxHeight: "calc(92vh - 8vh" }}
      >
        <Message />
      </div>
      <MessageSend />
    </div>
  );
};

export default Rightpart;
