'use client'
import Image from 'next/image'
import React from 'react'
import managingPeople from '@/../public/assets/Image.png'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useGetAllTeamQuery } from '@/Redux/features/team/teamApi'
import { PiGraduationCapLight } from "react-icons/pi";

function ProfilesPage() {

    const { data } = useGetAllTeamQuery({})
    console.log(data?.data)

    return (
        <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto relative z-30 py-20 ">

                <div className="relative z-30 overflow-x-auto scroll-smooth scrollbar-hide">
                    <Tabs defaultValue="managingCommittee" className="w-full pt-2 pb-10 ">
                        <TabsList className='mx-auto'>
                            <TabsTrigger
                                value="managingCommittee">Managing Committee</TabsTrigger>
                            <TabsTrigger value="Teachers">Teachers</TabsTrigger>
                            <TabsTrigger value="staffs">Staffs</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        Array.from({ length: 8 }).map((_, i) =>
                            <div key={i} className="pt-2 px-2 flex flex-col items-center bg-mint rounded group relative overflow-hidden">
                                <div className="relative w-full">
                                    <Image
                                        src={managingPeople}
                                        alt="teacher img"
                                        height={230}
                                        width={250}
                                        className="w-full transform transition-transform duration-300"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center 
                                    opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                                    transition-all duration-500 ease-in-out">
                                        <Dialog>
                                            <DialogTrigger>
                                                <button className="border border-white text-white px-4 py-2 rounded cursor-pointer">
                                                    View Profile
                                                </button>
                                            </DialogTrigger>
                                            {/* ! max-w problem */}
                                            <DialogContent>
                                                <div className="">
                                                    <div className="flex gap-4 items-center bg-success p-8">
                                                        <Image
                                                            src={managingPeople}
                                                            alt="teacher img"
                                                            height={120}
                                                            width={120}
                                                            className="w-full max-w-28 rounded-full"
                                                        />
                                                        <div className="">
                                                            <h2 className='text-3xl font-medium text-white'>Kamrul islam sunny</h2>
                                                            <h4 className='text-lg font-normal text-[#FBF7F6]'>ICT Teacher</h4>
                                                        </div>
                                                    </div>

                                                    {/* Make this container scrollable */}
                                                    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg border p-6 max-h-[60vh] overflow-y-auto">
                                                        {/* About Section */}
                                                        <h2 className="text-2xl font-medium font-akshar text-font-1 border-b pb-2">
                                                            About Lorem Ipsum
                                                        </h2>
                                                        <p className="text-font-2 mt-3 text-base leading-relaxed">
                                                            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                                            est laborum.
                                                        </p>

                                                        {/* Education Section */}
                                                        <div className="mt-6">
                                                            <h3 className="text-2xl font-medium font-akshar text-font-1 border-b pb-2">
                                                                Education & Qualifications
                                                            </h3>
                                                            <ul className="mt-3 space-y-2 text-font-1 text-base">
                                                                <li className="flex items-center gap-2">
                                                                    <PiGraduationCapLight className='w-8 h-8 text-success' /> M.Sc. Physics (University of Toronto), Canada
                                                                </li>
                                                                <li className="flex items-center gap-2">
                                                                    <PiGraduationCapLight className='w-8 h-8 text-success' /> B.Ed (York University), Canada
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        {/* Others Info */}
                                                        <div className="mt-6">
                                                            <h3 className="text-2xl font-medium font-akshar text-font-1 border-b pb-2">
                                                                Others info
                                                            </h3>
                                                            <div className="flex flex-col mt-3 text-sm max-w-72 ">
                                                                <div className='flex justify-between py-3  border-b'>
                                                                    <p className="text-base font-normal text-font-2">Join Year : 
                                                                    </p>
                                                                    <span className='text-font-1'>2020</span>

                                                                </div>
                                                                <div className='flex justify-between py-3  border-b'>
                                                                    <p className="text-base font-normal text-font-2 ">Subject :  </p>
                                                                    <span className='text-font-1'>Math</span>

                                                                </div>
                                                                <div className='flex justify-between py-3 border-b'>
                                                                    <p className="text-base font-normal text-font-2 ">Phone : </p>
                                                                    <span className='text-font-1'>Lorem ipsum</span>

                                                                </div>
                                                                <div className='flex justify-between py-3 border-b'>
                                                                    <p className="text-base font-normal text-font-2 ">Email : </p>
                                                                    <span className='text-font-1'>Lorem ipsum</span>

                                                                </div>
                                                                <div className='flex justify-between py-3 border-b'>
                                                                    <p className="text-base font-normal text-font-2 ">Office time : </p> 
                                                                    <span className='text-font-1' >Lorem ipsum</span>

                                                                </div>
                                                            </div>
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


                        )
                    }



                </div>


            </div>
        </div>
    )
}

export default ProfilesPage