import React from "react";
import UsersData from "./UsersData";

const User = () => {
  return (
    <div>
      <h1 className="px-8 py-2 text-black text-lg font-semibold bg-slate-400">
        Messages
      </h1>
      <div className="my-2 flex-1 overflow-y-auto" style={{maxHeight: "calc(80vh - 10vh)"}}>
      <UsersData/>
      <UsersData/>
      <UsersData/>
      <UsersData/>
      <UsersData/>
      <UsersData/>
      <UsersData/>
      <UsersData/>
      <UsersData/>

      </div>
      </div>
  );
};

export default User;
