"use client";

import { useGetCurrentUserQuery } from "@/Redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import Loading from "../shared/Loading";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetCurrentUserQuery();
  const admin = data?.data?.userId?.role;
  const router = useRouter();

  if (isLoading) {
    return <Loading />;
  }

  return <>{admin === "admin" ? children : router.push("/login")}</>;
};

export default AdminRoute;
