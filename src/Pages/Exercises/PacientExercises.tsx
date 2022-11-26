import { IconButton, InputLabel, MenuItem, Popper, Select, SelectChangeEvent, Table, TableBody, TableCell, TablePagination, TableRow } from "@mui/material"
import React, { useState } from "react"
import { ExerciseCard } from "./Card.components"
import styled from 'styled-components';
import { darkPurple, grey, mediumPurple, pink, transparentWhite, transparentPink } from '../../modules/theme';
import { AddBtn, FilterForm, FooterContainer } from "../../components/common/Doctors.components";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export const StyledTable = styled(Table)`
    height: 100%;
    background-color: none;
`

export const ContentGrid = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 10vh auto;
`

export const DoctorContentGrid = styled.div`
    height: auto;
    display: block;
    margin: 3vh;
    border-radius: 10px;
    background-color: ${transparentWhite};
`

export const TopCard = styled.div`
    height: 100%;
    padding: 3vh;
    font-size: 3vh;
    font-weight: bold;
    background-color: none;
`


export const Exercises = (props: any) => {
    const isPatient = props.isPatient
    let content = []
    const text = "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. \
    Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf \
    anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru \
    literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în \
    tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea \
    colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare \
    pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum."
    const media = "https://www.youtube.com/embed/muuK4SpRR5M"

    for (let kk = 0; kk < 11; ++kk) {
        content.push({
            id: {kk},
            content: <ExerciseCard url={media} content={text}/>,
        })
    }
    const diagnostics = [
        { id: 1, label: 'depression', },
        { id: 2, label: 'anxiety', },
    ];

    const [page, setPage] = React.useState(0);
    const cardsPerPage = 3
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * cardsPerPage - content.length) : 0;
    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = () => { return };

    const [filterValue, setFilterValue] = useState('');
    const handleChangeFilter = (event: SelectChangeEvent) => {
        setFilterValue(event.target.value);
    };

    if (isPatient) {
        return (
            <>
            <ContentGrid>
                <TopCard> Doctor's recommendations for today </TopCard>
                <StyledTable>
                    <TableBody sx={{height: '100%'}}>
                        {(cardsPerPage > 0
                        ? content.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage)
                        : content
                        ).map((row) => (
                            <TableRow>
                                {row.content}
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
                        />
                </StyledTable>
            </ContentGrid>
            </>
        )
        
    } else {
        return (
            <>
            <ContentGrid>
                <TopCard>
                <div style={{ marginRight: '10px' }}>
                    <FilterForm size="small" sx={{ width: '50%' }}>
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
                    <AddBtn variant="contained">Add</AddBtn>

                </div>
                </TopCard>
                <DoctorContentGrid>
                    <StyledTable>
                        <TableBody sx={{height: '100%'}}>
                            {(cardsPerPage > 0
                            ? content.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage)
                            : content
                            ).map((row) => (
                                <TableRow>
                                    <TableCell>
                                        {row.content}
                                    </TableCell>
                                    <TableCell>
                                        <MenuButtons row={row}/>
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
                            sx={{border:'none'}}
                            />
                    </StyledTable>
                </DoctorContentGrid>
            </ContentGrid>
            </>
        );
    }
}

export const MenuButtons = (props: any) => {
    const row = props.row
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
            <MenuItem
                onClick={() => {
                    handleActionClick(row.id, 'edit');
                }}
            >
                Edit
            </MenuItem>
            <MenuItem
                onClick={() => {
                    handleActionClick(row.id, 'delete');
                }}
            >
                Delete
            </MenuItem>
        </div>
        </Popper>
        </>
    )
}