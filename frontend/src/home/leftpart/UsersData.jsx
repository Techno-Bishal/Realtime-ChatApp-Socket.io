import React from 'react'

const UsersData = () => {
  return (
    <div>
        <div className="flex  space-x-4 py-3 px-8 hover:bg-slate-500 duration-200 cursor-pointer">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>Sarmila</h1>
          <span>sarmilapanta@gmail.com</span>
        </div>
      </div>

    </div>
  )
}

export default UsersData