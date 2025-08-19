import aword from '@/../public/assets/Aword.jpg'
import Image from 'next/image'
import React, { } from 'react'
import Marquee from 'react-fast-marquee'
import ExNavbar from './ExNavbar'
import { FaPlay } from 'react-icons/fa'


function Hero() {


    return (
        <div className="w-full bg-mint">
            <ExNavbar />
            {/* hero section */}
            <div className="px-[5%] bg-success" style={{
                backgroundImage: "url('pattern1.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="max-w-screen-xl mx-auto relative z-30 ">
                    <div className=" min-h-[600px] w-full text-white flex flex-col items-center rounded-lg relative z-20" >
                        <div className="max-w-3xl px-8 lg:px-0 space-y-3 text-center pt-20 relative z-20">
                            <h3 className='text-3xl sm:text-4xl md:text-5xl font-medium font-akshar leading-10 lg:leading-14'><span className='font-light'>Welcome to</span> Moulvibazar Jameya Islamia Alim Madrasah </h3>
                            <p className='text-sm sm:text-lg font-normal'> Guiding students to excel academically, spiritually, and morally in a nurturing environment. Empowering the next generation with profound Islamic wisdom and timeless values.</p>

                            {/* apply button */}
                            <button className="mt-6 py-3 px-4 bg-white rounded-sm text-lg text-success cursor-pointer hover:bg-white/90 transform hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center gap-2 mx-auto">
                                <FaPlay />
                                Watch Our Story
                            </button>
                        </div>

                        <div
                            className=" absolute z-20 -bottom-20 sm:-bottom-40 lg:-bottom-32 left-1/2 transform -translate-x-1/2 bg-no-repeat bg-cover p-4 bg-mint rounded-lg max-w-2xl lg:max-w-3xl w-full "

                        >
                            <Image
                                src={aword}
                                alt=""
                                height={400}
                                width={800}
                                className=" h-52 sm:h-80 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* notice section */}
            <div className="">
                <div className="h-[100px] sm:h-[180px] lg:h-[150px]">
                </div>
                <div className="py-2 bg-success px-[5%]">
                    <Marquee className='text-white max-w-screen-xl mx-auto'>
                        <span className='text-xl font-semibold mr-2'>Notice</span>
                        |
                        <span className='text-lg font-normal ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </span>  </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Hero