import { Table, TableBody, TableCell, TablePagination, TableRow } from "@mui/material"
import React from "react"
import { ExerciseCard } from "./Card.components"
import styled from 'styled-components';


export const StyledTable = styled(Table)`
    height: 100%;
    background-color: pink;
`

export const ContentGrid = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 10vh auto;
`

export const TopCard = styled.div`
    height: 100%;
    padding: 2vh;
    background-color: red;
`

export const Exercises = () => {
    let content = []
    const text = "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. \
    Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf \
    anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru \
    literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în \
    tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea \
    colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare \
    pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum."
    const media = "https://www.youtube.com/embed/muuK4SpRR5M"

    for (let kk = 0; kk < 10; ++kk) {
        content.push(
            <ExerciseCard url={media} content={text}/>
        )
    }
    const [page, setPage] = React.useState(0);
    const cardsPerPage = 3

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * cardsPerPage - content.length) : 0;

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = () => { return };

    return (
        <>
            <ContentGrid>
                <TopCard> Test </TopCard>
                <StyledTable>
                    <TableBody>
                        {(cardsPerPage > 0
                        ? content.slice(page * cardsPerPage, page * cardsPerPage + cardsPerPage)
                        : content
                        ).map((row) => (
                            <TableRow>
                                {row}
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={1} />
                            </TableRow>
                        )}
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
}