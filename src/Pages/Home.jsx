import React from 'react'
import { Atom } from 'lucide-react'

const Home = () => {
  return (
    <div className='bg-gray-800 py-5 h-screen'>


       <div className='relative;'>
        <div className='absolute top-[9rem] left-10 gap-3 flex flex-col items-center justify-center bg-gray-900 w-auto border-2 border-white  rounded-3xl pt-3 pb-3 pl-1 pr-1 '>
            <div className=' text-white bg-transparent rounded-full  hover:bg-white hover:text-black   duration-3000 p-[3px]'><Atom size={20} /></div>
            <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black p-[3px]'><Atom size={20} /></div>
            <div className='text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Atom size={20} /></div>
            <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Atom size={20} /></div>
            <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Atom size={20} /></div>

        </div>
       <div className='text-center font-medium text-[6rem] text-green-300'> <h1>Developer</h1></div>


       </div>
    </div>
  )
}

export default Home