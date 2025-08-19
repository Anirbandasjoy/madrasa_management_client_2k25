"use client";

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
                className="max-w-3xl mx-auto py-16 px-10 sm:px-30 lg:px-36 bg-mint mb-20"
            >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 items-center">
                    <label className="text-lg font-normal text-neutral">Examination -</label>
                    <select {...register("examination")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
                        <option value="">Select</option>
                        <option value="Half Yearly">Half Yearly</option>
                        <option value="Final">Final</option>
                    </select>

                    <label className="text-lg font-normal text-neutral">Class -</label>
                    <select {...register("class")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
                        <option value="">Select</option>
                        <option value="Six">Six</option>
                        <option value="Seven">Seven</option>
                        <option value="Eight">Eight</option>
                    </select>

                    <label className="text-lg font-normal text-neutral">Group -</label>
                    <select {...register("group")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
                        <option value="">Select</option>
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts</option>
                    </select>

                    <label className="text-lg font-normal text-neutral">Section -</label>
                    <select {...register("section")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
                        <option value="">Select</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                    </select>

                    <label className="text-lg font-normal text-neutral">Shift -</label>
                    <select {...register("shift")} className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0">
                        <option value="">Select</option>
                        <option value="Morning">Morning</option>
                        <option value="Day">Day</option>
                    </select>

                    <label className="text-lg font-normal text-neutral">Session -</label>
                    <input
                        {...register("session")}
                        type="number"
                        placeholder="e.g. 2024-2025"
                        className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0"
                    />

                    <label className="text-lg font-normal text-neutral">Roll -</label>
                    <input
                        {...register("roll")}
                        type="number"
                        placeholder="Enter roll"
                        className="sm:col-span-2 input input-bordered bg-white text-sm font-normal text-font-2 py-3 px-4 rounded focus:outline-2 mb-4 sm:mb-0"
                    />
                </div>

                <div className="flex justify-center mt-6">
                    <button type="submit" className="py-3 px-12 rounded bg-success text-white hover:bg-success/80">
                        Search
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ResultPage