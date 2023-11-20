"use client"

import Loader from "@/components/common/loader/Loader";
import Sidebar from '@/components/navigation/Sidebar/Sidebar'
import Topbar from '@/components/navigation/Topbar/Topbar'
import React, { ReactNode, useEffect, useState } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    return (
        <body suppressHydrationWarning={true}>
            <div className="dark:bg-boxdark-2 dark:text-bodydark">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="flex h-screen overflow-hidden border border-blue-400">
                        <Sidebar
                            sidebarOpen={sidebarOpen}
                            setSidebarOpen={setSidebarOpen} />
                        <div
                            className="relative flex flex-1 flex-col 
                overflow-y-auto overflow-x-hidden border border-red-600"
                        >
                            <Topbar
                                sidebarOpen={sidebarOpen}
                                setSidebarOpen={setSidebarOpen}
                            />
                            <main>
                                <div
                                    className="bg-[#1A222C] mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 border border-green-400"
                                >
                                    {children}
                                </div>
                            </main>
                        </div>
                    </div>
                )}
            </div>
        </body>
    )
}