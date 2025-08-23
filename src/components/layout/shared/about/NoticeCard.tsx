import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Notice } from "@/Redux/features/notices/noticesType";



export const NoticeCard = (notice: Notice)=> {

    // skeleton

    
    return (
        <div className="gap-4 bg-white p-4 rounded-lg shadow-custom cursor-pointer">
            <p className="text-lg font-normal text-gray-800 ">{notice?.name}</p>
            <Dialog>
                <DialogTrigger className='text-sm text-[#2E3192] cursor-pointer mb-1'> {/* Read More Link */}
                    Read More
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <div className="flex gap-4 items-center bg-deepSuccess p-8">
                            <div className="">
                                <h2 className='text-[40px] font-medium text-white font-akshar'>Notice</h2>
                            </div>
                        </div>

                        {/* Make this container scrollable */}
                        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg  p-6 max-h-[60vh] overflow-y-auto">
                            {/* About Section */}
                            <h2 className="text-2xl font-medium font-akshar text-font-1 border-b pb-2">
                                About
                            </h2>
                            <p className="text-font-2 mt-3 text-base leading-relaxed">
                                {notice?.description}
                            </p>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <p className="text-sm font-normal text-font-2 ">{new Date(notice.createdAt).toLocaleDateString()}</p>
        </div>

    );
};

