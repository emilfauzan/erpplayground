"use client"

import * as React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

// Data props
interface Data {
    id: number;
    estate: string;
    afdeling: string;
    pemanen: string;
    rkh_janjang: number;
    rkh_kg: number;
    realisasi_janjang: number;
    realisasi_kg: number;
    varian_hi_kg: number;
}

// returning Data alongside with each parameters
function createData(
    id: number,
    estate: string,
    afdeling: string,
    pemanen: string,
    rkh_janjang: number,
    rkh_kg: number,
    realisasi_janjang: number,
    realisasi_kg: number,
    varian_hi_kg: number
): Data {
    return {
        id,
        estate,
        afdeling,
        pemanen,
        rkh_janjang,
        rkh_kg,
        realisasi_janjang,
        realisasi_kg,
        varian_hi_kg
    };
}

// creating data for each rows 
const rows = [
    createData(1, 'BUM7', 'Afd - 21', 'JKO/2009/1921 - Melvin Simpson', 123, 171, 119, 30, 157),
    createData(2, 'BUM6', 'Afd - 27', 'JKO/2021/4041 - Jean Morgan', 20, 151, 38, 21, 176),
    createData(3, 'BUM6', 'Afd - 21', 'JKO/2019/4846 - Terry McBride', 195, 186, 9, 267, 1),
    createData(4, 'BUM5', 'Afd - 35', 'JKO/2011/1602 - Georgia Alvarado', 187, 61, 60, 233, 106),
    createData(5, 'BUM2', 'Afd - 25', 'JKO/2022/6090 - Alfred Valdez', 4, 39, 179, 3, 93),
    createData(6, 'BUM4', 'Afd - 02', 'JKO/2011/7500 - Anne Conner', 69, 73, 47, 352, 199),
    createData(7, 'BUM1', 'Afd - 04', 'JKO/2016/5065 - Lillian Harris', 172, 157, 66, 472, 26),
    createData(8, 'BUM3', 'Afd - 19', 'JKO/2002/4872 - Mildred Dixon', 121, 37, 155, 432, 81),
    createData(9, 'BUM4', 'Afd - 16', 'JKO/2002/8571 - Chad Alvarado', 50, 142, 162, 390, 96),
    createData(10, 'BUM7', 'Afd - 23', 'JKO/2013/5042 - Genevieve Wong', 63, 49, 140, 328, 49),
    createData(11, 'BUM8', 'Afd - 14', 'JKO/2011/8952 - Pauline Diaz', 25, 151, 161, 258, 66),
    createData(12, 'BUM7', 'Afd - 02', 'JKO/2019/3717 - Edna Frank', 96, 196, 50, 207, 169),
    createData(13, 'BUM6', 'Afd - 11', 'JKO/2015/8451 - Mae Carson', 100, 27, 38, 225, 117),
    createData(14, 'BUM5', 'Afd - 17', 'JKO/2003/8545 - Brett Graham', 91, 115, 159, 126, 28),
    createData(15, 'BUM8', 'Afd - 03', 'JKO/2013/6859 - Jared Wong', 24, 136, 76, 445, 5),
    createData(16, 'BUM5', 'Afd - 14', 'JKO/2010/4732 - Wesley Romero', 26, 13, 36, 369, 196),
    createData(17, 'BUM1', 'Afd - 27', 'JKO/2007/8599 - John Young', 155, 197, 2, 278, 157),
    createData(18, 'BUM3', 'Afd - 27', 'JKO/2020/5405 - Christopher Carroll', 148, 96, 116, 228, 174),
    createData(19, 'BUM8', 'Afd - 27', 'JKO/2015/7450 - Luella Abbott', 56, 33, 57, 8, 166),
    createData(20, 'BUM7', 'Afd - 04', 'JKO/2021/9050 - Cecelia Harris', 128, 86, 43, 22, 176),
    createData(21, 'BUM5', 'Afd - 13', 'JKO/2004/6932 - Philip Cortez', 154, 135, 76, 338, 27),
    createData(22, 'BUM8', 'Afd - 03', 'JKO/2015/5818 - Kyle Lynch', 121, 47, 77, 212, 70),
    createData(23, 'BUM2', 'Afd - 03', 'JKO/2015/7932 - Alice Frank', 188, 19, 90, 94, 27),
    createData(24, 'BUM1', 'Afd - 31', 'JKO/2014/8567 - Virginia Turner', 67, 38, 72, 360, 138),
    createData(25, 'BUM3', 'Afd - 21', 'JKO/2010/6027 - Rebecca Fowler', 93, 83, 157, 491, 74),
    createData(26, 'BUM7', 'Afd - 30', 'JKO/2018/8252 - Chester Stone', 87, 180, 136, 428, 185),
];

// descending sort for each data
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

// type of order
type Order = 'asc' | 'desc';

// key for compare each column with number & string type of data
function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// mapping each row from selected column
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// HeadCell props
interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

// HeadCell props value
const headCells: readonly HeadCell[] = [
    {
        id: 'estate',
        numeric: false,
        disablePadding: true,
        label: 'Estate',
    },
    {
        id: 'afdeling',
        numeric: true,
        disablePadding: false,
        label: 'Afdeling',
    },
    {
        id: 'pemanen',
        numeric: true,
        disablePadding: false,
        label: 'Pemanen',
    },
    {
        id: 'rkh_janjang',
        numeric: true,
        disablePadding: false,
        label: 'RKH Janjang',
    },
    {
        id: 'rkh_kg',
        numeric: true,
        disablePadding: false,
        label: 'RKH Kg',
    },
    {
        id: 'realisasi_janjang',
        numeric: true,
        disablePadding: false,
        label: 'Realisasi Janjang',
    },
    {
        id: 'realisasi_kg',
        numeric: true,
        disablePadding: false,
        label: 'Realisasi Kg',
    },
    {
        id: 'varian_hi_kg',
        numeric: true,
        disablePadding: false,
        label: 'Varian HI Kg',
    },
];

// table content props
interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

// function for table content 
function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell className='font-semibold'
                        key={headCell.id}
                        align={headCell.numeric ? 'center' : 'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

// table toolbar props
interface EnhancedTableToolbarProps {
    numSelected: number;
}

// table toolbar if row(s) selected
function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h5"
                    id="tableTitle"
                    component="div"
                >
                    Harvester Ranking (Peringkat Pemanen)
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

// harvester table function
export default function HarvesterTable() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('estate');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // handle request sort by selected column
    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // handle select all rows when clicked
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    // handle selected & unselected column when clicked
    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    // handle page when pagination is clicked
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    // handles rows changed per page when pagination is clicked 
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // handle table density when activated
    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    // selecting id when each row(s) is selected
    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    // cache the result of a calculation between re-renders per visible rows
    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        stickyHeader aria-label="sticky table"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.id}
                                        selected={isItemSelected}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell align="center"
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.estate}
                                        </TableCell>
                                        <TableCell align="center">{row.afdeling}</TableCell>
                                        <TableCell align="center">{row.pemanen}</TableCell>
                                        <TableCell align="center">{row.rkh_janjang}</TableCell>
                                        <TableCell align="center">{row.rkh_kg}</TableCell>
                                        <TableCell align="center">{row.realisasi_janjang}</TableCell>
                                        <TableCell align="center">{row.realisasi_kg}</TableCell>
                                        <TableCell align="center">{row.varian_hi_kg}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 33 : 53) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Dense padding"
            />
        </Box>
    );
}


// import React from 'react';
// import {
//     Card,
//     CardHeader,
//     CardBody,
//     Button,
//     Typography,
//     CardFooter
// } from "@material-tailwind/react";
// import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';



// const TABLE_HEAD = [
//     "Estate", "Afdeling", "Pemanen", "RKH Janjang", "RKH Kg", "Realisasi Janjang", "Realisasi Kg", "Varian HI Kg",
// ];

// const TABLE_ROWS = [
//     {
//         estate: "BUM5",
//         afdeling: "Afd-31",
//         pemanen: "JKO/2023/3307 - Arthur Jimenez",
//         rkh_janjang: "66",
//         rkh_kg: "187",
//         realisasi_janjang: "72",
//         realisasi_kg: "153",
//         varian_hi_kg: "15",
//     },
//     {
//         estate: "BUM6",
//         afdeling: "Afd-17",
//         pemanen: "JKO/2021/4777 - Edward Lambert",
//         rkh_janjang: "90",
//         rkh_kg: "251",
//         realisasi_janjang: "12",
//         realisasi_kg: "26",
//         varian_hi_kg: "30",
//     },
//     {
//         estate: "BUM5",
//         afdeling: "Afd-20",
//         pemanen: "JKO/2017/5062 - Eunice Roberson",
//         rkh_janjang: "78",
//         rkh_kg: "171",
//         realisasi_janjang: "20",
//         realisasi_kg: "151",
//         varian_hi_kg: "31",
//     },
//     {
//         estate: "BUM1",
//         afdeling: "Afd-33",
//         pemanen: "JKO/2012/9709 - Eula King",
//         rkh_janjang: "58",
//         rkh_kg: "56",
//         realisasi_janjang: "52",
//         realisasi_kg: "21",
//         varian_hi_kg: "44",
//     },
//     {
//         estate: "BUM3",
//         afdeling: "Afd-20",
//         pemanen: "JKO/2020/7163 - Mike Diaz",
//         rkh_janjang: "60",
//         rkh_kg: "159",
//         realisasi_janjang: "76",
//         realisasi_kg: "294",
//         varian_hi_kg: "57",
//     },
//     {
//         estate: "BUM2",
//         afdeling: "Afd-22",
//         pemanen: "JKO/2023/5268 - Elmer Morton",
//         rkh_janjang: "78",
//         rkh_kg: "64",
//         realisasi_janjang: "100",
//         realisasi_kg: "51",
//         varian_hi_kg: "35",
//     },
//     {
//         estate: "BUM6",
//         afdeling: "Afd-3",
//         pemanen: "JKO/2015/2420 - Genevieve Smith",
//         rkh_janjang: "97",
//         rkh_kg: "107",
//         realisasi_janjang: "80",
//         realisasi_kg: "75",
//         varian_hi_kg: "99",
//     },
//     {
//         estate: "BUM6",
//         afdeling: "Afd-26",
//         pemanen: "JKO/2018/8301 - Michael Hernandez",
//         rkh_janjang: "79",
//         rkh_kg: "154",
//         realisasi_janjang: "38",
//         realisasi_kg: "91",
//         varian_hi_kg: "47",
//     },
//     {
//         estate: "BUM6",
//         afdeling: "Afd-6",
//         pemanen: "JKO/2017/9033 - Kevin Holmes",
//         rkh_janjang: "98",
//         rkh_kg: "222",
//         realisasi_janjang: "96",
//         realisasi_kg: "115",
//         varian_hi_kg: "17",
//     },
//     {
//         estate: "BUM7",
//         afdeling: "Afd-6",
//         pemanen: "JKO/2021/6232 - Jacob Estrada",
//         rkh_janjang: "99",
//         rkh_kg: "180",
//         realisasi_janjang: "9",
//         realisasi_kg: "235",
//         varian_hi_kg: "41",
//     },
//     {
//         estate: "BUM3",
//         afdeling: "Afd-13",
//         pemanen: "JKO/2011/3062 - Curtis Saunders",
//         rkh_janjang: "52",
//         rkh_kg: "256",
//         realisasi_janjang: "80",
//         realisasi_kg: "218",
//         varian_hi_kg: "66",
//     },
//     {
//         estate: "BUM5",
//         afdeling: "Afd-16",
//         pemanen: "JKO/2019/3961 - Estelle Goodwin",
//         rkh_janjang: "78",
//         rkh_kg: "298",
//         realisasi_janjang: "16",
//         realisasi_kg: "180",
//         varian_hi_kg: "43",
//     },
//     {
//         estate: "BUM1",
//         afdeling: "Afd-6",
//         pemanen: "JKO/2019/7407 - Josie Byrd",
//         rkh_janjang: "96",
//         rkh_kg: "140",
//         realisasi_janjang: "28",
//         realisasi_kg: "57",
//         varian_hi_kg: "43",
//     },
//     {
//         estate: "BUM1",
//         afdeling: "Afd-10",
//         pemanen: "JKO/2012/8490 - Mittie Carlson",
//         rkh_janjang: "90",
//         rkh_kg: "123",
//         realisasi_janjang: "28",
//         realisasi_kg: "214",
//         varian_hi_kg: "96",
//     },
// ];

// export const TableRankingHarvester = () => {
//     return (

//         <Card className="h-full w-full">
//             <CardHeader floated={false} shadow={false} className="rounded-none">
//                 <div className="mb-2 flex items-center justify-between gap-8">
//                     <div>
//                         <Typography variant="h5" color="blue-gray">
//                             Harvester Ranking (Peringkat Pemanen)
//                         </Typography>
//                         <Typography color="gray" className="mt-1 font-normal">
//                             Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, labore.
//                         </Typography>
//                     </div>
//                 </div>
//             </CardHeader>
//             <CardBody className="overflow-scroll px-0">
//                 <table className="w-full min-w-max table-auto text-center">
//                     <thead>
//                         <tr>
//                             {TABLE_HEAD.map((head, index) => (
//                                 <th
//                                     key={head}
//                                     className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
//                                 >
//                                     <Typography
//                                         variant="small"
//                                         color="blue-gray"
//                                         className="font-semibold leading-none opacity-70"
//                                     >
//                                         {head}{" "}
//                                         {index !== TABLE_HEAD.length && (
//                                             <UnfoldMoreRoundedIcon strokeWidth={2} className="h-4 w-4" />
//                                         )}
//                                     </Typography>
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {TABLE_ROWS.map(
//                             ({ estate, afdeling, pemanen, rkh_janjang, rkh_kg, realisasi_janjang, realisasi_kg, varian_hi_kg }, index) => {
//                                 const isLast = index === TABLE_ROWS.length;
//                                 const classes = isLast
//                                     ? "p-4"
//                                     : "p-4 border-b border-blue-gray-50";

//                                 return (
//                                     <tr key={estate} className="even:bg-blue-gray-50/50 hover:bg-blue-gray-100/50">
//                                         <td className={classes}>
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-normal"
//                                             >
//                                                 {estate}
//                                             </Typography>
//                                         </td>
//                                         <td className={classes}>
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-normal"
//                                             >
//                                                 {afdeling}
//                                             </Typography>
//                                         </td>
//                                         <td className={classes}>
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-semibold"
//                                             >
//                                                 {pemanen}
//                                             </Typography>
//                                         </td>
//                                         <td className={classes}>
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-normal"
//                                             >
//                                                 {rkh_janjang}
//                                             </Typography>
//                                         </td>
//                                         <td className={classes}>
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-normal"
//                                             >
//                                                 {rkh_kg}
//                                             </Typography>
//                                         </td>
//                                         <td className={classes}>
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-normal"
//                                             >
//                                                 {realisasi_janjang}
//                                             </Typography>
//                                         </td>
//                                         <td className={classes}>
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-normal"
//                                             >
//                                                 {realisasi_kg}
//                                             </Typography>
//                                         </td>
//                                         <td className={classes}>
//                                             <Typography
//                                                 variant="small"
//                                                 color="blue-gray"
//                                                 className="font-normal"
//                                             >
//                                                 {varian_hi_kg}
//                                             </Typography>
//                                         </td>
//                                     </tr>
//                                 );
//                             },
//                         )}
//                     </tbody>
//                 </table>
//             </CardBody>
//             <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">

//                 {/* Pagination Harvester Ranking Table */}
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                     Page 1 of 10
//                 </Typography>
//                 <div className="flex gap-2">
//                     <Button variant="outlined" size="sm">
//                         Previous
//                     </Button>
//                     <Button variant="outlined" size="sm">
//                         Next
//                     </Button>
//                 </div>

//             </CardFooter>
//         </Card>

//     )
// }