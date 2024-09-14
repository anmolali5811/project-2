import React from 'react'

const RelatedBlogs = () => {
    return (
        <div className='p-16 flex flex-col gap-8'>
            <h2 className='text-4xl font-bold text-center'><span className='text-[#1A1F65]'>Related Blogs </span></h2>
            <div className='flex gap-8 justify-between'>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://www.dwellfox.com/Assets/blog/b5.jpg" alt="Sunset in the mountains" />
                    <div className="px-4 pt-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-4 py-4 text-md font-medium">
                        Read More
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://www.dwellfox.com/Assets/blog/b5.jpg" alt="Sunset in the mountains" />
                    <div className="px-4 pt-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-4 py-4 text-md font-medium">
                        Read More
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://www.dwellfox.com/Assets/blog/b5.jpg" alt="Sunset in the mountains" />
                    <div className="px-4 pt-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-4 py-4 text-md font-medium">
                        Read More
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedBlogs
