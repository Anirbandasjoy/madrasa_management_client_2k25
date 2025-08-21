'use client';
import { Link } from 'lucide-react';
import React from 'react'

import { useForm, SubmitHandler } from 'react-hook-form';
import { MdOutlineStar } from 'react-icons/md';

// Define the type for our form inputs
type FormInputs = {
    name: string;
    email: string;
    phone?: string; // Phone is optional
    message: string;
};

function ContactUs() {
    // Initialize react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>();

    // This function will be called on successful form submission
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
        // Here you would typically send the data to your backend or an API
        alert('Form submitted successfully! Check the console for data.');
    };

    const menuItems = [
        "Access to information",
        "Access to information",
        "Access to information",
        "Access to information",
        "Access to information",
        "Access to information",
    ];
    

    return (
        <div className="bg-white px-[5%] pb-12 sm:pb-15 lg:pb-18">
            <div className="max-w-screen-xl mx-auto px-4  lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Main Content */}
                        <section className="order-2 lg:order-1 lg:col-span-2">
                            <div className="bg-color-7 flex items-center justify-center p-4 sm:p-8 lg:p-10">
                                <div className="mx-auto w-full">
                                    {/* Form Header */}
                                    <div className="text-center pb-10">
                                        <h1 className='text-4xl sm:text-5xl font-medium font-akshar text-success text-center flex items-center justify-center gap-5 lg:gap-6'>
                                            <div className="sm:flex items-center hidden ">
                                                <MdOutlineStar className='w-8 h-8 text-success' />
                                                <MdOutlineStar className='w-10 h-10 text-success' />
                                                <MdOutlineStar className='w-12 h-12 text-success' />
                                            </div>
                                            Contact Us
                                            <div className="sm:flex hidden flex-row-reverse items-center">
                                                <MdOutlineStar className='w-8 h-8 text-success' />
                                                <MdOutlineStar className='w-10 h-10 text-success' />
                                                <MdOutlineStar className='w-12 h-12 text-success' />
                                            </div>
                                        </h1>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-6">

                                            {/* Left Column: Name, Email, Phone */}
                                            <div className="space-y-6">
                                                {/* Name Field */}
                                                <div>
                                                    <label htmlFor="name" className="block text-base font-medium text-font-1 mb-2">
                                                        Your Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        placeholder="Enter your name"
                                                        className="block w-full rounded-sm bg-white focus:border-success focus:ring-success placeholder:text-sm p-3"
                                                        {...register('name', { required: 'Your name is required' })}
                                                    />
                                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                                                </div>

                                                {/* Email Field */}
                                                <div>
                                                    <label htmlFor="email" className="block text-base font-medium text-font-1 mb-2">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        placeholder="Enter your email"
                                                        className="block w-full rounded-sm bg-white focus:border-success focus:ring-success placeholder:text-sm p-3"
                                                        {...register('email', {
                                                            required: 'Email is required',
                                                            pattern: {
                                                                value: /^\S+@\S+\.\S+$/,
                                                                message: 'Entered value does not match email format',
                                                            },
                                                        })}
                                                    />
                                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                                </div>

                                                {/* Phone Field */}
                                                <div>
                                                    <label htmlFor="phone" className="block text-base font-medium text-font-1 mb-2">
                                                        Phone
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        placeholder="Enter your phone"
                                                        className="block w-full rounded-sm bg-white focus:border-success focus:ring-success placeholder:text-sm p-3"
                                                        {...register('phone')} // No validation, so it's optional
                                                    />
                                                </div>
                                            </div>

                                            {/* Right Column: Message */}
                                            <div className="flex flex-col">
                                                <label htmlFor="message" className="block text-base font-medium text-font-1 mb-2">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    placeholder="Your Message..."
                                                    rows={8}
                                                    className="block w-full h-full rounded-sm bg-white focus:border-success focus:ring-success placeholder:text-sm p-3"
                                                    {...register('message', { required: 'A message is required' })}
                                                ></textarea>
                                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="mt-8 text-center">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-sm border border-transparent bg-success py-2.5 px-12 text-lg font-normal text-white shadow-sm hover:bg-[#244b43] focus:outline-none focus:ring-2 focus:ring-success focus:ring-offset-2 transition-colors cursor-pointer "
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>

                    {/* Right Column: Sidebar */}
                    <aside className="order-1 lg:order-2 lg:col-span-1 mt-12 lg:mt-0 flex flex-col gap-4">
                        <h1 className='text-[32px] font-medium text-success font-akshar'>Important Links</h1>
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className="w-full flex items-center gap-3 px-4 py-3 bg-success text-white rounded  transition-all"
                            >
                                <Link className="text-white size-8 p-2 rounded-full bg-deepSuccess" />
                                <span className="text-2xl font-normal font-akshar">{item}</span>
                            </button>
                        ))}
                    </aside>

                </div>
            </div>
        </div>
    )
}

export default ContactUs