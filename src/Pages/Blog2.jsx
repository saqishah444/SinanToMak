import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CodeXml, Search, Instagram, Twitter, Github, Download, SquareArrowOutUpRight } from "lucide-react";

import blog2 from '../assets/blog2.png'
import '../App.css'



const Blog2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <div className='bg-gray-900 h-full'>

      {/* Navbar Start */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-700 py-7">
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
          <h1 className='text-6xl text-teal-400 font-semibold pb-20'>What does it take to become a Web developer?</h1>

          <hr className='border-gray-400 rounded-lg border w-full' />
          <div className='grid md:grid-cols-[1fr_200px] gap-4 py-6'>
            <div className='py-1 px-3 grid md:grid-cols-2 items-center   text-[27px] font-bold'><div className='flex items-center gap-4'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>10.Oct 2025</span></div>
              <div className='flex gap-5'>   <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>1 Min</span> </div></div>
            <div>        <button className='bg-teal-300 hover:bg-teal-500  p-3 rounded-full'><SquareArrowOutUpRight className=' ' /></button>
            </div>

          </div>
          <hr className='border-gray-400 rounded-lg border w-full mb-10' />

          <div className='flex justify-center mb-10'><img src={blog2} alt="" srcSet="" className='h-[500px]  w-[1000px]' /></div>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>In today’s digital-first world, a website is often the first point of contact between a business and its customers. A skilled web developer ensures that this online presence is not only visually appealing but also functional, fast, and responsive across devices. A professional website helps build credibility and sets the tone for how people perceive your brand.</p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Enhancing User Experience:</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
            A good website is more than just design—it’s about user experience. Skilled developers understand how to create smooth navigation, fast-loading pages, and interactive features that keep visitors engaged. By focusing on usability, they help businesses convert casual visitors into loyal customers, improving sales and customer satisfaction.                    </p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Staying Ahead with Technology</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
            Technology changes rapidly, and businesses that fail to keep up often fall behind competitors. A skilled web developer brings in the latest tools, frameworks, and security practices to ensure that a website is modern, safe, and scalable. From integrating payment gateways to building web apps, developers help businesses adapt and grow in the digital landscape.   </p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Saving Time and Money in the Long Run</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
            Hiring a skilled web developer may seem like an investment, but it saves businesses time and money in the long term. Well-written, efficient code reduces maintenance issues, prevents costly downtime, and makes it easier to update features as the business grows. Instead of struggling with broken templates or unresponsive designs, companies can focus on scaling their services while the website runs smoothly.</p>
       <hr className='border-gray-400 rounded-lg border w-full mb-5' />
        </div>

      </section>


       {/* footer start */}
            <section id='footer'>
              <div className='container mx-auto px-[10px] py-5'>
                <div className="grid md:grid-cols-2">
                  <div className="">
                    <div>
                      <div className="flex flex-col gap-2">
                        <p>
                         <span className='text-blue-400 text-[20px]'>©</span> 
                          <Link href="#" className="text-blue-400 text-[20px] mr-2 border-b-2">
                           
                            SinanTokmak
                          </Link>
                          <span className='text-white'> All Right Reserved. Designed By</span>
                          <a href="" className="text-blue-400 text-[20px] ml-2 border-b-2">
                            
                            HTML Codex
                          </a>
                        </p>
                        <p>
                       <span className='text-white'>Distributed By</span>   
                          <Link href="" className="text-blue-400 text-[20px] ml-2 border-b-2">
                            
                            ThemeWagon
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <div className="flex justify-end gap-3">
                        <Link to="/" className="p-2 text-white">
                          
                          Home
                        </Link>
                        <hr />
                        <Link to="#" className="p-2 text-white ">
                          
                          Cookies
                        </Link>
                        <hr />
                        <Link to="#" className="p-2 text-white ">
                          
                          Help
                        </Link>
                        <hr />
                        <Link to="#" className="p-2 text-white ">
                         
                          FQAs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
      
      
              </div>
            </section>

    </div>
  )
}

export default Blog2