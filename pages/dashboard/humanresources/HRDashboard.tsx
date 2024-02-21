"use client";
import CardDataStats from '@/components/common/cards/CardDataStats'
import { Typography } from '@mui/material'
import React from 'react'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

function HRDashboard() {
    return (
        <>
            <Typography className='pb-6 font-bold' variant='h5'>
                Human Resources Dashboard
            </Typography>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">

                <CardDataStats
                    title="Daftar Kehadiran"
                    subtitle1={`Kehadiran: 137 Karyawan`}
                    subtitle2={`Izin: 18 Karyawan`}
                    subtitle3={`Sakit: 6 Karyawan`}
                    description={`Mangkir: 21 Karyawan`}
                    index={2}
                >
                    <svg width="30" height="30" fill="none">
                        <PersonOutlineRoundedIcon />
                    </svg>
                </CardDataStats>

                <CardDataStats
                    title="Status Kehadiran"
                    subtitle1={`Kehadiran tanggal 24 Januari 2024`}
                    subtitle2={`Jumlah Kehadiran: 18`}
                    subtitle3={`Jumlah Ketidakhadiran: 0`}
                    description={`Absen Terakhir: 24-01-2024 (18:35)`}
                    index={0}
                >
                    <svg width="30" height="30" fill="none">
                        <WorkHistoryOutlinedIcon />
                    </svg>
                </CardDataStats>

            </div>
        </>
    )
}

export default HRDashboard