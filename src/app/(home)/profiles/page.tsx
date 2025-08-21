'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useGetAllTeamQuery } from '@/Redux/features/team/teamApi'
import { PiGraduationCapLight } from "react-icons/pi";
import TeamCardSkeleton from '@/components/layout/home/Profile/TeamCardSkeleton'

function ProfilesPage() {

    const [status, setStatus] = useState("Teachers")

    const { data, isLoading, isError } = useGetAllTeamQuery({ status: status })
    const people = data?.data.data
    console.log(people)



    return (
        <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto relative z-30 section-padding ">

                <div className="relative z-30 overflow-x-auto scroll-smooth scrollbar-hide">
                    <Tabs value={status} onValueChange={setStatus} className="w-full pt-2 pb-10 ">
                        <TabsList className='mx-auto'>
                            <TabsTrigger
                                value="managingCommittee">Managing Committee</TabsTrigger>
                            <TabsTrigger value="Teachers">Teachers</TabsTrigger>
                            <TabsTrigger value="Staff">Staffs</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        people?.map((person, i) =>
                            <div key={i} className="pt-2 px-2 flex flex-col items-center bg-mint rounded group relative overflow-hidden">
                                <div className="relative w-full">
                                    <Image
                                        src={person?.image}
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
                                                            src={person.image}
                                                            alt="teacher img"
                                                            height={120}
                                                            width={120}
                                                            className="w-full max-w-28 rounded-full"
                                                        />
                                                        <div className="">
                                                            <h2 className='text-3xl font-medium text-white'>{person?.name}</h2>
                                                            <h4 className='text-lg font-normal text-[#FBF7F6]'>{person.designation}</h4>
                                                        </div>
                                                    </div>

                                                    {/* Make this container scrollable */}
                                                    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg border p-6 max-h-[60vh] overflow-y-auto">
                                                        {/* About Section */}
                                                        <h2 className="text-2xl font-medium font-akshar text-font-1 border-b pb-2">
                                                            About {person.name}
                                                        </h2>
                                                        <p className="text-font-2 mt-3 text-base leading-relaxed">
                                                            {person.description}
                                                        </p>

                                                        {/* Education Section */}
                                                        <div className="mt-6">
                                                            <h3 className="text-2xl font-medium font-akshar text-font-1 border-b pb-2">
                                                                Education & Qualifications
                                                            </h3>
                                                            <ul className="mt-3 space-y-2 text-font-1 text-base">
                                                                <li className="flex items-center gap-2">
                                                                    <PiGraduationCapLight className='w-8 h-8 text-success' /> {person.educationQualifications[0]}
                                                                </li>
                                                                <li className="flex items-center gap-2">
                                                                    <PiGraduationCapLight className='w-8 h-8 text-success' /> {person.educationQualifications[1]}
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        {/* Others Info */}
                                                        <div className="mt-6">
                                                            <h3 className="text-2xl font-medium font-akshar text-font-1 border-b pb-2">
                                                                Others info
                                                            </h3>
                                                            <div className="flex flex-col mt-3 text-sm max-w-72 ">

                                                                {
                                                                    person.othersInfo.map((item) =>
                                                                        <div key={item._id} className='flex justify-between py-3  border-b'>
                                                                            <p className="text-base font-normal text-font-2">{item.label} :
                                                                            </p>
                                                                            <span className='text-font-1'>{item.value}</span>

                                                                        </div>
                                                                    )
                                                                }


                                                                {/* <div className='flex justify-between py-3  border-b'>
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

                                                                </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>

                                        </Dialog>
                                    </div>
                                </div>

                                <div className="text-center py-2 sm:py-4 space-y-1">
                                    <p className="text-lg font-medium text-neutral">{person.name}</p>
                                    <p className="text-base font-normal text-font-2">{person.designation}</p>
                                </div>
                            </div>


                        )
                    }
                    {
                        isLoading && Array.from({ length: 4 }).map((_, i) =>
                            <TeamCardSkeleton key={i} />
                        )
                    }

                </div>
                {
                    isError && <div className="py-10 text-red-700 px-4 rounded relative my-4 text-center" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline ml-2">Something went wrong. Please try again.</span>
                    </div>
                }
                {people?.length === 0 && (
                    <div className="py-10 text-gray-600 px-4 rounded relative my-4 text-center bg-gray-50 border border-gray-200">
                        <strong className="font-semibold">No Members Found!</strong>
                        <span className="block sm:inline ml-2">
                            Currently, there are no team members added.
                        </span>
                    </div>
                )}


            </div>
        </div>
    )
}

export default ProfilesPage