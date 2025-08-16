"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { useHandleVerifyUserMutation } from "@/Redux/features/auth/authApi";
import PublicRoute from "@/components/layout/routes/PublicRoute";
import Loading from "@/components/layout/shared/Loading";

const VerifyUserContent = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [setVerificationCode, { isLoading }] = useHandleVerifyUserMutation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const time = Number(searchParams?.get("time") || 0);

  const [timeLeft, setTimeLeft] = useState(time);

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsButtonDisabled(false);
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }

    if (updatedOtp.every((digit) => digit)) {
      handleVerifyOtp(updatedOtp.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  const handleVerifyOtp = async (otpCode: string) => {
    if (otpCode.length === 4) {
      try {
        await setVerificationCode({ email: email!, code: otpCode }).unwrap();
        toast.success("Verified successfully!");
        setOtp(["", "", "", ""]);
        router.push("/");
      } catch (err: any) {
        toast.error(err?.data?.message || "Invalid code");
        setOtp(["", "", "", ""]);
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="rounded-lg shadow-lg w-96 p-6 text-center border border-gray-200">
        {/* Icon */}
        <div className="flex justify-center items-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-black rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 8.25L9.75 15l-3-3"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Timer */}
        <p className="text-gray-600 text-sm mb-2">{formatTime(timeLeft)}</p>

        {/* Title */}
        <h2 className="text-xl font-semibold text-black mb-4">
          Verify your email to proceed
        </h2>
        <p className="text-gray-700 mb-6">
          We just sent a code to{" "}
          <span className="text-black font-medium">{email}</span>. Please enter
          the 4-digit code below.
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl border border-gray-400 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className={`w-full py-2 cursor-pointer text-sm rounded-lg border border-gray-400 ${
              isButtonDisabled
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100 text-black"
            }`}
            disabled={isButtonDisabled}
            onClick={() => console.log("Resend email")}
          >
            Resend Code
          </button>
          <button
            className="w-full py-2 cursor-pointer text-sm bg-black text-white rounded-lg hover:bg-gray-800"
            onClick={() => window.open("https://mail.google.com", "_blank")}
          >
            Go to Inbox
          </button>
        </div>
      </div>
    </div>
  );
};

const VerifyUser = () => (
  <PublicRoute>
    <Suspense fallback={<Loading />}>
      <VerifyUserContent />
    </Suspense>
  </PublicRoute>
);

export default VerifyUser;
