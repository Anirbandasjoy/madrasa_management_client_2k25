import React from 'react'
import Image from "next/image";
import eventsImage from '@/../public/assets/events.svg'

interface NoticeCardProps {
    title: string;
    date: string;
}

function EventsCard({ title, date }: NoticeCardProps) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-custom">
            <Image src={eventsImage} alt="events img" height={95} width={95} className='rounded w-full sm:w-auto'/>
            <div className="flex flex-col justify-between">
                <p className="text-lg font-normal text-gray-800 mb-1">{title}</p>
                <p className="text-sm font-normal text-font-2 mb-3">{date}</p>
            </div>
        </div>
    )
}

export default EventsCard