import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function NoticeCardSkeleton() {
  return (
    <Card className="bg-gray-50 rounded p-6 space-y-4">
      <CardContent className="space-y-4 p-0">
        {/* Icon + Title */}
        <div className="flex items-start gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-40" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-3 w-3 rounded-full" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>

        {/* Button */}
        <Skeleton className="h-8 w-24 rounded-sm" />
      </CardContent>
    </Card>
  )
}
