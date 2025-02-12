import React from 'react'
import Search from './Search'
import User from './User'
import Logout from './Logout'

const Leftpart = () => {
  return (
    <div className=' w-[30%] bg-[#cad7ed]'>
    <Search/>
    <User/>
    <Logout/>
    </div>
  )
}

export default Leftpart