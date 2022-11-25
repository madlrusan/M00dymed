import { Card, CardHeader, CardMedia, CardContent } from '@mui/material/';
import styled from 'styled-components';

export const StyledCard = styled.div`
  .card {
    width: auto;
    margin: 20px;
    border-top: 5px red !important;
    box-shadow: none !important;
    display: grid;
    grid-template-columns: auto auto;
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


export const ExerciseCard = () => {
  return (
    <StyledCard>
        <Card className='card'>
        <CardMedia
            className='media'
            component="iframe"
            image="https://www.youtube.com/embed/muuK4SpRR5M"
        />
        <CardContent className='content'>
        Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea colilor Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.


        </CardContent>
        </Card>
    </StyledCard>
  );
}
