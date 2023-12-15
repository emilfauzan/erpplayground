"use client"

import { ApiResponse, RequestData } from '@/interface/typings';
import { Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { GetDayAndDateEstateTable } from '../timeAndDate/TimeAndDate';

async function postData(url: string, data: RequestData) {
    const searchParams = new URLSearchParams();
    searchParams.append('p_date', data.p_date);
    searchParams.append('p_sectioncode', data.p_sectioncode);

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: searchParams.toString(),

    })

    const result: ApiResponse[] = await response.json();
    // console.log(JSON.stringify(result));

    return result;
}

export default function HarvesterTable() {
    const [responseData, setResponseData] = useState<ApiResponse[]>([]);

    const columns: GridColDef[] = [
        {
            field: 'ROW_ID',
            headerName: 'Row Id',
            description: 'Row Id',
            headerAlign: 'center',
            align: 'center',
            flex: .2,
            minWidth: 50
        }, {
            field: 'GROUP_DATA',
            headerName: 'Group Data',
            description: 'Group Data',
            headerAlign: 'center',
            align: 'center',
            flex: .2,
            minWidth: 110
        }, {
            field: 'RANKING',
            headerName: 'Ranking',
            description: 'Ranking',
            headerAlign: 'center',
            align: 'center',
            flex: .2,
            minWidth: 72
        }, {
            field: 'ESTATE',
            headerName: 'Estate',
            description: 'Asal Estate',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            minWidth: 80
        }, {
            field: 'AFDELING',
            headerName: 'Afdeling',
            description: 'Asal Afdeling',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            flex: .2,
            minWidth: 80
        }, {
            field: 'TPH',
            headerName: 'TPH',
            description: 'Asal TPH',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            minWidth: 80
        }, {
            field: 'PEMANEN',
            headerName: 'Harvester',
            description: 'NIK - Nama Pemanen (Harvester)',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            minWidth: 250,
            maxWidth: 1000,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>{params.value}</div>
            ),
        }, {
            field: 'RKH_JJG',
            headerName: 'RKH Jajang',
            description: 'RKH Janjang - Jumlah janjang sesuai dengan RKH',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 90,
        }, {
            field: 'RKH_KG',
            headerName: 'RKH Kg',
            description: 'RKH Kg - Jumlah berat janjang (dalam Kg) sesuai dengan RKH',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 90,
        }, {
            field: 'REAL_JJG',
            headerName: 'Realisasi Janjang',
            description: 'Realisasi Janjang - Realisasi jumlah janjang saat panen',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 90,
        }, {
            field: 'REAL_KG',
            headerName: 'Realisasi Kg',
            description: 'Realisasi Kg - Realisasi jumlah berat (dalam kg) janjang saat memanen',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 90,
        }, {
            field: 'VAR_HI_KG',
            headerName: 'Varian Hari Ini /Kg',
            description: 'Varian Hari Ini /Kg - Hasil pengurangan antara RKH Kg dengan Realisasi Kg',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 90,
            // cellClassName: (params: GridCellParams<any, number>) => {
            //     if (params.value == null) {
            //         return '';
            //     }

            //     return clsx('super-app', {
            //         negative: params.value < 0,
            //         positive: params.value > 0,
            //     });
            // },
        }, {
            field: 'PROD_STATUS',
            headerName: 'Status Produksi',
            description: 'Status Produksi: Over Target atau Under Target',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            flex: .2,
            minWidth: 90,
        },
    ];

    const handleClick = async () => {
        const apiUrl = 'http://103.121.213.173/webapi/dashboard/getCurrentProduction.php';

        const requestData: RequestData = {
            p_date: '14-12-2023',
            p_sectioncode: '04',
        };

        try {
            const jsonResponse = await postData(apiUrl, requestData);
            // const jsonString = JSON.stringify(jsonResponse, null, 2);
            setResponseData(jsonResponse);
            // console.log('JSON Response:', jsonString);
            // response bentuk json
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getRowId = (row: ApiResponse) => row.ROW_ID;

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

                <div className='flex justify-center my-20'>
                    <button className='border p-2 rounded-lg font-bold hover:bg-green-500 text-green-500 hover:text-white ease-in-out duration-200 hover:border-green-500 border-green-500' onClick={handleClick} >Post la</button>
                </div>

                {responseData && responseData.length > 0 ? (
                    <div style={{ height: 400, width: '100%' }}>
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
                                }
                            }}
                            checkboxSelection
                            columns={columns}
                            rows={responseData}
                            getRowId={getRowId}
                        />
                    </div>
                ) : (
                    <h4 className='text-center pb-10'>No Data le</h4>
                )}
            </Paper >
        </Box >
    );
}
