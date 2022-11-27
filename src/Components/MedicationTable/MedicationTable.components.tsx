import styled from 'styled-components';
import { Card } from '@mui/material';
import { darkPurple, transparentWhite } from '../../modules/theme';

export const CardContainerGrid = styled(Card)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5%;
    margin: 10px;
    padding: 20px;
    background-color: ${transparentWhite} !important;
`;

export const CardContentDay = styled(Card)`
    background-color: ${transparentWhite} !important;
    display: grid;
    padding: 10px;
    border: 1px solid black !important;
    border-radius: 10px !important;
    width: 90%;
    height: 90%;
`;

export const DayHighlight = styled.div`
    color: ${darkPurple};
    font-weight: bold;
`;
