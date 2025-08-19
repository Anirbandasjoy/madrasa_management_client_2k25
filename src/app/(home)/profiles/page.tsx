import Image from 'next/image'
import React from 'react'
import managingPeople from '@/../public/assets/Image.png'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

function ProfilesPage() {
    return (
        <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto border border-red-500">

                <div className="hidden overflow-x-auto scroll-smooth scrollbar-hide">
                    <Tabs defaultValue="managingCommittee" className="w-full ">
                        <TabsList className='pb-10 mx-auto '>
                            <TabsTrigger
                                value="managingCommittee">Managing Committee</TabsTrigger>
                            <TabsTrigger value="Teachers">Teachers</TabsTrigger>
                            <TabsTrigger value="staffs">Staffs</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        Array.from({ length: 8 }).map((_, i) =>
                            <div key={i} className="pt-2 px-2 flex flex-col items-center bg-mint rounded group relative overflow-hidden">
                                <div className="relative w-full">
                                    <Image
                                        src={managingPeople}
                                        alt="teacher img"
                                        height={230}
                                        width={250}
                                        className="w-full transform transition-transform duration-300 group-hover:scale-105"
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
                                                <div className="grid grid-cols-1 sm:grid-cols-3  sm:gap-8 mt-6  ">
                                                    <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
                                                        <Image
                                                            src={managingPeople}
                                                            alt="teacher img"
                                                            height={200}
                                                            width={200}
                                                            className="w-full max-w-48 transform transition-transform duration-300 group-hover:scale-105"

                                                        />
                                                        <div className="text-center sm:text-start py-2 sm:py-4 space-y-1">
                                                            <p className="text-lg font-medium text-neutral">Lorem ipsum</p>
                                                            <p className="text-base font-normal text-font-2">Managing Committee</p>
                                                        </div>
                                                    </div>
                                                    <div className="rounded col-span-2 p-8 sm:px-12 sm:py-8 bg-mint flex flex-col justify-center gap-2">
                                                        <div className="flex items-center justify-start gap-2">
                                                            <p className='text-lg font-medium text-neutral'>Name:</p>
                                                            <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                        </div>
                                                        <div className="flex items-center justify-start gap-2">
                                                            <p className='text-lg font-medium text-neutral'>Name:</p>
                                                            <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                        </div>
                                                        <div className="flex items-center justify-start gap-2">
                                                            <p className='text-lg font-medium text-neutral'>Name:</p>
                                                            <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                        </div>
                                                        <div className="flex items-center justify-start gap-2">
                                                            <p className='text-lg font-medium text-neutral'>Name:</p>
                                                            <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                        </div>
                                                        <div className="flex items-center justify-start gap-2">
                                                            <p className='text-lg font-medium text-neutral'>Name:</p>
                                                            <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                        </div>
                                                        <div className="flex items-center justify-start gap-2">
                                                            <p className='text-lg font-medium text-neutral'>Name:</p>
                                                            <p className='text-lg font-normal text-font-2'>MR.Principal</p>
                                                        </div>
                                                        <div className="flex items-center justify-start gap-2">
                                                            <p className='text-lg font-medium text-neutral'>Name:</p>
                                                            <p className='text-lg font-normal text-font-2'>MR.Principal</p>
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