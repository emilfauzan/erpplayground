"use client"

import Sidebar from '@/components/navigation/Sidebar/Sidebar'
import Topbar from '@/components/navigation/Topbar/Topbar'
import React, { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <body>
            <div className="flex h-screen overflow-hidden border border-blue-400">
                <Sidebar />
                <div
                    className="relative flex flex-1 flex-col 
                overflow-y-auto overflow-x-hidden border border-red-600"
                >
                    <Topbar />
                    <main>
                        <div
                            className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 border border-green-400"
                        >
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </body>
    )
}