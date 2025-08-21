import React from 'react'
import { MdOutlineStar } from 'react-icons/md'


function ClasswiseStudentsStatistics() {

    const stats = Array(10).fill({ class: "Class 6", students: 107 });

    return (
        <div className='px-[5%] bg-success  py-12 sm:pt-12 lg:pb-16' style={{
                backgroundImage: "url('pattern1.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            <div className="max-w-screen-xl mx-auto ">
                <h1 className='text-4xl sm:text-5xl font-medium font-akshar text-white pb-7 sm:pb-10 text-center flex items-center justify-center gap-5 lg:gap-6'>
                    <div className="sm:flex items-center hidden ">
                        <MdOutlineStar className='w-8 h-8 text-white' />
                        <MdOutlineStar className='w-10 h-10 text-white' />
                        <MdOutlineStar className='w-12 h-12 text-white' />
                    </div>
                    Class wise Students Statistics
                    <div className="sm:flex hidden flex-row-reverse items-center">
                        <MdOutlineStar className='w-8 h-8 text-white' />
                        <MdOutlineStar className='w-10 h-10 text-white' />
                        <MdOutlineStar className='w-12 h-12 text-white' />
                    </div>
                </h1>

                <div className="">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="bg-mint rounded-md shadow-sm px-4 py-3 text-gray-700 font-akshar hover:shadow-md transition text-2xl font-light text-center"
                            >
                                {item.class} - <span className="text-success text-[32px] font-medium">{item.students}</span> Students
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ClasswiseStudentsStatistics

