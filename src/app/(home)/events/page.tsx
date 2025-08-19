import Image from 'next/image'
import React from 'react'
import eventImage from '@/../public/assets/Aword.jpg'

function EventsPage() {
  return (
    <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto ">
                <div className=" pb-6 sm:pb-10">
                    <div className="mb-3 sm:mb-6">
                        <h1 className='text-2xl sm:text-3xl lg:text-[40px] font-medium text-neutral font-akshar '>Lorem ipsum dolor sit amet</h1>
                        <p className='text-lg font-normal text-font-2 mt-1'>30 Nov, 2024</p>
                    </div>

                    <div className="text-sm sm:text-base text-font-2 space-y-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6  pb-8 sm:pb-16">
                    {
                        Array.from({length:6}).map((_,i)=> 
                            <Image key={i} src={eventImage} alt='all event img' height={360} width={530} className='rounded'/>
                        )
                    }
                </div>
            </div>
        </div>
  )
}

export default EventsPage