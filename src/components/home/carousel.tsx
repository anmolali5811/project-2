import React from 'react'
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import Carousel from "react-multi-carousel";

const data = [
    {
        url: "https://www.dwellfox.com/Assets/Videos/logic.mp4",
        desc: <>Dwellfox for introducing an ERA <br /> of digital revolution</>
    },
    {
        url: "https://www.dwellfox.com/Assets/Videos/info.mp4",
        desc: <>Accelerating cloud adoption for <br /> inclusive business growth</>
    },
]

const CustomDot = ({ ...rest }) => {
    const {
      onClick,
      onMove,
      index,
      active,
    } = rest;
    return (
      <div
        onClick={() => onClick()}
        className={`mb-10 h-1 w-20 cursor-pointer mx-4 ${active ? "bg-white" : "bg-[#A5A5A5]"}`}
      >
      </div>
    );
  };

const CustomCarousel = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="max-h-[95vh]"
            customDot={<CustomDot />}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {
                data.map((item, i) => {
                    return (
                        <div className='h-full w-full m-auto relative' key={i}>
                            <video src={item.url} autoPlay loop typeof="video/mp4"></video>
                            <div className='absolute top-0 h-[100%] w-full text-white flex items-center justify-center flex-col gap-4'>
                                <h2 className='text-4xl font-bold text-center'>{item.desc}</h2>
                                <div className='flex gap-4 items-center px-5 py-2 cursor-pointer w-fit font-medium hover:text-[#1A1F65] hover:bg-white hover:shadow-lg transition-all text-white rounded-2xl'>
                                    <span className='text-2xl'><IoArrowForwardCircleOutline /></span>
                                    <span className='text-lg'>
                                        Explore
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}

export default CustomCarousel