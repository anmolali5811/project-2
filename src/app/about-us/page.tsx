import Blogs from '@/components/inisghts/blogs'
import HaveQuestion from '@/components/inisghts/have-question'
import React from 'react'

const page = () => {
  return (
    <div className="h-full w-full overflow-hidden pb-12">
      <div className='h-[340px] w-full bg-cover bg-center flex items-center justify-center' style={{backgroundImage: 'url("https://www.dwellfox.com/Assets/about/About_banner.png")'}}>
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
