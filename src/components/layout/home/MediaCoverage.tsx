import Image from 'next/image'
import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

function MediaCoverage() {
    return (
        <div className='px-[5%] bg-color-7'>
            <div className="max-w-screen-xl mx-auto py-12 sm:py-16 lg:py-20">
                <h1 className='text-4xl sm:text-5xl font-medium font-akshar text-success pb-7 sm:pb-10 text-center flex items-center justify-center gap-5 lg:gap-6'>
                    <div className="sm:flex items-center hidden ">
                        <MdOutlineStar className='w-8 h-8 text-success' />
                        <MdOutlineStar className='w-10 h-10 text-success' />
                        <MdOutlineStar className='w-12 h-12 text-success' />
                    </div>
                    Media Coverage
                    <div className="sm:flex hidden flex-row-reverse items-center">
                        <MdOutlineStar className='w-8 h-8 text-success' />
                        <MdOutlineStar className='w-10 h-10 text-success' />
                        <MdOutlineStar className='w-12 h-12 text-success' />
                    </div>
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
                    {
                        Array.from({ length: 8 }).map((_, i) =>
                            <div key={i} className="">
                                <div className="pt-2 px-2 flex flex-col items-center bg-white rounded">
                                    <Image src={'/media.svg'} alt='teacher img' height={100} width={100} className=' py-8' />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default MediaCoverage