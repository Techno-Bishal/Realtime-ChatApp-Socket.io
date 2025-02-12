import React from 'react'
import { IoLogOut } from "react-icons/io5";


const Logout = () => {
  return (
     <div className="h-[10vh]">
        <div>
          <IoLogOut className='text-5xl text-black cursor-pointer
          ml-4 hover:bg-slate-600 hover:rounded-full px-3 py-2 duration-300'/>
        </div>
      </div>
  )
}

export default Logout