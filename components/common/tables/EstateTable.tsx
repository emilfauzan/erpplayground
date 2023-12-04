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
import { GetDayAndDateEstateTable } from '../timeAndDate/TimeAndDate';

// Data props
interface Data {
    id: number,
    estate: string,
    rkh_janjang: number,
    rkh_kg: number,
    realisasi_janjang: number,
    realisasi_kg: number,
    varian_hi_kg: number
}

// returning Data alongside with each parameters
function createData(
    id: number,
    estate: string,
    rkh_janjang: number,
    rkh_kg: number,
    realisasi_janjang: number,
    realisasi_kg: number,
    varian_hi_kg: number
): Data {
    return {
        id,
        estate,
        rkh_janjang,
        rkh_kg,
        realisasi_janjang,
        realisasi_kg,
        varian_hi_kg,
    };
}

// creating data for each rows 
const rows = [
    createData(1, 'BUM1', 37671, 8578, 1060, 8680, 4831),
    createData(2, 'BUM2', 77790, 5425, 6893, 7937, 8619),
    createData(3, 'BUM3', 46484, 7432, 2122, 4131, 6397),
    createData(4, 'BUM4', 65991, 2244, 9771, 8597, 7478),
    createData(5, 'BUM5', 69148, 1606, 5965, 3712, 1932),
    createData(6, 'BUM6', 88459, 5616, 5691, 5990, 6125),
    createData(7, 'BUM7', 16045, 4629, 6746, 6543, 5302),
    createData(8, 'BUM8', 48862, 6658, 2793, 5861, 1704),
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
                    component="div" className='py-2'
                >
                    {numSelected} selected
                </Typography>
            ) : (

                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="body1"
                    id="tableTitle"
                    component="div"
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, labore.
                </Typography>
            )}
            <Tooltip title="Filter list">
                <IconButton>
                    <FilterListIcon />
                </IconButton>
            </Tooltip>
        </Toolbar>
    );
}

// harvester table function
export default function EnhancedTable() {
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
            <Paper sx={{ width: '100%', mb: 2 }} className='rounded-lg'>
                <div className='rounded-md flex-shrink-0 flex justify-between items-center p-4 bg-[#37474f] mb-4'>
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h5"
                        id="tableTitle"
                        component="div" color="white" className='font-bold'
                    >
                        Estate Ranking
                    </Typography>
                    <GetDayAndDateEstateTable />
                </div>
                <TableContainer>

                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
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
                                        <TableCell className='font-semibold' align="center"
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.estate}
                                        </TableCell>
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
                <EnhancedTableToolbar numSelected={selected.length} />
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


/* interface Data {
    id: number,
    estate: string,
    rkh_janjang: number,
    rkh_kg: number,
    realisasi_janjang: number,
    realisasi_kg: number,
    varian_hi_kg: number
}

function createData(
    id: number,
    estate: string,
    rkh_janjang: number,
    rkh_kg: number,
    realisasi_janjang: number,
    realisasi_kg: number,
    varian_hi_kg: number
): Data {
    return {
        id,
        estate,
        rkh_janjang,
        rkh_kg,
        realisasi_janjang,
        realisasi_kg,
        varian_hi_kg,
    };
}

const rows = [
    createData(1, 'BUM1', 37671, 8578, 1060, 8680, 4831),
    createData(2, 'BUM2', 77790, 5425, 6893, 7937, 8619),
    createData(3, 'BUM3', 46484, 7432, 2122, 4131, 6397),
    createData(4, 'BUM4', 65991, 2244, 9771, 8597, 7478),
    createData(5, 'BUM5', 69148, 1606, 5965, 3712, 1932),
    createData(6, 'BUM6', 88459, 5616, 5691, 5990, 6125),
    createData(7, 'BUM7', 16045, 4629, 6746, 6543, 5302),
    createData(8, 'BUM8', 48862, 6658, 2793, 5861, 1704),
]

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

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

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'estate',
        numeric: false,
        disablePadding: true,
        label: 'Estate',
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
        label: 'Varian Hi Kg',
    },
]

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <thead>
            <tr>
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
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
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
            </tr>
        </thead>
    );
}


interface EnhancedTableToolbarProps {
    numSelected: number;
}

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
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
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
export default function EnhancedTable() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('estate');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

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

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
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
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.estate}
                                        </TableCell>
                                        <TableCell align="right">{row.rkh_janjang}</TableCell>
                                        <TableCell align="right">{row.rkh_kg}</TableCell>
                                        <TableCell align="right">{row.realisasi_janjang}</TableCell>
                                        <TableCell align="right">{row.realisasi_kg}</TableCell>
                                        <TableCell align="right">{row.varian_hi_kg}</TableCell>
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
} */


// export const TableRankingEstate = () => {
//     return (
//         <Card className="h-full w-full">
//             <CardHeader floated={false} shadow={false} className="rounded-none">
//                 <div className="mb-2 flex items-center justify-between gap-8">
//                     <div>
//                         <Typography variant="h5" color="blue-gray">
//                             Estate Ranking (Peringkat Estate)
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
//                                         className="font-semibold leading-none opacity-70"
//                                         color="blue-gray"
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
//                             ({ estate, rkh_janjang, rkh_kg, realisasi_janjang, realisasi_kg, varian_hi_kg }, index) => {
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
//                                                 className="font-bold"
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