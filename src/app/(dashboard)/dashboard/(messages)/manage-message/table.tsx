"use client";
import { useState } from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Mail,
  Phone,
  Trash2,
  MoreHorizontal,
  MessageSquare,
  User,
  AlertCircle,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Switch } from "@/components/ui/switch";
import toast from "react-hot-toast";
import { IContact } from "@/Redux/features/contact/contactType";
import { useUpdateContactMutation } from "@/Redux/features/contact/contactApi";
import TableSkeleton from "./TableSkeleton";




interface TableProps {
  isLoading: boolean;
  isError: boolean;
  contacts: IContact[];
  handleDeleteContact: (id: string) => void;
  deleteLoading: boolean;
  isLoadingPage: boolean;
  isSearching: boolean;
  refetch: any;
}

const ContactTable = ({
  isLoading,
  isError,
  contacts,
  isLoadingPage,
  handleDeleteContact,
  deleteLoading,
  isSearching,
  refetch,
}: TableProps) => {
  const [openMessageId, setOpenMessageId] = useState<string | null>(null);
  const [handleUpdateReadAndImportant] = useUpdateContactMutation();
  const handleReadImportantClick = async (
    contactId: string,
    isRead: boolean,
    isImportant: boolean
  ) => {
    try {
      await handleUpdateReadAndImportant({
        id: contactId,
        isRead,
        isImportant,
      }).unwrap();
      refetch();
      toast.success("Status updated successfully!");
    } catch (error: any) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  if (!contacts || isLoading || isLoadingPage || isSearching) {
    return <TableSkeleton />;
  }

  if (contacts.length === 0 || isError) {
    return (
      <TableRow>
        <TableCell colSpan={6} className="h-[300px] text-center">
          <div className="flex flex-col items-center justify-center space-y-3">
            <AlertCircle className="h-10 w-10 text-muted-foreground/70" />
            <p className="text-lg font-medium text-muted-foreground">
              {isError ? "Error loading contacts" : "No contacts found"}
            </p>
            <p className="text-sm text-muted-foreground/70">
              {isError
                ? "There was a problem loading your contacts. Please try again later."
                : "When you receive new contacts, they will appear here."}
            </p>
          </div>
        </TableCell>
      </TableRow>
    );
  }

  return (
    <TableBody>
      {contacts.map((contact) => (
        <TableRow
          key={contact._id}
          className="group transition-colors hover:bg-muted/30 data-[state=selected]:bg-muted"
        >
          <TableCell className="font-medium">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 text-primary p-1.5 rounded-full">
                <User className="h-4 w-4" />
              </div>
              <span className="truncate max-w-[180px]">{contact.name}</span>
            </div>
          </TableCell>

          <TableCell>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-3.5 w-3.5" />
              <span className="truncate max-w-[180px]">{contact.email}</span>
            </div>
          </TableCell>

          <TableCell>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-3.5 w-3.5" />
              <span>{contact.phone}</span>
            </div>
          </TableCell>

          <TableCell>
            <AlertDialog
              open={openMessageId === contact._id}
              onOpenChange={(open) => {
                if (!open) setOpenMessageId(null);
              }}
            >
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1"
                  onClick={() => setOpenMessageId(contact._id)}
                >
                  <div className="">
                    <div className=""></div>
                    {contact?.isRead ? (
                      <Button
                        className="bg-green-600 text-white w-32"
                        variant="outline"
                        disabled
                      >
                        Read
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          handleReadImportantClick(
                            contact?._id,
                            true,
                            contact?.isImportant
                          );
                        }}
                        variant="outline"
                      >
                        View Message
                      </Button>
                    )}
                  </div>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-xl">
                <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="rounded-full px-2 py-0.5 font-normal"
                    >
                      Message
                    </Badge>
                    <span>From {contact.name}</span>
                  </AlertDialogTitle>
                  <AlertDialogDescription className="pt-4 text-foreground text-base leading-relaxed">
                    <div className="max-h-[300px] overflow-y-auto pr-2 border-l-2 border-l-primary/20 pl-3">
                      {contact.message}
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>

          <TableCell>
            {contact.isImportant ? (
              <Switch
                onClick={() => {
                  handleReadImportantClick(
                    contact?._id,
                    contact?.isRead,
                    false
                  );
                }}
                checked
              />
            ) : (
              <Switch
                onCheckedChange={() => {
                  handleReadImportantClick(contact?._id, contact?.isRead, true);
                }}
              />
            )}
          </TableCell>

          <TableCell className="text-right">
            <div className="flex justify-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full opacity-70 transition-opacity hover:opacity-100 focus:opacity-100"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Actions</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setOpenMessageId(contact._id)}
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Read message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem
                        className="cursor-pointer text-destructive focus:text-destructive"
                        onSelect={(e) => e.preventDefault()}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </DropdownMenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Contact</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete the contact from{" "}
                          {contact.name}? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="gap-2">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteContact(contact._id)}
                          className=""
                        >
                          {deleteLoading
                            ? "deleteLoading....."
                            : "deleteLoading"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default ContactTable;
