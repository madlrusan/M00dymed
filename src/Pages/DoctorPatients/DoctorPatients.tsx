import {
    Autocomplete,
    Button,
    CardContent,
    FormControl,
    Icon,
    IconButton,
    InputLabel,
    MenuItem,
    Popper,
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
    const [rowsPerPage, setRowsPerPage] = useState(5);
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
                        size="small"
                        id="free-solo-demo"
                        freeSolo
                        options={[]}
                        sx={{ m: 0, minWidth: 100, maxHeight: 50 }}
                        renderInput={(params) => <TextField {...params} label="Search patients" />}
                    />
                    {/* filter */}
                    <div style={{ marginRight: '10px' }}>
                        <FilterForm size="small" sx={{ m: 1, minWidth: 100, maxHeight: 50 }}>
                            <InputLabel size="small">Filter by Diagnostics</InputLabel>
                            <Select
                                size="small"
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
                                console.log(row.firstName);
                                return (
                                    <TableRow hover tabIndex={-1} key={row.id}>
                                        {tableColumns.map((column) => {
                                            const value = row[column.id];
                                            console.log(row.firstName);
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'actions' ? (
                                                        <div>
                                                            <Menu
                                                                id={row.id}
                                                                firstName={row.firstName}
                                                                lastName={row.lastName}
                                                                diagnostics={row.diagnostics}
                                                                severityGrade={row.severityGrade}
                                                            />
                                                        </div>
                                                    ) : (
                                                        value
                                                    )}
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
                    rowsPerPageOptions={[5]}
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
        minWidth: 50,
    },
    {
        id: 'lastName',
        label: 'Last Name',
        align: 'left',
        minWidth: 50,
    },
    {
        id: 'diagnostics',
        label: 'Diagnostics',
        align: 'left',
        minWidth: 50,
    },
    {
        id: 'severityGrade',
        label: 'Severity Grade',
        align: 'left',
        minWidth: 50,
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

const Menu = (Pacient: PatientData) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    let open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const handleActionClick = (id: string, action: string) => {
        console.log('handleActionClick ' + action + ' ' + id);
        open = !Boolean(anchorEl);
        console.log(open);
    };
    return (
        <>
            <IconButton
                id={id}
                onClick={(e) => {
                    handleClick(e);
                }}
            >
                <MoreVertOutlinedIcon />{' '}
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div
                    style={{
                        background: 'white',
                        fontSize: 5,
                        borderRadius: 10,
                    }}
                >
                    <MenuItem
                        onClick={() => {
                            handleActionClick(Pacient.firstName, 'seeProfile');
                        }}
                    >
                        See Profile
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            handleActionClick(Pacient.firstName, 'editProfile');
                        }}
                    >
                        Edit Profile
                    </MenuItem>
                </div>
            </Popper>
        </>
    );
};
