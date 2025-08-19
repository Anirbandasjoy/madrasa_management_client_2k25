import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

function AdmissionPage() {

    const admissions = [
        {
            class: "Class 6",
            open: "7th June, 2025",
            closed: "25th June, 2025",
        },
        {
            class: "Class 6",
            open: "7th June, 2025",
            closed: "25th June, 2025",
        },
        {
            class: "Class 6",
            open: "7th June, 2025",
            closed: "25th June, 2025",
        },
        {
            class: "Class 6",
            open: "7th June, 2025",
            closed: "25th June, 2025",
        },
        {
            class: "Class 6",
            open: "7th June, 2025",
            closed: "25th June, 2025",
        },
        {
            class: "Class 6",
            open: "7th June, 2025",
            closed: "25th June, 2025",
        },
    ];

    return (
        <div className='px-[5%]'>
            <div className="max-w-screen-xl mx-auto  ">
                <div className="max-w-2xl mx-auto  rounded border overflow-hidden">
                    <Table>
                        <TableHeader className="">
                            <TableRow className='font-akshar bg-success'>
                                <TableHead className="w-[200px] text-white text-2xl font-medium">Class</TableHead>
                                <TableHead className="text-white text-2xl font-medium">Admission Open</TableHead>
                                <TableHead className="text-white text-2xl font-medium">Admission Closed</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {admissions.map((admission, index) => (
                                <TableRow key={index} className='hover:bg-mint/50'>
                                    <TableCell >{admission.class}</TableCell>
                                    <TableCell>{admission.open}</TableCell>
                                    <TableCell>{admission.closed}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="py-10 sm:py-16">
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