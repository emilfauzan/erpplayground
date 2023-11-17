
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

export const TableTankingEstate = () => {
    return (
        <Card className="h-full w-full overflow-scroll px-5 pt-6 pb-2.5 bg-[#24303F] rounded-md">
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