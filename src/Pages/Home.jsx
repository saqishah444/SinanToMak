import React from 'react'
import { Atom, BriefcaseBusiness, Code, Code2, Link2, Mail, Monitor, SquarePen, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MapPin, Download, MessageCircle } from "lucide-react";
import officeboy from '../assets/officeboy.jpg'
import cv from '../assets/pdf/cv.pdf'


const Home = () => {
  return (
    <div className='bg-gray-800 py-5 h-full'>


      <div className='relative;'>
        <div className='absolute top-[9rem] left-10 gap-4 flex flex-col items-center justify-center bg-gray-900 w-auto border-2 border-white  rounded-3xl pt-3 pb-3 pl-2 pr-2 '>
          <div className=' text-white bg-transparent rounded-full  hover:bg-white hover:text-black p-[3px]'> <Link to="#"><Atom size={20} /></Link> </div>
          <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black p-[3px]'><Link to="#"><UserRound size={20} /></Link></div>
          <div className='text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Link to="#"><Code size={20} /></Link></div>
          <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Link to="#"><Monitor size={20} /></Link></div>
          <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Link to="#"><SquarePen size={20} /></Link></div>
          <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Link to="#"><Mail size={20} /></Link></div>


        </div>
        <div className='text-center font-medium text-[4rem] text-green-300'> <h1>Developer</h1></div>


      </div>
      {/* Grids of hero section */}
      <div className='grid grid:[200px-1fr] md:grid-cols-2 justify-items-center   items-center gap-4  '>
        <div className='border-t-green-400  justify-end text-center  border-l-green-400 border-4 border-r-0 border-b-0 rounded-tl-[134px] max-w-fit'>
          <div className='   flex flex-col justify-center w-auto items-center gap-2 rounded-tl-[130px] rounded-br-[130px] border-4 pt-10 p-5 pr-5  max-w-fit '>

            <div className=''>
              <div className='w-[7rem] h-[7rem] rounded-full overflow-hidden border-4 border-green-400 '>
                <img src={officeboy} alt="" srcSet="" />
              </div>
            </div>
            <div>
              <h1 className='text-white text-3xl font-semibold'>Sinan</h1>
              <p className='text-gray-200'>Full-Stack-Developer</p>
            </div>
            <div className='flex justify-center text-center'>
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className=" w-5 h-5 " /> <span >sinan.dev@gmail.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className=" w-5 h-5 " /> <span >Turkey</span>
                </p>
                <p className="flex items-center gap-2">
                  <BriefcaseBusiness className=" w-5 h-5 " /> <span >Full-time / Freelancer</span>
                </p>
                <p className="flex items-center gap-2">
                  <Link2 className=" w-5 h-5 " /> <span >www.sinantokmak.com</span>
                </p>
              </div>
            </div>
            <div className='flex gap-3 justify-center text-center'>
              <p className='bg-green-400 text-white text-center py-1 px-2 text-[12px]  rounded-2xl'><span>HTML</span> </p>
              <p className='bg-green-400 text-white text-center py-1 px-2 text-[12px]  rounded-2xl'><span>CSS</span> </p>
              <p className='bg-green-400 text-white text-center py-1 px-2 text-[12px]  rounded-2xl'><span>JavaScript</span> </p>
              <p className='bg-green-400 text-white text-center py-1 px-2 text-[12px]  rounded-2xl'><span>React</span> </p>
            </div>
            <Link download={cv} className="mt-6 mb-5 flex items-center justify-center gap-2 bg-white text-gray-800 font-medium px-6 py-2 rounded-full shadow-md hover:bg-gray-200 transition">
              Download CV <Download className='w-5 h-5' />
            </Link >


          </div>
        </div>
        <div className=' grid md:grid-cols-2 ml-[0px] md:ml-[-70px] justify-items-start gap-6 '>
          {/* Right Content */}
          <div className="flex flex-col max-w-fit gap-3 p-3 ">
            <div>
              <p className='text-green-400 mb-2'><Code2 /></p>
              <h1 className="text-6xl text-white font-semibold text-start ">
                Hey  </h1>
              <h1 className="text-6xl text-white font-semibold  text-start ">I’m <span className="text-6xl font-semibold text-teal-400">Sinan</span>,</h1>
              <h1 className="text-6xl text-white font-semibold ">Full-Stack Developer <Code2 className='text-green-400 ' /> </h1>


            </div>

            <div>
              <p className='text-green-400'><Code2 /></p>
              <p className="mt-4 text-gray-400 max-w-lg  text-start">
                I help business grow by crafting amazing web experiences. If you’re
                looking for a developer that likes to get stuff done.
              </p>
              <p className='text-green-400 ml-auto'><Code2 /></p>
            </div>

            {/* Let's Talk Button */}
            <Link to="#" className="mt-6 flex items-center  gap-2 text-teal-400 hover:underline ">
              <span className='text-4xl'>Let’s Talk </span> <MessageCircle className="w-11 h-11 bg-gray-600 rounded-full p-2" />
            </Link>
          </div>
          <div className="flex flex-col justify-center  items-center  h-fit gap-6 py-10 w-fit bg-gray-900 rounded-3xl">
            <div className="flex gap-3 justify-center items-center  text-center px-6 ">
              <h2 className="text-5xl font-bold text-teal-400">4</h2>
              <p className="text-gray-400 text-sm">Programming <br /> <span>Languages</span> </p>
            </div>
            <div className="flex gap-3 justify-center items-center  text-center px-6  ">
              <h2 className="text-5xl font-bold text-teal-400">6</h2>
              <p className="text-gray-400 text-sm">Development <br /> <span>Tools</span> </p>
            </div>
            <div className="flex gap-3 justify-center items-center  text-center px-6  ">
              <h2 className="text-5xl font-bold text-teal-400">8</h2>
              <p className="text-gray-400 text-sm">Years of <br /> <span>Experience</span> </p>
            </div>
          </div>

        </div>



      </div>


    </div>
  )
}

export default Home