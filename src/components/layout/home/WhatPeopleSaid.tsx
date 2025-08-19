import React from 'react'
import { Carousel, CarouselItem, CustomCarouselContent, CustomCarouselNextWTS, CustomCarouselPreviousWTS } from '@/components/ui/carousel'
import Image from 'next/image'

function WhatPeopleSaid() {
    return (
        <section className="px-[5%] bg-white " >
            <div className="max-w-screen-xl mx-auto py-16 md:py-20">
                <div className="relative flex flex-col sm:flex-row justify-between sm:items-end gap-5">
                    <header className="sm:w-1/2 space-y-2 sm:space-y-4">
                        <h1>
                            <span className='text-4xl sm:text-5xl font-medium font-akshar text-success'>What people said</span>
                        </h1>

                    </header>
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
                                    className="sm:basis-1/2 lg:basis-1/2"
                                >
                                    <div className="border-l-2 border-success w-full py-6 px-8">
                                        <p className='text-lg font-normal text-font-1'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  !”</p>
                                        <div className="flex justify-between items-center mt-4 sm:mt-6 lg:mt-8">
                                            <div className="flex items-center gap-4">
                                                <Image src={'/commenter.jpg'} alt='' height={64} width={64} className='rounded-full' />
                                                <div className="">
                                                    <h4 className='text-neutral text-lg font-medium'>Mr.sunny</h4>
                                                    <h6 className='text-base font-normal text-font-2'>Student</h6>
                                                </div>
                                            </div>
                                            <div className="">
                                                <Image src={'/Quotes.svg'} alt='' height={55} width={55} className='rounded-full' />
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


            </div>
        </section >
    )
}

export default WhatPeopleSaid