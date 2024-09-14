import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneVolume, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className='mt-10 bg-[#020a27] justify-self-end'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-16 mx-auto'>
                <div className='basis-1/4 flex flex-col px-4 gap-4'>
                    <p className='uppercase text-lg font-semibold text-white'>About Company</p>
                    <p className='text-gray-300 font-normal'>
                        Vertex Elite is a consulting, IT staffing solutions and workforce support services. We are based out of Houston, TX.
                    </p>
                    <p className='uppercase text-md font-semibold text-white'>Follow Us</p>
                    <p className='flex flex-wrap gap-2'>
                        <span className='bg-[#0f588c] p-2 rounded'>
                            <FaLinkedinIn className='text-yellow-500' />
                        </span>
                        <span className='bg-[#0f588c] p-2 rounded'>
                            <FaTwitter className='text-yellow-500' />
                        </span>
                        <span className='bg-[#0f588c] p-2 rounded'>
                            <FaFacebookF className='text-yellow-500' />
                        </span>
                        <span className='bg-[#0f588c] p-2 rounded'>
                            <FaInstagram className='text-yellow-500' />
                        </span>
                    </p>
                </div>
                <div className='basis-1/4 flex flex-col flex-wrap px-4 gap-4'>
                    <p className='uppercase text-lg font-semibold text-white'>What We DO</p>
                    <div className='flex-1 flex flex-col gap-2'>
                        <p className='text-gray-300 font-normal'>
                        Development Services
                        </p>
                        <p className='text-gray-300 font-normal'>
                        Emerging Technology
                        </p>
                        <p className='text-gray-300 font-normal'>
                        Staffing
                        </p>
                        <p className='text-gray-300 font-normal'>
                        IT Consulting
                        </p>
                        <p className='text-gray-300 font-normal'>
                        Digital marketing
                        </p>
                    </div>
                </div>
                <div className='basis-1/4 flex flex-col flex-wrap px-4 gap-4'>
                    <p className='uppercase text-lg font-semibold text-white'>Industries</p>
                    <div className='flex-1 flex flex-col gap-2'>
                        <p className='text-gray-300 font-normal'>
                        Aerospace and Defense
                        </p>
                        <p className='text-gray-300 font-normal'>
                        Automotive
                        </p>
                        <p className='text-gray-300 font-normal'>
                        Banking
                        </p>
                        <p className='text-gray-300 font-normal'>
                        Education
                        </p>
                        <p className='text-gray-300 font-normal'>
                        HealthCare
                        </p>
                        <p className='text-gray-300 font-normal'>
                        High Tech
                        </p>
                        <p className='text-gray-300 font-normal'>
                        Media & entertainment
                        </p>
                    </div>
                </div>
                <div className='basis-1/4 flex flex-col px-4 gap-4'>
                    <p className='uppercase text-lg font-semibold text-white'>Contact Us</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-2 text-white'> <span className='rounded-full p-1 border border-white'><FaMapMarkerAlt className='text-md text-yellow-500' /></span> 9950 Westpark Dr Suite
127 Houston, TX 77063</div>
                        <div className='flex items-center gap-2 text-white'> <span className='rounded-full p-1 border border-white'><MdEmail className='text-md text-yellow-500' /></span> 
info@vertexelites.com</div>
                        <div className='flex items-center gap-2 text-white'> <span className='rounded-full p-1 border border-white'><FaPhoneVolume className='text-md text-yellow-500' /></span> 
+1 (703) 220-1546</div>
                    </div>
                </div>
            </div>
            <hr />
            <p className='py-2 px-10 text-center text-white'>
                © Copyright 2024 All rights reserved by Vertex Elite
            </p>
        </div>
    )
}

export default Footer
