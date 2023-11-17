"use client";

import * as React from 'react';
import {
    Card,
    Typography,
    CardHeader,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import { TableTankingEstate } from '@/components/common/tables/Table';

function createData(
    name: number,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(2, 159, 6.0, 24, 4.0),
    createData(2, 237, 9.0, 37, 4.3),
    createData(2, 262, 16.0, 24, 6.0),
    createData(2, 305, 3.7, 67, 4.3),
    createData(2, 356, 16.0, 49, 3.9),
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
            <h1 className='pb-4'>Home</h1>
            <div className="grid grid-cols-2 gap-3">
                {/* Card starts here */}
                <Card className="flex flex-wrap py-5 border border-red-500 rounded-md bg-[#24303F]">
                    <CardHeader color='blue-gray' className='relative border border-teal-400 py-2 px-6'>
                        <h2>Alo</h2>
                    </CardHeader>
                    <CardBody className='border border-green-400'>
                        <Typography variant='h5' color='blue-gray' className='mb-2'>
                            Testing is indeed such a test.
                        </Typography>
                        <Typography className='text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi provident accusantium dolor eos magni mollitia sunt quasi, voluptate similique, rerum aliquid dicta inventore laudantium officiis dolore soluta sapiente culpa quod adipisci obcaecati, in aperiam debitis? Sit eius quos temporibus tempora commodi laudantium rem, voluptatum id tempore officiis fugiat dolore sed.
                        </Typography>
                    </CardBody>
                    <CardFooter className="border border-purple-400">
                        Footer is right here.
                    </CardFooter>
                </Card>
                <Card className="flex flex-wrap py-6 border border-red-500">
                    <CardHeader color='blue-gray' className='relative border border-teal-400 px-6 py-2'>
                        <h2>Alo</h2>
                    </CardHeader>
                    <CardBody className='border border-green-400'>
                        <Typography variant='h5' color='blue-gray' className='mb-2'>
                            Testing is indeed such a test.
                        </Typography>
                        <Typography>
                            Such test cannot be executed easily.
                        </Typography>
                    </CardBody>
                    <CardFooter className="border border-purple-400">
                        Footer is right here.
                    </CardFooter>
                </Card>
                <Card className="flex flex-wrap py-6 border border-red-500">
                    <CardHeader color='blue-gray' className='relative border border-teal-400 px-6 py-2'>
                        <h2>Alo</h2>
                    </CardHeader>
                    <CardBody className='border border-green-400'>
                        <Typography variant='h5' color='blue-gray' className='mb-2'>
                            Testing is indeed such a test.
                        </Typography>
                        <Typography>
                            Such test cannot be executed easily.
                        </Typography>
                    </CardBody>
                    <CardFooter className="border border-purple-400">
                        Footer is right here.
                    </CardFooter>
                </Card>
                <Card className="flex flex-wrap py-6 border border-red-500">
                    <CardHeader color='blue-gray' className='relative border border-teal-400 px-6 py-2'>
                        <h2>Alo</h2>
                    </CardHeader>
                    <CardBody className='border border-green-400'>
                        <Typography variant='h5' color='blue-gray' className='mb-2'>
                            Testing is indeed such a test.
                        </Typography>
                        <Typography>
                            Such test cannot be executed easily.
                        </Typography>
                    </CardBody>
                    <CardFooter className="border border-purple-400">
                        Footer is right here.
                    </CardFooter>
                </Card>
                {/* Card ends here */}
            </div>

            <h3 className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed unde autem dolore. Distinctio architecto magnam odio quasi, placeat amet? Dolore omnis, nemo sequi quo accusantium asperiores! Saepe vero reiciendis exercitationem porro beatae eveniet, veniam unde quas harum cum ratione molestiae hic rerum quam repellendus sunt nam ea omnis modi possimus. Voluptas voluptatem consequatur, et necessitatibus officiis illum dolor distinctio praesentium rem libero cum qui iusto, reprehenderit, maxime dolore ducimus assumenda numquam maiores dolorem. Quia adipisci veritatis voluptatum delectus debitis nostrum beatae aperiam labore asperiores perspiciatis nesciunt excepturi, vel inventore quibusdam! Quibusdam enim quae aperiam aliquam perferendis sunt vero pariatur quidem?</h3>

            <TableTankingEstate />

            <Card className="h-full w-full overflow-scroll px-5 pt-6 pb-2.5 bg-[#24303F] rounded-md">
                <TableContainer className='text-white'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Estate</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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