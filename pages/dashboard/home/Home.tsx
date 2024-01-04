"use client";
import HarvesterTable from '@/components/common/tables/HarvesterTable';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import CardDataStats from '@/components/common/cards/CardDataStats';

function Home() {
    return (
        <>
            <Typography className='pb-6 font-bold' variant='h5'>
                Home
            </Typography>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">

                <CardDataStats
                    title="Informasi Karyawan"
                    subtitle1={`Walter Hartwell White`}
                    subtitle2={`[NIK: JKO/202X/000X]`}
                    subtitle3={`Science School Teacher / Scientist`}
                    description={`Information Technology Department`}
                    index={1}
                >
                    <svg width="30" height="30" fill="none">
                        <PersonOutlineRoundedIcon />
                    </svg>
                </CardDataStats>

                <CardDataStats
                    title="Status Presensi"
                    subtitle1={`Kehadiran s.d. 7 November 2023`}
                    subtitle2={`Jumlah Kehadiran: 3`}
                    subtitle3={`Jumlah Ketidakhadiran: 2`}
                    description={`Absen Terakhir: 7-11-2023 (18:35)`}
                    index={2}
                >
                    <svg width="30" height="30" fill="none">
                        <WorkHistoryOutlinedIcon />
                    </svg>
                </CardDataStats>

            </div>

            <Stack className='rounded-md flex-shrink-0 flex justify-between items-center py-2 px-4 my-8 bg-orange-500 shadow-lg shadow-orange-500/50'>
                <Typography sx={{ flex: '1 1 100%' }}
                    variant="h5"
                    id="tableTitle"
                    component="div" color="white" className='font-bold italic outlinedblack tracking-wider text-center flex-shrink-0 cursor-default'>
                    TODAY'S PRODUCTIVITY
                </Typography>
            </Stack>

            <HarvesterTable />

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

            {/*Table A - Estate Ranking*/}
            {/*Table B - Harveters Ranking*/}

            {/*
        Region Information - Date Interval
        1 - BJR / Number of TBS / Total Estimated Weight (total tbs and estimated weight -> at the buttom of the table).
        2 - Vehicle Availability (Total number of available vehicle -> at the button of the table)
        3 - Harvester Attendance (Number of harvester compare with number of TPH, and attendance time (in and out)-> at the buttom of the table)
        */}
        </>
    );
}

export default Home;