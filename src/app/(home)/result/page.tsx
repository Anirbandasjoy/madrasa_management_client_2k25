"use client";

import { NotebookText } from "lucide-react";
import { useForm } from "react-hook-form";

// type FormData = {
//     examination: string;
//     class: string;
//     group: string;
//     section: string;
//     shift: string;
//     session: string;
//     roll: string;
// };


function ResultPage() {

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Form Submitted:", data); // এটি দেখাবে যদি ফর্ম সাবমিট হয়
    };

    return (
        <div className="px-[5%]">



            <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-3xl mx-auto pb-16 pt-0 px-10 sm:px-20 lg:pb-14 lg:pt-0 bg-color-7 my-20"
            >
                <div className="flex flex-col items-center gap-2 py-11">
                    <div className="w-20 h-20 bg-success flex items-center justify-center rounded-full">
                        <NotebookText className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-center text-[40px] font-normal text-success font-akshar ">Fill the form to see your result</h1>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Examination */}
                    <div>
                        <label className="block text-sm font-medium text-neutral mb-1">Examination</label>
                        <select
                            {...register("examination")}
                            className="w-full input input-bordered bg-white text-sm font-normal py-2 px-3 rounded"
                        >
                            <option value="" className="text-font-2">Select</option>
                            <option value="Half Yearly">Half Yearly</option>
                            <option value="Final">Final</option>
                        </select>
                    </div>

                    {/* Class */}
                    <div>
                        <label className="block text-sm font-medium text-neutral mb-1">Class</label>
                        <select
                            {...register("class")}
                            className="w-full input input-bordered bg-white text-sm font-normal py-2 px-3 rounded"
                        >
                            <option value="">Select</option>
                            <option value="Six">Six</option>
                            <option value="Seven">Seven</option>
                            <option value="Eight">Eight</option>
                        </select>
                    </div>

                    {/* Group */}
                    <div>
                        <label className="block text-sm font-medium text-neutral mb-1">Group</label>
                        <select
                            {...register("group")}
                            className="w-full input input-bordered bg-white text-sm font-normal py-2 px-3 rounded"
                        >
                            <option value="">Select</option>
                            <option value="Science">Science</option>
                            <option value="Commerce">Commerce</option>
                            <option value="Arts">Arts</option>
                        </select>
                    </div>

                    {/* Section */}
                    <div>
                        <label className="block text-sm font-medium text-neutral mb-1">Section</label>
                        <select
                            {...register("section")}
                            className="w-full input input-bordered bg-white text-sm font-normal py-2 px-3 rounded"
                        >
                            <option value="">Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>

                    {/* Shift */}
                    <div>
                        <label className="block text-sm font-medium text-neutral mb-1">Shift</label>
                        <select
                            {...register("shift")}
                            className="w-full input input-bordered bg-white text-sm font-normal py-2 px-3 rounded"
                        >
                            <option value="">Select</option>
                            <option value="Morning">Morning</option>
                            <option value="Day">Day</option>
                        </select>
                    </div>

                    {/* Session */}
                    <div>
                        <label className="block text-sm font-medium text-neutral mb-1">Session</label>
                        <input
                            {...register("session")}
                            type="number"
                            placeholder="e.g. 2024-2025"
                            className="w-full input input-bordered bg-white text-sm font-normal py-2 px-3 rounded"
                        />
                    </div>

                    {/* Roll */}
                    <div>
                        <label className="block text-sm font-medium text-neutral mb-1">Roll</label>
                        <input
                            {...register("roll")}
                            type="number"
                            placeholder="Enter roll"
                            className="w-full input input-bordered bg-white text-sm font-normal py-2 px-3 rounded"
                        />
                    </div>
                </div>

                <div className="flex justify-center mt-6">
                    <button type="submit" className="py-3 px-12 rounded bg-success text-white hover:bg-success/80 cursor-pointer">
                        Search
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ResultPage