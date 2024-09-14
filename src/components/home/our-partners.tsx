import React from 'react'

const data = [
    "https://www.dwellfox.com/Assets/micro.png",
    "https://www.dwellfox.com/Assets/data.png",
    "https://www.dwellfox.com/Assets/atla.png",
    "https://www.dwellfox.com/Assets/aws.png",
    "https://www.dwellfox.com/Assets/big.png",
    "https://www.dwellfox.com/Assets/shopify.png"
]
const OurPartners = () => {
  return (
    <div className='bg-white gap-8 p-16 flex flex-col'>
       <h2 className='text-4xl font-bold text-center'>Our <span className='text-[#1A1F65]'>Partners</span></h2>
       <div className='flex flex-wrap justify-between gap-4'>
        {
            data.map((img, i) => (
                <img key={i} src={img} alt={img} className='h-20' />
            ))
        }
       </div>
    </div>
  )
}

export default OurPartners
