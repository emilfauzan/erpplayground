"use client";
import HarvesterTable from '@/components/common/tables/HarvesterTable';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import Typography from '@mui/material/Typography';
import { IconButton, Stack } from '@mui/material';
import CardDataStats from '@/components/common/cards/CardDataStats';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';

function Home() {

    // const handleScrollWithPadding = () => {
    //     const targetElement = document.getElementById('#first-section');

    //     if (targetElement) {
    //         const paddingTop = 6; // Adjust this value based on your requirement
    //         const scrollPosition = targetElement.offsetTop - paddingTop;

    //         window.scrollTo({
    //             top: scrollPosition,
    //             behavior: 'smooth',
    //         });
    //     }
    // };


    return (
        <>
            <Typography className='pb-6 font-bold' variant='h5' id="first-section">
                Home
            </Typography>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5">

                <CardDataStats
                    title="Informasi Karyawan"
                    subtitle1={`Walter Hartwell White`}
                    subtitle2={`[NIK: JKO/202X/000X]`}
                    subtitle3={`Full Stack Web Developer`}
                    description={`Information & Technology Department`}
                    index={1}
                >
                    <svg width="30" height="30" fill="none">
                        <PersonOutlineRoundedIcon />
                    </svg>
                </CardDataStats>

                <CardDataStats
                    title="Status Presensi"
                    subtitle1={`Kehadiran s.d. 24 Januari 2024`}
                    subtitle2={`Jumlah Kehadiran: 18`}
                    subtitle3={`Jumlah Ketidakhadiran: 0`}
                    description={`Absen Terakhir: 24-01-2024 (18:35)`}
                    index={2}
                >
                    <svg width="30" height="30" fill="none">
                        <WorkHistoryOutlinedIcon />
                    </svg>
                </CardDataStats>

            </div>

            <Stack className='rounded-md flex-shrink-0 flex justify-between items-center py-2 px-4 my-8 bg-orange-500 shadow-lg shadow-orange-500/50'
                id="second-section">
                <Typography sx={{ flex: '1 1 100%' }}
                    variant="h5"
                    id="tableTitle"
                    component="div" color="white" className='font-bold italic outlinedblack tracking-wider text-center flex-shrink-0 cursor-default'>
                    TODAY'S PRODUCTIVITY
                </Typography>
            </Stack>

            <HarvesterTable />

            <div className='hover:bg-white'>

                <IconButton
                    className='fixed right-5 bottom-29 bg-white/60 z-9999 hover:bg-white ease-in-out duration-300'
                    data-ga-event-category="docs"
                    data-ga-event-action="click-back-to-top"
                    aria-label="Scroll back to top"
                    href='#first-section'
                    // onClick={handleScrollWithPadding}
                >
                    <BadgeRoundedIcon />
                </IconButton>

                <IconButton className='fixed right-5 bottom-17 bg-white/60 z-9999 hover:bg-white ease-in-out duration-300'
                    href='#second-section'>
                    <TableChartRoundedIcon />
                </IconButton>

                <IconButton className='fixed right-5 bottom-5 bg-white/60 z-9999 hover:bg-white ease-in-out duration-300'
                    href='#third-section'>
                    <TableChartRoundedIcon />
                </IconButton>

            </div>

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