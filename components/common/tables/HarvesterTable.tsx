"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import { GridColDef, DataGrid, GridCellParams } from '@mui/x-data-grid';
import { Paper, Typography } from '@mui/material';
import { GetDayAndDateEstateTable } from '../timeAndDate/TimeAndDate';
import clsx from 'clsx';

interface Row {
    id: number;
    estate: string;
    afdeling: string;
    pemanen: string;
    rkh_janjang: number;
    rkh_kg: number;
    realisasi_janjang: number;
    realisasi_kg: number;
    varian_hi_kg?: number; // Optional since we will calculate it dynamically
}


const columns: GridColDef[] = [
    {
        field: 'estate',
        headerName: 'Estate',
        description: 'Asal Estate',
        headerAlign: 'center',
        align: 'center',
        flex: .2,
        minWidth: 100
    }, {
        field: 'afdeling',
        headerName: 'Afdeling',
        description: 'Asal Afdeling',
        headerAlign: 'center',
        align: 'center',
        flex: .2,
        minWidth: 72
    }, {
        field: 'pemanen',
        headerName: 'Pemanen',
        description: 'Nama Pemanen & NIK',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        minWidth: 250,
        maxWidth: 1000
    }, {
        field: 'rkh_janjang',
        headerName: 'RKH Janjang',
        description: 'RKH Janjang - Jumlah janjang sesuai dengan RKH',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        filterable: false,
        flex: .2,
        minWidth: 90
    }, {
        field: 'rkh_kg',
        headerName: 'RKH Kg',
        description: 'RKH Kg - Jumlah berat janjang (Kg) sesuai dengan RKH',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        filterable: false,
        flex: .2,
        minWidth: 90,
        valueFormatter: ({ value }) => `${value} Kg`
    }, {
        field: 'realisasi_janjang',
        headerName: 'Realisasi Janjang',
        description: 'Realisasi Janjang - Realisasi jumlah janjang saat memanen',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        filterable: false,
        flex: .2,
        minWidth: 90
    }, {
        field: 'realisasi_kg',
        headerName: 'Realisasi Kg',
        description: 'Realisasi Kg - Realisasi jumlah berat janjang saat memanen',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        filterable: false,
        flex: .2,
        minWidth: 90,
        valueFormatter: ({ value }) => `${value} Kg`
    }, {
        field: 'varian_hi_kg',
        headerName: 'Varian Hari Ini /Kg',
        description: 'Varian Hari Ini /Kg - Hasil pengurangan antara RKH Kg dengan Realisasi Kg',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        filterable: false,
        flex: .2,
        minWidth: 90,
        valueFormatter: ({ value }) => `${value} Kg`,
        cellClassName: (params: GridCellParams<any, number>) => {
            if (params.value == null) {
                return '';
            }

            return clsx('super-app', {
                negative: params.value < 0,
                positive: params.value > 0,
            });
        },
    },
];

export default function HarvesterTable() {
    return (
        <Box sx={{ width: '100%', whiteSpace: 'normal' }}>
            <Paper sx={{ width: '100%' }} className='rounded-lg'>
                <div className='rounded-md flex-shrink-0 flex justify-between items-center p-4 bg-[#37474f] mb-4'>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h5"
                        id="tableTitle"
                        component="div" color="white" className='font-bold'
                    >
                        Harvester Ranking
                    </Typography>
                    <GetDayAndDateEstateTable />
                </div>
                <div>

                    <DataGrid
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 25, page: 0 },
                            },
                        }}
                        className='cursor-default text-justify'
                        sx={{
                            "& .MuiDataGrid-columnHeaderTitle": {
                                whiteSpace: "normal",
                                lineHeight: "normal",
                                fontWeight: "bold",
                                textAlign: "center",
                            },
                            "& .MuiDataGrid-columnHeader": {
                                // Forced to use important since overriding inline styles
                                height: "unset !important"
                            },
                            "& .MuiDataGrid-columnHeaders": {
                                // Forced to use important since overriding inline styles
                                maxHeight: "168px !important"
                            },
                            '& .super-app.negative': {
                                backgroundColor: '#ef4444',
                                color: '#fff',
                                textShadow: `
                            -.5px -.5px 0 #000,
                            .5px -.5px 0 #000,
                            -.5px .5px 0 #000,
                            .5px .5px 0 #000`
                            },
                            // "& .MuiDataGrid-row": {
                            //     whiteSpace: "normal",
                            //     lineHeight: "normal",
                            //     wordWrap: "break-word",
                            //     height: "unset !important",
                            // },
                            // "& .MuiDataGrid-rows": {
                            //     maxHeight: "168px !important"
                            // },
                        }}
                        checkboxSelection
                        columns={columns}
                        rows={[
                            {
                                id: 1, estate: 'BUM2', afdeling: 'Afd-20', pemanen: 'Myrtle Chambers - JKO/2011/1132', rkh_janjang: 704, rkh_kg: 6347, realisasi_janjang: 476, realisasi_kg: 9719,
                            },
                            {
                                id: 2, estate: 'BUM7', afdeling: 'Afd-8', pemanen: 'Madge Harrington - JKO/2021/0394', rkh_janjang: 955, rkh_kg: 3849, realisasi_janjang: 171, realisasi_kg: 4927,
                            },
                            {
                                id: 3, estate: 'BUM8', afdeling: 'Afd-7', pemanen: 'Lee Wilkins - JKO/2006/5503', rkh_janjang: 619, rkh_kg: 5650, realisasi_janjang: 126, realisasi_kg: 2240,
                            },
                            {
                                id: 4, estate: 'BUM5', afdeling: 'Afd-24', pemanen: 'Effie Hale - JKO/2020/9325', rkh_janjang: 833, rkh_kg: 5957, realisasi_janjang: 423, realisasi_kg: 330,
                            },
                            {
                                id: 5, estate: 'BUM1', afdeling: 'Afd-28', pemanen: 'Aaron Becker - JKO/2014/8732', rkh_janjang: 404, rkh_kg: 957, realisasi_janjang: 268, realisasi_kg: 7825,
                            },
                        ]}

                    />
                </div>
            </Paper>
        </Box>
    );
}
