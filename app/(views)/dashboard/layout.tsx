"use client"

import Footer from "@/components/common/footer/Footer";
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
        <>
            <main suppressHydrationWarning={true}>
                <div className="subpixel-antialiased dark:bg-boxdark-2 dark:text-bodydark bg-[#F1F5F9]">
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="flex h-screen overflow-hidden">
                            <Sidebar
                                sidebarOpen={sidebarOpen}
                                setSidebarOpen={setSidebarOpen} />
                            <div
                                className="relative flex flex-1 flex-col 
                overflow-y-auto overflow-x-hidden"
                            >
                                <Topbar
                                    sidebarOpen={sidebarOpen}
                                    setSidebarOpen={setSidebarOpen}
                                />
                                <main>
                                    <div
                                        className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 min-h-screen grow"
                                    >
                                        {children}
                                    </div>
                                </main>
                                <Footer />
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}