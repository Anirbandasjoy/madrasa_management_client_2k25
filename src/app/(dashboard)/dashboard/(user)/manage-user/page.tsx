"use client";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Filters from "@/components/layout/dashboard/shared/Filters";
import { GlobalPagination } from "@/components/layout/dashboard/shared/GlobalPagination/GlobalPagination";
import {
  useGetAllUserQuery,
  useHandleUserStatusMutation,
} from "@/Redux/features/user/userApi";
import ManageUserTable from "./ManageUserTable";
import { IData } from "../type";
const ManageUser = () => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const searchRef = useRef<HTMLInputElement>(null);
  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [loadingState, setLoadingState] = useState({
    searching: false,
    pageChange: false,
    limitChange: false,
  });


  const { data, refetch, isLoading, error, isError } = useGetAllUserQuery({
    page: currentPage,
    limit,
    search: searchText,
  });

  console.log(data?.data);
  const [handleUserStatus] = useHandleUserStatusMutation();

  const allData: IData[] = data?.data?.data || [];
  const totalPages = data?.data?.meta?.totalPages || 1;
  const allSelected =
    allData.length > 0 && selectedData.length === allData.length;

  const handleSelectAll = () => {
    setSelectedData(allSelected ? [] : allData.map((item) => item._id));
  };

  const handleSelect = (id: string) => {
    setSelectedData((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSearch = async () => {
    setLoadingState((prev) => ({ ...prev, searching: true }));
    const trimmed = searchRef.current?.value.trim() || "";
    setSearchText(trimmed);
    setCurrentPage(1);
    toast.success(`Searching for "${trimmed || "all"}"`);
    await refetch();
    setLoadingState((prev) => ({ ...prev, searching: false }));
  };

  const handlePageChange = async (page: number) => {
    if (page < 1 || page > totalPages) return;
    setLoadingState((prev) => ({ ...prev, pageChange: true }));
    setCurrentPage(page);
    await refetch();
    setLoadingState((prev) => ({ ...prev, pageChange: false }));
  };

  const handleLimitChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoadingState((prev) => ({ ...prev, limitChange: true }));
    setLimit(Number(e.target.value));
    setCurrentPage(1);
    await refetch();
    setLoadingState((prev) => ({ ...prev, limitChange: false }));
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      const data = { id, role: status };
      await handleUserStatus(data).unwrap();
      toast.success("Successfully updated user status!");
      refetch();
    } catch (error: any) {
      const errorMessage =
        error?.data?.payload?.message || "Something went wrong";
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if (searchText === "") refetch();
  }, [searchText, refetch]);

  return (
    <div>
      <Filters
        searchRef={searchRef}
        handleSearch={handleSearch}
        limit={limit}
        handleLimitChange={handleLimitChange}
        totalCount={data?.data?.meta?.total || 0}
        isError={isError}
        headingTitle="Manage User"
        headingSubtitle="Manage all your users. You can ban users."
      />

      <ManageUserTable
        allSelected={allSelected}
        handleSelectAll={handleSelectAll}
        isLoading={isLoading}
        loadingState={loadingState}
        allData={allData}
        selectedData={selectedData}
        handleSelect={handleSelect}
        handleStatusUpdate={handleStatusUpdate}
        limit={limit}
        error={error}
        setStatus={setStatus}
        status={status}
      />

      <GlobalPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        selectedCount={selectedData.length}
        totalCount={allData.length}
        className="sm:justify-end justify-center"
      />
    </div>
  );
};

export default ManageUser;
