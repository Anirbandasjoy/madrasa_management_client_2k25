import { Skeleton } from "@/components/ui/skeleton";

export default function TeamCardSkeleton() {
  return (
    <div className="relative w-full border border-primary/10 rounded-lg p-2">
      {/* Image Skeleton */}
      <Skeleton className="h-[230px] w-full rounded-lg" />

      {/* Text Section */}
      <div className="text-center py-2 sm:py-4 space-y-2 ">
        <Skeleton className="h-5 w-3/4 mx-auto rounded-md" /> {/* name */}
        <Skeleton className="h-4 w-1/2 mx-auto rounded-md" /> {/* designation */}
      </div>
    </div>
  );
}
