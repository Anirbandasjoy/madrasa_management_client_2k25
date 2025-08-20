import { Carousel, CarouselItem, CustomCarouselContent, CustomCarouselNextWTS, CustomCarouselPreviousWTS } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { IoArrowForwardOutline } from 'react-icons/io5';

function MoreEvent() {
    return (
        <section className=" pb-20" >
            <div className="relative flex flex-col sm:flex-row justify-between sm:items-end gap-5">
                <header className="sm:w-1/2 space-y-2 sm:space-y-4">
                    <h1>
                        <span className='text-4xl sm:text-5xl font-medium font-akshar text-success'>More Events</span>
                    </h1>

                </header>
                {/* <div className=" sm:absolute right-40">
                    <Link href={"/event"}>
                        <button className='px-5 py-3 bg-white rounded cursor-pointer'>Explore All</button>
                    </Link>
                </div> */}
            </div>
            <Carousel
                className="w-full mt-5 sm:mt-7 lg:mt-9 2xl:mt-12"
                aria-label="Our courses Carousel"
            >
                <CustomCarouselContent role="list" className=''>
                    {
                        Array.from({ length: 10 }).map((_, i) =>
                            <CarouselItem role='listitem'
                                key={i}
                                className="sm:basis-1/2 lg:basis-1/4"
                            >
                                <div className="">
                                    <div key={i} className="flex flex-col items-center bg-mint rounded group relative overflow-hidden">

                                        <Image
                                            src={'/assets/events.svg'}
                                            alt="teacher img"
                                            height={200}
                                            width={350}
                                            className="w-full h-[250px] object-cover"
                                        />


                                        <div className="text-start px-3">
                                            <p className="text-lg font-normal text-neutral py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed </p>
                                            <div className="flex items-center justify-between pb-3">
                                                <p className="text-base font-normal text-font-2 flex items-center gap-1"><CiCalendar className='w-5 h-5' /> 30 Nov, 2024</p>
                                                <button className='py-1.5 px-4 bg-success flex items-center gap-1 text-white text-sm rounded-sm'>
                                                    Preview <IoArrowForwardOutline />
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </CarouselItem>
                        )
                    }
                </CustomCarouselContent>
                <CustomCarouselPreviousWTS aria-label="Previous Blog" />
                <CustomCarouselNextWTS aria-label="Next Blog" />
            </Carousel>



        </section >
    )
}

export default MoreEvent