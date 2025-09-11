import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CodeXml, Search, Instagram, Twitter, Github, Download, SquareArrowOutUpRight } from "lucide-react";

import blog5 from '../assets/blog5.jpeg'
import '../App.css'



const Blog5 = () => {
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
          <h1 className='text-6xl text-teal-400 font-semibold pb-20'>How Web Developers Build the Digital World Around Us</h1>

          <hr className='border-gray-400 rounded-lg border w-full' />
          <div className='grid md:grid-cols-[1fr_200px] gap-4 py-6'>
            <div className='py-1 px-3 grid md:grid-cols-2 items-center   text-[27px] font-bold'><div className='flex items-center gap-4'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>10.Oct 2025</span></div>
              <div className='flex gap-5'>   <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>1 Min</span> </div></div>
            <div>        <button className='bg-teal-300 hover:bg-teal-500  p-3 rounded-full'><SquareArrowOutUpRight className=' ' /></button>
            </div>

          </div>
          <hr className='border-gray-400 rounded-lg border w-full mb-10' />

          <div className='flex justify-center mb-10'><img src={blog5} alt="" srcSet="" className='h-[500px]  w-[1000px]' /></div>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>Every website or application starts with an idea, but it’s the web developer who transforms that idea into something real. From e-commerce stores and social media platforms to educational portals and entertainment apps, developers use code to design and implement the features we interact with daily. Their work shapes how businesses connect with customers and how people engage with the digital world.</p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Designing User-Friendly Experiences</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
           Web developers don’t just write code—they create experiences. By combining design principles with technical knowledge, they ensure websites are fast, responsive, and easy to navigate. From smooth checkout processes in online shops to interactive dashboards in web apps, developers focus on making digital platforms user-friendly and accessible for everyone. </p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>Building for Growth and Innovation</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
          The digital world never stands still, and web developers play a vital role in pushing it forward. They integrate new technologies like AI, cloud computing, and Web3 into websites and applications, keeping them relevant and future-proof. By constantly innovating, developers make sure the digital platforms we rely on are scalable, secure, and ready for what comes next.   </p>
          <h3 className='text-teal-400 text-2xl  font-semibold mb-16'>The Invisible Architects of the Web</h3>
          <p className='text-gray-400 font-semibold text-[22px] mb-16 blog_p'>
          While their work often goes unnoticed, web developers are the architects of the modern internet. Every search, every click, and every online interaction is made possible by the code they write. They don’t just build websites—they build the digital infrastructure that powers our daily lives, shaping the way we learn, shop, communicate, and explore the world online.</p>
        </div>

      </section>

    </div>
  )
}

export default Blog5