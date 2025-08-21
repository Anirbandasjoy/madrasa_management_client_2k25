import React from 'react'

import EventsCard from '../shared/events/EventsCard';
import { FaUserGraduate } from 'react-icons/fa';

function Events() {


    const notices = [
        { title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", date: "30 Nov, 2024" },
        { title: "Sed do eiusmod tempor incididunt ut labore et dolore", date: "28 Nov, 2024" },
        { title: "Ut enim ad minim veniam, quis nostrud exercitation Ut enim ad minim veniam, quis nostrud exercitation", date: "25 Nov, 2024 " },
        { title: "Duis aute irure dolor in reprehenderit in voluptate", date: "22 Nov, 2024" },
    ];

    const menuItems = [
        "Student List",
        "Our Teachers",
        "Attendance Sheet",
        "Result",
        "Exam Schedule",
        "Routine",
        "Gallery",
    ];


    return (
        <div className="bg-gray-50 px-[5%] ">
            <div className="max-w-screen-xl mx-auto section-padding">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">

                    {/* Left Column: Main Content */}
                    <main className="lg:col-span-2">
                        <section>
                            <div className=" text-white bg-success px-1 pb-1 rounded-md ">
                                <h3 className="text-[32px] font-medium font-akshar py-3 bg-success pl-6">Events</h3>
                                <div className="p-5 bg-mint rounded-md">
                                    <div className="space-y-4">
                                        {notices.map((notice, index) => (
                                            <EventsCard key={index} {...notice} />
                                        ))}
                                    </div>
                                    <button className="w-full py-2 text-lg font-normal rounded-md mt-6 bg-success hover:bg-teal-900 text-white">
                                        More
                                    </button>
                                </div>
                            </div>

                        </section>

                    </main>

                    {/* Right Column: Sidebar */}
                    <aside className="lg:col-span-1 mt-12 lg:mt-0 flex flex-col gap-4">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className="w-full flex items-center gap-3 px-4 py-3 bg-success text-white rounded  transition-all"
                            >
                                <FaUserGraduate className="text-white size-8 p-2 rounded-full bg-deepSuccess" />
                                <span className="text-2xl font-normal font-akshar">{item}</span>
                            </button>
                        ))}
                    </aside>

                </div>
            </div>
        </div>
    )
}

export default Events