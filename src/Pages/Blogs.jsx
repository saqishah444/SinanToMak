import React from 'react'

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
            <div><p className='text-gray-300 mb-20 '>My thoughts on technology and business, welcome to subscribe</p></div>
            <div className='border-teal-400 py-4 px-9 border-4 rounded-[40px] mb-20 '> <span className='text-gray-300 text-2xl'>Subscribe My Blogs</span> </div>
            <hr  className='border-gray-400 rounded-lg border w-full'/>
          </div>

        </div>

      </section>
      <section>
        <div>
          helladf
        </div>
      </section>


     </div>
  )
}

export default Blogs