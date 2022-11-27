import {
    IconButton,
    InputLabel,
    MenuItem,
    Popper,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    TablePagination,
    TableRow,
} from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { ExerciseCard } from './ExerciseCard';
import { transparentWhite } from '../../modules/theme';
import { FilterForm } from '../../components/common/Doctors.components';
import { AddExercise, DeleteExercise, EditExercise } from './ExerciseEdit';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import styled from 'styled-components';
import { Appwrite } from '../../services/Appwrite';
import { AppWriteExercises } from '../../services/AppwriteExercises';

export const StyledTable = styled(Table)`
    height: 100%;
    background-color: none;
`;

export const ContentGrid = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 10vh auto;
`;

export const DoctorContentGrid = styled.div`
    height: auto;
    display: block;
    margin: 3vh;
    border-radius: 10px;
    background-color: ${transparentWhite};
`;

export const TopCard = styled.div`
    height: 100%;
    padding: 3vh;
    margin-top: 2vh;
    font-size: 3vh;
    font-weight: bold;
    background-color: none;
    display: grid;
    grid-template-columns: 20% auto;
`;

export const TitleCard = styled.div`
    height: 100%;
    padding: 3vh;
    margin-top: 2vh;
    font-size: 3vh;
    font-weight: bold;
    background-color: none;
`;

export const Exercises = (props: any) => {
    const [diagnostics, setDiagnostics] = useState([]);
    const [content, setContent] = useState([]);
    const { getExercises } = AppWriteExercises();
    const { getDiagnosis, getPacientByEmail } = Appwrite();
    const [user, setUser] = useState(null);
    useEffect(() => {
        const emailLcl = window.localStorage.getItem('email');
        const funct = async () => {
            const user = await getPacientByEmail(emailLcl);
            setUser(user);
            return user;
        };
        funct().then((response) => {
            setUser(response);
        });
    }, []);

    useEffect(() => {
        getDiagnosis().then((d) => {
            d.documents.unshift({ Name: 'All' });
            setDiagnostics(d.documents);
        });
    }, []);
    const [filterValue, setFilterValue] = useState('All');
    useEffect(() => {
        getExercises(filterValue).then((r) => setContent(r));
        console.log(content);
    }, [filterValue]);
    const addExercise = () => {
        getExercises(filterValue).then((r) => setContent(r));
    };
    const isPatient = window.localStorage.getItem('role');

    const [page, setPage] = React.useState(0);
    const cardsPerPage = 3;
    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = () => {
        return;
    };

    const handleChangeFilter = (event: SelectChangeEvent) => {
        setFilterValue(event.target.value);
    };
    const patientExercises = content.filter((content) => {
        return content?.Diagnostic == user?.diagnostics;
    });
    function getMultipleRandom(arr: any[], num: number) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, num);
    }
    let randomExercises: any[] = [];
    useMemo(() => {
        randomExercises = getMultipleRandom(patientExercises, 3);
    }, [patientExercises]);

    console.log(randomExercises);
    if (isPatient === '0') {
        return (
            <>
                <ContentGrid>
                    <TitleCard> Doctor's recommendations for today </TitleCard>
                    <DoctorContentGrid>
                        <StyledTable>
                            <TableBody sx={{ height: '100%' }}>
                                {(cardsPerPage > 0
                                    ? randomExercises.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage)
                                    : randomExercises
                                ).map((row) => (
                                    <TableRow>
                                        <ExerciseCard url={row.Media} content={row.Content} title={row.Title} />
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TablePagination
                                rowsPerPageOptions={[]}
                                colSpan={3}
                                count={randomExercises.length}
                                rowsPerPage={cardsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </StyledTable>
                    </DoctorContentGrid>
                </ContentGrid>
            </>
        );
    } else {
        return (
            <>
                <ContentGrid>
                    <TopCard>
                        <div style={{ marginRight: '10px' }}>
                            <FilterForm size="small" sx={{ width: '100%' }}>
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
                                        return <MenuItem value={diagnostic.Name}>{diagnostic.Name}</MenuItem>;
                                    })}
                                </Select>
                            </FilterForm>
                        </div>
                        <AddExercise refresh={addExercise} />
                    </TopCard>
                    <DoctorContentGrid>
                        <StyledTable>
                            <TableBody sx={{ height: '100%' }}>
                                {(cardsPerPage > 0
                                    ? content.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage)
                                    : content
                                ).map((row) => (
                                    <TableRow>
                                        <TableCell>
                                            <ExerciseCard url={row.Media} content={row.Content} title={row.Title} />
                                        </TableCell>
                                        <TableCell>
                                            <MenuButtons row={row} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TablePagination
                                rowsPerPageOptions={[]}
                                colSpan={3}
                                count={content.length}
                                rowsPerPage={cardsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                sx={{ border: 'none' }}
                            />
                        </StyledTable>
                    </DoctorContentGrid>
                </ContentGrid>
            </>
        );
    }
};

export const MenuButtons = (props: any) => {
    const row = props.row;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    let open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const handleActionClick = (id: number, action: string) => {
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
                    <EditExercise row={row} />
                    <DeleteExercise row={row} />
                </div>
            </Popper>
        </>
    );
};
