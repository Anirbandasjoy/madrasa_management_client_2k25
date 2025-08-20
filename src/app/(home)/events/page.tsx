'use client'
import { EventCardSkeleton } from '@/components/layout/home/events/EventCardSkeleton'
import Headline from '@/components/layout/home/ReusableComponents/Headline'
import { useGetAllEventQuery } from '@/Redux/features/event/eventApi'
import Image from 'next/image'
import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { IoArrowForwardOutline } from 'react-icons/io5'

function Page() {

    const { data, isLoading, isError } = useGetAllEventQuery({})
    const events = data?.data.data
    console.log(events)

    return (
        <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto ">
                <Headline Title='Our Events' subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-18">
                    {
                        events?.map((event) =>
                            <div key={event._id} className="flex flex-col items-center bg-mint rounded group relative overflow-hidden">

                                <Image
                                    src={event.images?.[0] || '/default-image.jpg'}
                                    alt="teacher img"
                                    height={200}
                                    width={350}
                                    className="w-full h-[250px] object-cover"
                                />


                                <div className="text-start px-3">
                                    <p className="text-lg font-normal text-neutral py-2">{event.title} </p>
                                    <div className="flex items-center justify-between pb-3">
                                        <p className="text-base font-normal text-font-2 flex items-center gap-1"><CiCalendar className='w-5 h-5' /> 30 Nov, 2024</p>
                                        <button className='py-1.5 px-4 bg-success flex items-center gap-1 text-white text-sm rounded-sm'>
                                            Preview <IoArrowForwardOutline />
                                        </button>

                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        isLoading && Array.from({ length: 4 }).map((_, i) =>
                            <EventCardSkeleton key={i} />
                        )
                    }
                </div>
                {
                    isError && <div className="py-10 text-red-700 px-4 rounded relative my-4 text-center" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline ml-2">Something went wrong. Please try again.</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Page