import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonDashboard() {
    return (
        <Card className="bg-white w-full h-full border-none shadow-sm rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>
                    <Skeleton className="w-40 h-10 rounded-full bg-black/10" />
                </CardTitle>

                <Skeleton className="w-20 h-10 rounded-full bg-black/10" />
            </CardHeader>

            <CardContent className="relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition">
                    {/* Left side: book image and info */}
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-20 h-20 rounded-full bg-black/10" />

                        <div className="flex flex-col gap-1">
                            <Skeleton className="w-40 h-5 rounded-full bg-black/10" />
                            <Skeleton className="w-40 h-5 rounded-full bg-black/10" />
                        </div>
                    </div>

                    {/* Right side: eye icon */}
                    <div>
                        <Skeleton className="w-5 h-5 rounded-full bg-black/10" />
                    </div>
                </div>
            </CardContent>

            <CardContent className="relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition">
                    {/* Left side: book image and info */}
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-20 h-20 rounded-full bg-black/10" />

                        <div className="flex flex-col gap-1">
                            <Skeleton className="w-40 h-5 rounded-full bg-black/10" />
                            <Skeleton className="w-40 h-5 rounded-full bg-black/10" />
                        </div>
                    </div>

                    {/* Right side: eye icon */}
                    <div>
                        <Skeleton className="w-5 h-5 rounded-full bg-black/10" />
                    </div>
                </div>
            </CardContent>

            <CardContent className="relative overflow-hidden space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition">
                    {/* Left side: book image and info */}
                    <div className="flex items-center gap-3">
                        <Skeleton className="w-20 h-20 rounded-full bg-black/10" />

                        <div className="flex flex-col gap-1">
                            <Skeleton className="w-40 h-5 rounded-full bg-black/10" />
                            <Skeleton className="w-40 h-5 rounded-full bg-black/10" />
                        </div>
                    </div>

                    {/* Right side: eye icon */}
                    <div>
                        <Skeleton className="w-5 h-5 rounded-full bg-black/10" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
