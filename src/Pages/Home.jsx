import React from 'react'
import { Atom, BriefcaseBusiness, Code, Code2, Link2, Mail, Monitor, Smartphone, SquarePen, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MapPin, Download, MessageCircle } from "lucide-react";
import officeboy from '../assets/officeboy.jpg'
import cv from '../assets/pdf/cv.pdf'
import about from '../assets/about.jpg'

const Home = () => {
  return (
    <div>
      {/*  hero section */}
      <section id='hero-section'>
        <div className='bg-gray-800 py-5 h-full'>


          <div className='relative;'>
            <div className='absolute top-[9rem] left-10 gap-4 flex flex-col items-center justify-center bg-gray-900 w-auto border-2 border-white  rounded-3xl pt-3 pb-3 pl-2 pr-2 '>
              <div className=' text-white bg-transparent rounded-full  hover:bg-white hover:text-black p-[3px]'> <Link to="#"><Atom size={20} /></Link> </div>
              <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black p-[3px]'><Link to="#"><UserRound size={20} /></Link></div>
              <div className=' text-white  bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Link to="#"><Code size={20} /></Link></div>
              <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Link to="#"><Monitor size={20} /></Link></div>
              <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Link to="#"><SquarePen size={20} /></Link></div>
              <div className=' text-white bg-transparent rounded-full hover:bg-white hover:text-black  p-[3px]'><Link to="#"><Mail size={20} /></Link></div>


            </div>
            <div className='text-center font-medium text-[4rem] text-green-300'> <h1>Developer</h1></div>


          </div>




          <div className='container mx-auto grid md:grid-cols-[450px_1fr_250px]   justify-items-center   items-center gap-4  '>
            <div className='border-t-green-400  justify-end text-center   border-l-green-400 border-4 border-r-0 border-b-0 rounded-tl-[134px] '>
              <div className='   flex flex-col justify-center items-center  gap-2 rounded-tl-[130px] rounded-br-[130px] border-4 pt-10 p-5 pr-5 w-full  '>

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

            {/* middel Content */}
            <div className=' '>

              <div className="flex flex-col max-w-fit gap-3 p-3 ">

                <div>
                  <p className='text-green-400 mb-2'><Code2 /></p>
                  <h1 className="text-5xl text-white font-semibold text-start ">
                    Hey  </h1>
                  <h1 className="text-5xl text-white font-semibold  text-start ">I’m <span className="text-5xl font-semibold text-teal-400">Sinan</span>,</h1>
                  <div className='flex'>
                    <h1 className="text-5xl text-white font-semibold ">Full-Stack Developer  </h1>
                    <p className='mt-auto ml-3 text-end'><Code2 className='text-green-400  ' /></p>

                  </div>



                </div>




                <div className=''>
                  <p className='text-green-400'><Code2 /></p>
                  <p className="mt-4 text-gray-400 max-w-lg  text-start">
                    I help business grow by crafting amazing web experiences. If you’re
                    looking for a developer that likes to get stuff done.
                  </p>
                  <p className='text-green-400 ml-auto'><Code2 /></p>
                </div>

                {/* Let's Talk Button */}
                <Link to="#" className=" flex align-middle items-center  gap-2 text-teal-400 hover:underline ">
                  <span className='text-4xl'>Let’s Talk </span> <MessageCircle className="w-11 h-11 bg-gray-600 rounded-full p-2" />
                </Link>
              </div>




            </div>


            {/* Last Content */}
            <div className="flex flex-col justify-center  items-center  h-fit gap-10 py-10 w-fit bg-gray-900 rounded-[70px]">
              <div className="flex gap-3 justify-center items-center  text-center px-6 ">
                <h2 className="text-6xl font-bold text-teal-400">4</h2>
                <p className="text-gray-400 ">Programming <br /> <span>Languages</span> </p>
              </div>
              <div className="flex gap-3 justify-center items-center  text-center px-6  ">
                <h2 className="text-6xl font-bold text-teal-400">6</h2>
                <p className="text-gray-400 ">Development <br /> <span>Tools</span> </p>
              </div>
              <div className="flex gap-4 justify-center items-center  text-center px-6  ">
                <h2 className="text-6xl font-bold text-teal-400">8</h2>
                <p className="text-gray-400 ">Years of <br /> <span>Experience</span> </p>
              </div>
            </div>



          </div>
        </div>
      </section>


      {/* About Section Start */}

      <section id='about_section' className=' h-full pb-10' >
        <div className='container mx-auto '>
          <div className="flex flex-col items-center justify-center pt-10 pb-10">
            {/* Top circle */}
            <div className="w-5 h-7 rounded-full border-2 border-teal-400 flex items-center justify-center bg-gray-900">
              <div className='w-1 h-1 border-2 rounded-full border-teal-400 mb-auto mt-1'></div>
            </div>
            {/* Dotted vertical line */}
            <div className="w-1 h-10 border-l-4 border-dotted border-gray-500 mt-1"></div>
            <div className='w-1 h-1 border-l-4 border-dotted border-white mt-1'></div>
          </div>
          <div className='  grid md:grid-cols-[1fr_600px] justify-center items-center pt-10'>
            <div className='flex flex-col items-center  justify-center'>
              <div className='mb-10'>
                <h2 className='border-2 border-green-400  rounded-tl-3xl rounded-br-3xl py-3 px-5 text-2xl text-white bg-gray-800 max-w-fit '> About Me</h2>
              </div>
              <div className='flex flex-col max-w-fit mb-0  p-5 gap-1 text-gray-200 bg-gray-800 rounded-3xl'>
                <p><Code2 className='text-green-400 ' /></p>
                <h1 className='text-3xl text-green-400 font-semibold'>Hello!</h1>
                <p className='about-p font-semibold'> Hi, I’m Sinan and I’m a Front-End Developer with a strong passion for building clean, user-friendly. </p>
                <p className=' about-p font-semibold'>Currently, I’m deepening my skills in <span className='text-green-400'>React.js</span>  to create dynamic and interactive applications.
                </p>
                <p className=' about-p font-semibold'>I enjoy solving problems with code, experimenting with modern tools, and constantly learning.
                </p>
                <p className='about-p font-semibold'> Hi, I’m Sinan and I’m a Front-End Developer with a strong passion for building clean, user-friendly. </p>

                <p><Code2 className='text-green-400' /></p>
              </div>

            </div>
            <div>
              <div>
                <img src={about} alt="" className='rounded-3xl shadow-2xl w-[300px] h-[440px] mx-auto ' />
              </div>
            </div>

          </div>
        </div>



      </section>
      {/* End About Section */}

      <section id='skills' className='h-fit bg-gray-900'>
        <div className='container  mx-auto'>
          <div className='grid md:grid-cols-3 gap-10 justify-center items-center'>
            <div className="flex flex-col items-center w-full">

            </div>
            <div className="flex flex-col items-center justify-center pt-10 pb-10">
              {/* Top circle */}
              <div className="w-5 h-7 rounded-full border-2 border-teal-400 flex items-center justify-center bg-gray-900">
                <div className='w-1 h-1 border-2 rounded-full border-teal-400 mb-auto mt-1'></div>
              </div>
              {/* Dotted vertical line */}
              <div className="w-1 h-10 border-l-4 border-dotted border-gray-500 mt-1"></div>
              <div className='w-1 h-1 border-l-4 border-dotted border-white mt-1'></div>
            </div>
            <div>
              <p className='text-'><Code2 className='text-green-400 size-40 mt-2' /></p>

            </div>

          </div>

          <div className=' flex flex-col items-center justify-center gap-1'>
            <h2 className='text-green-400 text-5xl'>Skills</h2>
            <div className='flex justify-center items-center '>
              <div className='w-3 h-3 border-[6px] border-green-400 rounded-full'></div>
              <div className='w-28 h-1 bg-green-400'></div>
              <div className='w-3 h-3 border-[6px] border-green-400 rounded-full'></div>
            </div>
            <div className='text-center mx-auto mb-4'><p className='text-white'>Technologies I use to craft clean and responsive web experiences.</p></div>


            <div className="flex flex-col items-center w-full">
              {/* Top cards */}
              <div className="grid md:grid-cols-2  flex-row justify-center gap-8 mb-10">
                <div className="bg-teal-200 rounded-lg shadow-lg px-8 py-4 flex flex-col items-center min-w-[220px]">
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <div><Monitor className='text-gray-700' /></div>

                    <span className="text-gray-700 font-semibold">Web Development</span>
                  </div>
                  <span className="text-xs text-gray-600">HTML, CSS, JS, REACT</span>
                </div>
                <div className="bg-teal-200 rounded-lg shadow-lg px-8 py-4 flex flex-col items-center min-w-[220px]">
                  <div className="flex flex-col items-center gap-2 mb-2">
                    <div><Smartphone className="text-gray-700" /></div>
                    <span className="text-gray-700 font-semibold">App Development</span>
                  </div>
                  <span className="text-xs text-gray-600">IOS, Android</span>
                </div>
              </div>
              {/* Skill circles */}
              <div className="grid grid-cols-2 md:grid-cols-4 flex-row justify-center gap-12 mt-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#e44d26] flex items-center justify-center shadow-lg">
                    <svg width="40" height="40" viewBox="0 0 128 128"><path fill="#fff" d="M19.5 116.1L8.1 0h111.8l-11.4 116.1L63.9 128" /><path fill="#f16529" d="M64 117.6l36.8-10.2 9.8-109.7H64" /><path fill="#ebebeb" d="M64 52.6H41.7l1 11.2H64v11.1H31.2l-.3-3.2-2.3-25.7H64zm0-22.2H38.2l.9 11.1H64z" /><path fill="#fff" d="M64 86.2H53.2l-.7-7.7H42.2l1.3 14.6 20.5 5.7zm0-22.5v11.1h10.2l-.9 10.1-9.3 2.5v11.1l20.5-5.7.1-1.1 2.3-25.7H64zm0-22.2v11.1h24.7l.9-11.1z" /><path fill="#fff" d="M64 0v11.1h24.7l.9-11.1z" /></svg>
                  </div>
                  <span className="text-[#e44d26] font-semibold mt-2">HTML</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#2965f1] flex items-center justify-center shadow-lg">
                    <svg width="40" height="40" viewBox="0 0 128 128"><path fill="#fff" d="M19.5 116.1L8.1 0h111.8l-11.4 116.1L63.9 128" /><path fill="#2965f1" d="M64 117.6l36.8-10.2 9.8-109.7H64" /><path fill="#ebebeb" d="M64 52.6H41.7l1 11.2H64v11.1H31.2l-.3-3.2-2.3-25.7H64zm0-22.2H38.2l.9 11.1H64z" /><path fill="#fff" d="M64 86.2H53.2l-.7-7.7H42.2l1.3 14.6 20.5 5.7zm0-22.5v11.1h10.2l-.9 10.1-9.3 2.5v11.1l20.5-5.7.1-1.1 2.3-25.7H64zm0-22.2v11.1h24.7l.9-11.1z" /><path fill="#fff" d="M64 0v11.1h24.7l.9-11.1z" /></svg>
                  </div>
                  <span className="text-[#2965f1] font-semibold mt-2">CSS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#f7df1e] flex items-center justify-center shadow-lg">
                    <svg width="40" height="40" viewBox="0 0 128 128"><path fill="#fff" d="M19.5 116.1L8.1 0h111.8l-11.4 116.1L63.9 128" /><path fill="#f7df1e" d="M64 117.6l36.8-10.2 9.8-109.7H64" /><path fill="#ebebeb" d="M64 52.6H41.7l1 11.2H64v11.1H31.2l-.3-3.2-2.3-25.7H64zm0-22.2H38.2l.9 11.1H64z" /><path fill="#fff" d="M64 86.2H53.2l-.7-7.7H42.2l1.3 14.6 20.5 5.7zm0-22.5v11.1h10.2l-.9 10.1-9.3 2.5v11.1l20.5-5.7.1-1.1 2.3-25.7H64zm0-22.2v11.1h24.7l.9-11.1z" /><path fill="#fff" d="M64 0v11.1h24.7l.9-11.1z" /></svg>
                  </div>
                  <span className="text-[#f7df1e] font-semibold mt-2">JS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[#61dafb] flex items-center justify-center shadow-lg">
                    <svg width="40" height="40" viewBox="0 0 128 128"><circle cx="64" cy="64" r="60" fill="#fff" /><g><circle cx="64" cy="64" r="10" fill="#61dafb" /><path fill="#61dafb" d="M64 24c-22 0-40 18-40 40s18 40 40 40 40-18 40-40-18-40-40-40zm0 72c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" /></g></svg>
                  </div>
                  <span className="text-[#61dafb] font-semibold mt-2">REACT</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>














    </div>
  )
}

export default Home