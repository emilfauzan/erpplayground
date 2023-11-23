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
        ranking: "47",
        estate: "Leon",
        rkh_janjang: "13",
        rkh_kg: "21",
        realisasi_janjang: "89",
        realisasi_kg: "53",
        varian_janjang: "50",
        varian_kg: "15",
    },
    {
        ranking: "11",
        estate: "Francisco",
        rkh_janjang: "86",
        rkh_kg: "4",
        realisasi_janjang: "76",
        realisasi_kg: "69",
        varian_janjang: "14",
        varian_kg: "30",
    },
    {
        ranking: "55",
        estate: "Winnie",
        rkh_janjang: "76",
        rkh_kg: "100",
        realisasi_janjang: "1",
        realisasi_kg: "37",
        varian_janjang: "8",
        varian_kg: "31",
    },
    {
        ranking: "80",
        estate: "Beatrice",
        rkh_janjang: "26",
        rkh_kg: "63",
        realisasi_janjang: "33",
        realisasi_kg: "89",
        varian_janjang: "17",
        varian_kg: "44",
    },
    {
        ranking: "6",
        estate: "Dora",
        rkh_janjang: "62",
        rkh_kg: "86",
        realisasi_janjang: "59",
        realisasi_kg: "10",
        varian_janjang: "47",
        varian_kg: "57",
    },
    {
        ranking: "27",
        estate: "Esther",
        rkh_janjang: "90",
        rkh_kg: "52",
        realisasi_janjang: "26",
        realisasi_kg: "75",
        varian_janjang: "3",
        varian_kg: "35",
    },
    {
        ranking: "88",
        estate: "Dorothy",
        rkh_janjang: "11",
        rkh_kg: "87",
        realisasi_janjang: "11",
        realisasi_kg: "39",
        varian_janjang: "56",
        varian_kg: "99",
    },
    {
        ranking: "85",
        estate: "Effie",
        rkh_janjang: "86",
        rkh_kg: "69",
        realisasi_janjang: "78",
        realisasi_kg: "9",
        varian_janjang: "66",
        varian_kg: "47",
    },
    {
        ranking: "97",
        estate: "Eula",
        rkh_janjang: "27",
        rkh_kg: "74",
        realisasi_janjang: "92",
        realisasi_kg: "99",
        varian_janjang: "91",
        varian_kg: "17",
    },
    {
        ranking: "24",
        estate: "Manuel",
        rkh_janjang: "16",
        rkh_kg: "99",
        realisasi_janjang: "99",
        realisasi_kg: "9",
        varian_janjang: "52",
        varian_kg: "41",
    },
    {
        ranking: "85",
        estate: "Leila",
        rkh_janjang: "52",
        rkh_kg: "14",
        realisasi_janjang: "44",
        realisasi_kg: "68",
        varian_janjang: "45",
        varian_kg: "66",
    },
    {
        ranking: "94",
        estate: "Willie",
        rkh_janjang: "66",
        rkh_kg: "74",
        realisasi_janjang: "5",
        realisasi_kg: "75",
        varian_janjang: "14",
        varian_kg: "43",
    },
    {
        ranking: "84",
        estate: "Sam",
        rkh_janjang: "38",
        rkh_kg: "18",
        realisasi_janjang: "48",
        realisasi_kg: "84",
        varian_janjang: "59",
        varian_kg: "43",
    },
    {
        ranking: "38",
        estate: "Franklin",
        rkh_janjang: "82",
        rkh_kg: "53",
        realisasi_janjang: "75",
        realisasi_kg: "85",
        varian_janjang: "61",
        varian_kg: "96",
    },
];

export const TableRankingEstate = () => {
    return (
        <Card className="h-full w-full overflow-scroll border border-stroke px-5 pt-6 pb-2.5 rounded-md text-white">
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
                        <tr key={ranking} className="even:bg-blue-gray-50/50 hover:bg-blue-gray-100/50">
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
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {rkh_kg}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {realisasi_janjang}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {realisasi_kg}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {varian_janjang}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
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