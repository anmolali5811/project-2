import Blogs from '@/components/inisghts/blogs'
import HaveQuestion from '@/components/inisghts/have-question'
import React from 'react'

const page = () => {
  return (
    <div className="h-full w-full overflow-hidden pb-12">
      <div className='h-60 bg-no-repeat bg-cover bg-center flex items-center justify-center' style={{backgroundImage: 'url("https://img.freepik.com/premium-photo/future-earth-environment-generative-ai_861549-906.jpg")'}}>
        <h2 className='text-4xl font-medium text-center text-white'>
          Stay Up-to-Date with Our Latest Insights and Expertise.
        </h2>
      </div>
      <div className='px-16 py-8'>
        <Blogs />
      </div>
      <div className='px-16 py-8'>
        <HaveQuestion />
      </div>
    </div>
  )
}

export default page
