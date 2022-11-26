import { Card, CardHeader, CardMedia, CardContent } from '@mui/material/';
import styled from 'styled-components';

export const StyledCard = styled.div`
  .card {
    width: auto;
    border: 5px red !important;
    box-shadow: none !important;
    display: grid;
    grid-template-columns: auto 70%;
  }

  .content {
    text-align: left;
    overflow-x: auto;
  }

  .media {
    width: 100%;
    height: auto;
  }
`;


export const ExerciseCard = (props) => {
  return (
    <StyledCard>
        <Card className='card'>
        <CardMedia
            className='media'
            component="iframe"
            image={props.url}
        />
        <CardContent className='content'>
            {props.content}
        </CardContent>
        </Card>
    </StyledCard>
  );
}
