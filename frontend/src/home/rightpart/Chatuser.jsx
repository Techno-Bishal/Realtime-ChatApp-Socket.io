import React from "react";

const Chatuser = () => {
  return (
    <div className="flex space-x-3 items-center py-3 h-[8vh] justify-center bg-gray-800
     hover:bg-gray-700 duration-200 cursor-pointer">
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        
      </div>
      <div>
      <h1 className="text-xl">Sarmila</h1>
      <span className="text-sm">Offline</span>
      </div>
    </div>
  );
};

export default Chatuser;
