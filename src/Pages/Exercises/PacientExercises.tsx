import { Grid } from "@mui/material"
import { ExerciseCard } from "./Card.components"


export const Exercises = () => {
    let content = []
    for (let kk = 0; kk < 20; ++kk) {
        content.push(
        <Grid item>
            <ExerciseCard url="https://www.youtube.com/embed/muuK4SpRR5M" content="Lorem ipsum"/>
        </Grid>
        )
    }
    return (
        <Grid container spacing={1}>
            {content}
        </Grid>
    )
}