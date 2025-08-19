"use client";
import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};


function Contact() {

    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Submitted Data:", data);
        reset(); // Clear form
    };

    return (
        <div className="px-[5%] " style={{ backgroundImage: "url('hero-bg.svg')" }}>
            <section className="max-w-screen-xl mx-auto py-12 sm:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-medium font-akshar text-neutral pb-7 sm:pb-10 text-center">
                    Quick <span className="text-success">Contact</span>
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <div className="space-y-4">
                        <div>
                            <label className="block text-base font-medium mb-1 text-gray">Your Name</label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-base font-medium mb-1 text-gray">Email</label>
                            <input
                                {...register("email")}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-base font-medium mb-1 text-gray">Phone</label>
                            <input
                                {...register("phone")}
                                type="text"
                                placeholder="Enter your phone"
                                className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-emerald-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-base font-medium mb-1 text-gray">Message</label>
                        <textarea
                            {...register("message")}
                            rows={8}
                            placeholder="Your Message..."
                            className="w-full bg-white border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-emerald-500"
                        />
                    </div>

                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-emerald-700 text-white px-8 py-2 rounded hover:bg-emerald-800 transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </div>
    )
}

export default Contact