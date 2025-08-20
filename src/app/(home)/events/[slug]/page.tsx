import Image from 'next/image'
import React from 'react'
import eventImage from '@/../public/assets/Aword.jpg'
import MoreEvent from '@/components/layout/home/events/MoreEvent'

function EventsPage() {
  return (
    <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto ">
                <div className=" pb-6 sm:py-10">
                    <div className="mb-3 sm:mb-6">
                        <h1 className='text-2xl sm:text-3xl lg:text-[40px] font-medium text-neutral font-akshar '>Lorem ipsum dolor sit amet</h1>
                        <p className='text-lg font-normal text-font-2 mt-1'>30 Nov, 2024</p>
                    </div>

                     <Image  src={eventImage} alt='all event img' height={600} width={1100} className=' rounded object-cover max-h-[90vh] mb-3 sm:mb-6'/>

                    <div className="text-sm sm:text-base text-font-2 space-y-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>

                <MoreEvent/>
               
            </div>
        </div>
  )
}

export default EventsPage