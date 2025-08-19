import { Carousel, CarouselItem, CustomCarouselContent, CustomCarouselNext, CustomCarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import teacher from '@/../public/assets/teacher.svg'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

function OurTeachers() {

    

    return (
        <section className="px-[5%] bg-success border " style={{
                backgroundImage: "url('pattern1.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            <div className="max-w-screen-xl mx-auto py-16 md:py-20">
                <div className="relative flex flex-col sm:flex-row justify-between sm:items-end gap-5">
                    <header className="sm:w-1/2 space-y-2 sm:space-y-4">
                        <h1>
                            <span className='text-4xl sm:text-5xl font-medium font-akshar text-white'>Our Teachers</span>
                        </h1>

                    </header>
                    <div className=" sm:absolute right-40">
                        <Link href={"/property"}>
                            <button className='px-5 py-3 bg-white rounded cursor-pointer'>Explore All</button>
                        </Link>
                    </div>
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
                                        <div key={i} className="pt-2 px-2 flex flex-col items-center bg-mint rounded group relative overflow-hidden">
                                            <div className="relative w-full">
                                                <Image
                                                    src={teacher}
                                                    alt="teacher img"
                                                    height={230}
                                                    width={250}
                                                    className="w-full transform transition-transform duration-300 "
                                                />

                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center 
                                    opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                                    transition-all duration-700 ease-in-out">
                                                    <Dialog>
                                                        <DialogTrigger>
                                                            <button className="border border-white text-white px-4 py-2 rounded cursor-pointer">
                                                                View Profile
                                                            </button>
                                                        </DialogTrigger>
                                                        {/* ! max-w problem */}
                                                        <DialogContent>
                                                            <div className="grid grid-cols-1 sm:grid-cols-3  sm:gap-8 mt-6  ">
                                                                <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
                                                                    <Image
                                                                        src={teacher}
                                                                        alt="teacher img"
                                                                        height={200}
                                                                        width={200}
                                                                        className="w-full max-w-48 transform transition-transform duration-300 group-hover:scale-105"

                                                                    />
                                                                    <div className="text-center sm:text-start py-2 sm:py-4 space-y-1">
                                                                        <p className="text-lg font-medium text-neutral">Lorem ipsum</p>
                                                                        <p className="text-base font-normal text-font-2">Managing Committee</p>
                                                                    </div>
                                                                </div>
                                                                <div className="rounded col-span-2 p-8 sm:px-12 sm:py-8 bg-mint flex flex-col justify-center gap-2">
                                                                    <div className="flex items-center justify-start gap-2">
                                                                        <p className='text-lg font-medium text-neutral'>Name:</p>
                                                                        <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                                    </div>
                                                                    <div className="flex items-center justify-start gap-2">
                                                                        <p className='text-lg font-medium text-neutral'>Name:</p>
                                                                        <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                                    </div>
                                                                    <div className="flex items-center justify-start gap-2">
                                                                        <p className='text-lg font-medium text-neutral'>Name:</p>
                                                                        <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                                    </div>
                                                                    <div className="flex items-center justify-start gap-2">
                                                                        <p className='text-lg font-medium text-neutral'>Name:</p>
                                                                        <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                                    </div>
                                                                    <div className="flex items-center justify-start gap-2">
                                                                        <p className='text-lg font-medium text-neutral'>Name:</p>
                                                                        <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                                    </div>
                                                                    <div className="flex items-center justify-start gap-2">
                                                                        <p className='text-lg font-medium text-neutral'>Name:</p>
                                                                        <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                                    </div>
                                                                    <div className="flex items-center justify-start gap-2">
                                                                        <p className='text-lg font-medium text-neutral'>Name:</p>
                                                                        <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </DialogContent>
                                                    </Dialog>
                                                </div>
                                            </div>

                                            <div className="text-center py-2 sm:py-4 space-y-1">
                                                <p className="text-lg font-medium text-neutral">Lorem ipsum</p>
                                                <p className="text-base font-normal text-font-2">Managing Committee</p>
                                            </div>
                                        </div>
                                    </div>



                                </CarouselItem>
                    )
                        }
                </CustomCarouselContent>
                <CustomCarouselPrevious aria-label="Previous Blog" />
                <CustomCarouselNext aria-label="Next Blog" />
            </Carousel>


        </div>
        </section >
    )
}

export default OurTeachers