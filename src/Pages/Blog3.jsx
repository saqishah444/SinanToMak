import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CodeXml, Search, Instagram, Twitter, Github, Download, SquareArrowOutUpRight } from "lucide-react";

import blog3 from '../assets/blog3.png'
import '../App.css'



const Blog3 = () => {
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
          <h1 className='text-6xl text-teal-400 font-semibold pb-20'>Essential Skills That Make a Successful Web Developer</h1>

          <hr className='border-gray-400 rounded-lg border w-full' />
          <div className='grid md:grid-cols-[1fr_200px] gap-4 py-6'>
            <div className='py-1 px-3 grid md:grid-cols-2 items-center   text-[27px] font-bold'><div className='flex items-center gap-4'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>10.Oct 2025</span></div>
              <div className='flex gap-5'>   <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>1 Min</span> </div></div>
            <div>        <button className='bg-teal-300 hover:bg-teal-500  p-3 rounded-full'><SquareArrowOutUpRight className=' ' /></button>
            </div>

          </div>
          <hr className='border-gray-400 rounded-lg border w-full mb-10' />

          <div className='flex justify-center mb-10'><img src={blog3} alt="" srcSet="" className='h-[500px]  w-[1000px]' /></div>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>A successful web developer begins with strong knowledge of the three core technologies of the web—HTML, CSS, and JavaScript. HTML provides the structure of a webpage, CSS adds styling and design, while JavaScript makes websites interactive and dynamic. Without these fundamentals, it’s nearly impossible to build modern, functional websites that users expect today.</p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Proficiency in Frameworks and Tools</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
           Beyond the basics, developers need to be skilled in popular frameworks and tools that simplify coding and speed up development. Libraries like React, Angular, or Vue help front-end developers build user-friendly interfaces, while back-end frameworks such as Node.js, Django, or Laravel make server-side development easier. Tools like Git, GitHub, and package managers also enhance collaboration and productivity.                    </p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Problem-Solving and Logical Thinking</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
            Web development is more than just writing code—it’s about solving problems efficiently. A successful developer knows how to debug errors, optimize performance, and design solutions that meet client or business needs. Strong logical thinking and analytical skills allow developers to break down complex problems into manageable steps and deliver effective results.   </p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Communication and Continuous Learning</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
            Technical skills alone are not enough. Great web developers also possess strong communication and teamwork abilities to collaborate with designers, clients, and other developers. In addition, the tech world evolves rapidly, so continuous learning is essential. Developers who stay updated with new trends, technologies, and best practices are more adaptable and successful in the long run.</p>
        </div>

      </section>

    </div>
  )
}

export default Blog3