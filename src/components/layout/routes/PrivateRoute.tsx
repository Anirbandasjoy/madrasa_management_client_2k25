"use client";

import { useGetCurrentUserQuery } from "@/Redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../shared/Loading";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetCurrentUserQuery();
  const email = data?.data?.userId?.email;
  const router = useRouter();

  useEffect(() => {
    if (!email) {
      router.push("/login");
    }
  }, [email, router]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{email ? children : null}</>;
};

export default PrivateRoute;
