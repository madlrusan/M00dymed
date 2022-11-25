import { Button, FilledInput, InputLabel, TextField } from '@mui/material';
import styled from 'styled-components';
import { darkPurple, mediumPurple, pink, transparentPink } from '../../modules/theme';

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
export const PasswordInput = styled(TextField)`
    background: ${transparentPink} !important;
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
    label.Mui-focused {
        color: ${mediumPurple} !important;
    }
`;
export const PasswordLabel = styled(InputLabel)`
    label.Mui-focused {
        color: ${mediumPurple} !important;
    }
    div::after {
        border-color: ${pink};
        border-bottom: 1px solid ${pink} !important;
        color: ${pink};
    }
`;

export const LoginButton = styled(Button)`
    background-color: ${darkPurple} !important;
    margin-top: 50px !important;
`;
