import {
    Autocomplete,
    Button,
    CardContent,
    FormControl,
    Icon,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
} from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import React, { useState } from 'react';
import {
    AddBtn,
    CardContainer,
    FilterForm,
    FooterContainer,
    HeaderContainer,
    SearchInput,
    TableHeader,
} from '../../components/common/Doctors.components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
export const DoctorPatients = () => {
    const [filterValue, setFilterValue] = useState('');
    const handleChangeFilter = (event: SelectChangeEvent) => {
        setFilterValue(event.target.value);
    };
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <CardContainer>
            <CardContent>
                <HeaderContainer>
                    <SearchInput
                        id="free-solo-demo"
                        freeSolo
                        options={[]}
                        renderInput={(params) => <TextField {...params} label="Search patients" />}
                    />
                    {/* filter */}
                    <div style={{ marginRight: '10px' }}>
                        <FilterForm sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel>Filter by Diagnostics</InputLabel>
                            <Select
                                labelId="filter-diagnostics"
                                id="filter-diagnostics"
                                value={filterValue}
                                label="Filter by Diagnostics"
                                onChange={handleChangeFilter}
                            >
                                {diagnostics.map((diagnostic) => {
                                    return <MenuItem value={diagnostic.id}>{diagnostic.label}</MenuItem>;
                                })}
                            </Select>
                        </FilterForm>
                    </div>
                </HeaderContainer>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHeader>
                            <TableRow>
                                {tableColumns.map((column) => {
                                    return (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover tabIndex={-1} key={row.id}>
                                        {tableColumns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'actions' ? <MoreVertOutlinedIcon /> : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <FooterContainer>
                    <AddBtn variant="contained">Add</AddBtn>
                </FooterContainer>
            </CardContent>
        </CardContainer>
    );
};

const diagnostics = [
    {
        id: 1,
        label: 'depression',
    },
    {
        id: 2,
        label: 'anxiety',
    },
];

interface Column {
    id: 'firstName' | 'lastName' | 'diagnostics' | 'severityGrade' | 'actions';
    label: string;
    minWidth: number;
    align: 'left';
}
const tableColumns: Column[] = [
    {
        id: 'firstName',
        label: 'First Name',
        align: 'left',
        minWidth: 170,
    },
    {
        id: 'lastName',
        label: 'Last Name',
        align: 'left',
        minWidth: 170,
    },
    {
        id: 'diagnostics',
        label: 'Diagnostics',
        align: 'left',
        minWidth: 170,
    },
    {
        id: 'severityGrade',
        label: 'Severity Grade',
        align: 'left',
        minWidth: 170,
    },
    {
        id: 'actions',
        label: '',
        align: 'left',
        minWidth: 20,
    },
];

interface PatientData {
    id: number;
    firstName: string;
    lastName: string;
    diagnostics: string;
    severityGrade: string;
    actions?: string;
}

const createData = (
    id: number,
    firstName: string,
    lastName: string,
    diagnostics: string,
    severityGrade: string,
): PatientData => {
    return {
        id,
        firstName,
        lastName,
        diagnostics,
        severityGrade,
    };
};
const createRows = () => {
    const rows = [];
    for (let i = 0; i < 20; i++) {
        rows.push(createData(i, `firstName${i}`, 'lastName', 'diagnostics', 'severityGrade'));
    }
    return rows;
};
const rows = createRows();
