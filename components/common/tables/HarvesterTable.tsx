"use client"

import { ApiResponse, RequestData } from '@/interface/typings';
import { Paper, Typography, Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { DataGrid, GridCellParams, GridColDef, GridColumnGroupingModel } from '@mui/x-data-grid';
import { useState } from 'react';
import { GetDayAndDateEstateTable } from '../timeAndDate/TimeAndDate';
import { Button } from '@material-tailwind/react';

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

const HarvesterTable: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [estateData, setEstateData] = useState<ApiResponse[]>([]);
    const [harvesterData, setHarvesterData] = useState<ApiResponse[]>([]);

    const columns: GridColDef[] = [
        {
            field: 'ROW_ID',
            headerName: '',
            description: 'Row Id',
            headerAlign: 'center',
            align: 'center',
            flex: .2,
            minWidth: 60,
        }, {
            field: 'GROUP_DATA',
            headerName: 'Group Data',
            description: 'Group Data',
            headerAlign: 'center',
            align: 'center',
            flex: .2,
            minWidth: 110,
        }, {
            field: 'RANKING',
            headerName: 'Ranking',
            description: 'Ranking',
            headerAlign: 'center',
            align: 'center',
            flex: .1,
            minWidth: 72
        }, {
            field: 'ESTATE',
            headerName: 'Estate',
            description: 'Asal Estate',
            headerAlign: 'center',
            align: 'center',
            flex: .1,
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
            flex: .2,
            minWidth: 60
        }, {
            field: 'PEMANEN',
            headerName: 'Harvester',
            description: 'NIK - Nama Pemanen (Harvester)',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            minWidth: 200,
            maxWidth: 1000,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>{params.value}</div>
            ),
        }, {
            field: 'RKH_JJG',
            headerName: 'Jajang',
            description: 'RKH Janjang - Jumlah janjang sesuai dengan RKH',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 90,
            maxWidth: 120,
            valueFormatter: (params) => {
                // Format the number using Intl.NumberFormat
                return new Intl.NumberFormat().format(params.value as number);
            },
        }, {
            field: 'RKH_KG',
            headerName: 'Berat (Kg)',
            description: 'RKH Kg - Jumlah berat janjang (dalam Kg) sesuai dengan RKH',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 100,
            maxWidth: 120,
            valueFormatter: (params) => {
                // Format the number using Intl.NumberFormat
                return new Intl.NumberFormat().format(params.value as number);
            },
        }, {
            field: 'REAL_JJG',
            headerName: 'Janjang',
            description: 'Realisasi Janjang - Realisasi jumlah janjang saat panen',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 90,
            maxWidth: 120,
            valueFormatter: (params) => {
                // Format the number using Intl.NumberFormat
                return new Intl.NumberFormat().format(params.value as number);
            },
        }, {
            field: 'REAL_KG',
            headerName: 'Berat (Kg)',
            description: 'Realisasi Kg - Realisasi jumlah berat (dalam kg) janjang saat memanen',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 100,
            maxWidth: 120,
            valueFormatter: (params) => {
                // Format the number using Intl.NumberFormat
                return new Intl.NumberFormat().format(params.value as number);
            },
        }, {
            field: 'VAR_HI_KG',
            headerName: 'Varian Hari Ini /Kg',
            description: 'Varian Hari Ini /Kg - Hasil pengurangan antara RKH Kg dengan Realisasi Kg',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 100,
            maxWidth: 150,
            cellClassName: (params: GridCellParams) => {
                const prodStatus = params.row.PROD_STATUS;
                // Apply red background if PROD_STATUS is 'UT'
                return prodStatus === 'UT' ? 'bg-red-500 text-white outlinedblack' : '';
            },
            valueFormatter: (params) => {
                // Format the number using Intl.NumberFormat
                return new Intl.NumberFormat().format(params.value as number);
            },
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

    const estateColumns: GridColDef[] = columns.filter(column => {
        // Exclude AFDELING, TPH, and PEEMANEN columns
        return !['ROW_ID', 'GROUP_DATA', 'AFDELING', 'TPH', 'PEMANEN', 'PROD_STATUS'].includes(column.field as string);
    });

    const harvesterColumns: GridColDef[] = columns.filter(column => {
        // Exclude AFDELING, TPH, and PEEMANEN columns
        return !['ROW_ID', 'GROUP_DATA', 'PROD_STATUS'].includes(column.field as string);
    });

    const columnGroupingModel: GridColumnGroupingModel = [
        {
            groupId: 'rkh',
            description: 'rkh',
            headerName: 'RKH',
            headerAlign: 'center',
            children: [
                { field: 'RKH_JJG', },
                { field: 'RKH_KG', },
            ],
        },
        {
            groupId: 'real',
            description: 'real',
            headerName: 'REALISASI',
            headerAlign: 'center',
            children: [
                { field: 'REAL_JJG', },
                { field: 'REAL_KG', },
            ],
        },
    ];

    const getRowId = (row: ApiResponse) => row.ROW_ID;

    const handleClick = async () => {
        const apiUrl = 'http://103.121.213.173/webapi/dashboard/getCurrentProduction.php';

        const requestData: RequestData = {
            p_date: '19-12-2023',
            p_sectioncode: '02',
        };

        setLoading(true);

        try {
            const jsonResponse = await postData(apiUrl, requestData);

            // Separate data based on GROUP_DATA value
            const estateData = jsonResponse.filter(item => item.GROUP_DATA === 'ESTATE');
            const harvesterData = jsonResponse.filter(item => item.GROUP_DATA !== 'ESTATE');

            setEstateData(estateData);
            setHarvesterData(harvesterData);

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ width: '100%', whiteSpace: 'normal' }}>
            <Paper sx={{ width: '100%' }} className='rounded-lg bg-[#F1F5F9] shadow-none'>
                <div className='flex justify-center'>
                    <Button className='text-md border mb-8 p-2 py-4 px-14 rounded-lg font-bold hover:bg-green-500 text-green-500 hover:text-white ease-in-out duration-200 hover:border-green-500 border-green-500 flex items-center gap-3' onClick={handleClick} >
                        Refresh
                        <RefreshRoundedIcon />
                    </Button>
                </div>

                {/* Estate Table */}
                {estateData.length > 0 && (
                    <div>
                        <div className='rounded-md flex-shrink-0 flex justify-between items-center p-4 bg-[#37474f]'>
                            <Typography
                                sx={{ flex: '1 1 100%' }}
                                variant="h5"
                                id="tableTitle"
                                component="div" color="white" className='font-bold'
                            >
                                ESTATE TABLE RANKING
                            </Typography>
                            <GetDayAndDateEstateTable />
                        </div>
                        {loading && (
                            // Skeleton loading while data is loading
                            <div style={{ height: 600, width: '100%' }}>
                                <Skeleton variant="rectangular" height={600} animation="wave" />
                            </div>
                        )}
                        {!loading && estateData.length > 0 && (
                            <div style={{ height: '100%', width: '100%' }}>
                                <DataGrid
                                    initialState={{
                                        pagination: {
                                            paginationModel: { pageSize: 8, page: 0 },
                                        },
                                    }}
                                    className='cursor-default text-center mb-10 bg-white'
                                    columns={estateColumns}
                                    rows={estateData}
                                    getRowId={getRowId}
                                    // getEstimatedRowHeight={() => 400} optional for alternate row height 
                                    columnGroupingModel={columnGroupingModel}
                                    experimentalFeatures={{ columnGrouping: true }}
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* Harvester Table */}
                {harvesterData.length > 0 && (
                    <div>
                        <div className='rounded-md flex-shrink-0 flex justify-between items-center p-4 bg-[#37474f]'>
                            <Typography
                                sx={{ flex: '1 1 100%' }}
                                variant="h5"
                                id="tableTitle"
                                component="div" color="white" className='font-bold'
                            >
                                HARVESTER TABLE RANKING
                            </Typography>
                            <GetDayAndDateEstateTable />
                        </div>
                        {loading && (
                            // Skeleton loading while data is loading
                            <div style={{ height: 600, width: '100%' }}>
                                <Skeleton variant="rectangular" height={600} animation="wave" />
                            </div>
                        )}
                        {!loading && harvesterData.length > 0 && (
                            <div style={{ height: '100%', width: '100%' }}>
                                <DataGrid
                                    initialState={{
                                        pagination: {
                                            paginationModel: { pageSize: 8, page: 0 },
                                        },
                                    }}
                                    className='cursor-default text-center mb-10 bg-white'
                                    columns={harvesterColumns}
                                    rows={harvesterData}
                                    getRowId={getRowId}
                                    // getEstimatedRowHeight={() => 400} optional for alternate row height 
                                    columnGroupingModel={columnGroupingModel}
                                    experimentalFeatures={{ columnGrouping: true }}
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* No Data Message */}
                {!loading && estateData.length === 0 && harvesterData.length === 0 && (
                    <h4 className='text-center pb-10'>Click on Refresh button to show the data.</h4>
                )}

            </Paper >
        </Box >

    );
}

export default HarvesterTable;

