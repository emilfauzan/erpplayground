"use client"

import * as React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Typography,
    CardFooter
} from "@material-tailwind/react";
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

const TABLE_HEAD = [
    "Estate", "RKH Janjang", "RKH Kg", "Realisasi Janjang", "Realisasi Kg", "Varian HI Kg",
];

const TABLE_ROWS = [
    {
        estate: "BUM1",
        rkh_janjang: "37671",
        rkh_kg: "8578",
        realisasi_janjang: "1060",
        realisasi_kg: "8680",
        varian_hi_kg: "4831",
    },
    {
        estate: "BUM2",
        rkh_janjang: "77790",
        rkh_kg: "5425",
        realisasi_janjang: "6893",
        realisasi_kg: "7937",
        varian_hi_kg: "8619",
    },
    {
        estate: "BUM3",
        rkh_janjang: "46484",
        rkh_kg: "7432",
        realisasi_janjang: "2122",
        realisasi_kg: "4131",
        varian_hi_kg: "6397",
    },
    {
        estate: "BUM4",
        rkh_janjang: "65991",
        rkh_kg: "2244",
        realisasi_janjang: "9771",
        realisasi_kg: "8597",
        varian_hi_kg: "7478",
    },
    {
        estate: "BUM5",
        rkh_janjang: "69148",
        rkh_kg: "1606",
        realisasi_janjang: "5965",
        realisasi_kg: "3712",
        varian_hi_kg: "1932",
    },
    {
        estate: "BUM6",
        rkh_janjang: "88459",
        rkh_kg: "5616",
        realisasi_janjang: "5691",
        realisasi_kg: "5990",
        varian_hi_kg: "6125",
    },
    {
        estate: "BUM7",
        rkh_janjang: "16045",
        rkh_kg: "4629",
        realisasi_janjang: "6746",
        realisasi_kg: "6543",
        varian_hi_kg: "5302",
    },
    {
        estate: "BUM8",
        rkh_janjang: "48862",
        rkh_kg: "6658",
        realisasi_janjang: "2793",
        realisasi_kg: "5861",
        varian_hi_kg: "1704",
    },
];

export const TableRankingEstate = () => {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-2 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Estate Ranking (Peringkat Estate)
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, labore.
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-center">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-semibold leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length && (
                                            <UnfoldMoreRoundedIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ estate, rkh_janjang, rkh_kg, realisasi_janjang, realisasi_kg, varian_hi_kg }, index) => {
                                const isLast = index === TABLE_ROWS.length;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={estate} className="even:bg-blue-gray-50/50 hover:bg-blue-gray-100/50">
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-bold"
                                            >
                                                {estate}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {rkh_janjang}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {rkh_kg}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {realisasi_janjang}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {realisasi_kg}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {varian_hi_kg}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">

                {/* Pagination Harvester Ranking Table */}
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>

            </CardFooter>
        </Card>
    )
}