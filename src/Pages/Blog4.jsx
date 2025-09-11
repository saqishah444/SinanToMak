import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CodeXml, Search, Instagram, Twitter, Github, Download, SquareArrowOutUpRight } from "lucide-react";

import blog4 from '../assets/blog4.jpg'
import '../App.css'



const Blog4 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div>

      {/* Navbar Start */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 py-7">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-green-300"><CodeXml size={40} /></span>
            <span className="text-white text-3xl font-md">SinanTokmak</span>
          </NavLink>

          {/* Hamburger (mobile) */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-300 hover:text-green-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Menu */}
          <div className={`${isOpen ? "block" : "hidden"} w-full md:w-auto md:flex items-center justify-center`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 text-lg font-medium mt-4 md:mt-0">
              <li>
                <Link to="/" className=
                  "block py-2 px-3  text-white hover:text-green-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className=
                  "block py-2 px-3  text-green-300 hover:text-green-500"
                >
                  Blogs
                </Link>
              </li>
              <li className="flex items-center py-2 px-3">
                <div className="relative">
                  <input
                    type="text"
                    className="pr-10 py-1 pl-2 text-sm rounded-3xl border border-gray-700 focus:outline-none focus:border-green-300 w-40 md:w-48"
                    placeholder="Search..."
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-black">
                    <Search size={18} />
                  </span>
                </div>
              </li>
              <li className="flex items-center space-x-4 py-2 px-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex gap-1 text-sm text-gray-300 hover:text-green-300">
                  <Instagram size={18} /> <span>Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex gap-1 text-sm text-gray-300 hover:text-green-300">
                  <Twitter size={18} /> <span>Twitter</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex gap-1 text-sm text-gray-300 hover:text-green-300">
                  <Github size={18} /> <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}


      <section id='blogsection' className='bg-gray-900 h-fit'>
        <div className='container mx-auto pt-52 px-10 '>
          <h1 className='text-6xl text-teal-400 font-semibold pb-20'>Top Tools Every Web Developer Should Use</h1>

          <hr className='border-gray-400 rounded-lg border w-full' />
          <div className='grid md:grid-cols-[1fr_200px] gap-4 py-6'>
            <div className='py-1 px-3 grid md:grid-cols-2 items-center   text-[27px] font-bold'><div className='flex items-center gap-4'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>10.Oct 2025</span></div>
              <div className='flex gap-5'>   <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>1 Min</span> </div></div>
            <div>        <button className='bg-teal-300 hover:bg-teal-500  p-3 rounded-full'><SquareArrowOutUpRight className=' ' /></button>
            </div>

          </div>
          <hr className='border-gray-400 rounded-lg border w-full mb-10' />

          <div className='flex justify-center mb-10'><img src={blog4} alt="" srcSet="" className='h-[500px]  w-[1000px]' /></div>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>Every developer needs a reliable code editor, and Visual Studio Code (VS Code) is one of the most popular choices. It offers intelligent code suggestions, built-in Git integration, extensions for almost every framework, and a clean interface. With features like debugging and live server, VS Code boosts productivity and simplifies the coding process.</p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Version Control – Git & GitHub</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
           Version control is essential for tracking changes and collaborating with teams. Git allows developers to manage their code history, while GitHub provides a cloud-based platform to store repositories, collaborate on projects, and contribute to open-source communities. Together, they make teamwork and project management seamless.                    </p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Front-End Frameworks – React & Tailwind CSS</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
           Modern web development often requires frameworks that speed up design and functionality. React is widely used for creating dynamic user interfaces, while Tailwind CSS provides utility-first classes to design responsive and modern layouts quickly. These tools reduce repetitive coding and enhance overall efficiency.   </p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Package Managers – npm & Yarn</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
          To manage project dependencies effectively, developers rely on package managers like npm and Yarn. These tools allow you to install, update, and manage libraries or frameworks easily. They ensure that your project runs smoothly with the right versions of required packages.</p>
        </div>

      </section>

    </div>
  )
}

export default Blog4