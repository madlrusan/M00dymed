import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { darkPurple, mediumPurple, pink, transparentPink } from '../../modules/theme';

export const LogoContainer = styled.div`
    padding: 50px;
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
`;
export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: stretch;
    justify-content: space-between;
    align-items: stretch;
`;

export const NameInput = styled(TextField)`
    margin-bottom: 20px !important;
    background: ${transparentPink};
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${mediumPurple} !important;
    }
`;

export const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: stretch;
`;

export const EmailInput = styled(TextField)`
    margin-bottom: 20px !important;
    background: ${transparentPink};
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${mediumPurple} !important;
    }
`;

export const CNPInput = styled(TextField)`
    margin-bottom: 20px !important;
    background: ${transparentPink};
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    .Mui-focused {
        color: ${mediumPurple} !important;
    }
`;

export const SubmitButton = styled(Button)`
    background-color: ${darkPurple} !important;
    margin-top: 50px !important;
`;