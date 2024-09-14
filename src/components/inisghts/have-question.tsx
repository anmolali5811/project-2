import React from 'react'

const HaveQuestion = () => {
  return (
    <div className='bg-[#211E6D]  rounded-3xl flex'>
      <div className='flex flex-col justify-between p-16'>
        <h2 className='text-4xl font-medium text-white'>Have a Question? <br /> Get in Touch with Our Experts.</h2>
        <div className='px-10 py-2 cursor-pointer w-fit text-[#211E6D] font-medium bg-white hover:bg-sky-700 transition-all hover:text-white rounded-lg shadow-lg'>
          Connect Us
        </div>
      </div>
      <div className=''>
        <img src="https://www.dwellfox.com/Assets/blog/glob.png" alt="" />
      </div>
    </div>
  )
}

export default HaveQuestion
