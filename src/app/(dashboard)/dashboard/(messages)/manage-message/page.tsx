"use client";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import toast from "react-hot-toast";
import ContactTable from "./table";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "@/Redux/features/contact/contactApi";
import Heading from "@/components/layout/dashboard/shared/heading";
import Search from "@/components/layout/dashboard/inputs/Search";
import { PaginationGlobal } from "@/components/layout/dashboard/page/pagination";

const ManageContacts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filterTypeValueForIsImportant, setFilterTypeValueForIsImportant] =
    useState<boolean>();
  const [filterTypeValueForIsRead, setFilterTypeValueForIsRead] =
    useState<boolean>();
  const { data, isLoading, isError, refetch } = useGetContactsQuery({
    page: currentPage,
    limit: itemsPerPage,
    search: searchTerm,
    isImportant: filterTypeValueForIsImportant,
    isRead: filterTypeValueForIsRead,
  });

  const contacts = data?.data.data || [];
  console.log(data, "contact data");
  console.log(contacts);
  useEffect(() => {
    if (data) {
      setTotalPages(data?.data?.meta?.totalPages || 1);
      setCurrentPage(data?.data?.meta?.page || 1);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [currentPage, refetch]);

  const [deleteContact, { isLoading: deleteLoading }] =
    useDeleteContactMutation();
  const handleDeleteContact = async (deleteId: any) => {
    console.log(deleteId);
    try {
      await deleteContact(deleteId);
      refetch();
      toast.success("Deleted successfully");
    } catch (error: any) {
      toast.error(error?.data?.payload[0]?.message || "An error occurred");
    }
  };

  const handleSearchClick = async () => {
    setIsSearching(true);
    setSearchTerm(inputValue);
    await refetch();
    setIsSearching(false);
    setCurrentPage(1);
  };
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleItemsPerPageChange = async (value: string) => {
    setIsLoadingPage(true);
    setItemsPerPage(Number(value));
    await refetch();
    setIsLoadingPage(false);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between flex-wrap gap-4 lg:gap-0">
        <Heading
          title="contacts"
          subTitle="Manage your contacts. You can edit or delete contacts."
        />
        <div className="flex items-center gap-5 flex-wrap">
          <Search
            inputValue={inputValue}
            onInputChange={handleInputChange}
            onSearchClick={handleSearchClick}
            isSearching={isSearching}
          />
          <div className="">
            <select
              onChange={(e) =>
                handleItemsPerPageChange((e.target as HTMLSelectElement).value)
              }
              className="border text-sm border-gray-300 px-2 py-1.5"
            >
              <option value={2}>2</option>
              <option value={5}>5</option>
              <option selected value={10}>
                10
              </option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <Tabs
          onValueChange={(value) => {
            if (value === "all") {
              setFilterTypeValueForIsRead(undefined);
              setFilterTypeValueForIsImportant(undefined);
            } else if (value === "unread") {
              setFilterTypeValueForIsRead(false);
              setFilterTypeValueForIsImportant(undefined);
            } else if (value === "pin") {
              setFilterTypeValueForIsImportant(true);
              setFilterTypeValueForIsRead(undefined);
            }
            setCurrentPage(1);
            refetch();
          }}
          defaultValue="all"
          className="w-[400px]"
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread Messages</TabsTrigger>
            <TabsTrigger value="pin">Pinned Messages</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Pin</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <ContactTable
            isError={isError}
            isLoading={isLoading}
            contacts={contacts}
            isLoadingPage={isLoadingPage}
            handleDeleteContact={handleDeleteContact}
            deleteLoading={deleteLoading}
            isSearching={isSearching}
            refetch={refetch}
          />
        </Table>
      </div>

      <div className="mt-3">
        <PaginationGlobal
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          className="sm:justify-end justify-center"
        />
      </div>
    </div>
  );
};

export default ManageContacts;
