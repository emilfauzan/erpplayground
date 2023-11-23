"use client"

import React from 'react';
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
    "Estate", "Afdeling", "Pemanen", "RKH Janjang", "RKH Kg", "Realisasi Janjang", "Realisasi Kg", "Varian HI Kg",
];

const TABLE_ROWS = [
    {
        estate: "BUM5",
        afdeling: "Afd-31",
        pemanen: "JKO/2023/3307 - Arthur Jimenez",
        rkh_janjang: "66",
        rkh_kg: "187",
        realisasi_janjang: "72",
        realisasi_kg: "153",
        varian_hi_kg: "15",
    },
    {
        estate: "BUM6",
        afdeling: "Afd-17",
        pemanen: "JKO/2021/4777 - Edward Lambert",
        rkh_janjang: "90",
        rkh_kg: "251",
        realisasi_janjang: "12",
        realisasi_kg: "26",
        varian_hi_kg: "30",
    },
    {
        estate: "BUM5",
        afdeling: "Afd-20",
        pemanen: "JKO/2017/5062 - Eunice Roberson",
        rkh_janjang: "78",
        rkh_kg: "171",
        realisasi_janjang: "20",
        realisasi_kg: "151",
        varian_hi_kg: "31",
    },
    {
        estate: "BUM1",
        afdeling: "Afd-33",
        pemanen: "JKO/2012/9709 - Eula King",
        rkh_janjang: "58",
        rkh_kg: "56",
        realisasi_janjang: "52",
        realisasi_kg: "21",
        varian_hi_kg: "44",
    },
    {
        estate: "BUM3",
        afdeling: "Afd-20",
        pemanen: "JKO/2020/7163 - Mike Diaz",
        rkh_janjang: "60",
        rkh_kg: "159",
        realisasi_janjang: "76",
        realisasi_kg: "294",
        varian_hi_kg: "57",
    },
    {
        estate: "BUM2",
        afdeling: "Afd-22",
        pemanen: "JKO/2023/5268 - Elmer Morton",
        rkh_janjang: "78",
        rkh_kg: "64",
        realisasi_janjang: "100",
        realisasi_kg: "51",
        varian_hi_kg: "35",
    },
    {
        estate: "BUM6",
        afdeling: "Afd-3",
        pemanen: "JKO/2015/2420 - Genevieve Smith",
        rkh_janjang: "97",
        rkh_kg: "107",
        realisasi_janjang: "80",
        realisasi_kg: "75",
        varian_hi_kg: "99",
    },
    {
        estate: "BUM6",
        afdeling: "Afd-26",
        pemanen: "JKO/2018/8301 - Michael Hernandez",
        rkh_janjang: "79",
        rkh_kg: "154",
        realisasi_janjang: "38",
        realisasi_kg: "91",
        varian_hi_kg: "47",
    },
    {
        estate: "BUM6",
        afdeling: "Afd-6",
        pemanen: "JKO/2017/9033 - Kevin Holmes",
        rkh_janjang: "98",
        rkh_kg: "222",
        realisasi_janjang: "96",
        realisasi_kg: "115",
        varian_hi_kg: "17",
    },
    {
        estate: "BUM7",
        afdeling: "Afd-6",
        pemanen: "JKO/2021/6232 - Jacob Estrada",
        rkh_janjang: "99",
        rkh_kg: "180",
        realisasi_janjang: "9",
        realisasi_kg: "235",
        varian_hi_kg: "41",
    },
    {
        estate: "BUM3",
        afdeling: "Afd-13",
        pemanen: "JKO/2011/3062 - Curtis Saunders",
        rkh_janjang: "52",
        rkh_kg: "256",
        realisasi_janjang: "80",
        realisasi_kg: "218",
        varian_hi_kg: "66",
    },
    {
        estate: "BUM5",
        afdeling: "Afd-16",
        pemanen: "JKO/2019/3961 - Estelle Goodwin",
        rkh_janjang: "78",
        rkh_kg: "298",
        realisasi_janjang: "16",
        realisasi_kg: "180",
        varian_hi_kg: "43",
    },
    {
        estate: "BUM1",
        afdeling: "Afd-6",
        pemanen: "JKO/2019/7407 - Josie Byrd",
        rkh_janjang: "96",
        rkh_kg: "140",
        realisasi_janjang: "28",
        realisasi_kg: "57",
        varian_hi_kg: "43",
    },
    {
        estate: "BUM1",
        afdeling: "Afd-10",
        pemanen: "JKO/2012/8490 - Mittie Carlson",
        rkh_janjang: "90",
        rkh_kg: "123",
        realisasi_janjang: "28",
        realisasi_kg: "214",
        varian_hi_kg: "96",
    },
];

export const TableRankingHarvester = () => {
    return (

        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-2 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Harvester Ranking (Peringkat Pemanen)
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
                                        className="font-normal leading-none opacity-70"
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
                            ({ estate, afdeling, pemanen, rkh_janjang, rkh_kg, realisasi_janjang, realisasi_kg, varian_hi_kg }, index) => {
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
                                                className="font-normal"
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
                                                {afdeling}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {pemanen}
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

        // <Card className="h-full w-full overflow-scroll border border-stroke px-5 pt-6 pb-2.5 rounded-md text-white">
        //     <table className="w-full min-w-max table-auto text-center">
        //         <thead>
        //             <tr>
        //                 {TABLE_HEAD.map((head) => (
        //                     <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
        //                         <Typography
        //                             variant="small"
        //                             color="blue-gray"
        //                             className="font-normal leading-none opacity-70"
        //                         >
        //                             {head}
        //                         </Typography>
        //                     </th>
        //                 ))}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {TABLE_ROWS.map(({ ranking, estate, rkh_janjang, rkh_kg, realisasi_janjang, realisasi_kg, varian_hi_kg }, index) => (
        //                 <tr key={ranking} className="even:bg-blue-gray-50/50 hover:bg-blue-gray-100/50">
        //                     <td className="p-4">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             {ranking}
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             {estate}
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             {rkh_janjang}
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             {rkh_kg}
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             {realisasi_janjang}
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             {realisasi_kg}
        //                         </Typography>
        //                     </td>
        //                     <td className="p-4">
        //                         <Typography variant="small" color="blue-gray" className="font-normal">
        //                             {varian_hi_kg}
        //                         </Typography>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </Card>
    )
}