"use client";

import React from 'react'
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
    "Ranking", "Estate", "RKH Janjang", "RKH Kg", "Realisasi Janjang", "Realisasi Kg", "Varian Janjang", "Varian Kg",
    ];

const TABLE_ROWS = [
    {
        ranking: "1",
        estate: "2",
        rkh_janjang: "64",
        rkh_kg: "64",
        realisasi_janjang: "64",
        realisasi_kg: "64",
        varian_janjang: "64",
        varian_kg: "64",
    },
    {
        ranking: "1",
        estate: "2",
        rkh_janjang: "64",
        rkh_kg: "64",
        realisasi_janjang: "64",
        realisasi_kg: "64",
        varian_janjang: "64",
        varian_kg: "64",
    },
    {
        ranking: "1",
        estate: "2",
        rkh_janjang: "64",
        rkh_kg: "64",
        realisasi_janjang: "64",
        realisasi_kg: "64",
        varian_janjang: "64",
        varian_kg: "64",
    },
    {
        ranking: "1",
        estate: "2",
        rkh_janjang: "64",
        rkh_kg: "64",
        realisasi_janjang: "64",
        realisasi_kg: "64",
        varian_janjang: "64",
        varian_kg: "64",
    },
    {
        ranking: "1",
        estate: "2",
        rkh_janjang: "64",
        rkh_kg: "64",
        realisasi_janjang: "64",
        realisasi_kg: "64",
        varian_janjang: "64",
        varian_kg: "64",
    },
    {
        ranking: "1",
        estate: "2",
        rkh_janjang: "64",
        rkh_kg: "64",
        realisasi_janjang: "64",
        realisasi_kg: "64",
        varian_janjang: "64",
        varian_kg: "64",
    },
    {
        ranking: "1",
        estate: "2",
        rkh_janjang: "64",
        rkh_kg: "64",
        realisasi_janjang: "64",
        realisasi_kg: "64",
        varian_janjang: "64",
        varian_kg: "64",
    },
];


const Home = () => {
    return (
        <>
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">
                <div
                    title="Informasi Karyawan"
                >
                    <svg width="30" height="30" fill="none">
                    </svg>
                </div>

                <div
                    title="Status Absen"
                >
                    <svg width="30" height="30" fill="none">
                    </svg>
                </div>
            </div> */}

            {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5"> */}
            {/*
        A. Estate / Afdeling / Block Ranking - Today Only (updated every hour) 
          1 - Estate / Afdeling / Block (Show All or Specific)
          2 - RKH (Rencana Kerja Harian)
          3 - BJR
          4 - TBS Quantity
          5 - Estimated Weight
          6 - Total RKH // UOM in Tonnes
          7 - Total TBS
          8 - Total Estimated Weigth // UOM in Tonnes

        B. Harvester Performance Ranking (with TPH information) - When afdeling is selected (updated every hour) 
          1 - Number of Janjang
          2 - Estimated Weight // UOM in Tonnes
          3 - Total Janjang -> at the buttom of the table
          4 - Total Estimated Weight -> at the buttom of the table // UOM in Tonnes
        */}
            {/* <div className="col-span-12"> */}
            <h1>Home</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde autem dolore. Distinctio architecto magnam odio quasi, placeat amet? Dolore omnis, nemo sequi quo accusantium asperiores! Saepe vero reiciendis exercitationem porro beatae eveniet, veniam unde quas harum cum ratione molestiae hic rerum quam repellendus sunt nam ea omnis modi possimus. Voluptas voluptatem consequatur, et necessitatibus officiis illum dolor distinctio praesentium rem libero cum qui iusto, reprehenderit, maxime dolore ducimus assumenda numquam maiores dolorem. Quia adipisci veritatis voluptatum delectus debitis nostrum beatae aperiam labore asperiores perspiciatis nesciunt excepturi, vel inventore quibusdam! Quibusdam enim quae aperiam aliquam perferendis sunt vero pariatur quidem?</h3>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ ranking,estate,rkh_janjang,rkh_kg,realisasi_janjang,realisasi_kg,varian_janjang,varian_kg,}, index) => (
                            <tr key={ranking} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {ranking}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {estate}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {rkh_janjang}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        {rkh_kg}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        {realisasi_janjang}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        {realisasi_kg}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        {varian_janjang}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        {varian_kg}
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>


            {/*Table A - Estate Ranking*/}
            {/*Table B - Harveters Ranking*/}
            {/* </div> */}

            {/*
        Region Information - Date Interval
        1 - BJR / Number of TBS / Total Estimated Weight (total tbs and estimated weight -> at the buttom of the table).
        2 - Vehicle Availability (Total number of available vehicle -> at the button of the table)
        3 - Harvester Attendance (Number of harvester compare with number of TPH, and attendance time (in and out)-> at the buttom of the table)
        */}
            {/* </div> */}
        </>
    )
}

export default Home