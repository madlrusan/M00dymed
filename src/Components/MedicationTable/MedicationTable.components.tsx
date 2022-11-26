import styled from 'styled-components';
import { Card } from '@mui/material';
import { darkPurple, transparentWhite } from '../../modules/theme';

export const CardContainerGrid = styled(Card)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding: 20px;
    background-color: ${transparentWhite} !important;
`;

export const CardContentDay = styled(Card)`
    background-color: ${transparentWhite} !important;
    display: grid;
    border: 1p solid black;
    border-radius: 10px;
    width: 200px;
`;

export const DayHighlight = styled.div`
    color: ${darkPurple};
    font-weight: bold;
`;
