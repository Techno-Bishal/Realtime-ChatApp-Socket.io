import React from 'react'
import { IoSend } from "react-icons/io5";


const MessageSend = () => {
  return (
    <div className='flex space-x-1 h-[8vh] text-center items-center'>
        <div className='w-[70%] mx-4'>
        <input type="text" placeholder="Type here" className="border border-gray-700 
        bg-gray-800 outline-none px-4 py-2 w-full " />
    </div>
    <button>
        <IoSend className='w-8 h-8 cursor-pointer'/>
    </button>
    </div>
  )
}

export default MessageSend