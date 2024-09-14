'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaCaretDown  } from 'react-icons/fa'
const Navbar = () => {
    const pathname = usePathname();
    return (
        <header className='sticky top-0 z-40 border-b-[1px] border-gray-300 shadow bg-white h-14'>
            <nav className='flex justify-between items-center py-1 px-16 mx-auto bg-white h-full'>
                <div className=''>
                    <Link href="/" className='text-2xl font-bold text-[#211E6D]'>VertexElite</Link>
                </div>
                <div className='flex gap-6'>
                    <div className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/about-us" ? "text-[#211E6D] border-b-4 border-b-[#211E6D]" : ""}`}>
                        <Link href={"/about-us"}>
                            Why VertexElite 
                        </Link>
                    </div>
                    <div className='px-3 py-2 cursor-pointer font-semibold relative group'>
                    <Link href={"/"} className={`flex items-center ${["consulting-services", "staffing"].includes(pathname) ? "text-[#211E6D] border-b-4 border-b-[#211E6D]" : ""}`}>
                        What We Do <FaCaretDown  />
                        </Link>
                        <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-0">Consulting Services</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-1">Staffing</a>
                            </div>
                        </div>
                        </div>
                        <div className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/insights" ? "text-[#211E6D] border-b-4 border-b-[#211E6D]" : ""}`}>
                        <Link href={"/insights"}>
                            Insights 
                        </Link>
                    </div>
                    <div className='px-3 py-2 cursor-pointer font-semibold relative group'>
                    <Link href={"/"} className={`flex items-center ${["analytics-and-reporting", "application-development", "big data", "cloud-and-infrastructure", "data-warehousing", "oracle-epm", "sap-erp", "24/7-it-services"].includes(pathname) ? "text-[#211E6D] border-b-4 border-b-[#211E6D]" : ""}`}>
                            Industries <FaCaretDown  />
                        </Link>
                        <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden group-hover:block" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            <div className="py-1" role="none">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-0">Analytics and Reporting</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-1">Application Development</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-2">BIG Data</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-3">Cloud and Infrastructure</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-4">Data Warehousing</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-5">Oracle EPM</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-6">SAP ERP</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabIndex={-1} id="menu-item-7">24/7 IT Services</a>
                            </div>
                        </div>
                    </div>
                    <div className={`px-3 py-2 cursor-pointer font-semibold ${pathname === "/contact-us" ? "text-[#211E6D] border-b-4 border-b-[#211E6D]" : ""}`}>
                        <Link href={"/contact-us"}>
                            Contact Us 
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
