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
        font-size: 1vw;
        padding: 0px;
    }

    .media {
        height: 100%;
        box-sizing: border-box;
        border: none;
        padding: 0;
        margin: 0;
    }

    .title {
        font-size: 1.3vw;
        font-weight: bold;
    }
`;

export const ExerciseCard = (props: any) => {
    return (
        <StyledCard>
            <Card className="card">
                <CardMedia className="media" component="iframe" image={props.url} />
                <CardContent className="content">
                    <div className="title">{props.title}</div>
                    <div>{props.content}</div>
                </CardContent>
            </Card>
        </StyledCard>
    );
};
