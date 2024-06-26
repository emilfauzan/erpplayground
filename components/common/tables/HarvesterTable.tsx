"use client"

import { ApiResponse, RequestData } from '@/interface/typings';
import { Paper, Typography, Skeleton, Alert, AlertTitle, LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { DataGrid, GridCellParams, GridColDef, GridColumnGroupingModel } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { GetDayAndDateEstateTable } from '../timeAndDate/TimeAndDate';
import { Button, Chip } from '@material-tailwind/react';

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
    // console.log(JSON.stringify(result)); // stringify the response

    return result;
}

const HarvesterTable: React.FC = () => {
    // Skeleton loader
    const [loading, setLoading] = useState<boolean>(true);
    // Estate data table
    const [estateData, setEstateData] = useState<ApiResponse[]>([]);
    // Harvester data table
    const [harvesterData, setHarvesterData] = useState<ApiResponse[]>([]);
    // Icon rotation
    const [rotation, setRotation] = useState<number>(0);
    // Refresh counter
    const [refreshCount, setRefreshCount] = useState<number>(0);
    // Set the response time from the server 
    const [responseTime, setResponseTime] = useState<number | null>(null);
    // Alert outside the refresh time window
    const [showAlert, setShowAlert] = useState<boolean>(false);
    // Refresh cooldown
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    // Cooldown the countdown 
    const [remainingCooldown, setRemainingCooldown] = useState<number | null>(null);

    // Data tables format
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
            description: 'Ranking berdasarkan realisasi berat (Kg)',
            headerAlign: 'center',
            align: 'center',
            flex: .1,
            minWidth: 72
        }, {
            field: 'ESTATE',
            headerName: 'Estate',
            // description: 'Asal Estate',
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
            align: 'left',
            flex: 1,
            minWidth: 200,
            renderCell: (params) => (
                <div style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word', textAlign: 'left' }}>{params.value}</div>
            ),
        }, {
            field: 'RKH_JJG',
            headerName: 'Janjang',
            description: 'RKH Janjang - Jumlah janjang sesuai dengan RKH',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 90,
            valueFormatter: (params) => {
                // Format the number using Intl.NumberFormat
                return new Intl.NumberFormat().format(params.value as number);
            },
        }, {
            field: 'RKH_KG',
            headerName: 'Berat (Kg)',
            description: 'RKH (Kg) - Jumlah berat janjang (dalam Kg) sesuai dengan RKH',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 100,
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
            valueFormatter: (params) => {
                // Format the number using Intl.NumberFormat
                return new Intl.NumberFormat().format(params.value as number);
            },
        }, {
            field: 'VAR_HI_KG',
            headerName: 'Varian (Kg)',
            description: 'Varian Hari Ini /Kg - Hasil pengurangan antara RKH Kg dengan Realisasi Kg',
            headerAlign: 'center',
            align: 'center',
            type: 'number',
            filterable: false,
            flex: .2,
            minWidth: 100,
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

    // Column grouping
    const columnGroupingModel: GridColumnGroupingModel = [
        {
            groupId: 'rkh',
            description: 'Rencana Kerja Harian',
            headerName: 'RKH',
            headerAlign: 'center',
            children: [
                { field: 'RKH_JJG', },
                { field: 'RKH_KG', },
            ],
        },
        {
            groupId: 'real',
            description: 'Realisasi',
            headerName: 'Realisasi',
            headerAlign: 'center',
            children: [
                { field: 'REAL_JJG', },
                { field: 'REAL_KG', },
            ],
        },
    ];

    // Set the unique key for each row
    const getRowId = (row: ApiResponse) => row.ROW_ID;

    const fetchData = async () => {

        setLoading(true);
        setRotation(rotation + 1080);

        // Record start time before making the API request
        const startTime = new Date().getTime();

        try {
            const currentHour = new Date().getHours();

            // Check if the current hour is between 8 and 20
            if (currentHour >= 8 && currentHour < 20 && !buttonDisabled) {
                const apiUrl = 'http://103.121.213.173/webapi/dashboard/getCurrentProduction.php';

                const requestData: RequestData = {
                    // Manual request input
                    // p_date: '29-03-2024',
                    // p_sectioncode: '05',

                    // Automated request input by now date
                    p_date: formattedDate,
                    p_sectioncode: sectionCode,
                };

                const jsonResponse = await postData(apiUrl, requestData);

                // Separate data based on GROUP_DATA value
                const estateData = jsonResponse.filter(item => item.GROUP_DATA === 'ESTATE');
                const harvesterData = jsonResponse.filter(item => item.GROUP_DATA !== 'ESTATE');

                // Typescript syntax to set the data onto each table
                setEstateData(estateData);
                setHarvesterData(harvesterData);

                // Increment the refresh count for each refresh
                setRefreshCount(prevCount => prevCount + 1);

                // Calculate response time to get the response
                const endTime = new Date().getTime();
                const currentResponseTime = endTime - startTime;

                // Set response time in milliseconds
                setResponseTime(currentResponseTime);

                // Set a one-minute cooldown after each successful refresh
                setButtonDisabled(true);
                // Initialize remainingCooldown to 60 seconds
                setRemainingCooldown(60);

                // Update remainingCooldown every second
                const cooldownInterval = setInterval(() => {
                    setRemainingCooldown(prevRemaining => {
                        if (prevRemaining === null || prevRemaining <= 0) {
                            setButtonDisabled(false);
                            clearInterval(cooldownInterval);
                            return null;
                        }

                        return prevRemaining - 1;
                    });
                }, 1000);

            } else {

                // Show alert outside the allowed time range
                setShowAlert(true);

            }

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Fetch data on page load
        fetchData();

        // Set up a timer to refresh data every hour at the start of the hour
        const refreshTimer = setInterval(() => {
            const currentHour = new Date().getHours();
            if (currentHour === 0) {
                // Refresh only when the current hour is 00:00
                fetchData();
            }
        }, 60 * 60 * 1000); // 1 hour in milliseconds
        // + 5 minutes in JKO

        // Cleanup the timer on component unmount
        return () => clearInterval(refreshTimer);
    }, []); // Empty dependency array means this effect runs once on mount

    // Get today's date in dd-mm-yyyy format
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    const formattedDate = `${dd}-${mm}-${yyyy}`;

    // Get the day of the week (0 is Sunday, 1 is Monday, ..., 6 is Saturday)
    // Using keyof & typeof instead of plain declaration to make sure the mappings are correct on every expected type
    const dayOfWeek = new Date().getDay() as keyof typeof sectionCodeMap;

    // Set p_sectioncode based on the day of the week
    const sectionCodeMap = {
        0: '07', // Sunday
        1: '01', // Monday
        2: '02', // Tuesday
        3: '03', // Wednesday
        4: '04', // Thursday
        5: '05', // Friday
        6: '06', // Saturday
    };
    const sectionCode = sectionCodeMap[dayOfWeek].toString();

    return (
        <Box sx={{ width: '100%', whiteSpace: 'normal' }}>
            <Paper sx={{ width: '100%' }} className='rounded-lg bg-[#F1F5F9] shadow-none'>

                {showAlert ? (
                    // Show alert outside the allowed time range
                    <Alert variant="filled" severity="info" className='mb-4'>
                        <AlertTitle><strong>Info</strong></AlertTitle>
                        Data is only displayed between <strong> 08:00 </strong> to <strong> 20:00 </strong> WIB. Please try again later.
                    </Alert>
                ) : (
                    <div>
                        <div className='flex justify-center'>
                            {/* Refresh Button */}
                            <Button
                                onClick={fetchData}
                                disabled={buttonDisabled}
                                className='text-md border p-2 py-4 px-14 rounded-lg font-bold hover:bg-green-500 text-green-500 hover:text-white ease-in-out duration-200 hover:border-green-500 border-green-500 flex items-center gap-3'
                            >
                                {buttonDisabled ? (
                                    `Refresh (${remainingCooldown} seconds)`
                                ) : loading ? (
                                    'Fetching Data...'
                                ) : (
                                    'Refresh'
                                )}
                                <RefreshRoundedIcon
                                    style={{ transform: loading ? 'rotate(1080deg)' : 'none', transition: 'transform 3s ease-in-out' }}
                                />
                            </Button>
                        </div>

                        <div className='flex-wrap xsm:flex xsm:justify-between text-center py-4'>
                            <div>
                                {/* Refresh Count */}
                                <Chip value={
                                    <Typography variant="caption">
                                        Refresh Count: <strong> {refreshCount} </strong> Times
                                    </Typography>
                                } variant='outlined' className="rounded-full text-blue-gray-600" />
                            </div>

                            {/* Response Time */}
                            {responseTime !== null && (
                                <div>
                                    <Chip
                                        value={
                                            <Typography variant="caption">
                                                Response Time: <strong> {responseTime} </strong> milliseconds
                                            </Typography>
                                        }
                                        variant='ghost' className="rounded-full text-blue-gray-600"
                                    />
                                </div>
                            )}
                        </div>

                        {/* No Data Message */}
                        {!loading && estateData.length === 0 && harvesterData.length === 0 && (
                            <h4 className='text-center pb-10'>Click on <strong> Refresh </strong> button to show the data.</h4>
                        )}

                        {/* Loading Linear Progress Bar */}
                        {loading &&
                            <LinearProgress className='mb-4 bg-[#F1F5F9] rounded-full' color="warning" />
                        }
                    </div>

                )}

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
                                ESTATE RANKING
                            </Typography>
                            <GetDayAndDateEstateTable />
                        </div>
                        {loading && (
                            // Skeleton loading for table header
                            <div className='my-1' style={{ height: 100, width: '100%', animationDuration: "0.4s" }}>
                                <Skeleton variant="rounded" height={100} animation="wave" />
                            </div>
                        )}
                        {loading && (
                            // Skeleton loading for table content
                            <div className='my-1' style={{ height: 420, width: '100%' }}>
                                <Skeleton variant="rounded" height={420} animation="wave" />
                            </div>
                        )}
                        {loading && (
                            // Skeleton loading for table footer
                            <div className='my-1 mb-10' style={{ height: 50, width: '100%' }}>
                                <Skeleton variant="rounded" height={50} animation="wave" />
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

                {/* Harvester Table Start */}
                {harvesterData.length > 0 && (
                    <div>

                        {/* Loading Linear ProgressBar Start */}
                        {loading &&
                            <LinearProgress className='mb-4 bg-[#F1F5F9] rounded-full' color="warning" />
                        }
                        {/* Loading Linear ProgressBar End */}

                        <div className='rounded-md flex-shrink-0 flex justify-between items-center p-4 bg-[#37474f]' id='section-3' style={{ scrollMarginTop: '5em' }}>
                            <Typography
                                sx={{ flex: '1 1 100%' }}
                                variant="h5"
                                id="tableTitle"
                                component="div" color="white" className='font-bold'
                            >
                                HARVESTER RANKING
                            </Typography>
                            <GetDayAndDateEstateTable />
                        </div>
                        {loading && (
                            // Skeleton loading for table header
                            <div className='my-1' style={{ height: 100, width: '100%' }}>
                                <Skeleton variant="rounded" height={100} animation="wave" />
                            </div>
                        )}
                        {loading && (
                            // Skeleton loading for table content
                            <div className='my-1' style={{ height: 640, width: '100%' }}>
                                <Skeleton variant="rounded" height={640} animation="wave" />
                            </div>
                        )}
                        {loading && (
                            // Skeleton loading for table footer
                            <div className='my-1 mb-10' style={{ height: 50, width: '100%' }}>
                                <Skeleton variant="rounded" height={50} animation="wave" />
                            </div>
                        )}
                        {!loading && harvesterData.length > 0 && (
                            <div style={{ height: 800, width: '100%' }}>
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
                                    getRowHeight={() => 79}
                                    // getEstimatedRowHeight={() => 200}
                                    columnGroupingModel={columnGroupingModel}
                                    experimentalFeatures={{ columnGrouping: true }}
                                />
                            </div>
                        )}
                    </div>
                )}
                {/* Harvester Table End */}


            </Paper >
        </Box >

    );
}

export default HarvesterTable;

