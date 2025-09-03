import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className='bg-gray-800 h-screen'>
        <div>
            <Navbar/>
        </div>
        <div>
            <Outlet/>
        </div>



    </div>
  )
}

export default HomeLayout