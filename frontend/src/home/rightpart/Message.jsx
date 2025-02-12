import React from "react";
import MessageData from "./MessageData";

const Message = () => {
  return (
    <div className="overflow-y-auto flex-1" style={{minHeight: "calc(92vh - 8vh)"}}>
     <MessageData/>
     <MessageData/>
    
      
    </div>
  );
};

export default Message;
