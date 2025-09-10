import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpeg'
import { ChevronsRight } from 'lucide-react'

const Blogs = () => {
  return (
    <div className='bg-gray-800 h-full '>
      <section id='blog_hero' >
        <div className='container mx-auto pt-24 '>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='text-teal-400 font-medium text-8xl'>Blogs</h2>
            <div className='flex justify-center items-center '>
              <div className='w-3 h-3 border-[8px] border-teal-400 rounded-full'></div>
              <div className='w-60 h-1 bg-teal-400'></div>
              <div className='w-3 h-3 border-[8px] border-teal-400 rounded-full'></div>
            </div>
            <div className='text-center'><p className='text-gray-300 mb-20 '>My thoughts on technology and business, welcome to subscribe</p></div>
            <div className='border-teal-400 py-4 px-9 border-4 rounded-[40px] mb-20 '> <span className='text-gray-300 text-2xl'>Subscribe My Blogs</span> </div>
            <hr className='border-gray-400 rounded-lg border w-full' />
          </div>

        </div>

      </section>

      {/* First Blog */}
      <section id='firstblog'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-[200px_1fr] gap-16 pt-10 px-10 pb-10'>
            <div className=''><img src={blog1} alt="" srcSet="" className='h-48  w-[full]' /></div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-7xl text-teal-400 font-semibold'>What does it take to become a Web developer?</h1>
              <p className='text-gray-400 text-[30px] font-semibold '>Web Development, also known as Website Development, encompasses a variety of tasks and process involved in creating websites for the internet...</p>
              <Link to="/blog1" className='text-teal-400  font-semibold  text-3xl flex'><span className='border-b-2  border-gray-300'>Read More</span>  <ChevronsRight className='ml-1 mt-1' /></Link>
              <div className=' items-center  gap-4 grid md:grid-cols-[340px_1fr] '>
                <div className='flex '>
                  <p className='bg-gray-600 py-2 px-3 rounded-3xl flex justify-center items-center'><span className='text-gray-300  font-semibold text-[18px]'>Web Developer</span> </p>
                  <div className='flex'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span></div>
                </div>
              <div className='py-1 px-3 flex gap-5 text-[27px] font-bold'>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>10.Oct 2025</span>
                  <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>1 Min</span> </div>
              </div>
            </div>
          </div>



          <hr className='border-gray-400 rounded-lg border w-full' />
        </div>
      </section>


      {/* Second Blog */}
      <section id='secondblog'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-[200px_1fr] gap-16 pt-10 px-10 pb-10'>
            <div className=''><img src={blog2} alt="" srcSet="" className='h-48  w-[full]' /></div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-7xl text-teal-400 font-semibold'>Why Every Business Needs a Skilled Web Developer?</h1>
              <p className='text-gray-400 text-[30px] font-semibold '>Explains how web developers create functional, user-friendly, and profitable websites that help businesses grow online....</p>
              <Link to="/blog2" className='text-teal-400  font-semibold  text-3xl flex'><span className='border-b-2  border-gray-300'>Read More</span>  <ChevronsRight className='ml-1 mt-1' /></Link>
              <div className=' items-center  gap-4 grid md:grid-cols-[340px_1fr] '>
                <div className='flex '>
                  <p className='bg-gray-600 py-2 px-3 rounded-3xl flex justify-center items-center'><span className='text-gray-300  font-semibold text-[18px]'>Web Developer</span> </p>
                  <div className='flex'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span></div>
                </div>
              <div className='py-1 px-3 flex gap-5 text-[27px] font-bold'>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>11.Nov 2024</span>
                  <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>26 Min</span> </div>
              </div>
            </div>
          </div>



          <hr className='border-gray-400 rounded-lg border w-full' />
        </div>
      </section>




      {/* Third Blog */}
      <section id='thirdblog'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-[200px_1fr] gap-16 pt-10 px-10 pb-10'>
            <div className=''><img src={blog3} alt="" srcSet="" className='h-48  w-[full]' /></div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-7xl text-teal-400 font-semibold'>Essential Skills That Make a Successful Web Developer</h1>
              <p className='text-gray-400 text-[30px] font-semibold '>Covers the must-have technical and soft skills—like HTML, CSS, JavaScript, problem-solving, and teamwork—that shape a great developer...</p>
              <Link to="/blog3" className='text-teal-400  font-semibold  text-3xl flex'><span className='border-b-2  border-gray-300'>Read More</span>  <ChevronsRight className='ml-1 mt-1' /></Link>
              <div className=' items-center  gap-4 grid md:grid-cols-[340px_1fr] '>
                <div className='flex '>
                  <p className='bg-gray-600 py-2 px-3 rounded-3xl flex justify-center items-center'><span className='text-gray-300  font-semibold text-[18px]'>Web Developer</span> </p>
                  <div className='flex'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span></div>
                </div>
              <div className='py-1 px-3 flex gap-5 text-[27px] font-bold'>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>22.Oct 2025</span>
                  <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>44 Min</span> </div>
              </div>
            </div>
          </div>



          <hr className='border-gray-400 rounded-lg border w-full' />
        </div>
      </section>




     {/* Fourth Blog */}
      <section id='fourthblog'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-[200px_1fr] gap-16 pt-10 px-10 pb-10'>
            <div className=''><img src={blog4} alt="" srcSet="" className='h-48  w-[full]' /></div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-7xl text-teal-400 font-semibold'>Top Tools Every Web Developer Should Use</h1>
              <p className='text-gray-400 text-[30px] font-semibold '>An overview of the best frameworks, libraries, and productivity tools that simplify coding and speed up web development...</p>
              <Link to="/blog4" className='text-teal-400  font-semibold  text-3xl flex'><span className='border-b-2  border-gray-300'>Read More</span>  <ChevronsRight className='ml-1 mt-1' /></Link>
              <div className=' items-center  gap-4 grid md:grid-cols-[340px_1fr] '>
                <div className='flex '>
                  <p className='bg-gray-600 py-2 px-3 rounded-3xl flex justify-center items-center'><span className='text-gray-300  font-semibold text-[18px]'>Web Developer</span> </p>
                  <div className='flex'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span></div>
                </div>
              <div className='py-1 px-3 flex gap-5 text-[27px] font-bold'>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>22.Oct 2025</span>
                  <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>44 Min</span> </div>
              </div>
            </div>
          </div>



          <hr className='border-gray-400 rounded-lg border w-full' />
        </div>
      </section>




      {/* Fifth Blog */}
      <section id='fifthblog'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-[200px_1fr] gap-16 pt-10 px-10 pb-10'>
            <div className=''><img src={blog5} alt="" srcSet="" className='h-48  w-[full]' /></div>
            <div className='flex flex-col gap-5'>
              <h1 className='text-7xl text-teal-400 font-semibold'>How Web Developers Build the Digital World Around Us</h1>
              <p className='text-gray-400 text-[30px] font-semibold '>A simple breakdown of how developers turn ideas into websites and apps we use daily, from code to design to interactivity...</p>
              <Link to="/blog5" className='text-teal-400  font-semibold  text-3xl flex'><span className='border-b-2  border-gray-300'>Read More</span>  <ChevronsRight className='ml-1 mt-1' /></Link>
              <div className=' items-center  gap-4 grid md:grid-cols-[340px_1fr] '>
                <div className='flex '>
                  <p className='bg-gray-600 py-2 px-3 rounded-3xl flex justify-center items-center'><span className='text-gray-300  font-semibold text-[18px]'>Web Developer</span> </p>
                  <div className='flex'><span className='text-gray-300 py-1 px-3 flex gap-5 text-[27px] font-bold'>Text</span>   <span className='text-gray-400 py-1 px-3 flex gap-5 text-[27px] font-bold'>Sinan</span></div>
                </div>
              <div className='py-1 px-3 flex gap-5 text-[27px] font-bold'>    <span className='text-gray-300'>Date</span>  <span className='text-gray-400'>10.Nov 2025</span>
                  <span className='text-gray-300'>Read</span>  <span className='text-gray-400'>58 Min</span> </div>
              </div>
            </div>
          </div>



          
        </div>
      </section>


     

    </div>
  )
}

export default Blogs