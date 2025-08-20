'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useGetAllAdmissionsQuery } from '@/Redux/features/admissions/admissionsApi';
import { Skeleton } from '@/components/ui/skeleton';

function AdmissionPage() {

    // const admissions = [
    //     {
    //         class: "Class 6",
    //         open: "7th June, 2025",
    //         closed: "25th June, 2025",
    //     },
    //     {
    //         class: "Class 6",
    //         open: "7th June, 2025",
    //         closed: "25th June, 2025",
    //     },
    //     {
    //         class: "Class 6",
    //         open: "7th June, 2025",
    //         closed: "25th June, 2025",
    //     },
    //     {
    //         class: "Class 6",
    //         open: "7th June, 2025",
    //         closed: "25th June, 2025",
    //     },
    //     {
    //         class: "Class 6",
    //         open: "7th June, 2025",
    //         closed: "25th June, 2025",
    //     },
    //     {
    //         class: "Class 6",
    //         open: "7th June, 2025",
    //         closed: "25th June, 2025",
    //     },
    // ];


    const { data, isLoading, isError } = useGetAllAdmissionsQuery({})
    const admissions = data?.data.data

    function formatDate(isoString:any) {
        const date = new Date(isoString);

        const day = date.getUTCDate();
        const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
        const year = date.getUTCFullYear();

        // Add suffix (st, nd, rd, th)
        const suffix =
            day % 10 === 1 && day !== 11 ? "st" :
                day % 10 === 2 && day !== 12 ? "nd" :
                    day % 10 === 3 && day !== 13 ? "rd" : "th";

        return `${day}${suffix} ${month}, ${year}`;
    }


    return (
        <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto  ">
                <div className=" max-w-5xl mx-auto w-full rounded overflow-hidden pt-20">
                    <Table>
                        <TableHeader className="">
                            <TableRow className='font-akshar bg-success'>
                                <TableHead className="w-[200px] text-white text-2xl font-medium">Class</TableHead>
                                <TableHead className="text-white text-2xl font-medium">Admission Open</TableHead>
                                <TableHead className="text-white text-2xl font-medium">Admission Closed</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className='bg-color-7'>
                            {admissions?.map((admission, index) => (
                                <TableRow key={index} className='hover:bg-mint/50'>
                                    <TableCell >{admission.className}</TableCell>
                                    <TableCell>{formatDate(admission.admissionOpen)} </TableCell>
                                    <TableCell>{formatDate(admission.admissionClose)}</TableCell>
                                </TableRow>
                            ))}

                            {isLoading && Array.from({ length: 5 }).map((_, i) => (
                                <TableRow key={i} >
                                    <TableCell className='border'>
                                        <Skeleton className="h-6 w-32 mx-auto rounded-sm" />
                                    </TableCell>
                                    <TableCell className='border'>
                                        <Skeleton className="h-6 w-[150px] mx-auto rounded-sm" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-6 w-[150px] mx-auto rounded-sm" />
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>

                    {
                        isError && <div className="py-10 text-red-700 px-4 rounded relative my-4 text-center" role="alert">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline ml-2">Something went wrong. Please try again.</span>
                        </div>
                    }
                </div>

                <div className="py-10 sm:py-16 max-w-5xl mx-auto">
                    <h1 className='text-2xl sm:text-3xl lg:text-[40px] font-medium text-neutral font-akshar mb-3 sm:mb-6'>Admission <span className='text-success'>Process</span> & Procedure Brief</h1>
                    <div className="text-sm sm:text-base text-font-2 space-y-4">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdmissionPage