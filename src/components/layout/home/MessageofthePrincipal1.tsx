import Image from 'next/image'
import React from 'react'

function MessageofthePrincipal1() {
    return (
        <div className='px-[5%] bg-color-7'>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-15 ">
                <div className=" bg-white rounded-lg border p-6 space-y-4">
                    {/* Text Content */}
                    <p className="text-font-2 text-base font-normal leading-relaxed line-clamp-6 sm:line-clamp-none">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>

                    {/* Read More Link */}
                    <a
                        href="#"
                        className="text-[#2E3192] text-lg font-normal hover:underline"
                    >
                        Read More
                    </a>

                    <hr className="border-gray-200" />

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

                        <hr className="border-gray-200" />

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

                        <hr className="border-gray-200" />

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