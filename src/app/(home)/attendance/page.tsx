'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useForm } from 'react-hook-form';
import { ChevronDownIcon } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

function AttendancePage() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Form Submitted:", data);
    };

    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    const attendanceData = [
        {
            rollNo: '01',
            name: 'Lorem ipsum dolor',
            attendance: 'PRESENT',
        },
        {
            rollNo: '01',
            name: 'Lorem ipsum dolor',
            attendance: 'PRESENT',
        },
        {
            rollNo: '01',
            name: 'Lorem ipsum dolor',
            attendance: 'PRESENT',
        },
        {
            rollNo: '01',
            name: 'Lorem ipsum dolor',
            attendance: 'PRESENT',
        },
        {
            rollNo: '01',
            name: 'Lorem ipsum dolor',
            attendance: 'ABSENT',
        },
        {
            rollNo: '01',
            name: 'Lorem ipsum dolor',
            attendance: 'PRESENT',
        },
        // ... more data
    ];


    return (
        <div className="px-[5%] ">

            <div className="max-w-screen-xl mx-auto section-padding">
                <div className="">
                    <h1 className='text-2xl sm:text-[40px] font-medium font-akshar text-success text-center max-w-4xl mx-auto'>Fill the form ( class, section and date ) to see the  attendance sheet</h1>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className=" sm:max-w-52 lg:max-w-64 w-full p-4 bg-mint "
                    >
                        <div className="grid grid-cols-1 sm:gap-5 items-center">

                            <div className="flex flex-col">
                                <label className="text-base font-normal text-neutral mb-2">Class</label>
                                <select {...register("class")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-2 px-4 ring-1 ring-gray-200 rounded-md focus:outline-2 mb-4 sm:mb-0">
                                    <option value="">Select</option>
                                    <option value="Six">Six</option>
                                    <option value="Seven">Seven</option>
                                    <option value="Eight">Eight</option>
                                </select>
                            </div>



                            <div className="flex flex-col">
                                <label className="text-base font-normal text-neutral mb-2">Section</label>
                                <select {...register("section")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-2 px-4 ring-1 ring-gray-200 rounded-md focus:outline-2 mb-4 sm:mb-0 ">
                                    <option value="">Select</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                </select>
                            </div>



                            <div className="flex flex-col gap-3">
                                <Label htmlFor="date" className="text-base font-normal text-font-1 px-1">
                                    Date of birth
                                </Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            id="date"
                                            className="w-full justify-between font-normal"
                                        >
                                            {date ? date.toLocaleDateString() : "Select date"}
                                            <ChevronDownIcon />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            captionLayout="dropdown"
                                            onSelect={(date: any) => {
                                                setDate(date)
                                                setOpen(false)
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>


                        </div>

                        <div className="flex justify-center mt-6">
                            <button type="submit" className="w-full py-2 px-12 rounded bg-success text-white hover:bg-success/80">
                                Search
                            </button>
                        </div>
                    </form>

                    <div className="max-w-4xl w-full">
                        <Table>
                            <TableHeader className="bg-success">
                                <TableRow>
                                    <TableHead className="w-[100px] text-white">Roll No</TableHead>
                                    <TableHead className="text-white">Name</TableHead>
                                    <TableHead className="text-white ">Attendance</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {attendanceData.map((row, index) => (
                                    <TableRow key={index} className="odd:bg-gray-100">
                                        <TableCell className="font-medium">{row.rollNo}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell className="">
                                            <Button
                                                variant="ghost"
                                                size={'sm'}
                                                className={`
                  ${row.attendance === 'PRESENT' ? 'bg-blue-600 text-white  hover:bg-blue-700' : 'bg-red-500 text-white hover:bg-red-600'}
                  rounded-full text-xs
                `}
                                            >
                                                {row.attendance}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttendancePage


//  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 items-center">
//                     <label className="text-lg font-normal text-neutral">Roll -</label>
//                     <input
//                         {...register("roll")}
//                         type="number"
//                         placeholder="Enter roll"
//                         className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0"
//                     />

//                     <label className="text-lg font-normal text-neutral">Class -</label>
//                     <select {...register("class")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
//                         <option value="">Select</option>
//                         <option value="Six">Six</option>
//                         <option value="Seven">Seven</option>
//                         <option value="Eight">Eight</option>
//                     </select>

//                     <label className="text-lg font-normal text-neutral">Group -</label>
//                     <select {...register("group")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
//                         <option value="">Select</option>
//                         <option value="Science">Science</option>
//                         <option value="Commerce">Commerce</option>
//                         <option value="Arts">Arts</option>
//                     </select>

//                     <label className="text-lg font-normal text-neutral">Section -</label>
//                     <select {...register("section")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
//                         <option value="">Select</option>
//                         <option value="A">A</option>
//                         <option value="B">B</option>
//                     </select>

//                     <label className="text-lg font-normal text-neutral">Shift -</label>
//                     <select {...register("shift")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
//                         <option value="">Select</option>
//                         <option value="Morning">Morning</option>
//                         <option value="Day">Day</option>
//                     </select>

//                     <label className="text-lg font-normal text-neutral">Month -</label>
//                     <select {...register("month")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
//                         <option value="">Select</option>
//                         <option value="January">January</option>
//                         <option value="February">February</option>
//                         <option value="March">March</option>
//                         <option value="April">April</option>
//                         <option value="May">May</option>
//                         <option value="June">June</option>
//                         <option value="July">July</option>
//                         <option value="August">August</option>
//                         <option value="September">September</option>
//                         <option value="October">October</option>
//                         <option value="November">November</option>
//                         <option value="December">December</option>
//                     </select>

//                     <label className="text-lg font-normal text-neutral">Year -</label>
//                     <input
//                         {...register("year")}
//                         type="number"
//                         placeholder="Enter roll"
//                         className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0"
//                     />
//                 </div>



