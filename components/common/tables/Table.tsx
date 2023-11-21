"use client"

import * as React from 'react';
import {
    Card,
    Typography
} from "@material-tailwind/react";

const TABLE_HEAD = [
    "Ranking", "Estate", "RKH Janjang", "RKH Kg", "Realisasi Janjang", "Realisasi Kg", "Varian Janjang", "Varian Kg",
];

const TABLE_ROWS = [
    {
        ranking: "10",
        estate: "Clifford",
        rkh_janjang: "83",
        rkh_kg: "4",
        realisasi_janjang: "35",
        realisasi_kg: "39",
        varian_janjang: "44",
        varian_kg: "34",
    },
    {
        ranking: "3",
        estate: "Lucinda",
        rkh_janjang: "37",
        rkh_kg: "94",
        realisasi_janjang: "62",
        realisasi_kg: "76",
        varian_janjang: "96",
        varian_kg: "13",
    },
    {
        ranking: "6",
        estate: "Rosalie",
        rkh_janjang: "15",
        rkh_kg: "56",
        realisasi_janjang: "15",
        realisasi_kg: "10",
        varian_janjang: "13",
        varian_kg: "4",
    },
    {
        ranking: "9",
        estate: "Lee",
        rkh_janjang: "97",
        rkh_kg: "55",
        realisasi_janjang: "37",
        realisasi_kg: "28",
        varian_janjang: "91",
        varian_kg: "44",
    },
    {
        ranking: "4",
        estate: "Abbie",
        rkh_janjang: "12",
        rkh_kg: "2",
        realisasi_janjang: "30",
        realisasi_kg: "68",
        varian_janjang: "85",
        varian_kg: "87",
    },
    {
        ranking: "2",
        estate: "Owen",
        rkh_janjang: "73",
        rkh_kg: "24",
        realisasi_janjang: "8",
        realisasi_kg: "39",
        varian_janjang: "10",
        varian_kg: "9",
    },
    {
        ranking: "7",
        estate: "Betty",
        rkh_janjang: "62",
        rkh_kg: "36",
        realisasi_janjang: "30",
        realisasi_kg: "34",
        varian_janjang: "24",
        varian_kg: "56",
    },
];

export const TableRankingEstate = () => {
    return (
        <Card className="h-full w-full overflow-scroll px-5 pt-6 pb-2.5 bg-[#24303F] rounded-md">
            <table className="w-full min-w-max table-auto text-center">
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
                    {TABLE_ROWS.map(({ ranking, estate, rkh_janjang, rkh_kg, realisasi_janjang, realisasi_kg, varian_janjang, varian_kg, }, index) => (
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
    )
}