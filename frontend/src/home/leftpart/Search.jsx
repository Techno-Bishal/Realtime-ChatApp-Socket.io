import React from "react";
import { FaSearch } from "react-icons/fa";


const Search = () => {
  return (
  <div className="h-[10vh]">
      <div className="px-6 py-4">
      <form>
       <div className="flex space-x-3">
       <label className="rounded-lg border-[1px] border-gray-700 bg-gray-50 p-3 w-[80%] flex items-center gap-2  ">
          <input type="search" className="grow border-none outline-none" placeholder="Search" />
        </label>
        <button>
          <FaSearch className="w-8 h-8 cursor-pointer hover:text-gray-600 rounded-md duration-300"/>
        </button>
       </div>
      </form>
    </div>
  </div>
  );
};

export default Search;
