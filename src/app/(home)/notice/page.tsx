'use client'
import { NoticeCardSkeleton } from '@/components/layout/home/notice/NoticeCardSkeleton'
import Headline from '@/components/layout/home/ReusableComponents/Headline'
import { useGetAllNoticesQuery } from '@/Redux/features/notices/noticesApi'
import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { IoArrowForwardOutline } from 'react-icons/io5'

function NoticePage() {

    const { data, isLoading, isError } = useGetAllNoticesQuery({})
    const notices = data?.data.data || []
    
    console.log(data, "notice data")

    return (
        <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto ">


                <Headline Title='All Notices' subTitle='Stay updated with all announcements, events, and important information' />


                <h1 className='text-[40px] font-medium text-success text-start font-akshar pb-3'>New</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-18">

                    {
                        notices?.map((notice) =>
                            <div key={notice._id} className="bg-color-7 rounded p-6 space-y-4">
                                {/* Icon + Title */}
                                <div className="flex items-start gap-3">
                                    <div className="bg-success p-3 rounded-full">
                                        <Image src={'/assets/Megaphone.svg'} alt='Mega phone' width={34} height={34} className='max-w-40' />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-medium text-font-1 leading-snug">
                                            {notice.name}
                                        </h2>

                                        {/* Date */}
                                        <div className="flex items-center gap-2 text-sm text-font-2 mt-1">
                                            <CalendarDays className="w-4 h-4" />
                                            <span>30 Nov, 2024</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-base text-font-2 leading-relaxed line-clamp-2">
                                    {notice.description}
                                </p>

                                {/* Button */}
                                <button className="inline-flex items-center gap-1 bg-success text-white text-sm px-4 py-2 rounded-sm hover:bg-success/90 transition cursor-pointer">
                                    Read More <IoArrowForwardOutline className='w-5 h-5' />
                                </button>
                            </div>
                        )
                    }

                    {
                        isLoading && Array.from({ length: 2 }).map((_, i) =>
                            <NoticeCardSkeleton key={i} />
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

export default NoticePage