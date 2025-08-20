import { Skeleton } from "@/components/ui/skeleton"

export function EventCardSkeleton() {
  return (
    <div className="flex flex-col items-center bg-mint rounded relative overflow-hidden p-3">
      {/* Image Skeleton */}
      <Skeleton className="w-full h-[250px] rounded" />

      {/* Content */}
      <div className="w-full mt-4 space-y-3">
        {/* Title lines */}
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-4">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-8 w-20 rounded" />
        </div>
      </div>
    </div>
  )
}
