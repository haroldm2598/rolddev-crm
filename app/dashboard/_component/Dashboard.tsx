"use client";

import { Suspense } from "react";
import { BookBorrow } from "./BookBorrow";
import DashboardHeader from "@/components/DashboardHeader";
import SkeletonDashboard from "./skeleton/SkeletonDashboard";

export default function Dashboard() {
    return (
        <div className="space-y-4">
            <header className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DashboardHeader title="Barrowed Books" quantity={200} />
                <DashboardHeader title="Total Books" quantity={499} />
                <DashboardHeader title="Total Users" quantity={700} />
            </header>

            <section className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div className="grid grid-cols-1 gap-4">
                    <Suspense fallback={<SkeletonDashboard />}>
                        <BookBorrow
                            title="Borrow Requests"
                            createBook={false}
                            limit={3}
                        />
                    </Suspense>

                    <Suspense fallback={<SkeletonDashboard />}>
                        <BookBorrow
                            title="Account Resquested"
                            createBook={false}
                            limit={0}
                        />
                    </Suspense>
                </div>

                <div>
                    <Suspense fallback={<SkeletonDashboard />}>
                        <BookBorrow
                            title="Recently Added Books"
                            createBook={true}
                            limit={6}
                        />
                    </Suspense>
                </div>
            </section>
        </div>
    );
}
