"use client";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
const TableSkeleton = () => {
    return (
      <TableBody>
        {[...Array(5)].map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="w-[50px] h-[50px] rounded" />
            </TableCell>
            <TableCell>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-3 w-[150px]" />
                <div className="flex gap-2">
                  <Skeleton className="h-5 w-[80px]" />
                  <Skeleton className="h-5 w-[80px]" />
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[120px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-[100px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[100px]" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="h-8 w-8 rounded-full ml-auto" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  export default TableSkeleton;