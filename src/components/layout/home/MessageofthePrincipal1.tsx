import Image from 'next/image'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

function MessageofthePrincipal1() {
    return (
        <div className='px-[5%] bg-color-7'>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-9 sm:py-12 lg:py-15 ">
                <div className=" bg-white rounded-lg border p-6 space-y-2">
                    {/* Text Content */}
                    <p className="text-font-2 text-base font-normal leading-relaxed line-clamp-6 sm:line-clamp-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>



                    <Dialog>
                        <DialogTrigger className='text-[#2E3192] cursor-pointer'> {/* Read More Link */}
                            Read More
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <div className="flex gap-4 items-center bg-deepSuccess p-8">
                                    <Image
                                        src={'/assets/principal.svg'}
                                        alt="teacher img"
                                        height={120}
                                        width={120}
                                        className="w-full max-w-28 rounded-full"
                                    />
                                    <div className="">
                                        <h2 className='text-3xl font-medium text-white'>principal</h2>
                                        <h4 className='text-lg font-normal text-[#FBF7F6]'>principal</h4>
                                    </div>
                                </div>

                                {/* Make this container scrollable */}
                                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg  p-6 max-h-[60vh] overflow-y-auto">
                                    {/* About Section */}
                                    <h2 className="text-2xl font-medium font-akshar text-font-1 border-b pb-2">
                                        About
                                    </h2>
                                    <p className="text-font-2 mt-3 text-base leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis eos ut necessitatibus deleniti iste deserunt ducimus aspernatur minus vero distinctio, autem modi exercitationem quis voluptatibus delectus, quam consectetur! Ratione vero voluptates dicta molestiae recusandae similique quos eveniet hic quaerat rem, veritatis, beatae praesentium ex cum libero iusto possimus dolorum.
                                    </p>





                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>


                    <hr className="border-gray-200 mt-3" />

                    {/* Author Section */}
                    <div className="flex items-center gap-3">
                        <Image
                            src="/assets/principal.svg"
                            alt="Author"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div>
                            <h3 className="text-lg font-medium text-font-1">Lorem ipsum</h3>
                            <p className="text-sm text-font-2">Principle</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-2 gap-8">
                    <div className=" bg-white rounded-lg border p-6 space-y-4">
                        {/* Text Content */}
                        <p className="text-font-2 text-base font-normal leading-relaxed line-clamp-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>

                        {/* Read More Link */}
                        <a
                            href="#"
                            className="text-[#2E3192] text-lg font-normal hover:underline"
                        >
                            Read More
                        </a>

                        <hr className="border-gray-200 mt-3" />

                        {/* Author Section */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="/assets/principal.svg"
                                alt="Author"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-medium text-font-1">Lorem ipsum</h3>
                                <p className="text-sm text-font-2">Principle</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-lg border p-6 space-y-4">
                        {/* Text Content */}
                        <p className="text-font-2 text-base font-normal leading-relaxed line-clamp-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        </p>

                        {/* Read More Link */}
                        <a
                            href="#"
                            className="text-[#2E3192] text-lg font-normal hover:underline"
                        >
                            Read More
                        </a>

                        <hr className="border-gray-200 mt-3" />

                        {/* Author Section */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="/assets/principal.svg"
                                alt="Author"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <h3 className="text-lg font-medium text-font-1">Lorem ipsum</h3>
                                <p className="text-sm text-font-2">Principle</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MessageofthePrincipal1