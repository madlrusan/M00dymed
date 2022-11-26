import { Card, CardHeader, CardMedia, CardContent } from '@mui/material/';
import styled from 'styled-components';

export const StyledCard = styled.div`
    .card {
        width: auto;
        height: 15vh;
        margin: 3vh;
        border: none;
        box-shadow: none !important;
        display: grid;
        grid-template-columns: auto 70%;
        background-color: inherit;
    }

    .content {
        text-align: left;
        overflow-y: scroll;
        margin-left: 1vw;
    }

    .media {
        height: 100%;
        box-sizing: border-box;
        border: none;
        padding: 0;
        margin: 0;
    }
`;

export const ExerciseCard = (props: any) => {
    return (
        <StyledCard>
            <Card className="card">
                <CardMedia className="media" component="iframe" image={props.url} />
                <CardContent className="content">{props.content}</CardContent>
            </Card>
        </StyledCard>
    );
};
