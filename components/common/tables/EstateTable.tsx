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
import EstateRankingDataProp from '@/interface/typings';

function createData(
    id: number,
    estate: string,
    rkh_janjang: number,
    rkh_kg: number,
    realisasi_janjang: number,
    realisasi_kg: number,
    varian_hi_kg: number,
): Data {
    return {
        id,
        estate,
        rkh_janjang,
        rkh_kg,
        realisasi_janjang,
        realisasi_kg,
        varian_hi_kg,
    };
}

const rows = [
    createData(1, 'BUM1', 37671, 8578, 1060, 8680, 4831),
    createData(2, 'BUM2', 77790, 5425, 6893, 7937, 8619),
    createData(3, 'BUM3', 46484, 7432, 2122, 4131, 6397),
    createData(4, 'BUM4', 65991, 2244, 9771, 8597, 7478),
    createData(5, 'BUM5', 69148, 1606, 5965, 3712, 1932),
    createData(6, 'BUM6', 88459, 5616, 5691, 5990, 6125),
    createData(7, 'BUM7', 16045, 4629, 6746, 6543, 5302),
    createData(8, 'BUM8', 48862, 6658, 2793, 5861, 1704),
]

const TABLE_HEAD = [
    "Estate", "RKH Janjang", "RKH Kg", "Realisasi Janjang", "Realisasi Kg", "Varian HI Kg",
];

const TABLE_ROWS = [
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
                                        className="font-semibold leading-none opacity-70"
                                        color="blue-gray"
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