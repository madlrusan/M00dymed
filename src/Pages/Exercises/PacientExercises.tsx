import { Table, TableBody, TableCell, TablePagination, TableRow } from "@mui/material"
import React from "react"
import { ExerciseCard } from "./Card.components"


export const Exercises = () => {
    let content = []
    for (let kk = 0; kk < 10; ++kk) {
        content.push(
            <ExerciseCard url="https://www.youtube.com/embed/muuK4SpRR5M" content="Lorem ipsum"/>
        )
    }
    const [page, setPage] = React.useState(0);
    // const [cardsPerPage, setCardsPerPage] = React.useState(5);
    const cardsPerPage = 3

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * cardsPerPage - content.length) : 0;

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setCardsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return (
        <>
        <Table>
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
        </Table>
        </>
    )
}